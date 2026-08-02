import os

pages = ['index.html', 'cost-calculator/index.html', 'es/index.html', 'es/cotizador-envio-de-autos/index.html']
ids = ['advancedCalcForm', 'pickupZip', 'deliveryZip', 'distance', 'pickupDate', 'vehicleGroupsContainer', 'btnAddVehicle', 'transportType', 'btnNextStep', 'step1', 'step2', 'btnBackStep', 'firstName', 'lastName', 'email', 'phone', 'estimatedPriceField']

for p in pages:
    path = os.path.join(r'C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site', p)
    if os.path.exists(path):
        content = open(path, encoding='utf-8').read()
        missing = [i for i in ids if f'id="{i}"' not in content and f"id='{i}'" not in content]
        print(f"{p}: {'ALL 17 CALCULATOR IDs PRESENT OK' if not missing else 'MISSING: ' + str(missing)}")
