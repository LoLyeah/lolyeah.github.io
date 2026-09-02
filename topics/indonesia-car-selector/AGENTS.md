# AGENTS.md — Indonesian Car Selector & Automotive Database Standards

This document serves as the mandatory operational protocol for any AI agent or developer editing, maintaining, or auditing:
1. `assets/indonesia-cars-data.js` (Master Centralized Dataset)
2. `topics/indonesia-car-selector.html` (Interactive Recommendation Decision Wizard)
3. `topics/indonesia-car-selector/database.html` (Master Database, Spreadsheet, Radar Chart & Filter Directory)
4. `topics/indonesia-car-selector/body-types.html` (Chassis & Powertrain Taxonomy Guide)
5. `assets/images/cars/` (Local Vehicle Photography Assets)

---

## 1. Definition of "Mobil Resmi di Indonesia" (Official Indonesian Cars)

> [!IMPORTANT]
> **What qualifies as "Resmi Dijual di Indonesia":**
> 1. **Official APM Backing**: The model is officially imported, assembled, or distributed by an authorized Agen Pemegang Merek (APM) or sole distributor in Indonesia (e.g. PT Toyota-Astra Motor, PT Honda Prospect Motor, PT Astra Daihatsu Motor, PT Chery Sales Indonesia, BYD Motor Indonesia, Wuling SGMW, Eurokars Motor Indonesia, Indomobil Group, Inchcape, PT Plaza Auto Mega, etc.).
> 2. **Official Commercialization & Pre-Booking**: The vehicle is featured on the official Indonesian APM website (e.g. `toyota.astra.co.id`, `honda-indonesia.com`, `byd.com/id`, `chery.co.id`, `wuling.id`, `mazda.co.id`, `subaruindonesia.com`) with active retail sales or official pre-booking.
> 3. **DO NOT Assume 2025/2026 Models Are Fake/Unreleased**:
>    - Models such as `Honda Step WGN e:HEV`, `Honda Super-ONE`, `Honda e:N1`, `Chery Q`, `Chery Tiggo Cross`, `BYD Atto 1` (Seagull / Dolphin Mini), `BYD M6 DM-i`, `BYD Sealion 7`, `Wuling Aira EV`, `Jaecoo J5 / 7 / 8`, `Geely EX2 Pro / EX5`, `Leapmotor C10 / B10`, `Lepas L8`, `XPeng G6`, `Denza Z9 GT`, `Zeekr 009 / X`, `Maxus Mifa 7 / 9` are **REAL PRODUCTION MODELS OFFICIALLY SOLD OR PRE-BOOKED IN INDONESIA**.
>    - **NEVER delete these models based on stale pre-2024 knowledge cutoffs.**
>    - Always verify live data by fetching official APM URLs (`read_url_content`) or checking credible Indonesian automotive journalism (Kompas Otomotif, Detik Oto, Oto.com, Gaikindo).

---

## 2. Centralized Architecture & File Relationships

```
├── assets/
│   ├── indonesia-cars-data.js        <-- SINGLE SOURCE OF TRUTH (const CAR_DATABASE)
│   └── images/cars/                  <-- LOCAL IMAGES (Must exist for EVERY car ID)
├── topics/
│   ├── indonesia-car-selector.html   <-- Imports ../assets/indonesia-cars-data.js
│   └── indonesia-car-selector/
│       ├── database.html             <-- Imports ../../assets/indonesia-cars-data.js
│       ├── body-types.html           <-- Subpage guide
│       └── AGENTS.md                 <-- This operational guide
```

- **Zero Inline Duplication**: Never re-declare or embed raw car arrays inside `database.html` or `indonesia-car-selector.html`. Both pages MUST read from `assets/indonesia-cars-data.js`.
- **Image Path Resolution**:
  - In `CAR_DATABASE`, store image paths relative to `database.html` (`../../assets/images/cars/<car-id>.jpg`).
  - In `indonesia-car-selector.html`, resolve image paths with `resolveCarImg(img)` which converts `../../` to `../`.
  - Every image referenced in `CAR_DATABASE` **MUST physically exist** in `assets/images/cars/`. Zero broken or external hotlinks.

---

## 3. Disentangling Bundled Nameplates

> [!CAUTION]
> **NEVER merge or bundle sister cars under a single entry!**
> Distinct models have different pricing tiers, target buyers, and equipment levels:
> - **Toyota Calya** (`toyota-calya`) & **Daihatsu Sigra** (`daihatsu-sigra`): Sigra starts at Rp 139 Jt (1.0L) and is Indonesia's #1 best-selling passenger car. Calya starts at Rp 167 Jt (1.2L only). Keep them as two distinct cars.
> - **Toyota Avanza** (`toyota-avanza`) & **Toyota Veloz** (`toyota-veloz`): Veloz is marketed by TAM as a distinct nameplate with rear disc brakes, EPB, and TSS.
> - **Suzuki Ertiga Hybrid** (`suzuki-ertiga-hybrid`) & **Suzuki XL7 Hybrid** (`suzuki-xl7-hybrid`): Distinct MPV vs LSUV crossover segments.

