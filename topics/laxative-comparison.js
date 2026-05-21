// ===== Translations =====
const translations = {
  en: {
    pageTitle: "Guide to Constipation Medications",
    headerTitle: "A Comprehensive Guide to Constipation Medications",
    headerSubtitle: "An interactive comparison of mechanisms, uses, and drug classes.",
    tabTraditional: "Traditional (OTC)",
    tabNovel: "Novel (Prescription)",
    tabComparison: "Comparison Table",
    tabReferences: "References",
    traditionalTitle: "Traditional (OTC) Laxatives",
    osmoticTitle: "Osmotic Laxatives",
    osmoticDesc: "These are poorly-absorbed substances that work by osmosis, drawing water from surrounding tissues into your colon. This excess water softens the stool and increases its volume, making it easier to pass.",
    osmoticExamples: "<strong>Common Examples:</strong> Polyethylene glycol (PEG 3350), Lactulose, Magnesium hydroxide, Magnesium citrate.",
    osmoticBestFor: "<strong>Best For:</strong> Gentle, chronic, or long-term constipation.",
    osmoticOnset: "<strong>Onset of Action:</strong> 1-3 days.",
    osmoticSideEffects: "<strong>Key Side Effects:</strong> Bloating, gas, cramping, dehydration (must drink fluids).",
    stimulantTitle: "Stimulant Laxatives",
    stimulantDesc: "These work by directly stimulating the enteric nerves in your intestinal walls. This triggers rhythmic muscle contractions (peristalsis) that push the stool along.",
    stimulantExamples: "<strong>Common Examples:</strong> Bisacodyl, Senna / Sennosides.",
    stimulantBestFor: "<strong>Best For:</strong> Acute, short-term relief (they work faster and more powerfully).",
    stimulantOnset: "<strong>Onset of Action:</strong> 6-12 hours (oral); 15-60 minutes (rectal).",
    stimulantSideEffects: '<strong>Key Side Effects:</strong> Abdominal cramping, diarrhea. <span class="warning">High risk of dependency if used long-term.</span>',
    bulkTitle: "Bulk-Forming Laxatives",
    bulkDesc: 'These are essentially dietary fiber supplements. They absorb water in the intestine, adding "bulk" (size and weight) to the stool. This larger, softer stool helps stimulate normal bowel contractions.',
    bulkExamples: "<strong>Common Examples:</strong> Psyllium, Methylcellulose.",
    bulkBestFor: "<strong>Best For:</strong> First-line choice for long-term management and prevention. Safest for daily use.",
    bulkOnset: "<strong>Onset of Action:</strong> 12-72 hours.",
    bulkSideEffects: '<strong>Key Side Effects:</strong> Bloating, gas. <span class="warning">Must be taken with plenty of water to prevent blockage.</span>',
    softenerTitle: "Stool Softeners (Emollients)",
    softenerDesc: "These act like a detergent, allowing water and fats to penetrate the stool, making it softer. They don't directly stimulate a bowel movement but make it much easier to pass, reducing straining.",
    softenerExamples: "<strong>Common Examples:</strong> Docusate sodium.",
    softenerBestFor: "<strong>Best For:</strong> Preventing straining (e.g., after surgery, childbirth, or for hemorrhoids).",
    softenerOnset: "<strong>Onset of Action:</strong> 12-72 hours.",
    softenerSideEffects: "<strong>Key Side Effects:</strong> Very mild; may cause nausea.",
    novelTitle: "Novel (Prescription) Medications",
    novelDesc: "These newer drugs are typically used for Chronic Idiopathic Constipation (CIC) or Constipation-Predominant Irritable Bowel Syndrome (IBS-C) when OTC options have failed.",
    ibatTitle: "IBAT Inhibitors",
    ibatDesc: "Stands for Ileal Bile Acid Transporter Inhibitor. These drugs block the reabsorption of bile acids in the small intestine (ileum). This increases the amount of bile acids that reach the colon, which has a dual effect: it draws water into the stool (osmotic effect) and stimulates colon contractions (motility effect).",
    ibatExamples: "<strong>Example:</strong> Elobixibat.",
    ibatUse: "<strong>Use:</strong> Chronic Idiopathic Constipation (CIC).",
    ibatOnset: "<strong>Onset of Action:</strong> Median time of ~5 hours.",
    ibatSideEffects: "<strong>Key Side Effects:</strong> Abdominal pain, diarrhea (as a direct result of the mechanism).",
    gcTitle: "Guanylate Cyclase-C (GC-C) Agonists",
    gcDesc: "These drugs activate the GC-C receptor on intestinal cells. This action increases the secretion of chloride and bicarbonate (and thus water) into the intestinal lumen, softening stool and speeding up transit. This mechanism can also help reduce abdominal pain.",
    gcExamples: "<strong>Examples:</strong> Linaclotide, Plecanatide.",
    gcUse: "<strong>Use:</strong> CIC and IBS-C.",
    gcOnset: "<strong>Onset of Action:</strong> Improvement within 1 week.",
    gcSideEffects: "<strong>Key Side Effects:</strong> Diarrhea (most common).",
    clcTitle: "Chloride Channel Activators",
    clcDesc: "This medication works by activating ClC-2 chloride channels on the lining of the gut. This causes chloride ions to be secreted into the intestine, and water passively follows, increasing fluid in the stool and making it softer.",
    clcExamples: "<strong>Example:</strong> Lubiprostone.",
    clcUse: "<strong>Use:</strong> CIC, IBS-C, and Opioid-Induced Constipation (OIC).",
    clcOnset: "<strong>Onset of Action:</strong> Increased bowel movements within 1 week.",
    clcSideEffects: "<strong>Key Side Effects:</strong> Nausea (can be significant), headache.",
    ht4Title: "5-HT4 Receptor Agonists (Prokinetics)",
    ht4Desc: 'These are "prokinetic" agents, meaning they enhance gut motility. They selectively target serotonin 5-HT4 receptors in the colon, which triggers large-scale, wave-like muscle contractions (peristalsis) to move stool through the gut.',
    ht4Examples: "<strong>Example:</strong> Prucalopride.",
    ht4Use: "<strong>Use:</strong> CIC.",
    ht4Onset: "<strong>Onset of Action:</strong> Rapid; often within 2-4 hours.",
    ht4SideEffects: "<strong>Key Side Effects:</strong> Headache, abdominal pain, nausea.",
    comparisonTitle: "Medication Comparison Table",
    tableHeaderClass: "Drug Class", tableHeaderMechanism: "Mechanism of Action",
    tableHeaderExamples: "Common Examples", tableHeaderUse: "Primary Use",
    tableHeaderOnset: "Onset of Action", tableHeaderPrice: "Price (Relative)",
    tableHeaderSideEffects: "Key Side Effects",
    tableBulkClass: "Bulk-Forming", tableBulkMechanism: "Absorbs water to add bulk and softness to stool.",
    tableBulkUse: "First-line, long-term prevention", tableBulkPrice: "Cheapest",
    tableBulkSideEffects: "Bloating, gas (must take with water)",
    tableSoftenerClass: "Stool Softener", tableSoftenerMechanism: "Allows water and fats to penetrate the stool.",
    tableSoftenerUse: "Preventing straining (post-op)", tableSoftenerPrice: "Cheapest",
    tableSoftenerSideEffects: "Very mild, nausea",
    tableOsmoticClass: "Osmotic", tableOsmoticMechanism: "Draws water into the colon via osmosis to soften stool.",
    tableOsmoticUse: "Chronic constipation", tableOsmoticPrice: "Cheap",
    tableOsmoticSideEffects: "Bloating, gas, dehydration",
    tableStimulantClass: "Stimulant", tableStimulantMechanism: "Stimulates intestinal nerves to trigger muscle contractions (peristalsis).",
    tableStimulantUse: "Acute, short-term relief", tableStimulantOnset: "6-12h (oral); 15-60m (rectal)",
    tableStimulantPrice: "Cheap",
    tableStimulantSideEffects: 'Cramps, diarrhea, <span class="warning">dependency risk</span>',
    tableClcClass: "Cl- Channel Activator", tableClcMechanism: "Activates ClC-2 channels to increase fluid secretion.",
    tableClcOnset: "Improvement within 1 week", tableClcPrice: "Expensive",
    tableClcSideEffects: "Nausea, headache",
    tableIbatClass: "IBAT Inhibitor", tableIbatMechanism: "Blocks bile acid reabsorption, increasing water/motility.",
    tableIbatUse: "Chronic Idiopathic Constipation (CIC)", tableIbatOnset: "~5 hours (median time)",
    tableIbatPrice: "Most Expensive", tableIbatSideEffects: "Abdominal pain, diarrhea",
    tableGcClass: "GC-C Agonist", tableGcMechanism: "Activates GC-C receptors to increase fluid secretion.",
    tableGcOnset: "Improvement within 1 week", tableGcPrice: "Most Expensive",
    tableGcSideEffects: "Diarrhea",
    tableHt4Class: "5-HT4 Agonist", tableHt4Mechanism: "Activates serotonin 5-HT4 receptors to enhance motility.",
    tableHt4Use: "CIC (prokinetic)", tableHt4Onset: "2-4 hours",
    tableHt4Price: "Most Expensive", tableHt4SideEffects: "Headache, abdominal pain, nausea",
    refTitle: "References",
    refIntro: "This information was compiled using data from the following sources:",
    disclaimerTitle: "Important Disclaimer",
    disclaimerBody: "This document is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here."
  },
  id: {
    pageTitle: "Panduan Obat Konstipasi",
    headerTitle: "Panduan Komprehensif Obat Konstipasi",
    headerSubtitle: "Perbandingan interaktif mekanisme, kegunaan, dan kelas obat.",
    tabTraditional: "Tradisional (Umum)",
    tabNovel: "Baru (Resep)",
    tabComparison: "Tabel Perbandingan",
    tabReferences: "Referensi",
    traditionalTitle: "Laksatif Tradisional (Obat Bebas/OTC)",
    osmoticTitle: "Laksatif Osmotik",
    osmoticDesc: "Ini adalah zat yang diserap tubuh secara minimal dan bekerja dengan cara osmosis, yaitu menarik air dari jaringan sekitar ke dalam usus besar Anda. Kelebihan air ini akan melunakkan tinja dan menambah volumenya, sehingga lebih mudah dikeluarkan.",
    osmoticExamples: "<strong>Contoh Umum:</strong> Polietilen glikol (PEG 3350), Laktulosa, Magnesium hidroksida, Magnesium sitrat.",
    osmoticBestFor: "<strong>Terbaik Untuk:</strong> Konstipasi kronis atau jangka panjang yang bersifat ringan.",
    osmoticOnset: "<strong>Waktu Mulai Bekerja:</strong> 1-3 hari.",
    osmoticSideEffects: "<strong>Efek Samping Utama:</strong> Kembung, gas, kram, dehidrasi (harus minum banyak cairan).",
    stimulantTitle: "Laksatif Stimulan",
    stimulantDesc: "Obat ini bekerja dengan merangsang langsung saraf enterik di dinding usus Anda. Ini memicu kontraksi otot ritmis (peristaltik) yang mendorong tinja.",
    stimulantExamples: "<strong>Contoh Umum:</strong> Bisacodyl, Senna / Sennosides.",
    stimulantBestFor: "<strong>Terbaik Untuk:</strong> Meredakan konstipasi akut jangka pendek (bekerja lebih cepat dan kuat).",
    stimulantOnset: "<strong>Waktu Mulai Bekerja:</strong> 6-12 jam (oral); 15-60 menit (rektal).",
    stimulantSideEffects: '<strong>Efek Samping Utama:</strong> Kram perut, diare. <span class="warning">Risiko ketergantungan tinggi jika digunakan jangka panjang.</span>',
    bulkTitle: "Laksatif Pembentuk Massa (Bulk-Forming)",
    bulkDesc: 'Ini pada dasarnya adalah suplemen serat. Obat ini menyerap air di usus, menambah "massa" (ukuran dan berat) pada tinja. Tinja yang lebih besar dan lunak ini membantu merangsang kontraksi usus yang normal.',
    bulkExamples: "<strong>Contoh Umum:</strong> Psyllium, Methylcellulose.",
    bulkBestFor: "<strong>Terbaik Untuk:</strong> Pilihan lini pertama untuk manajemen dan pencegahan jangka panjang. Paling aman untuk penggunaan sehari-hari.",
    bulkOnset: "<strong>Waktu Mulai Bekerja:</strong> 12-72 jam.",
    bulkSideEffects: '<strong>Efek Samping Utama:</strong> Kembung, gas. <span class="warning">Harus diminum dengan banyak air untuk mencegah penyumbatan.</span>',
    softenerTitle: "Pelunak Tinja (Emolien)",
    softenerDesc: "Obat ini bertindak seperti deterjen, memungkinkan air dan lemak menembus tinja, sehingga membuatnya lebih lunak. Obat ini tidak secara langsung merangsang buang air besar tetapi membuatnya lebih mudah dikeluarkan, mengurangi kebutuhan untuk mengejan.",
    softenerExamples: "<strong>Contoh Umum:</strong> Docusate sodium.",
    softenerBestFor: "<strong>Terbaik Untuk:</strong> Mencegah mengejan (misalnya, pasca operasi, melahirkan, atau untuk wasir).",
    softenerOnset: "<strong>Waktu Mulai Bekerja:</strong> 12-72 jam.",
    softenerSideEffects: "<strong>Efek Samping Utama:</strong> Sangat ringan; dapat menyebabkan mual.",
    novelTitle: "Obat Baru (Resep)",
    novelDesc: "Obat-obatan baru ini biasanya digunakan untuk Konstipasi Idiopatik Kronis (CIC) atau Sindrom Iritasi Usus Besar (IBS-C) ketika pilihan obat bebas (OTC) tidak berhasil.",
    ibatTitle: "Inhibitor IBAT",
    ibatDesc: "Obat ini bekerja dengan memblokir penyerapan kembali asam empedu di usus kecil (ileum). Hal ini meningkatkan jumlah asam empedu yang mencapai usus besar, yang memiliki efek ganda: menarik air ke dalam tinja (efek osmotik) dan merangsang kontraksi usus besar (efek motilitas).",
    ibatExamples: "<strong>Contoh:</strong> Elobixibat.",
    ibatUse: "<strong>Penggunaan:</strong> Konstipasi Idiopatik Kronis (CIC).",
    ibatOnset: "<strong>Waktu Mulai Bekerja:</strong> Waktu median ~5 jam.",
    ibatSideEffects: "<strong>Efek Samping Utama:</strong> Nyeri perut, diare (sebagai akibat langsung dari mekanisme kerja).",
    gcTitle: "Agonis Guanilat Siklase-C (GC-C)",
    gcDesc: "Obat ini mengaktifkan reseptor GC-C pada sel usus. Tindakan ini meningkatkan sekresi klorida dan bikarbonat (dan juga air) ke dalam lumen usus, melunakkan tinja dan mempercepat transit. Mekanisme ini juga dapat membantu mengurangi nyeri perut.",
    gcExamples: "<strong>Contoh:</strong> Linaclotide, Plecanatide.",
    gcUse: "<strong>Penggunaan:</strong> CIC dan IBS-C.",
    gcOnset: "<strong>Waktu Mulai Bekerja:</strong> Perbaikan dalam 1 minggu.",
    gcSideEffects: "<strong>Efek Samping Utama:</strong> Diare (paling umum).",
    clcTitle: "Aktivator Saluran Klorida",
    clcDesc: "Obat ini bekerja dengan mengaktifkan saluran klorida ClC-2 pada lapisan usus. Ini menyebabkan ion klorida dikeluarkan ke dalam usus, dan air secara pasif mengikuti, meningkatkan cairan dalam tinja dan membuatnya lebih lunak.",
    clcExamples: "<strong>Contoh:</strong> Lubiprostone.",
    clcUse: "<strong>Penggunaan:</strong> CIC, IBS-C, dan Konstipasi Akibat Opioid (OIC).",
    clcOnset: "<strong>Waktu Mulai Bekerja:</strong> Peningkatan buang air besar dalam 1 minggu.",
    clcSideEffects: "<strong>Efek Samping Utama:</strong> Mual (bisa signifikan), sakit kepala.",
    ht4Title: "Agonis Reseptor 5-HT4 (Prokinetik)",
    ht4Desc: 'Ini adalah agen "prokinetik", yang berarti meningkatkan motilitas usus. Obat ini secara selektif menargetkan reseptor serotonin 5-HT4 di usus besar, yang memicu kontraksi otot skala besar seperti gelombang (peristaltik) untuk mendorong tinja melalui usus.',
    ht4Examples: "<strong>Contoh:</strong> Prucalopride.",
    ht4Use: "<strong>Penggunaan:</strong> CIC.",
    ht4Onset: "<strong>Waktu Mulai Bekerja:</strong> Cepat; seringkali dalam 2-4 jam.",
    ht4SideEffects: "<strong>Efek Samping Utama:</strong> Sakit kepala, nyeri perut, mual.",
    comparisonTitle: "Tabel Perbandingan Obat",
    tableHeaderClass: "Kelas Obat", tableHeaderMechanism: "Mekanisme Kerja",
    tableHeaderExamples: "Contoh Umum", tableHeaderUse: "Penggunaan Utama",
    tableHeaderOnset: "Waktu Mulai Bekerja", tableHeaderPrice: "Harga (Relatif)",
    tableHeaderSideEffects: "Efek Samping Utama",
    tableBulkClass: "Pembentuk Massa", tableBulkMechanism: "Menyerap air untuk menambah massa dan kelembutan pada tinja.",
    tableBulkUse: "Lini pertama, pencegahan jangka panjang", tableBulkPrice: "Paling Murah",
    tableBulkSideEffects: "Kembung, gas (harus minum banyak air)",
    tableSoftenerClass: "Pelunak Tinja", tableSoftenerMechanism: "Memungkinkan air dan lemak menembus tinja.",
    tableSoftenerUse: "Mencegah mengejan (pasca-op)", tableSoftenerPrice: "Paling Murah",
    tableSoftenerSideEffects: "Sangat ringan, mual",
    tableOsmoticClass: "Osmotik", tableOsmoticMechanism: "Menarik air ke dalam usus besar melalui osmosis untuk melunakkan tinja.",
    tableOsmoticUse: "Konstipasi kronis", tableOsmoticPrice: "Murah",
    tableOsmoticSideEffects: "Kembung, gas, dehidrasi",
    tableStimulantClass: "Stimulan", tableStimulantMechanism: "Merangsang saraf usus untuk memicu kontraksi otot (peristaltik).",
    tableStimulantUse: "Meredakan konstipasi akut jangka pendek",
    tableStimulantOnset: "6-12 jam (oral); 15-60 mnt (rektal)",
    tableStimulantPrice: "Murah",
    tableStimulantSideEffects: 'Kram, diare, <span class="warning">risiko ketergantungan</span>',
    tableClcClass: "Aktivator Sal. Cl-", tableClcMechanism: "Mengaktifkan saluran ClC-2 untuk meningkatkan sekresi cairan.",
    tableClcOnset: "Perbaikan dalam 1 minggu", tableClcPrice: "Mahal",
    tableClcSideEffects: "Mual, sakit kepala",
    tableIbatClass: "Inhibitor IBAT", tableIbatMechanism: "Memblokir penyerapan kembali asam empedu, meningkatkan air/motilitas.",
    tableIbatUse: "Konstipasi Idiopatik Kronis (CIC)", tableIbatOnset: "~5 jam (waktu median)",
    tableIbatPrice: "Paling Mahal", tableIbatSideEffects: "Nyeri perut, diare",
    tableGcClass: "Agonis GC-C", tableGcMechanism: "Mengaktifkan reseptor GC-C untuk meningkatkan sekresi cairan.",
    tableGcOnset: "Perbaikan dalam 1 minggu", tableGcPrice: "Paling Mahal",
    tableGcSideEffects: "Diare",
    tableHt4Class: "Agonis 5-HT4", tableHt4Mechanism: "Mengaktifkan reseptor serotonin 5-HT4 untuk meningkatkan motilitas.",
    tableHt4Use: "CIC (prokinetik)", tableHt4Onset: "2-4 jam",
    tableHt4Price: "Paling Mahal", tableHt4SideEffects: "Sakit kepala, nyeri perut, mual",
    refTitle: "Referensi",
    refIntro: "Informasi ini dikumpulkan menggunakan data dari sumber-sumber berikut:",
    disclaimerTitle: "Peringatan Penting",
    disclaimerBody: "Dokumen ini hanya untuk tujuan informasi dan pendidikan. Ini bukan pengganti saran, diagnosis, atau perawatan medis profesional. Selalu cari saran dari dokter Anda atau penyedia layanan kesehatan lain yang kvalifaid dengan pertanyaan apa pun yang mungkin Anda miliki mengenai kondisi medis. Jangan pernah mengabaikan saran medis profesional atau menunda mencarinya karena sesuatu yang telah Anda baca di sini."
  }
};

