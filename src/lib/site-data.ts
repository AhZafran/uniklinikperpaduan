export const CLINIC = {
  name: "Uniklinik Perpaduan",
  shortName: "Uniklinik Perpaduan",
  tagline: "Klinik Keluarga Anda di Bercham, Ipoh",
  phone: "012-350 8892",
  phoneIntl: "60123508892",
  email: "uniklinikperpaduan@gmail.com",
  address:
    "96, Aras Bawah, Persiaran Perpaduan Utara 1, Taman Bercham Raya, 31150 Ulu Kinta, Perak",
  area: "Taman Bercham Raya, Ipoh, Perak",
  hours: "Isnin – Ahad · 7:00 Pagi – 12:00 Tengah Malam",
  hoursShort: "Buka Setiap Hari · 7:00 Pagi – 12:00 Tengah Malam",
  whatsapp: "https://wa.link/84cr6z",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7514368343354!2d101.1472474!3d4.6383731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caed4fa68f3215%3A0x8dd310805708f210!2sUniklinik%20Perpaduan!5e0!3m2!1sen!2smy!4v1782496724027!5m2!1sen!2smy",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Perkhidmatan" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#gallery", label: "Galeri" },
] as const;

export const STATS = [
  { value: "4.9★", label: "Penilaian Google" },
  { value: "85+", label: "Ulasan Pesakit" },
  { value: "17 Jam", label: "Buka Setiap Hari" },
] as const;

// 3 featured cards directly under the hero
export const HIGHLIGHTS = [
  { icon: "healthicons:accident-and-emergency", title: "Rawatan Am & Kecemasan", desc: "Konsultasi harian dan rawatan kecemasan ringan setiap hari." },
  { icon: "healthicons:diabetes", title: "Pengurusan Penyakit Kronik", desc: "Susulan kencing manis, darah tinggi dan kolesterol." },
  { icon: "healthicons:baby-0203m", title: "Kesihatan Wanita & Kanak-kanak", desc: "Penjagaan ibu, bayi dan keluarga di bawah satu bumbung." },
] as const;

// 4-metric counter band
export const COUNTERS = [
  { value: "4.9", suffix: "★", label: "Penilaian Google" },
  { value: "85", suffix: "+", label: "Ulasan Pesakit" },
  { value: "14", suffix: "+", label: "Panel Disediakan" },
  { value: "17", suffix: " Jam", label: "Buka Setiap Hari" },
] as const;