---

## 4. Accurate Manufacturing Origin & Assembly Metadata

Never guess or assume assembly origins. Maintain GAIKINDO production accuracy in the `assembly` field:

| Type | Definition | Indonesian Market Examples |
| :--- | :--- | :--- |
| **CKD** | Completely Knocked Down (Produksi / Rakit Lokal Indonesia) | Avanza, Veloz, Calya, Sigra, Xenia, Terios, Rush, Agya, Raize, Innova Zenix, Fortuner, Xpander, Ertiga, XL7, Brio, BR-V, HR-V, WR-V, Wuling (Air ev, Binguo, Cloud, Alvez, Almaz), Hyundai (Stargazer, Creta, Ioniq 5, Santa Fe CKD), Chery (Tiggo series, Omoda E5, Chery Q via PT Handal), Neta (via PT Handal), BMW (218i, 320i, 520i, X1, X3, X5, X7 via PT Gaya Motor), Mercedes-Benz (C, E, GLC, GLE, GLS, S-Class via Wanaherang). |
| **CBU** | Completely Built Up (Impor Utuh Resmi APM) | Mitsubishi Triton (Thailand), Hilux Double Cab (Thailand), Suzuki Baleno (India), Suzuki S-Presso (India), Suzuki Grand Vitara (India), Suzuki Jimny (Jepang), Toyota Voxy (Jepang), Toyota Alphard/Vellfire (Jepang), Toyota Land Cruiser 300 (Jepang), Toyota Corolla Altis / Camry (Thailand), GR Yaris / GR86 / GR Supra (Jepang/Austria), Mazda all models (Thailand/Jepang/Malaysia), Subaru all models (Jepang), Lexus all models (Jepang), Porsche all models (Jerman), VW ID. Buzz / Golf GTI (Jerman), Kia Seltos/Carens (India), Kia EV6/EV9 (Korea), Ford Ranger (Thailand), Isuzu D-Max (Thailand). |

---

## 5. Mandatory 28-Field Schema Checklist

Every single vehicle object in `assets/indonesia-cars-data.js` MUST contain all 28 non-empty attributes:

1. `id`: String (kebab-case, e.g. `'toyota-bz4x'`)
2. `brand`: String (e.g. `'Toyota'`, `'Mercedes-Benz'`, `'GAC AION'`)
3. `model`: String (e.g. `'All New bZ4X Panoramic Roof (Touring EV)'`)
4. `image`: String (`'../../assets/images/cars/<id>.jpg'`)
5. `powertrain`: String (`'ICE Gasoline'`, `'ICE Turbodiesel'`, `'HEV'`, `'PHEV'`, or `'BEV'`)
6. `powertrainLabel`: String (e.g. `'Mobil Listrik (BEV)'`, `'Full Hybrid (HEV)'`)
7. `body`: String (e.g. `'Compact SUV'`, `'Monocoque MPV'`, `'Ladder-Frame SUV'`, `'Sports Car Coupe'`)
8. `engine`: String (Exact engine code/displacement, motor kW/PS, and battery capacity)
9. `power`: Integer (Metric horsepower / PS)
10. `torque`: Integer (Torque in Nm)
11. `battery`: String (e.g. `'71.4 kWh Lithium-ion'`, or `'N/A (Bensin Konvensional)'`)
12. `range`: String (e.g. `'500 km (NEDC)'`, or `'N/A (Bensin Konvensional)'`)
13. `trans`: String (e.g. `'CVT Otomatis'`, `'Otomatis 8-Speed'`, `'Single-Speed Reduction Gear'`)
14. `drive`: String (e.g. `'FWD (Front-Wheel Drive)'`, `'RWD'`, `'AWD'`, `'Part-Time 4WD'`)
15. `dimensions`: String (L x W x H in mm, e.g. `'4.690 x 1.860 x 1.650 mm'`)
16. `wheelbase`: Integer (Wheelbase in mm, e.g. `2850`)
17. `gc`: Integer (Ground clearance in mm, e.g. `210`)
18. `seats`: Integer (Passenger seating capacity, e.g. `5`, `7`, `8`)
19. `priceMin`: Float (Starting OTR Jakarta price in Millions IDR, e.g. `1190.0`)
20. `priceMax`: Float (Top trim OTR Jakarta price in Millions IDR, e.g. `1190.0`)
21. `priceDisplay`: String (e.g. `'Rp 1,190 Milyar'`, `'Rp 239,7 – 276,7 Juta'`)
22. `gageExempt`: Boolean (`true` ONLY for 100% pure electric BEVs with blue-stripe plate)
23. `pros`: String (Detailed advantages tailored to Indonesian driving conditions)
24. `cons`: String (Honest caveats and trade-offs)
25. `wikiUrl`: String (Valid Wikipedia article URL)
26. `officialUrl`: String (Valid official Indonesian APM product website URL)
27. `assembly`: String (Accurate CKD plant or CBU import country)
28. `variants`: Array of objects (`[{ name, price, engine, transmission }, ...]`)