// ===== References Data =====
const references = [
  {t:'Healthline. (2018). <i>Stimulant Laxatives: Uses and Side Effects</i>.',u:'https://www.healthline.com/health/stimulant-laxatives'},
  {t:'Patel, R., & Singh, D. (2024). <i>Laxatives</i>. StatPearls.',u:'https://www.ncbi.nlm.nih.gov/books/NBK537246/'},
  {t:'Cleveland Clinic. (2024). <i>Laxatives: What They Do, Types & How To Use</i>.',u:'https://my.clevelandclinic.org/health/treatments/25121-laxatives'},
  {t:'Cornell Health. <i>Laxative Use</i>.',u:'https://health.cornell.edu/sites/health/files/pdf-library/LaxativeUse.pdf'},
  {t:'Gordon, M., et al. (2014). <i>Systematic Review of Stimulant and Nonstimulant Laxatives...</i>',u:'https://www.researchgate.net/publication/268234400'},
  {t:'MedicalNewsToday. (2024). <i>Laxatives for constipation</i>.',u:'https://www.medicalnewstoday.com/articles/10279'},
  {t:'Gordon, M., et al. (2019). <i>Osmotic and stimulant laxatives for childhood constipation</i>.',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6513425/'},
  {t:'Medscape. (2020). <i>Constipation Medication</i>.',u:'https://emedicine.medscape.com/article/184704-medication'},
  {t:'Healthline. <i>OTC and Prescription Constipation Medications</i>.',u:'https://www.healthline.com/health/constipation-medication'},
  {t:'Mayo Clinic. (2024). <i>Constipation - Diagnosis and treatment</i>.',u:'https://www.mayoclinic.org/diseases-conditions/constipation/diagnosis-treatment/drc-20354259'},
  {t:'WebMD. (2023). <i>Medicine to Treat Constipation</i>.',u:'https://www.webmd.com/digestive-disorders/prescription-medications-to-treat-constipation'},
  {t:'DrugBank Online. <i>Drugs for Constipation</i>.',u:'https://go.drugbank.com/categories/drugs-for-constipation'},
  {t:'Mayo Clinic. <i>Nonprescription laxatives for constipation</i>.',u:'https://www.mayoclinic.org/diseases-conditions/constipation/in-depth/laxatives/art-20045906'},
  {t:'NHS. <i>Laxatives</i>.',u:'https://www.nhs.uk/medicines/laxatives/'},
  {t:'familydoctor.org. (2024). <i>Laxatives: OTC Products for Constipation</i>.',u:'https://familydoctor.org/laxatives-otc-products-for-constipation'},
  {t:'NHS inform. (2024). <i>Laxatives</i>.',u:'https://www.nhsinform.scot/tests-and-treatments/medicines-and-medical-aids/types-of-medicine/laxatives/'},
  {t:'healthdirect. <i>Laxatives — stool softeners</i>.',u:'https://www.healthdirect.gov.au/laxatives'},
  {t:'Johns Hopkins Medicine. <i>Foods for Constipation</i>.',u:'https://www.hopkinsmedicine.org/health/wellness-and-prevention/foods-for-constipation'},
  {t:'Wikipedia. <i>Elobixibat</i>.',u:'https://en.wikipedia.org/wiki/Elobixibat'},
  {t:'Omae, M., et al. (2021). <i>Elobixibat Effectively Relieves Chronic Constipation...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC8488789/'},
  {t:'Chey, W.D., et al. (2014). <i>Elobixibat and its potential role in CIC</i>.',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC4107709/'},
  {t:'Mayo Clinic. <i>Elobixibat for the treatment of constipation</i>.',u:'https://mayoclinic.elsevierpure.com/en/publications/elobixibat-for-the-treatment-of-constipation'},
  {t:'Patsnap Synapse. (2024). <i>Mechanism of Elobixibat Hydrate</i>.',u:'https://synapse.patsnap.com/article/what-is-the-mechanism-of-elobixibat-hydrate'},
  {t:'Taylor & Francis Online. (2013). <i>Elobixibat for constipation</i>.',u:'https://www.tandfonline.com/doi/abs/10.1517/13543784.2013.753056'},
  {t:'Kumagai, Y., et al. (2017). <i>Pharmacokinetics of Elobixibat...</i>',u:'https://www.researchgate.net/publication/317814760'},
  {t:'Chey, W.D., et al. (2018). <i>Elobixibat for constipation</i>. PubMed.',u:'https://pubmed.ncbi.nlm.nih.gov/30204504/'},
  {t:'Patsnap Synapse. (2024). <i>Side effects of Elobixibat Hydrate</i>.',u:'https://synapse.patsnap.com/article/what-are-the-side-effects-of-elobixibat-hydrate'},
  {t:'1mg. <i>Bixibat Tablet</i>.',u:'https://www.1mg.com/drugs/bixibat-tablet-1042279'},
  {t:'Qu, T., et al. (2013). <i>Novel Pharmacological Therapies for Chronic Constipation</i>.',u:'https://www.researchgate.net/publication/258202741'},
  {t:'Patsnap Synapse. (2024). <i>New drugs for Constipation</i>.',u:'https://synapse.patsnap.com/article/what-are-the-new-drugs-for-constipation'},
  {t:'Layer, P., & Stanghellini, V. (2014). <i>Linaclotide: A new drug...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC4040778/'},
  {t:'RxList. (2021). <i>How Do Guanylate Cyclase-C Agonists Work?</i>',u:'https://www.rxlist.com/how_do_guanylate_cyclase-c_agonists_work/drug-class.htm'},
  {t:'Patsnap Synapse. (2024). <i>GC-C agonists</i>.',u:'https://synapse.patsnap.com/article/what-are-gc-c-agonists-and-how-do-they-work'},
  {t:'Chapman, R.W., & Stanghellini, V. (2018). <i>GC as therapeutic target</i>. Gut.',u:'https://gut.bmj.com/content/67/8/1543'},
  {t:'Singh, S., et al. (2015). <i>Lubiprostone in constipation</i>.',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC4331234/'},
  {t:'Lacy, B.E., & Levy, L.C. (2008). <i>Lubiprostone: a novel treatment</i>.',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC2546479/'},
  {t:'Patsnap Synapse. (2024). <i>Mechanism of Lubiprostone</i>.',u:'https://synapse.patsnap.com/article/what-is-the-mechanism-of-lubiprostone'},
  {t:'Dr.Oracle AI. (2024). <i>Mechanism of Prucalopride...</i>',u:'https://www.droracle.ai/articles/94092/prucalopride-its-mechanism-of-action-and-uses-'},
  {t:'Patsnap Synapse. (2024). <i>Mechanism of Prucalopride Succinate</i>.',u:'https://synapse.patsnap.com/article/what-is-the-mechanism-of-prucalopride-succinate'},
  {t:'Wikipedia. <i>Prucalopride</i>.',u:'https://en.wikipedia.org/wiki/Prucalopride'},
  {t:'Mounsey, A., et al. (2015). <i>Update on prucalopride</i>.',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC5673021/'},
  {t:'West Midlands Palliative Care. <i>Choice of laxatives</i>.',u:'https://www.westmidspallcare.co.uk/wmpcp/guide/constipation/choice-of-laxatives/'},
  {t:'Raja, A. (2024). <i>Bisacodyl</i>. StatPearls.',u:'https://www.ncbi.nlm.nih.gov/books/NBK547733/'},
  {t:'DrugBank. <i>Sennosides</i>.',u:'https://go.drugbank.com/drugs/DB11365'},
  {t:'DrugBank. <i>Polyethylene glycol</i>.',u:'https://go.drugbank.com/drugs/DB09287'},
  {t:'Weir, M.A. (2024). <i>Polyethylene Glycol</i>. StatPearls.',u:'https://www.ncbi.nlm.nih.gov/books/NBK557652/'},
  {t:'Citrucel. <i>Methylcellulose Fiber Caplets</i>.',u:'https://www.citrucel.com/products/caplets/'},
  {t:'DrugBank. <i>Plantago seed</i>.',u:'https://go.drugbank.com/drugs/DB11097'},
  {t:'DrugBank. <i>Docusate</i>.',u:'https://go.drugbank.com/drugs/DB11089'},
  {t:'Dr.Oracle AI. (2025). <i>Onset of action for oral docusate</i>.',u:'https://www.droracle.ai/articles/80240/how-long-it-takes-for-the-docusate-orally-to-act-'},
  {t:'Mayo Clinic. (2025). <i>Docusate sodium (oral route)</i>.',u:'https://www.mayoclinic.org/drugs-supplements/docusate-sodium-oral-route/description/drg-80008470'},
  {t:'Camilleri, M. (2019). <i>Drug Profile Elobixibat...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6386599/'},
  {t:'DrugBank. <i>Elobixibat</i>.',u:'https://go.drugbank.com/drugs/DB12486'},
  {t:'Kakkar, R., et al. (2024). <i>Efficacy and safety of elobixibat...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC12141165/'},
  {t:'Sakai, Y., et al. (2025). <i>Efficacy of elobixibat for elderly patients...</i>',u:'https://f6publishing.blob.core.windows.net/26351d63-bb39-4dcb-9cce-a67bd5549c31/WJGPT-16-105801.pdf'},
  {t:'Bordelon, J.M. (2018). <i>Plecanatide (Trulance) for CIC...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC5871240/'},
  {t:'Andresen, V., et al. (2007). <i>Effect of 5 days linaclotide on transit...</i>',u:'https://pubmed.ncbi.nlm.nih.gov/17854590/'},
  {t:'Verywell Health. (2024). <i>Trulance vs. Linzess</i>.',u:'https://www.verywellhealth.com/trulance-vs-linzess-what-s-the-difference-8380357'},
  {t:'Dr.Oracle AI. (2025). <i>When to prescribe plecanatide and linaclotide...</i>',u:'https://www.droracle.ai/articles/364942/ideal-time-to-prescribe-plecanatide-and-linaclotide'},
  {t:'FDA. (2023). <i>Lubiprostone Label</i>.',u:'https://www.accessdata.fda.gov/spl/data/3099111c-9a9d-9299-e063-6294a90afb1f/3099111c-9a9d-9299-e063-6294a90afb1f.xml'},
  {t:'Mayo Clinic. (2025). <i>Lubiprostone (oral route)</i>.',u:'https://www.mayoclinic.org/drugs-supplements/lubiprostone-oral-route/description/drg-20069057'},
  {t:'Chey, W.D., et al. (2008). <i>Long-Term Safety of Lubiprostone...</i>',u:'https://www.researchgate.net/publication/51502675'},
  {t:'Shrewsbury NHS Trust. (2020). <i>Prucalopride Patient Info</i>.',u:'https://www.sath.nhs.uk/wp-content/uploads/2020/09/Prucalopride.pdf'},
  {t:'Mayo Clinic. (2025). <i>Prucalopride (oral route)</i>.',u:'https://www.mayoclinic.org/drugs-supplements/prucalopride-oral-route/description/drg-20452343'},
  {t:'Tack, J., et al. (2010). <i>Prucalopride: the evidence for its use...</i>',u:'https://pmc.ncbi.nlm.nih.gov/articles/PMC2899805/'},
];

function renderReferences() {
  const container = document.getElementById('ref-list');
  if (!container) return;
  container.innerHTML = references.map(r =>
    `<li><span>${r.t} <a href="${r.u}" target="_blank" rel="noopener">${r.u}</a></span></li>`
  ).join('');
}

// ===== Tab Switching =====
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  function switchTab(id) {
    panels.forEach(p => p.classList.remove('active'));
    tabBtns.forEach(b => b.classList.remove('active'));
    const panel = document.getElementById(id);
    const btn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
    if (panel && btn) {
      panel.classList.add('active');
      btn.classList.add('active');
      // Re-trigger card animations in newly shown panel
      panel.querySelectorAll('.drug-card').forEach((c, i) => {
        c.classList.remove('visible');
        setTimeout(() => c.classList.add('visible'), 80 * i);
      });
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // ===== Language Switching =====
  const langBtns = document.querySelectorAll('.lang-btn');
  const langEls = document.querySelectorAll('[data-lang]');

  function setLanguage(lang) {
    langEls.forEach(el => {
      const key = el.dataset.lang;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    document.title = translations[lang].pageTitle;
    document.documentElement.lang = lang;
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.langval === lang));
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.langval));
  });

  // ===== Scroll Reveal & Card Animations =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .drug-card').forEach(el => observer.observe(el));

  // Initial card stagger for active panel
  const activePanel = document.querySelector('.panel.active');
  if (activePanel) {
    activePanel.querySelectorAll('.drug-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), 150 + 100 * i);
    });
  }

  // Init
  renderReferences();
  setLanguage('en');
});
