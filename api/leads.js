// api/leads.js — Neon Auto Transport
// Receives quote calculator and chatbot leads and forwards them to the Neon CRM lead inbox
// (the CRM saves them with its own server key; the database no longer accepts direct writes from the website)

const CRM_LEADS_URL = process.env.CRM_LEADS_WEBHOOK_URL || "https://neon-crm-app.vercel.app/api/webhooks/leads";
// Only needed once LEADS_WEBHOOK_SECRET is switched on in the CRM
const CRM_LEADS_SECRET = process.env.LEADS_WEBHOOK_SECRET || "";

// "Vehicle 2: 2019 Honda Civic (sedan, Running)" lines from the calculator
function parseVehicleSummary(summary, fallbackTrailer) {
  if (!summary || typeof summary !== 'string') return [];
  return summary.split('\n').map((line) => {
    const m = line.match(/^Vehicle\s+\d+:\s*(\S*)\s+(\S*)\s*(.*?)\s*(?:\(([^,)]*),\s*([^)]*)\))?\s*$/);
    if (!m) return null;
    return {
      year: m[1] || '',
      make: m[2] || 'Vehicle',
      model: m[3] || '',
      operable: (m[5] || '').trim() !== 'Non-Running',
      trailer_type: fallbackTrailer,
    };
  }).filter(Boolean);
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fields } = req.body || {};

    if (!fields) {
      return res.status(400).json({ error: 'Missing fields in request body' });
    }

    const {
      firstName, lastName, email, phone,
      vehicleYear, vehicleMake, vehicleModel, vehicleType, vehicleCondition,
      pickupZip, deliveryZip, desiredPickupDate, transportType, source,
      pickupLocation, dropoffLocation, additionalVehicles
    } = fields;

    const customerName = [firstName, lastName].filter(Boolean).join(' ') || 'Unknown (AI Lead)';
    const leadSource = source || 'AI Chat Widget';
    const trailerType = transportType || 'Open';

    // Notes with the form details (the CRM task list reads "Desired Pickup Date" from here)
    const notes = [
      vehicleCondition ? `Condition: ${vehicleCondition}` : null,
      transportType ? `Transport: ${transportType} Transport` : null,
      vehicleType ? `Vehicle Type: ${vehicleType}` : null,
      desiredPickupDate ? `Desired Pickup Date: ${desiredPickupDate}` : null,
      `Source: ${leadSource} (neonautotransport.com)`
    ].filter(Boolean).join(' | ');

    // All vehicles from the calculator, or the single chatbot vehicle
    let vehicles = parseVehicleSummary(additionalVehicles, trailerType);
    if (vehicles.length === 0 && (vehicleYear || vehicleMake || vehicleModel)) {
      vehicles = [{
        year: vehicleYear || '',
        make: vehicleMake || 'Vehicle',
        model: vehicleModel || '',
        operable: vehicleCondition !== 'Non-Running',
        trailer_type: trailerType,
      }];
    }

    const leadPayload = {
      customer_name: customerName,
      phone: phone || null,
      email: email || null,
      pickup_location: pickupLocation || (pickupZip ? `Zip: ${pickupZip}` : 'Unknown'),
      dropoff_location: dropoffLocation || (deliveryZip ? `Zip: ${deliveryZip}` : 'Unknown'),
      est_pickup_date: desiredPickupDate || null,
      source: leadSource,
      notes,
      trailer_type: trailerType,
      vehicles,
    };

    const headers = { 'Content-Type': 'application/json' };
    if (CRM_LEADS_SECRET) headers['x-webhook-secret'] = CRM_LEADS_SECRET;

    const crmResponse = await fetch(CRM_LEADS_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(leadPayload)
    });

    const crmResult = await crmResponse.json().catch(() => ({}));

    if (!crmResponse.ok || !crmResult.success) {
      console.error('CRM lead inbox error:', crmResponse.status, crmResult);
      return res.status(200).json({ success: false, message: 'CRM insert failed', error: crmResult.error || crmResponse.status });
    }

    console.log(`✅ Lead saved to Neon CRM — ID: ${crmResult.lead_id}, Customer: ${customerName}`);

    return res.status(200).json({
      success: true,
      leadId: crmResult.lead_id,
      message: `Lead for ${customerName} saved to Neon CRM`
    });

  } catch (error) {
    console.error('Lead API error:', error);
    // Return 200 so the chatbot doesn't show an error to the customer
    return res.status(200).json({ success: false, message: 'Failed to save lead', error: error.message });
  }
};