// Operating-hours table (clinic opens daily 7:00 AM – 12:00 AM)
export const HOURS = [
  { day: "Isnin", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Selasa", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Rabu", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Khamis", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Jumaat", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Sabtu", time: "7:00 Pagi – 12:00 Tengah Malam" },
  { day: "Ahad", time: "7:00 Pagi – 12:00 Tengah Malam" },
] as const;

// Bullet list for the 2-column "Why Us" section
export const WHY_LIST = [
  "Doktor berpengalaman dan mesra",
  "Lokasi strategik di Taman Bercham Raya",
  "Waktu operasi panjang — 7 pagi hingga 12 malam",
  "Harga rawatan yang berpatutan",
  "Kakitangan yang profesional dan membantu",
  "Peralatan dan kemudahan yang moden",
] as const;


// Full service list transcribed from the clinic's "SERVIS KAMI" board
export const SERVICES = [
  { icon: "healthicons:general-surgery", title: "Pembedahan Kecil", desc: "Lipoma, skin tag, kutil, bisul, sebaceous cyst, tahi lalat, ketuat, cengkam kuku, xanthelasma." },
  { icon: "healthicons:bandage-adhesive", title: "Penjagaan & Cuci Luka", desc: "Luka kencing manis, luka kemalangan, luka pembedahan, luka terbakar & melecur." },
  { icon: "healthicons:surgical-sterilization", title: "Khatan Lelaki", desc: "Khatan untuk kanak-kanak dan dewasa." },
  { icon: "healthicons:baby-0203m", title: "Sunat Bayi Perempuan", desc: "Prosedur sunat bayi perempuan." },
  { icon: "healthicons:syringe-vaccine", title: "Vaksinasi & Suntikan", desc: "Typhoid, influenza, umrah, haji dan vaksin kanak-kanak." },
  { icon: "healthicons:ear", title: "Cuci Telinga & Buang Benda Asing", desc: "Cuci telinga dan pembuangan benda asing (foreign body removal)." },
  { icon: "healthicons:stethoscope", title: "Rawatan Penyakit Am", desc: "Demam, batuk, selesema dan lain-lain." },
  { icon: "healthicons:health-worker-form", title: "Pemeriksaan Kesihatan", desc: "Ujian darah, bacaan darah tinggi dan gula." },
  { icon: "healthicons:baby-0306m", title: "Sedut Kahak Bayi & Kanak-kanak", desc: "Suction kahak untuk bayi dan kanak-kanak." },
  { icon: "healthicons:pregnant", title: "Kesihatan Wanita", desc: "Buku pink, scan kehamilan & rahim, MGTT, perancang kehamilan, pap smear & GBS screening." },
  { icon: "healthicons:ultrasound-scanner", title: "Ultrasound", desc: "Buah pinggang, hati & hempedu, thyroid, prostat dan payudara." },
  { icon: "healthicons:blood-pressure-monitor", title: "Rawatan Penyakit Kronik", desc: "Kencing manis, darah tinggi, kolesterol dan gout." },
  { icon: "healthicons:syringe", title: "Ubat-ubatan Suntikan", desc: "Rawatan ubat-ubatan secara suntikan." },
  { icon: "healthicons:urine-sample", title: "Ujian Kencing (UFEME)", desc: "Ujian air kencing penuh (UFEME)." },
  { icon: "healthicons:tongue", title: "Tongue Tie Release", desc: "Prosedur pelepasan tongue tie." },
  { icon: "healthicons:asthma-inhaler", title: "Nebuliser", desc: "Rawatan nebuliser untuk masalah pernafasan." },
] as const;

export const WHY_US = [
  { icon: "Clock", title: "Buka 7 Pagi – 12 Malam", desc: "Waktu operasi panjang setiap hari untuk keselesaan anda." },
  { icon: "MapPin", title: "Lokasi Strategik", desc: "Mudah dikunjungi di Taman Bercham Raya, Ipoh." },
  { icon: "Star", title: "Penilaian 4.9 Google", desc: "Dipercayai berdasarkan 85+ ulasan pesakit." },
  { icon: "Smile", title: "Kakitangan Mesra", desc: "Layanan yang sentiasa mesra dan membantu." },
] as const;

// Panel-provider logos (files in /public/panel)
export const PANELS = [
  { name: "G-Flex", src: "/panel/G-Flex-Logo-2.webp" },
  { name: "WeCare", src: "/panel/We-care-Logo.png" },
  { name: "IHP Healthcare", src: "/panel/ihp-logo.webp" },
  { name: "MIYA", src: "/panel/images.png" },
  { name: "KPSB Care", src: "/panel/kpsb.webp" },
  { name: "MedKad", src: "/panel/medkad.png" },
  { name: "eMAS", src: "/panel/panel-10.webp" },
  { name: "Mednefits", src: "/panel/panel-14.png" },
  { name: "ASP", src: "/panel/panel-2.png" },
  { name: "Health Connect", src: "/panel/panel-3.webp" },
  { name: "PeKa B40", src: "/panel/panel-8.jpg" },
  { name: "PERKESO", src: "/panel/panel-9.jpg" },
  { name: "PMCare", src: "/panel/panel-9.webp" },
  { name: "RedAlert", src: "/panel/redalert.png" },
] as const;

export const TESTIMONIALS = [
  { text: "Syukur selesai menjalani pembuangan skin tag.. doktor yang sangat pakar dalam menjalani operasi pembuangan skin tag.. Staff pun friendly dan sangat membantu.. Sangat recommended", name: "Bob Perak" },
  { text: "Suka sangat dgn uniklinik ni. Staf sgt bagus & sopan santun. Doktor Suha tu pon bagus, detail terangkan pasal sakit kita & sangatlah soft. Harga berpatutan & klinik super selesa. Memang tak cari klinik lain dh kalau tak sihat after this ❤️.", name: "Zarini Zaki" },
  { text: "Bestt, datang awal pagi pun di treat dengan baik. Doctor baik, front desk pun friendly. Affordable dan lagi better, dekat dengan rumah hehe", name: "Aunie" },
  { text: "1st time dtg uniklinik utk servis suction, sgt berpuas hati. Doc buat sehabis baik n xplain detail psl condition anak", name: "Nor Soleha" },
  { text: "Servis mmg terbaek, anak rawatan kat klinik ni setiap minggu... iv mmg menjadi, skali cucuk dh settle rawatan... mmg friedly staff....", name: "Man Abon" },
  { text: "Service terbaik.. staff n doc friendly.. harga berpatutan.. sy buat xanthelasma removal. Procedure yang sgt smooth.. terbaik doc. Very recommended", name: "RubyKingdom" },
  { text: "Terbaik la doc dkt sni. Cepat selesai telinga yg tersumbat.", name: "Nur Fai'za" },
  { text: "Klinik yang sangat okay dan selesa. Staff semua peramah. Doktor pun peramah dan sangat baik. Penjelasan untuk growth scan tadi sangat jelas. Terima kasih doktor dan staff uniklinik ❤️", name: "Ayu Eleena" },
  { text: "Saya buat rawatan telinga kat sini untuk pertama kali dan saya berpuas hati. Doctor terangkan dengan jelas. Saya recommend klinik ini.", name: "Yani Ali" },
  { text: "Saya first time dtg ke klinik UNI Perpaduan, Ipoh untuk buang lipoma di belakang. The experience memang tip top. Dari registration, sehingga tamat prosedure amat smooth. Dr Shuha byk membantu dan memberi penerangan yg jelas. Best nya, boleh terus walk-in dan tak perlu appointment. Lega masalah selesai. 👍👍👍", name: "Ahfuza" },
  { text: "Service bgus.. staff ok baik, ramah.. snyum ja. Buat scan baby.. jelas btul.. dktr bgus explain jelas.. harga ok.. klinik cntik.. tiptop.. trbaik", name: "Asyakirin Meorzumir" },
  { text: "My father is bedridden. We whatsapp / called for inquiry to this clinic and they are quick to response in details. This clinic has facility for phlegm removal & fortunate for us that they could make home visit, instead of us bringing him there. Doctor was very professional & given thorough explanations. After treatment, my father feels better relief. Kudos to Dr. Zuha. Anda telah memberi perhatian dan perkhidmatan terbaik!!!", name: "Cheng Kim Woh" },
] as const;

// Clinic gallery photos (files in /public/galeri)
export const GALLERY = [
  "/galeri/APS08215.jpg",
  "/galeri/APS08228.jpg",
  "/galeri/APS08313.jpg",
  "/galeri/APS08321.jpg",
  "/galeri/APS08370.jpg",
  "/galeri/APS08386.jpg",
  "/galeri/APS08388.jpg",
  "/galeri/APS08404.jpg",
  "/galeri/APS08413.jpg",
] as const;
