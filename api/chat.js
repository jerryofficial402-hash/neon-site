export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ reply: "Configuration error: Missing GEMINI_API_KEY environment variable. Please contact support." });
  }

  const { messages, extractedFields } = req.body || {};

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages payload' });
  }

  const systemInstruction = `You are the Neon Auto Transport AI Sales Agent. 
Your goal is to answer customer questions about auto transport, provide rough quotes, and ultimately collect their details to generate a firm quote.
Always be polite, professional, and concise. 
Current knowledge:
- Company: Neon Auto Transport
- Phone: (571) 576-7711
- Open transport cost: $0.50-$1.00 per mile (usually $700-$1500 cross country)
- Enclosed transport cost: 30-40% more than open (usually $1000-$2200 cross country)
- Services: Open, Enclosed, Expedited, Door-to-Door, Motorcycle, Heavy Equipment. All 50 states.
- NO upfront deposits, zero deductible insurance included.

Your goal is to collect:
1. Vehicle (Year, Make, Model)
2. Route (Pickup City/State/ZIP, Delivery City/State/ZIP)
3. Timeline (Estimated pickup date)
4. Contact info (Name, Phone, Email)

You MUST respond with a JSON object ONLY. Do not use markdown blocks around the JSON.
The JSON must have this exact structure:
{
  "reply": "Your conversational response to the user",
  "extractedData": { 
     "year": "...", "make": "...", "model": "...", "pickup": "...", "delivery": "...", "date": "...", "name": "...", "phone": "...", "email": "..." 
  },
  "highIntent": boolean (true if user seems ready to buy or asks to call),
  "leadComplete": boolean (true ONLY if you have collected vehicle, route, and at least a phone number or email)
}
Only fill fields in extractedData if the user has explicitly provided them in the conversation. Keep previously extracted fields if they are still relevant.`;

  // Format history for Gemini API
  // Gemini expects roles 'user' or 'model'. The client sends 'user' and 'assistant'.
  const contents = messages.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: contents,
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.3
        }
      })
    });

    if (!response.ok) {
      const errData = await response.text();
      console.error('Gemini API Error:', errData);
      return res.status(500).json({ reply: "I apologize, but I'm having trouble connecting right now. Please call us at (571) 576-7711." });
    }

    const data = await response.json();
    let geminiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!geminiText) {
      return res.status(500).json({ reply: "I'm sorry, I couldn't understand that. Could you please rephrase?" });
    }

    // Attempt to parse JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(geminiText);
    } catch (e) {
      console.error('Failed to parse Gemini JSON:', geminiText);
      // Fallback
      parsedResponse = {
        reply: geminiText.replace(/```json/g, '').replace(/```/g, ''),
        highIntent: false,
        leadComplete: false
      };
    }

    return res.status(200).json(parsedResponse);

  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ reply: "I apologize, but I'm experiencing technical difficulties. Please call us directly." });
  }
}
