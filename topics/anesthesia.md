# 💉 Anesthesia: Point-of-Care Clinical Suite & Resuscitation Engine

> **A mission-critical, offline-first point-of-care medical suite for anesthesiologists, intensivists, emergency physicians, and acute care teams.** Built with Next.js 16, React 19, Tailwind CSS v4, Motion, Zustand 5, and Dexie IndexedDB.

---

## 🎯 Executive Overview

Modern hospital environments—especially operating theaters (OTs), surgical suites, and intensive care units (ICUs)—are often electronically shielded concrete bunkers with erratic cellular reception and intermittent Wi-Fi. In acute clinical emergencies, healthcare providers cannot afford loading spinners, network latency, or external cloud outages.

**Anesthesia** is engineered specifically for these zero-tolerance environments. All calculators, diagnostic risk models, 14,000+ ICD-10 diagnostic codes, drug pharmacopeia, and resuscitation dosing algorithms execute **100% locally on the device** via browser IndexedDB, with zero cloud dependency and zero telemetry.

---

## ⚡ Core Resuscitation & Emergency Protocols (Phase 2)

### 1. ACLS CPR Cycle & Resuscitation Engine
- **2-Minute CPR Countdown**: Visual circular progress ring with millisecond-accurate countdown.
- **Auditory & Visual Metronome**: Web Audio API metronome generating calibrated 110 bpm dual-frequency audio clicks (880 Hz / 440 Hz) and visual beat flashes matching AHA 2020/2025 high-quality chest compression guidelines (100–120 bpm).
- **Rhythm Check Alert**: Visual flashing banner and auditory alert at `00:00` enforcing prompt carotid pulse and rhythm checks (< 10 seconds interruption).
- **Branching Decision Pathways**:
  * **Shockable Rhythm (VF / pVT)**: Biphasic defibrillation energy guidance (200 J adult, 2–4 J/kg pediatric). Automatic drug sequencing: Epinephrine 1 mg IV/IO q3–5 min (after Shock #2), Amiodarone 300 mg bolus after Shock #3, second dose 150 mg after Shock #5.
  * **Non-Shockable Rhythm (PEA / Asystole)**: Immediate Epinephrine 1 mg IV/IO focus, high-quality CPR without pause, immediate search for reversible causes.
- **Interactive Hs & Ts Differential Checklist**:
  * *Hypovolemia*: Rapid crystalloid bolus, blood products, pressure infusers.
  * *Hypoxia*: 100% FiO2, verify endotracheal tube placement and bilateral breath sounds.
  * *Hydrogen ion (Acidosis)*: Hyperventilation, Sodium Bicarbonate 1 mEq/kg IV.
  * *Hypo/Hyperkalemia*: Calcium Chloride 10% 10 mL IV (cardioprotection), Regular Insulin 10U + D50W 50 mL.
  * *Hypothermia*: Active internal and external warming.
  * *Tension Pneumothorax*: Immediate needle decompression (2nd ICS MCL or 5th ICS AAL) followed by tube thoracostomy.
  * *Tamponade (Cardiac)*: Focused bedside echocardiography (POCUS), pericardiocentesis.
  * *Toxins*: Specific antidotes (Naloxone, Flumazenil, High-Dose Insulin Euglycemia, Intralipid 20%).
  * *Thrombosis (Pulmonary)*: Systemic thrombolysis (Alteplase 50–100 mg), surgical embolectomy.
  * *Thrombosis (Coronary)*: Emergent percutaneous coronary intervention (PCI) post-ROSC.
- **Timestamped Audit Log**: Millisecond-accurate log of every shock, drug dose, rhythm check, and clinical event with 1-click clipboard export for code arrest documentation.

---

### 2. Pediatric Broselow Tape & Equipment Sizer
- **9 Validated Color Zones (3 to 36 kg)**:
  * **Grey** (3–5 kg, Infant < 3 mo): 3.0–3.5 uncuffed ETT, Miller 0, Epinephrine 0.04 mg (0.4 mL 1:10,000), Defib 8 J.
  * **Pink** (6–7 kg, 3–6 mo): 3.5 uncuffed ETT, Miller 1, Epinephrine 0.07 mg (0.7 mL 1:10,000), Defib 14 J.
  * **Red** (8–9 kg, 7–10 mo): 3.5–4.0 uncuffed ETT, Miller 1, Epinephrine 0.08 mg (0.8 mL 1:10,000), Defib 18 J.
  * **Purple** (10–11 kg, 11–18 mo): 4.0 cuffed / 4.5 uncuffed ETT, Miller/Mac 1, Epinephrine 0.1 mg (1.0 mL 1:10,000), Defib 20 J.
  * **Yellow** (12–14 kg, 19–35 mo): 4.5 cuffed ETT, Mac 2, Epinephrine 0.13 mg (1.3 mL 1:10,000), Defib 26 J.
  * **White** (15–18 kg, 3–5 yr): 5.0 cuffed ETT, Mac 2, Epinephrine 0.17 mg (1.7 mL 1:10,000), Defib 34 J.
  * **Blue** (19–23 kg, 6–7 yr): 5.5 cuffed ETT, Mac 2–3, Epinephrine 0.21 mg (2.1 mL 1:10,000), Defib 42 J.
  * **Orange** (24–29 kg, 8–9 yr): 6.0 cuffed ETT, Mac 3, Epinephrine 0.27 mg (2.7 mL 1:10,000), Defib 54 J.
  * **Green** (30–36 kg, 10–11 yr): 6.5 cuffed ETT, Mac 3, Epinephrine 0.33 mg (3.3 mL 1:10,000), Defib 66 J.
- **Synchronized Active Case Integration**: 1-tap sync applies weight across all point-of-care calculators.

---

### 3. Status Epilepticus 4-Phase Escalation Timeline
- **Phase 1: Stabilization (0–5 min)**:
  * Airway, high-flow oxygen, blood glucose check (rule out hypoglycemia; administer D50W if < 60 mg/dL), IV/IO access, ECG monitoring.
- **Phase 2: First-Line Benzodiazepines (5–20 min)**:
  * *Lorazepam IV*: 0.1 mg/kg (max 4 mg) at 2 mg/min. (Standard 2 mg/mL = calculated volume).
  * *Diazepam IV*: 0.15–0.2 mg/kg (max 10 mg) at 5 mg/min.
  * *Midazolam IM*: 10 mg IM for weight > 40 kg, 5 mg IM for 13–40 kg, 0.2 mg/kg for < 13 kg (at 5 mg/mL). First choice when IV access is delayed.
- **Phase 3: Urgent Second-Line Non-Sedating AEDs (20–40 min)**:
  * *Levetiracetam (Keppra)*: 60 mg/kg IV (max 4,500 mg) infused over 10 minutes.
  * *Fosphenytoin*: 20 mg PE/kg IV (max 1,500 mg PE) at <= 150 mg PE/min with continuous cardiac monitoring.
  * *Valproate Sodium*: 40 mg/kg IV (max 3,000 mg) infused over 5–10 minutes.
- **Phase 4: Refractory Status Epilepticus & General Anesthesia (40+ min)**:
  * Rapid sequence intubation (Rocuronium 1.2 mg/kg).
  * Continuous infusions: Propofol (20–100 mcg/kg/min), Midazolam (0.05–2 mg/kg/hr), or Ketamine (1–5 mg/kg/hr).
  * Continuous EEG burst suppression monitoring (target 10–15s interburst intervals).

---

### 4. Hypertensive Crisis Titration Engine
- **Target Boundaries**:
  * Hypertensive Emergency defined as SBP > 180 mmHg or DBP > 120 mmHg WITH acute target organ damage.
  * **Safety Limit**: Reduce Mean Arterial Pressure (MAP) by **no more than 20–25%** within the first 1–2 hours to prevent cerebral, renal, or coronary hypoperfusion.
  * *Exception*: Acute aortic dissection requires rapid reduction of SBP to < 120 mmHg and HR < 60 bpm within 20 minutes (using IV Esmolol/Labetalol + Vasodilator).
- **Titrated Continuous Infusion Engines**:
  * *Nicardipine IV*: Start 5 mg/hr, titrate by 2.5 mg/hr every 5–15 min up to 15 mg/hr.
  * *Labetalol IV*: Initial 20 mg slow IV bolus, followed by 0.5–2.0 mg/min continuous infusion (max cumulative 300 mg).
  * *Sodium Nitroprusside*: Start 0.3–0.5 mcg/kg/min, titrate up to 2 mcg/kg/min. Arterial line monitoring mandatory; cyanide toxicity alert if > 2 mcg/kg/min or > 24 hours.

---

### 5. Acute Crisis Push Doses
- **Malignant Hyperthermia (MH)**:
  * Turn off volatile anesthetics & Succinylcholine; hyperventilate with 100% O2 at >= 10 L/min.
  * Dantrolene 2.5 mg/kg rapid IV bolus. Reconstitution calculator: 20 mg vial in 60 mL sterile preservative-free water.
- **LAST (Local Anesthetic Systemic Toxicity)**:
  * ASRA 20% Lipid Rescue Protocol.
  * Initial 20% Lipid emulsion bolus: 1.5 mL/kg over 1 minute.
  * Continuous infusion: 0.25 mL/kg/min (15 mL/kg/hr).

---

## 🧮 Bedside Diagnostic Calculators & Clinical Models

- **Hemodynamics & Renal**: Cockcroft-Gault CrCl, CKD-EPI 2021 Race-Free eGFR, Mean Arterial Pressure (MAP).
- **Respiratory & Airway**: PaO2/FiO2 ratio (Berlin ARDS definition), Pediatric & Adult Endotracheal Tube (ETT) size (Motoyama formula: `Age/4 + 3.5` for cuffed, `Age/4 + 4` for uncuffed) and depth (`Age/2 + 12` cm).
- **Fluids & Hematology**: Holliday-Segar 4-2-1 rule, Gross Formula for Allowable Blood Loss (ABL).
- **Clinical Risk Scores (Phase 1)**:
  * Wells Score for DVT & Pulmonary Embolism (PE) + PERC rule.
  * CHA2DS2-VASc stroke risk in atrial fibrillation.
  * CURB-65 & PSI (PORT) for community-acquired pneumonia.
  * qSOFA & SOFA sepsis score.
  * Glasgow Coma Scale (GCS) and GCS-Pupils (GCS-P).
  * NIH Stroke Scale (NIHSS) with IV tPA eligibility checklist.
  * MELD-Na & Child-Pugh liver disease stratification.
  * 4-Step Arterial Blood Gas (ABG) analyzer with Winter's formula and Delta-Delta ratio.

---

## 📱 Mobile Screen Architecture & Optimization

- **Zero Horizontal Scroll**: Rigid `overflow-x: hidden` containers, flex-wrap badges, and responsive tables.
- **44x44px Thumb-Friendly Touch Targets**: All emergency buttons, steppers, preset chips, and bottom navigation pills adhere to Apple iOS HIG and Android Material guidelines.
- **Active Patient Case Tray**: Easily accessible from both desktop topbar and mobile sub-bar, with full height bounds (`max-h-[92vh]`) and scrollable controls.
- **High-Contrast Dark Surface Architecture**: Calibrated for high-glare operating theater monitors and low-light night-shift environments.

---

## 🛠️ Technical Stack & Implementation

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 16.4.2 (App Router) | High-performance React 19 server and client rendering |
| **Styling** | Tailwind CSS v4.1 | Ultra-fast utility CSS engine with zero runtime overhead |
| **Motion** | Motion 12.4 | Hardware-accelerated fluid transitions and micro-interactions |
| **State** | Zustand 5 | Minimalist reactive state with persistent local storage |
| **Database** | Dexie.js (IndexedDB) | 100% offline persistence for 14,000+ codes and custom cases |
| **Audio Engine** | Web Audio API | Low-latency synthesis of 110 bpm CPR metronome |
| **Vector Engine** | SVG Native Waveforms | Calibrated 1mm/5mm grid ECG display without external heavy canvas |