---

## 6. Recommendation Decision Engine Standards (`scoreCar`)

In `topics/indonesia-car-selector.html`:
- **Budget Priority**: Budget has a 40-point weight with a **-999 point penalty** for severe mismatches.
  - Selecting `above1200` (> Rp 1,2 Milyar) **MUST NEVER** recommend 400jt cars (like BYD M6, Avanza, Brio). It must recommend premium brands like Denza, Maxus, Lexus, BMW, Mercedes-Benz, Volvo, Porsche, VW.
  - Selecting `under200` (< Rp 200 Juta) must prioritize LCGC & commercial MPVs (Calya, Sigra, APV Arena, Gran Max, S-Presso).
- **Seat Capacity Hard Constraint**: If a user selects `7+` passengers, any 4- or 5-seater receives a heavy -25 point penalty.
- **Flood / Ground Clearance Constraint**: If `rough-flood` is selected, cars with `gc >= 200` get +10 points; low cars (`gc < 175`) receive a -15 point penalty.
- **Charging Constraint**: If `none` is selected, BEVs receive a -30 point penalty.
- **Reset Questionnaire**: Ensure `resetQuiz()` and `restartQuiz()` clear all state, reset to Step 1, and scroll to top.

---

## 7. Synchronizing UI Counters & Filters Across Files

When vehicles are added or updated, always keep these synchronized:
1. **Brand Filter Dropdown** in `topics/indonesia-car-selector/database.html`:
   - Keep `<select id="filter-brand">` updated with all 36+ active Indonesian APM brands (including Subaru, GWM, Neta, Mazda, Ford, Isuzu, DFSK).
2. **Quick Filter Chips** in `database.html`:
   - Keep `chineseBrands` array up to date: `['BYD', 'Denza', 'Maxus', 'Wuling', 'Chery', 'Jaecoo', 'GWM', 'GAC AION', 'GAC Hyptec', 'Geely', 'Zeekr', 'Leapmotor', 'Lepas', 'XPeng', 'BAIC', 'VinFast', 'MG', 'DFSK', 'Neta']`.
3. **Model Counters**:
   - Update model count in titles, meta tags, and badges across `database.html`, `indonesia-car-selector.html`, and `index.html`.
4. **Sitemap**:
   - Update `<lastmod>` in `sitemap.xml` for modified routes.

---

## 8. Verification Checklist Before Finishing Any Task

Always run this automated audit script sequence:

```bash
# 1. Check for 100% field completeness across all cars
python3 -c "
import json, re
with open('assets/indonesia-cars-data.js') as f:
    text = f.read()
cars = json.loads(re.search(r'const CAR_DATABASE = (\[.*?\]);', text, re.DOTALL).group(1))
req = ['id','brand','model','image','powertrain','powertrainLabel','body','engine','power','torque','battery','range','trans','drive','dimensions','wheelbase','gc','seats','priceMin','priceMax','priceDisplay','gageExempt','pros','cons','wikiUrl','officialUrl','assembly','variants']
for c in cars:
    for k in req:
        assert k in c and c[k] is not None and (not isinstance(c[k], str) or c[k].strip() != ''), f'Car {c.get(\"id\")} missing {k}'
print(f'PASSED: All {len(cars)} cars have complete 28 fields!')
"

# 2. Check that all referenced local images physically exist
python3 -c "
import json, re, os
with open('assets/indonesia-cars-data.js') as f:
    text = f.read()
cars = json.loads(re.search(r'const CAR_DATABASE = (\[.*?\]);', text, re.DOTALL).group(1))
for c in cars:
    path = c['image'].replace('../../', '')
    assert os.path.exists(path), f'Missing image: {path} for {c[\"id\"]}'
print('PASSED: All image assets exist!')
"

# 3. Validate JavaScript syntax
node --check assets/indonesia-cars-data.js

# 4. Check for whitespace errors
git diff --check
```
