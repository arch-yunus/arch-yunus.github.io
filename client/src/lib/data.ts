import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Globe, Database, Shield, Brain, Layers, Book, Zap, Activity } from "lucide-react";

export const profileData = {
  personal: {
    name: "Bahattin Yunus Çetin",
    username: "bahattinyunus",
    location: "Türkiye",
    company: "StarDev",
    bio: `Ben Bahattin Yunus ÇETİN; Karadeniz Teknik Üniversitesi'nde Yazılım Mühendisliği öğrencisi, Anka Silicon Dynamics'in kurucusu ve dijital sınırların korunmasına adanmış bir Siber Vatanseverim. Kariyer yolculuğum, disiplinli bir operasyonel geçmişten teknik uzmanlığa uzanan asimetrik bir gelişim çizgisidir.
    
Bugün, yapay zeka sistemlerinin sadece kullanıcısı değil, mimarı olma vizyonuyla; LLM optimizasyonu, siber güvenlik ve karmaşık sistem mimarileri üzerine odaklanıyorum.

🚀 Neler Yapıyorum?

Anka Silicon Dynamics: Türkiye'nin yapay zeka alanındaki dijital egemenliğini tesis etmek amacıyla, "donanım bağımsız" bir zeka ekosistemi inşa ediyorum. Yerli donanımlar banttan çıkana kadar, düşük parametreli modelleri (7B/8B) devasa modellerin yetenekleriyle donatan Knowledge Distillation süreçlerini yönetiyorum.

Stokastik Optimizasyon: NP-Hard problemlerine biyo-mimetik çözümler sunan, O(G·S·n²) karmaşıklıkta çalışan ve "Trabzon Protokolü" katmanını içeren BeeRoute projesiyle endüstriyel rotalama süreçlerini modernize ediyorum.

Siber Güvenlik: T.C. Savunma Sanayii Başkanlığı ve Sanayi ve Teknoloji Bakanlığı himayesindeki Siber Vatan programı kapsamında, CTF dereceleriyle tescillenmiş teknik yetkinliğimle ulusal siber güvenlik vizyonuna katkı sağlıyorum.

Derin Mühendislik: Mikroşerit anten tasarımından (DeepAntenna), denizcilikte AI destekli kestirimci bakıma (PoseidonEye) kadar geniş bir yelpazede, yapay sinir ağlarını (ANN) fizik ve mühendislik disiplinleriyle buluşturuyorum.

🛠 Teknik Cephaneliğim
AI & ML: PyTorch, HuggingFace, Unsloth, vLLM, QLoRA, Knowledge Distillation.
Siber Güvenlik: Ethical Hacking, CTF, Tehdit Analizi, Sistem Dayanıklılığı.
Yazılım & Mimari: Python (NumPy, SciPy), IoT (MQTT), Blockchain (Smart Contracts), Teknik Doktrin Oluşturma.

🌐 Vizyonum
Milli Teknoloji Hamlesi'nin bir neferi olarak, sadece kod yazmayı değil; stratejik düşünen, etik değerlere bağlı ve küresel standartlarda teknoloji üreten bir mühendislik kültürü oluşturmayı hedefliyorum. Uzay araştırmalarından denizaltı savunma sistemlerine kadar, teknolojinin dokunduğu her alanda "tam bağımsızlık" ilkesini savunuyorum.`,
    tagline: "Founder & Chief Architect @ Anka Silicon Dynamics & Budak | IT Architect, LLM & AI Systems",
    avatar_url: "/images/ai-avatar.jpg",
    github_url: "https://github.com/bahattinyunus",
    linkedin_url: "https://www.linkedin.com/in/bahattinyunus",
    stardev_url: "https://www.stardev.io/developers/bahattinyunus",
    medium_url: "https://medium.com/@bahattinyunus"
  },
  github_stats: {
    public_repos: 231,
    followers: 2063,
    following: 18,
    total_stars: 1500,
    total_forks: 450
  },
  skills: {
    languages: ["Python", "C++", "JavaScript", "Go", "Rust"],
    frameworks: ["TensorFlow", "PyTorch", "React", "Node.js", "Django"],
    tools: ["Docker", "Kubernetes", "Git", "Linux", "AWS"],
    concepts: [
      "Yapay Zeka & Makine Öğrenmesi",
      "Siber Güvenlik",
      "Sistem Mimarisi",
      "Otonom Sistemler",
      "IoT & Gömülü Sistemler"
    ]
  },
  blog_posts: [
    {
      title: "2026’ya Doğru Yazılım ve Siber Güvenlikte Paradigma Değişimi",
      summary: "Teknolojik Dönüşüm ve İş Gücünün Geleceği: Hayatta Kalma Reçetesi",
      url: "https://medium.com/@bahattinyunus/2026ya-do%C4%9Fru-yaz%C4%B1l%C4%B1m-ve-siber-g%C3%BCvenlikte-paradigma-de%C4%9Fi%C5%9Fimi-hayatta-kalma-re%C3%A7etesi-19f6f09f75c7",
      image: "/images/blog/paradigma.jpg",
      date: "2 Ocak 2026"
    },
    {
      title: "TEKNOFEST Bir Yarışma Değil, Bir Okuldur",
      summary: "Mühendislik Vizyonunuzu Yeniden Tanımlayın: Küresel Teknoloji Liderliğine Giden Yol",
      url: "https://medium.com/@bahattinyunus/teknofest-bir-yar%C4%B1%C5%9Fma-de%C4%9Fil-bir-okuldur-m%C3%BChendislik-vizyonunuzu-yeniden-tan%C4%B1mlay%C4%B1n-908bce0bd7ab",
      image: "/images/blog/teknofest.jpg",
      date: "29 Aralık 2025"
    },
    {
      title: "Yapay Genel Zekâ (AGI) Yolunda Büyük Çatlak",
      summary: "İlya, LeCun ve Altman Nereye Koşuyor? Yapay Zekâda Yol Ayrımı: Devrim mi, İllüzyon mu?",
      url: "https://medium.com/@bahattinyunus/yapay-genel-zek%C3%A2-agi-yolunda-b%C3%BCy%C3%BCk-%C3%A7atlak-i%CC%87lya-lecun-ve-altman-nereye-ko%C5%9Fuyor-c0535a22703e",
      image: "/images/blog/agi.jpg",
      date: "27 Aralık 2025"
    },
    {
      title: "Dijital Sınır Boyları: Yapay Zekada Türkçenin Geleceği",
      summary: "Veri Egemenliği ve Yapay Zeka ile girdiğimiz diyaloglarda dil seçiminin stratejik önemi.",
      url: "https://medium.com/@bahattinyunus/dijital-s%C4%B1n%C4%B1r-boylar%C4%B1-yapay-zekada-t%C3%BCrk%C3%A7enin-gelece%C4%9Fi-ve-veri-egemenli%C4%9Fi-7c6649103f38",
      image: "/images/blog/sinir.jpg",
      date: "25 Aralık 2025"
    },
    {
      title: "Gökyüzündeki Sessiz Tehdit: İHA Hareketliliği",
      summary: "Türkiye Hava Sahasında İHA Hareketliliği ve Genişleyen Savaşın Yeni Cephesi",
      url: "https://medium.com/@bahattinyunus/g%C3%B6ky%C3%BCz%C3%BCndeki-sessiz-tehdit-t%C3%BCrkiye-hava-sahas%C4%B1nda-i%CC%87ha-hareketlili%C4%9Fi-ve-geni%C5%9Fleyen-sava%C5%9F%C4%B1n-yeni-952385656565",
      image: "/images/blog/iha.jpg",
      date: "25 Aralık 2025"
    },
    {
      title: "2026’da Finansal Özgürlüğün Anahtarı",
      summary: "Ustalaşmanız Gereken 7 Yapay Zeka Becerisi ve Yeni Bir Çağın Eşiğinde 'Süper Birey' Dönemi",
      url: "https://medium.com/@bahattinyunus/2026da-finansal-%C3%B6zg%C3%BCrl%C3%BC%C4%9F%C3%BCn-anahtar%C4%B1-ustala%C5%9Fman%C4%B1z-gereken-7-yapay-zeka-becerisi-852365456565",
      image: "/images/blog/finans.jpg",
      date: "23 Aralık 2025"
    }
  ],
  timeline: [
    {
      year: "2026 - Halen",
      title: "Founder, CEO & Chief Architect",
      company: "Anka Silicon Dynamics",
      description: "Türkiye’nin yapay zeka alanındaki dijital egemenliğini tesis etmek ve 'donanım bağımsız' bir zeka ekosistemi inşa etmek. ANKA-LLM Mimarisi, Knowledge Distillation ve Stratejik Optimizasyon üzerine Ar-Ge. Motto: 'Donanımı beklemiyoruz, donanım geldiğinde üzerinde koşacak zekayı hazırlıyoruz.'",
      icon: "Cpu"
    },
    {
      year: "2026 - Halen",
      title: "Founder",
      company: "Budak | Edge-AI Optimization",
      description: "Yapay zeka modellerini uç cihazlara (Edge) entegre etmek için optimizasyon. Model Pruning, Quantization ve Edge-AI Deployment ile bulut bağımlılığını ortadan kaldıran sürdürülebilir, düşük gecikmeli AI çözümleri.",
      icon: "Zap"
    },
    {
      year: "2025 - Halen",
      title: "Student (Siber Vatan)",
      company: "Siber Vatan Programı",
      description: "Siber güvenlik ve yapay zeka alanında ileri düzey yetenek geliştirme programı. Mentörlük ve CTF yarışmalarıyla desteklenen, global endüstri standartlarında teknik yetkinlik kazanımı.",
      icon: "Shield"
    },
    {
      year: "2023 - 2027",
      title: "Yazılım Mühendisliği (Lisans)",
      company: "Karadeniz Teknik Üniversitesi",
      description: "KTÜ POST-AI STRATEJİK KOMUTA MERKEZİ. Mevcut müfredatı 'Base Layer' kabul edip, yapay zekayı 100x güç çarpanı olarak konumlandırarak kendi 'Modern Yazılım Mühendisliği' müfredatımı inşa ediyorum. Odak: AI Integration, Systems Design ve Prompt Engineering.",
      icon: "Terminal"
    },
    {
      year: "2025 - 2029",
      title: "Yönetim Bilişim Sistemleri (Lisans)",
      company: "İstanbul Üniversitesi",
      description: "Statik bir diploma yerine, işletme vizyonu ile mühendislik disiplinini birleştiren hibrit bir yetkinlik seti. Veri analitiği ve iş süreçlerinin dijitalleşmesi üzerine odaklı stratejik gelişim.",
      icon: "Layers"
    },
    {
      year: "2025 - 2027",
      title: "Bilgisayar Programcılığı (Önlisans)",
      company: "Anadolu Üniversitesi",
      description: "Operasyonel çeviklik ve teknik uygulama derinliği kazanmak için 'çok boyutlu risk yönetimi' prensibiyle yapılandırılmış akademik süreç.",
      icon: "Code2"
    },
    {
      year: "2024 - 2026",
      title: "Önlisans Eğitimi",
      company: "Recep Tayyip Erdoğan Üniversitesi",
      description: "KTÜ ekosistemine coğrafi yakınlığı optimize ederek laboratuvar ve teknik network imkanlarından yararlanılan stratejik akademik hamle.",
      icon: "Book"
    },

    {
      year: "2022 - 2024",
      title: "Önlisans Eğitimi",
      company: "Akdeniz Üniversitesi",
      description: "Kamu görevindeki sorumluluklarla eş zamanlı yürütülen, üniversite imkanlarının bir 'hub' olarak kullanıldığı self-learning dönemi.",
      icon: "Book"
    },
    {
      year: "2021 - 2023",
      title: "Maden Mühendisliği (Lisans)",
      company: "Muğla Sıtkı Koçman Üniversitesi",
      description: "'Cevherimiz Sensin' projesiyle bölüm birincisi olarak yerleşildiği, ardından profesyonel hayata (memuriyet) geçiş yapılan dönem.",
      icon: "Activity"
    },
    {
      year: "2019 - 2021",
      title: "Stratejik Üniversite Hazırlık",
      company: "Bireysel Gelişim",
      description: "Sıralamanın 198k -> 104k -> 68k şeklinde sistematik olarak yükseltildiği, 'continuous improvement' (sürekli iyileştirme) disiplininin kazanıldığı dönem.",
      icon: "Zap"
    },
    {
      year: "2015 - 2019",
      title: "Lise Eğitimi & Açık Lise",
      company: "Şereflikoçhisar Anadolu & AÖL",
      description: "Zaman yönetimini optimize etmek için son sınıfta Açık Lise'ye geçiş. Kısıtlı imkanlarla temel bilimlerde (Matematik, Biyoloji) derinlemesine bireysel araştırma.",
      icon: "Book"
    }
  ],
  ai_tools: [
    { name: "ChatGPT 4o", level: 95, category: "Model" },
    { name: "Claude 3.5 Sonnet", level: 90, category: "Model" },
    { name: "GitHub Copilot", level: 98, category: "Coding" },
    { name: "Midjourney v6", level: 85, category: "Creative" },
    { name: "TensorFlow", level: 80, category: "Framework" },
    { name: "PyTorch", level: 75, category: "Framework" },
    { name: "LangChain", level: 85, category: "Framework" },
    { name: "Hugging Face", level: 88, category: "Platform" }
  ],

  categories: {
    "Yapay Zeka & LLM": [
      {
        name: 'Yapay Zekâ ile İçerik Üretimi Eğitimi - Malatya',
        issuer: 'BTK Akademi',
        date: 'Temmuz 2026',
        credential_id: 'DV70UrNE'
      },
      {
        name: 'Web Konferans Araçlarına Ait Temel Kavramlar ve Başlıca Avantajlar',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'f0c789ea-1750-40e1-acd2-aced9ca5226e'
      },
      {
        name: 'Herkes için Yapay Zeka I',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '9b675ab7-bab4-44c2-aba3-d86678a0d68d'
      },
      {
        name: 'Fikri ve Sınai Mülkiyet Hakları',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'PVghbqvyVe'
      },
      {
        name: 'Sosyal Medyada Yapay Zeka ile Dijital Pazarlama',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'AKkkf7kNJla'
      },
      {
        name: 'Sosyal Medya İçerik Üretimi (Hedef Kitle Analizi ve Stratejik İletişim)',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'kJMMHbnypXg'
      },
      {
        name: 'Sosyal Medyada Tasarım Temelli İçerik Üretimi',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'm688uk1ErWp'
      },
      {
        name: 'Sosyal Medyada İçerik Üretim Süreci, Hikâye Anlatıcılığı ve Görsel Dil',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'xoBBUN4bLgn'
      },
      {
        name: 'Hailuo Ai',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: '4qguek4NB9'
      },
      {
        name: 'Anthropic Claude',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'bx1hLxXZOo'
      },
      {
        name: 'ChatGPT',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'OKMhwBXgqW'
      },
      {
        name: 'Manus AI',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'ZA1UrdE2Bj'
      },
      {
        name: 'DeepSeek',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'lK1hwey4xw'
      },
      {
        name: 'Custom GPTs',
        issuer: 'BTK Akademi',
        date: 'Mar 2025',
        credential_id: 'ax1hDzvgrE'
      },
      {
        name: 'Yapay Zeka Zirvesi 2024',
        issuer: 'Türkiye Girişimcilik Vakfı',
        date: 'Ara 2024',
        credential_id: 'G9LlUnWlq4X'
      },
"Nexus-TRL-LLM", "ANKA-LLM", "NeuroPaint", "LibraMind", "Open-Textile-Intelligence", "TRL-Bio-Compute", "Math2Code-A-Practical-Guide-for-Developers"],
    "Siber Güvenlik": [
      {
        name: 'HACKATHON 2026',
        issuer: 'Türkiye Girişimcilik Vakfı',
        date: 'Mayıs 2026',
        credential_id: 'yLpkCzE8OjE'
      },
      {
        name: 'Mobil Güvenlik ve Sızma Teknikleri',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'lK1hwX9ELb'
      },
      {
        name: 'Güvenlik Duvarına Giriş',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'OKMhw8EwMb'
      },
      {
        name: 'Siber Vatan',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'DoS / DDoS Attacks and Protection',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'XV1hBdNpMv'
      },
"SIGINT", "cyber_security_btk_t3A", "Digital-Archaeology-Steganography-Vault", "TRL-Quantum-Edge", "TRL-Hardware-Pulse"],
    "Otonom Sistemler": ["Mars-Rover-Control-OS", "erc_rover_mission_control", "robotex_warrior_core", "teknofest_robotaksi", "teknofest_suru_iha", "teknofest_insansiz_kara_araci", "formula_student_autonomous_stack"],
    "Deniz & Su Teknolojileri": ["LionSight-AUV", "AQUASYNC-Multi-Domain-Autonomous-Maritime-System", "PoseidonEye", "teknofest_insansiz_deniz_araci", "denizalti-akademisi"],
    "Hava & Uzay Teknolojileri": ["teknofest_helikopter_tasarim", "teknofest_suru_iha", "Radiosonde-Hunting", "ktu-sarge-gokcen", "NOAA"],
    "Robotik & Kompetisyon": ["teknofest_robolig", "robotex_warrior_core", "TEKNOFEST_Competitions", "BeeRoute"],
    "Yazılım Mimarisi & Geliştirme": ["The-Craft-of-Tech-Architecture", "CodeVisualizer", "NovaChat-Real-Time-Messaging-App", "NexusBroker", "btk_go"],
    "Sistem & Altyapı": ["Computer-Efficiency-Mastery", "Energy-Grid-Pulse", "PhysicEngine", "E-VIZOR"],
    "Veri & Analiz": ["Milli-Teknoloji-Envanteri", "AkademikRadar", "Kiyamet-Hatti"],
    "Endüstri 4.0 & Tarım": ["teknofest_sanayide_dijital_teknolojiler", "teknofest_tarim_teknolojileri", "teknofest_finansal_teknolojiler", "CivTech-Core"],
    "Donanım & Elektronik": ["ANATOLIA-SILICON", "TRL-Hardware-Pulse", "meta_engineering"],
    "Eğitim & Kaynaklar": ["Math2Code-A-Practical-Guide-for-Developers", "The-Craft-of-Tech-Architecture"],
  },
  featured_projects: [
    {
      name: "BeeRoute",
      description: "Yapay zeka ve sürü algoritmaları ile optimize edilmiş dinamik rota planlama ve lojistik optimizasyon sistemi.",
      stars: 12,
      forks: 24,
      language: "Python",
      url: "https://github.com/bahattinyunus/BeeRouteANN-for-Antenna-Design",
      image: "/images/project-beeroute.png",
      architecture: [
        "Sürü Zekası (Ant Colony Optimization)",
        "Stokastik Karar Mekanizmaları",
        "Trabzon Protokolü Veri Katmanı",
        "O(G·S·n²) Karmaşıklık Optimizasyonu"
      ],
      security: [
        "Gerçek Zamanlı Anomali Tespiti",
        "Şifreli Telemetri Kanalları",
        "Merkeziyetçi Olmayan Veri Bütünlüğü"
      ]
    },
    {
      name: "PoseidonEye",
      description: "Denizcilikte yapay zeka destekli kestirimci bakım ve anomali tespiti sağlayan derin öğrenme sistemi.",
      stars: 88,
      forks: 19,
      language: "Python",
      url: "https://github.com/bahattinyunus/PoseidonEye",
      image: "/images/project-poseidoneye.jpg"
    },
    {
      name: "DeepAntenna",
      description: "Derin öğrenme tabanlı anten tasarımı ve optimizasyonu sağlayan yapay zeka destekli mühendislik aracı.",
      stars: 25,
      forks: 8,
      language: "Python",
      url: "https://github.com/bahattinyunus/DeepAntenna",
      image: "/images/project-deepantenna.png"
    },
    {
      name: "erc_rover_mission_control",
      description: "Mars keşif araçları için geliştirilmiş, gerçek zamanlı telemetri ve kontrol sağlayan görev kontrol arayüzü.",
      stars: 45,
      forks: 12,
      language: "Python",
      url: "https://github.com/bahattinyunus/erc_rover_mission_control",
      image: "/images/project-erc-rover-mission-control.jpg"
    },
    {
      name: "teknofest_sanayide_dijital_teknolojiler",
      description: "Endüstri 4.0 kapsamında akıllı fabrika sistemleri ve dijital ikiz uygulamaları.",
      stars: 38,
      forks: 8,
      language: "C++",
      url: "https://github.com/bahattinyunus/teknofest_sanayide_dijital_teknolojiler",
      image: "/images/project-teknofest-sanayide-dijital-teknolojiler.jpg"
    },
    {
      name: "Mars-Rover-Control-OS",
      description: "Gezegen keşif robotları için özel olarak tasarlanmış, otonom navigasyon ve bilimsel analiz yeteneklerine sahip işletim sistemi.",
      stars: 52,
      forks: 15,
      language: "C++",
      url: "https://github.com/bahattinyunus/Mars-Rover-Control-OS",
      image: "/images/project-mars-rover-control-os.jpg"
    },
    {
      name: "ANKA-LLM",
      description: "Türkçe dil işleme yeteneklerine odaklanmış, yerli ve milli büyük dil modeli projesi.",
      stars: 120,
      forks: 35,
      language: "Python",
      url: "https://github.com/bahattinyunus/ANKA-LLM",
      image: "/images/project-anka-llm.jpg",
      architecture: [
        "Knowledge Distillation (Öğretmen-Öğrenci Modeli)",
        "Düşük Parametreli (7B/8B) Verimli Mimari",
        "Donanım Bağımsız Çıkarım Çekirdeği",
        "Türkçe Semantik Vektör Uzayı"
      ],
      security: [
        "Prompt Injection Koruması",
        "Hassas Veri Maskeleme",
        "Model Poisoning Tespiti"
      ]
    },
    {
      name: "Radiosonde-Hunting",
      description: "Meteorolojik balonların takibi ve veri analizi için geliştirilmiş radyo sinyal işleme sistemi.",
      stars: 25,
      forks: 5,
      language: "Python",
      url: "https://github.com/bahattinyunus/Radiosonde-Hunting",
      image: "/images/project-radiosonde-hunting.jpg"
    },
    {
      name: "teknofest_tarim_teknolojileri",
      description: "Akıllı tarım uygulamaları için drone destekli görüntü işleme ve verimlilik analizi.",
      stars: 30,
      forks: 7,
      language: "Python",
      url: "https://github.com/bahattinyunus/teknofest_tarim_teknolojileri",
      image: "/images/project-teknofest-tarim-teknolojileri.jpg"
    },
    {
      name: "AkademikRadar",
      description: "Akademik yayınları ve atıfları analiz ederek araştırmacılara içgörü sunan veri madenciliği aracı.",
      stars: 42,
      forks: 10,
      language: "Python",
      url: "https://github.com/bahattinyunus/AkademikRadar",
      image: "/images/project-akademikradar.jpg"
    },
    {
      name: "ANATOLIA-SILICON",
      description: "Yerli mikroişlemci tasarımı ve FPGA tabanlı donanım hızlandırma projeleri.",
      stars: 65,
      forks: 18,
      language: "Verilog",
      url: "https://github.com/bahattinyunus/ANATOLIA-SILICON",
      image: "/images/project-anatolia-silicon.jpg"
    },
    {
      name: "AquaNexus-Advanced-ROV-Mission-Control-System",
      description: "Sualtı robotları (ROV) için gelişmiş görev kontrol ve görüntü aktarım sistemi.",
      stars: 55,
      forks: 14,
      language: "C++",
      url: "https://github.com/bahattinyunus/AquaNexus-Advanced-ROV-Mission-Control-System",
      image: "/images/project-aquanexus-advanced-rov-mission-control-system.jpg"
    },
    {
      name: "CivTech-Core",
      description: "Akıllı şehirler ve dijital belediyecilik için geliştirilmiş merkezi yönetim platformu.",
      stars: 28,
      forks: 6,
      language: "Go",
      url: "https://github.com/bahattinyunus/CivTech-Core",
      image: "/images/project-civtech-core.jpg"
    },
    {
      name: "CodeVisualizer",
      description: "Karmaşık algoritmaları ve veri yapılarını görselleştirerek eğitim süreçlerini destekleyen araç.",
      stars: 85,
      forks: 22,
      language: "JavaScript",
      url: "https://github.com/bahattinyunus/CodeVisualizer",
      image: "/images/project-codevisualizer.jpg"
    },
    {
      name: "E-VIZOR",
      description: "Artırılmış gerçeklik (AR) tabanlı taktiksel veri görüntüleme ve durumsal farkındalık sistemi.",
      stars: 48,
      forks: 11,
      language: "C#",
      url: "https://github.com/bahattinyunus/E-VIZOR",
      image: "/images/project-e-vizor.jpg"
    },
    {
      name: "Energy-Grid-Pulse",
      description: "Yenilenebilir enerji kaynaklarının entegrasyonu ve akıllı şebeke yönetimi için analiz platformu.",
      stars: 33,
      forks: 9,
      language: "Python",
      url: "https://github.com/bahattinyunus/Energy-Grid-Pulse",
      image: "/images/project-energy-grid-pulse.jpg"
    },
    {
      name: "teknofest_finansal_teknolojiler",
      description: "Blokzincir tabanlı güvenli ödeme sistemleri ve finansal analiz algoritmaları.",
      stars: 40,
      forks: 10,
      language: "Solidity",
      url: "https://github.com/bahattinyunus/teknofest_finansal_teknolojiler",
      image: "/images/project-teknofest-finansal-teknolojiler.jpg"
    },
    {
      name: "formula_student_autonomous_stack",
      description: "Otonom yarış araçları için algılama, planlama ve kontrol yazılım yığını.",
      stars: 70,
      forks: 20,
      language: "C++",
      url: "https://github.com/bahattinyunus/formula_student_autonomous_stack",
      image: "/images/project-formula-student-autonomous-stack.jpg"
    },
    {
      name: "Kiyamet-Hatti",
      description: "Afet durumlarında kesintisiz iletişim sağlayan acil durum haberleşme ağı projesi.",
      stars: 60,
      forks: 16,
      language: "Python",
      url: "https://github.com/bahattinyunus/Kiyamet-Hatti",
      image: "/images/project-kiyamet-hatti.jpg"
    },
    {
      name: "denizalti-akademisi",
      description: "Denizaltı teknolojileri ve sualtı akustiği üzerine eğitim materyalleri ve simülasyonlar.",
      stars: 35,
      forks: 8,
      language: "Python",
      url: "https://github.com/bahattinyunus/denizalti-akademisi",
      image: "/images/project-denizalti-akademisi.jpg"
    },
    {
      name: "meta_engineering",
      description: "Metaverse ortamında mühendislik tasarımı ve işbirliği araçları.",
      stars: 22,
      forks: 4,
      language: "C#",
      url: "https://github.com/bahattinyunus/meta_engineering",
      image: "/images/project-meta-engineering.jpg"
    },
    {
      name: "Milli-Teknoloji-Envanteri",
      description: "Türkiye'nin teknolojik yetkinliklerini ve varlıklarını haritalandıran veritabanı projesi.",
      stars: 50,
      forks: 13,
      language: "JavaScript",
      url: "https://github.com/bahattinyunus/Milli-Teknoloji-Envanteri",
      image: "/images/project-milli-teknoloji-envanteri.jpg"
    },
    {
      name: "NOAA",
      description: "Oşinografik ve atmosferik verilerin analizi ve iklim modelleme çalışmaları.",
      stars: 28,
      forks: 6,
      language: "Python",
      url: "https://github.com/bahattinyunus/NOAA",
      image: "/images/project-noaa.jpg"
    },
    {
      name: "university-courses",
      description: "Geleceğin dünyasını inşa eden 'Mültidisipliner Solopreneur'lar' için tasarlanmış, yapay zeka entegreli akademik bir işletim sistemi ve bilgi cephaneliği.",
      stars: 20,
      forks: 5,
      language: "Python",
      url: "https://github.com/bahattinyunus/university-courses",
      image: "/images/project-university.jpg"
    },
    {
      name: "Project-Neptune-Alpha",
      description: "Sualtı keşif ve savunma sistemleri için geliştirilen yeni nesil otonom araç prototipi.",
      stars: 15,
      forks: 3,
      language: "C++",
      url: "https://github.com/bahattinyunus/Project-Neptune-Alpha",
      image: "/images/project-neptune.jpg"
    },
    {
      name: "gelistirme_araclari",
      description: "Yazılım geliştirme süreçlerini hızlandıran ve otomatize eden özel araçlar seti.",
      stars: 12,
      forks: 2,
      language: "Shell",
      url: "https://github.com/bahattinyunus/gelistirme_araclari",
      image: "/images/project-devtools.jpg"
    },
    {
      name: "NeuroPaint",
      description: "Yapay zeka destekli sanatsal üretim ve görüntü işleme aracı.",
      stars: 45,
      forks: 8,
      language: "Python",
      url: "https://github.com/bahattinyunus/NeuroPaint",
      image: "/images/project-neuropaint.jpg"
    },
    {
      name: "TEKNOFEST_Competitions",
      description: "TEKNOFEST yarışmaları için geliştirilen çeşitli projelerin ve kodların derlemesi.",
      stars: 60,
      forks: 25,
      language: "Mixed",
      url: "https://github.com/bahattinyunus/TEKNOFEST_Competitions",
      image: "/images/project-teknofest.jpg"
    },
    {
      name: "AutonomousPrisonSystem",
      description: "Yüksek güvenlikli tesisler için yapay zeka destekli otonom gözetim ve yönetim sistemi.",
      stars: 35,
      forks: 7,
      language: "Python",
      url: "https://github.com/bahattinyunus/AutonomousPrisonSystem",
      image: "/images/project-prison.jpg"
    },
    {
      name: "cizgi_takibi",
      description: "Otonom robotlar için gelişmiş çizgi izleme ve yol planlama algoritmaları.",
      stars: 18,
      forks: 4,
      language: "C++",
      url: "https://github.com/bahattinyunus/cizgi_takibi",
      image: "/images/project-linefollower.jpg"
    },
    {
      name: "btk_go",
      description: "Go programlama dili ile geliştirilmiş yüksek performanslı ağ uygulamaları.",
      stars: 14,
      forks: 2,
      language: "Go",
      url: "https://github.com/bahattinyunus/btk_go",
      image: "/images/project-go.jpg"
    },
    {
      name: "cyber_security_btk_t3A",
      description: "Siber güvenlik eğitimleri ve CTF yarışmaları için hazırlanan kaynaklar ve araçlar.",
      stars: 55,
      forks: 20,
      language: "Python",
      url: "https://github.com/bahattinyunus/cyber_security_btk_t3A",
      image: "/images/project-cyber.jpg"
    },
    {
      name: "LibraMind",
      description: "Kütüphane ve bilgi yönetim sistemleri için akıllı otomasyon çözümü.",
      stars: 22,
      forks: 5,
      language: "Java",
      url: "https://github.com/bahattinyunus/LibraMind",
      image: "/images/project-libramind.jpg"
    },
    {
      name: "teknofest_robotaksi",
      description: "Otonom binek araçlar yarışması için geliştirilen algı ve kontrol sistemleri.",
      stars: 40,
      forks: 12,
      language: "Python",
      url: "https://github.com/bahattinyunus/teknofest_robotaksi",
      image: "/images/project-robotaksi.jpg"
    },
    {
      name: "teknofest_suru_iha",
      description: "Sürü halinde hareket eden İHA'lar için koordinasyon ve görev paylaşımı algoritmaları.",
      stars: 50,
      forks: 15,
      language: "Python",
      url: "https://github.com/bahattinyunus/teknofest_suru_iha",
      image: "/images/project-swarm.jpg"
    },
    {
      name: "teknofest_insansiz_kara_araci",
      description: "Zorlu arazi koşullarında görev yapabilen insansız kara aracı tasarımı ve yazılımı.",
      stars: 38,
      forks: 10,
      language: "C++",
      url: "https://github.com/bahattinyunus/teknofest_insansiz_kara_araci",
      image: "/images/project-ika.jpg"
    },
    {
      name: "teknofest_robolig",
      description: "Robot futbol takımları için strateji ve oyun kurma yapay zekası.",
      stars: 25,
      forks: 6,
      language: "C++",
      url: "https://github.com/bahattinyunus/teknofest_robolig",
      image: "/images/project-robolig.jpg"
    },
    {
      name: "teknofest_insansiz_deniz_araci",
      description: "Otonom deniz araçları için navigasyon ve engelden kaçınma sistemleri.",
      stars: 32,
      forks: 8,
      language: "Python",
      url: "https://github.com/bahattinyunus/teknofest_insansiz_deniz_araci",
      image: "/images/project-ida.jpg"
    },
    {
      name: "LionSight-AUV",
      description: "Sualtı görüntüleme ve nesne tespiti için geliştirilmiş otonom sualtı aracı projesi.",
      stars: 45,
      forks: 12,
      language: "Python",
      url: "https://github.com/bahattinyunus/LionSight-AUV",
      image: "/images/project-lionsight.jpg"
    },
    {
      name: "Nexus-TRL-LLM",
      description: "LLM dünyasının stratejik istihbarat ve egemenlik üssü. Yapay zeka devlerinin hamlelerini, ajanik mimarilerini ve model olgunluğunu TRL disipliniyle analiz eden kapsamlı bir manifesto.",
      stars: 0,
      forks: 0,
      language: "Unknown",
      url: "https://github.com/bahattinyunus/Nexus-TRL-LLM",
      image: "/images/project-nexus-trl-llm.jpg"
    },
    {
      name: "NexusBroker",
      description: "AI destekli eşleştirme motoru ve akıllı sözleşme tabanlı emanet (escrow) protokolü. Geleneksel aracılık mekanizmalarını şeffaflık, hız ve otonom güven ile yeniden tanımlayan hibrit ticaret ekosistemi.",
      stars: 3,
      forks: 0,
      language: "JavaScript",
      url: "https://github.com/bahattinyunus/NexusBroker",
      image: "/images/project-nexusbroker.jpg"
    },
    {
      name: "NovaChat-Real-Time-Messaging-App",
      description: "React, Node.js, Socket.io ve Redis tabanlı, Dockerize edilmiş gerçek zamanlı mesajlaşma iskeleti. Ölçeklenebilir mimari ve modern tech-stack ile hızlı prototipleme imkanı.",
      stars: 7,
      forks: 0,
      language: "JavaScript",
      url: "https://github.com/bahattinyunus/NovaChat-Real-Time-Messaging-App",
      image: "/images/project-novachat-real-time-messaging-app.jpg"
    },
    {
      name: "Open-Textile-Intelligence",
      description: "Tekstilde Endüstri 4.0'ın ötesi: Yapay zeka ve bilgisayarlı görü destekli Otonom Kalite Kontrol Platformu. Kumaşın DNA'sını okuyan, PySide6 tabanlı Elit Komuta Merkezi.",
      stars: 0,
      forks: 1,
      language: "Python",
      url: "https://github.com/bahattinyunus/Open-Textile-Intelligence",
      image: "/images/project-open-textile-intelligence.jpg"
    },
    {
      name: "PhysicEngine",
      description: "Modern yazılım mühendisliği standartlarıyla geliştirilmiş, yüksek performanslı ve modüler bir 2D fizik simülasyon çekirdeği. Temiz kod ve matematiksel şeffaflık felsefesiyle tasarlandı.",
      stars: 1,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/PhysicEngine",
      image: "/images/project-physicengine.jpg"
    },
    {
      name: "PoseidonEye",
      description: "Gemi ana makineleri için IoT tabanlı kestirimci bakım platformu. Isolation Forest ile anomali tespiti, RUL tahmini ve Streamlit tabanlı gerçek zamanlı dashboard.",
      stars: 3,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/PoseidonEye",
      image: "/images/project-poseidoneye.jpg"
    },
    {
      name: "AQUASYNC-Multi-Domain-Autonomous-Maritime-System",
      description: "Maritime RobotX için geliştirilmiş, USV ve AUV birimlerini senkronize eden çok alanı otonom operasyon sistemi. ROS 2 Humble, YOLOv11 ve Nav2 ile hibrit sürü zekası.",
      stars: 1,
      forks: 0,
      language: "Unknown",
      url: "https://github.com/bahattinyunus/AQUASYNC-Multi-Domain-Autonomous-Maritime-System",
      image: "/images/project-aquasync-multi-domain-autonomous-maritime-system.jpg"
    },
    {
      name: "robotex_warrior_core",
      description: "Rekabetçi robotik için tasarlanmış yüksek performanslı otonom kontrol çekirdeği. Düşük gecikmeli SPDA mimarisi, sensör füzyonu ve modüler kontrol stratejileri.",
      stars: 1,
      forks: 0,
      language: "Unknown",
      url: "https://github.com/bahattinyunus/robotex_warrior_core",
      image: "/images/project-robotex-warrior-core.jpg"
    },
    {
      name: "SIGINT",
      description: "SDR, DSP ve FFT tabanlı modern sinyal istihbaratı (SIGINT) komuta merkezi. ELINT, COMINT ve FISINT modülleriyle elektronik sinyal analizi ve spektrum görselleştirme.",
      stars: 0,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/SIGINT",
      image: "/images/project-sigint.jpg"
    },
    {
      name: "ktu-sarge-gokcen",
      description: "KTÜ Gökcen Rocket Team tarafından TEKNOFEST 2026 Yüksek İrtifa Kategorisi için geliştirilen roket projesi. 18.000 ft servis tavanı ve modüler mimari.",
      stars: 5,
      forks: 0,
      language: "CSS",
      url: "https://github.com/bahattinyunus/ktu-sarge-gokcen",
      image: "/images/project-ktu-sarge-gokcen.jpg"
    },
    {
      name: "TRL-Bio-Compute",
      description: "Post-Silikon çağı için stratejik istihbarat merkezi. DNA depolama, Wetware Zekası ve Biyo-Dijital Yakınsama teknolojilerinin TRL odaklı mimari analizi.",
      stars: 1,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/TRL-Bio-Compute",
      image: "/images/project-trl-bio-compute.jpg"
    },
    {
      name: "TRL-Hardware-Pulse",
      description: "Yarı iletken dünyasının stratejik nabzı: NVIDIA, AMD ve Intel gibi devlerin hamlelerini ve GPU mimarilerini TRL metodolojisiyle analiz eden elit strateji rehberi.",
      stars: 0,
      forks: 0,
      language: "Unknown",
      url: "https://github.com/bahattinyunus/TRL-Hardware-Pulse",
      image: "/images/project-trl-hardware-pulse.jpg"
    },
    {
      name: "TRL-Quantum-Edge",
      description: "Kuantum-Güvenli Uç Zeka (Edge Intelligence) için teknolojik olgunluk standartlarını belirliyoruz. PQC, Edge Computing ve TRL metodolojisini birleştiren hibrit teknoloji çerçevesi.",
      stars: 1,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/TRL-Quantum-Edge",
      image: "/images/project-trl-quantum-edge.jpg"
    },
    {
      name: "The-Craft-of-Tech-Architecture",
      description: "Mimar, en zor kodu yazan değil; sistem entropisine karşı durarak yazılması gereken kod miktarını en aza indiren zanaatkardır. Yazılımcılıktan Mimarılığa geçişin teknik ve felsefi yol haritası.",
      stars: 1,
      forks: 0,
      language: "Unknown",
      url: "https://github.com/bahattinyunus/The-Craft-of-Tech-Architecture",
      image: "/images/project-the-craft-of-tech-architecture.jpg"
    },
    {
      name: "Math2Code-A-Practical-Guide-for-Developers",
      description: "Yazılım mühendisliğinin matematiksel temellerini çalışan kod parçalarına dönüştüren elit bir rehber. AI, Graf Teorisi ve Kriptografi disiplinlerini pratik uygulamaya taşıyan dijital bilgi kütüphanesi.",
      stars: 3,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/Math2Code-A-Practical-Guide-for-Developers",
      image: "/images/project-math2code-a-practical-guide-for-developers.jpg"
    },
    {
      name: "teknofest_helikopter_tasarim",
      description: "VERTIX-H1: TEKNOFEST Helikopter Tasarım Yarışması için geliştirilmiş, 18.000 ft servis tavanına sahip modüler mimarili yüksek irtifa kurtarma helikopteri projesi.",
      stars: 2,
      forks: 0,
      language: "Python",
      url: "https://github.com/bahattinyunus/teknofest_helikopter_tasarim",
      image: "/images/project-teknofest-helikopter-tasarim.jpg"
    },
    {
      name: "Computer-Efficiency-Mastery",
      description: "Bilgisayar mimarisi verimliliği ve performans optimizasyonu üzerine kapsamlı çalışma ve kod kütüphanesi.",
      stars: 15,
      forks: 3,
      language: "C/Assembly",
      url: "https://github.com/bahattinyunus/Computer-Efficiency-Mastery",
      image: "/images/project-efficiency.jpg"
    },
    {
      name: "Digital-Archaeology-Steganography-Vault",
      description: "Dijital arkeoloji ve steganografi teknikleri ile veri gizleme ve analiz vault projesi.",
      stars: 20,
      forks: 5,
      language: "Python",
      url: "https://github.com/bahattinyunus/Digital-Archaeology-Steganography-Vault",
      image: "/images/project-steganography.jpg"
    }
  ],
  certificates: {
    "Girişimcilik & İnovasyon": [
      {
        name: 'DATATHON 2026',
        issuer: 'Türkiye Girişimcilik Vakfı',
        date: 'Haziran 2026',
        credential_id: 'Zj41irnr18v'
      },
      {
        name: 'KOBİ’lerde Kurumsallaşma ve İstikrar İçin Markalaşma',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'da40a586-e522-4c2d-bdbd-fd64903e86fb Powered by'
      },
      {
        name: "KOBİ'ler İçin Kalite Belgelendirme Süreçleri",
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'f06bba99-7efb-4ed8-bb54-8421de207149'
      },
      {
        name: "KOBİ'lerin Yararlanabileceği Destekler",
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '6a8a393c-8c51-4bae-b8ed-729f4e2681f3'
      },
      {
        name: 'Dış Ticaret',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '6ee13768-9902-4e99-940a-bc1eb52dc5ae Powered by'
      },
      {
        name: 'KOBİ’lerin Bilgi ve İletişim Teknolojileri Deneyimleri',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'f75cc449-a64a-40f0-a499-e9eb4613c3be'
      },
      {
        name: 'KOBİ’ler İçin Sanal Gerçeklik',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '3b6c9092-b762-486d-ad41-7f607a2627cd'
      },
      {
        name: 'KOBİ’ler İçin Fikri Mülkiyet Hakları',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '6485390c-381b-4e78-aeec-634879114b74 Powered by'
      },
      {
        name: 'E-Ticarete Giriş',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: '7rptZxE7ya'
      },
      {
        name: 'Datathon 2025 Data Competition',
        issuer: 'BTK Akademi',
        date: 'Eyl 2025',
        credential_id: 'bzAaiLLYxmy'
      },
    ],

    "Yapay Zeka & LLM": [
      {
        name: "Canva Magic Design",
        issuer: "Canva",
        date: "Ocak 2026",
        credential_id: "ZA1UrdEkWO"
      },
      {
        name: "DeepSeek",
        issuer: "DeepSeek",
        date: "Ocak 2026",
        credential_id: "lK1hwey4xw"
      },
      {
        name: "Gamma",
        issuer: "Gamma",
        date: "Ocak 2026",
        credential_id: "GoDfm1rwNr"
      },
      {
        name: "NotebookLM",
        issuer: "Google",
        date: "Ocak 2026",
        credential_id: "8jmhNZeyk6"
      },
      {
        name: "Perplexity",
        issuer: "Perplexity AI",
        date: "Ocak 2026",
        credential_id: "Ko9fE4NpKx"
      },
      {
        name: "Yapay Zeka Dünyasına Giriş",
        issuer: "BTK Akademi",
        date: "Ocak 2026",
        credential_id: "7rptPBld1p"
      },
      {
        name: "Yapay Zeka ve Algoritmalarına Giriş",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "6mqFNkwJxA"
      },
      {
        name: "Üretken Yapay Zekâya Giriş",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "eK1hOjmKgG"
      },
      {
        name: "Araştırmada Üretken Yapay Zekâ Kullanımı",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "D2xhEEKoYN"
      },
      {
        name: "Kişiselleştirilmiş GPT'ler (Custom GPTs)",
        issuer: "BTK Akademi",
        date: "Mart 2025",
        credential_id: "ax1hDzvgrE"
      },
      {
        name: "Yapay Zekâ Etiği",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "MAZUE7xX2D"
      },
      {
        name: "Yapay Zekaya Giriş",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "zXztak2EeO"
      },
    ],
    "Siber Güvenlik": [
      {
        name: "Multimedya Veri Güvenliğinde Yapay Zekâ Kullanımı",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "WzBbI9py"
      },
      {
        name: "DoS / DDoS Saldırıları ve Koruma",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "XV1hBdNpMv"
      },
      {
        name: "Sosyal Mühendislik ve Oltalama",
        issuer: "BTK Akademi",
        date: "Aralık 2025",
        credential_id: "WJ1SkZbe4d"
      },
      {
        name: "Temel Kriptografi",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "kK1hVD09dy"
      },
      {
        name: "Siber Güvenliğe Giriş",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "XV1hWEow9j"
      },
      {
        name: "İletişim ve Network Yönetimi",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "yjahJpaPNz"
      },
    ],
    "Yazılım & Programlama": [
      {
        name: 'HTML5 & CSS3 – Ders 3',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'ad616b65-53ef-4c5d-9b8f-00cd6cf1fa43'
      },
      {
        name: 'HTML5 & CSS3 – Ders 2',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'b100b204-76e2-4968-a82a-8d8e4c9950c9'
      },
      {
        name: 'HTML5 & CSS3 – Ders 1',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'a3e692f7-e470-47ad-85f6-a1af0bccf3af'
      },
      {
        name: 'Web Tasarımının Temelleri HTML ve CSS',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'e4492f1b-9f9c-4291-bd36-1bc6dc72e30b'
      },
      {
        name: 'Wordpress Kullanarak Web Sitesi Hazırlama',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '18e5f0bd-5721-46ed-8f12-e5c93e11634e'
      },
      {
        name: 'Vitrin Tasarımı',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '89ad6ed9-3c6a-44bb-8027-7579afd594ac'
      },
      {
        name: 'Python Programlama - 1',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '38c4e588-048f-4834-9f24-91bc413c9b2c'
      },
      {
        name: 'Google Slaytlar İle Etkili Sunum Hazırlama',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'a46225b5-0c02-44cb-82c6-75f8416a57a1 Powered by'
      },
      {
        name: 'Python Programlama - 2',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'ffba9a75-e00f-4041-aee2-3667594325d1'
      },
      {
        name: 'CSS',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '9078c781-b170-433c-9087-e6af96cd5aaa Powered by'
      },
      {
        name: 'HTML',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '2065904d-1057-4c69-b552-cd81e538fc51 Powered by'
      },
      {
        name: 'Erişilebilir İş Yeri Tasarımı',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '77b1ca12-556e-4b36-8105-27aaaf7d00dd'
      },
      {
        name: 'Robotik Programlama',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '9f46b3f5-5dc3-49b6-9435-999214405d89'
      },
      {
        name: 'Javascript',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '00dee6f8-1e4c-44d6-9530-92a397c70bcc'
      },
      {
        name: "Tasarım Odaklı Düşünme'ye Giriş",
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '65789142-d220-4067-b5b3-aa91c80e4d35'
      },
      {
        name: 'Programlamanın Temelleri',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '0276249b-a986-4f67-be92-fc882e1468d5'
      },
      {
        name: 'Eğitimde Oyunlaştırma ve Web 2.0 Araçları',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'L8dcn0rBP9'
      },
      {
        name: 'Web Tabanlı Coğrafi Bilgi Sistemleri',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'dx1hlM8eWG'
      },
      {
        name: 'Grafik Tasarıma Giriş',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'OKMhqvKqDj'
      },
      {
        name: 'Web Sitesi Kullanılabilirliği',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'ZA1UM14oWD'
      },
      {
        name: 'Google Dijital Pazarlama Temelleri',
        issuer: 'Google',
        date: 'Mar 2026',
        credential_id: 'ax1hrE94bx'
      },
      {
        name: 'Google Dijital Ebeveynlik',
        issuer: 'Google',
        date: 'Oca 2026',
        credential_id: '4qgueLmn07'
      },
      {
        name: 'Introduction to Artificial Intelligence and Algorithms',
        issuer: 'BTK Akademi',
        date: 'Eki 2025',
        credential_id: '6mqFNkwJxA'
      },
      {
        name: 'Digital Literacy',
        issuer: 'BTK Akademi',
        date: 'Temmuz 2026',
        credential_id: 'OKMhqeyObw'
      },
      {
        name: 'Python 2',
        issuer: 'BTK Akademi',
        date: 'Temmuz 2026',
        credential_id: 'dx1hAG0d1z'
      },
      {
        name: 'Javascript Basics',
        issuer: 'BTK Akademi',
        date: 'Haziran 2026',
        credential_id: 'gK2hoVBwj9'
      },
      {
        name: 'C++',
        issuer: 'BTK Akademi',
        date: 'Haziran 2026',
        credential_id: '6mqFNqLYdA'
      },
      {
        name: 'Go',
        issuer: 'BTK Akademi',
        date: 'Haziran 2026',
        credential_id: 'xr4t0Jeolm'
      },
      {
        name: 'Python 1',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'Yx1hPL1mGY'
      },
      {
        name: 'Version Control: Git and GitHub',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'NowfnNpDAz'
      },
      {
        name: 'MicroBit Programming with MicroPython',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: '1kZCoxNdMM'
      },
      {
        name: 'CSS Fundamentals',
        issuer: 'BTK Akademi',
        date: 'Nis 2025',
        credential_id: '7rptZAreZ1'
      },
      {
        name: 'Web Development with HTML5',
        issuer: 'BTK Akademi',
        date: 'Nis 2025',
        credential_id: 'rKjhGyp8LJ'
      },

      {
        name: "Python 2 (Python Programlama Dili)",
        issuer: "BTK Akademi",
        date: "Temmuz 2025",
        credential_id: "dx1hAG0d1z"
      },
      {
        name: "Python 1 (Yeni Başlayanlar için Python)",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "Yx1hPL1mGY"
      },
      {
        name: "C++ ile Programlamaya Giriş",
        issuer: "BTK Akademi",
        date: "Haziran 2025",
        credential_id: "6mqFNqLYdA"
      },
      {
        name: "Go ile Programlamaya Giriş",
        issuer: "BTK Akademi",
        date: "Haziran 2025",
        credential_id: "xr4t0Jeolm"
      },
      {
        name: "C Programlama Dili",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "GoDfn444BW"
      },
      {
        name: "Javascript Temelleri",
        issuer: "BTK Akademi",
        date: "Haziran 2025",
        credential_id: "gK2hoVBwj9"
      },
      {
        name: "Small Basic ile Kodlama",
        issuer: "BTK Akademi",
        date: "Kasım 2024",
        credential_id: "9Xrtq18yXl"
      },
      {
        name: "Versiyon Kontrolleri: Git ve GitHub",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "NowfnNpDAz"
      },
      {
        name: "Web Geliştirme (HTML5)",
        issuer: "BTK Akademi",
        date: "Nisan 2025",
        credential_id: "rKjhGyp8LJ"
      },
      {
        name: "CSS Temelleri",
        issuer: "BTK Akademi",
        date: "Nisan 2025",
        credential_id: "7rptZAreZ1"
      },
    ],
    "Donanım & Robotik": [
      {
        name: 'İnsansız Hava Araçlarına Giriş Eğitimi - Katılım Sertifikası',
        issuer: 'BTK Akademi',
        date: 'Temmuz 2026',
        credential_id: 'DVYGTrb0'
      },
      {
        name: 'Havacılık Motorları Okulu',
        issuer: 'TEI - TUSAŞ Motor Sanayii A.Ş.',
        date: 'Haziran 2026',
        credential_id: 'TEIHMO263721'
      },
      {
        name: '3 Boyutlu Yazıcı Teknolojisine Giriş',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'b08b003f-50e0-4f79-a199-9d85cade4648'
      },
      {
        name: '3 Boyutlu Yazıcıların Farklı Sektörlerde Kullanımı',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'b1a13948-40a1-4fda-8dd7-0736391023d1'
      },
      {
        name: 'Raspberry Pi ile İleri Seviye',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'e204fb6e-f7f0-4c40-885a-52420fd8495b Powered by'
      },
      {
        name: 'Arduino ile Mikrodenetleyiciler 2 (GirişÇıkış Arayüzleri)',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '4915324a-9e0d-45be-a381-370f50040b08'
      },
      {
        name: 'Arduino ile Mikrodenetleyiciler 3 (Sensörden Veri Okuma)',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'a02aa4b3-ff7d-4359-9cbe-00bc4f4f44e6'
      },
      {
        name: 'Arduino ile Mikrodenetleyicilere Giriş',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'ada8e3c4-6aa1-4ef7-9468-61c55038b01b'
      },
      {
        name: 'Yeni Başlayanlar İçin Raspberry Pi',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'fc6a2f8b-029c-4aaf-80f6-5b7594e90aa8'
      },
      {
        name: 'Arduino Programming with Tinkercad',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'BozfGwDZbx'
      },
      {
        name: 'Introduction to Basic Electronics and Robotics',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: '1kZCozGVO7'
      },
      {
        name: 'IHA - 1 - Sportif / Amatör',
        issuer: 'Sivil Havacılık Genel Müdürlüğü',
        date: 'Mar 2023',
        credential_id: 'TR-IHA1H10609053'
      },

      {
        name: "İHA-1 Ticari/Sportif Pilot Sertifikası",
        issuer: "Sivil Havacılık Genel Müdürlüğü",
        date: "Mart 2023",
        credential_id: "TR-IHA1H10609053"
      },
      {
        name: "Tinkercad ile Arduino",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "BozfGwDZbx"
      },
      {
        name: "MicroPython ile MicroBit Programlama",
        issuer: "BTK Akademi",
        date: "Mayıs 2025",
        credential_id: "1kZCoxNdMM"
      },
      {
        name: "Proteus ile Devre Tasarımı",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "ax1hDAjV9N"
      },
      {
        name: "Temel Elektronik ve Robotiğe Giriş",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "1kZCozGVO7"
      },
      {
        name: "İşletim Sistemlerine Giriş",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "7rptZxqGKp"
      },
    ],
    "Proje Yönetimi & İş": [
      {
        name: 'Proje Yönetimi Hakkında Temel Bilgiler',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '581745ed-d71c-4b14-b7a1-3d43724a4a09'
      },
      {
        name: 'Proje Yönetimi Yazılımı - PROJECTLIBRE',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '5ebac33d-1054-4459-a83d-010e69775a4f Powered by'
      },
      {
        name: 'Çevrim İçi Form Oluşturma',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'b9c90eb6-ac35-452a-90bb-999f3abd3ab0 Powered by'
      },
      {
        name: 'Odoo (OpenERP) Entegre İş Yönetim Uygulaması',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '244eeb65-b2a9-4f30-bced-cc5092376d13 Powered by'
      },
      {
        name: 'Şikayet Yönetimi',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '8fefbcd1-c76d-444b-8d0a-22b64eab404b'
      },
      {
        name: 'Kurumlarda Stres Yönetimi',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '8e2b7e9f-ba74-489e-856e-dc0d1edf1e76'
      },
      {
        name: 'Kişisel Stres Yönetimi',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '6488a577-e9fc-485b-829c-839d71c55f44'
      },
      {
        name: 'Üretken Yapay Zekâ ile Sunum Hazırlama',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'BozfxNda6B'
      },
      {
        name: 'Doküman Tipleri ve Veri Formatları',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'qKrheZWjeK'
      },
      {
        name: '3-Karayolu Proje Çalışmaları',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'oJpSg49EYp'
      },
      {
        name: 'Program ve Portföy Yönetimi',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'BozfGVqboj'
      },
      {
        name: '2-Karayolu Projeleri Fizibilite Etütleri',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'Ko9fE0xM1J'
      },
      {
        name: 'Proje Yönetimi',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'lK1hw74pZw'
      },
      {
        name: 'Sosyal Medya Reklamcılığı ve Performans Analitiği',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'AKkkf7kwlrL'
      },
      {
        name: 'Project Management Basics',
        issuer: 'BTK Akademi',
        date: 'Kas 2025',
        credential_id: 'wmlFmJkB29'
      },
      {
        name: 'Project and Risk Management',
        issuer: 'BTK Akademi',
        date: 'Haziran 2026',
        credential_id: '8jmhLX7yMG'
      },
      {
        name: 'Introduction to Information Technology',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'gK2hoD7Lqj'
      },

      {
        name: "Proje Yönetim Temelleri",
        issuer: "BTK Akademi",
        date: "Kasım 2025",
        credential_id: "wmlFmJkB29"
      },
      {
        name: "Proje ve Risk Yönetimi",
        issuer: "BTK Akademi",
        date: "Haziran 2025",
        credential_id: "8jmhLX7yMG"
      },
      {
        name: "Uygulamalı İş Modeli Üretimi",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "oJpS7m2kwM"
      },
      {
        name: "Şirket Değerleme ve Yatırım Süreçleri",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "OKMhqpzgrp"
      },
      {
        name: "Pazar Araştırması ve Fiyatlandırma Stratejileri",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "6mqFN8zGOM"
      },
      {
        name: "Satış ve Pazarlama Yönetimi",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "WJ1SMLlqOO"
      },
      {
        name: "Finansal Okuryazarlık",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "AJaSdLzWW1"
      },
    ],
    "Hukuk & Fikri Mülkiyet": [
      {
        name: "Bilişim Hukuku",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "2NwcJJnl84"
      },
      {
        name: "Tasarımların Korunması",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "7rptZgnMXy"
      },
      {
        name: "Patent ve Faydalı Modellerin Korunması",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "jK1hKrZEYN"
      },
      {
        name: "Coğrafi İşaretlerin Korunması",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "wmlFJrZkJv"
      },
      {
        name: "Bilgi İhbar Merkezi ve Sosyal Medya Şikayet Süreçleri",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "yjahzAKKW1"
      },
    ],
    "Kişisel Gelişim & Soft Skills": [
      {
        name: 'Fotoğrafçılık Teknikleri',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '49150268-21c9-4344-b367-4e68527b7571'
      },
      {
        name: 'Yiyecek İçecek Servisi',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '7d1be7d6-69f3-4c1a-943f-f9eec417fba8'
      },
      {
        name: 'İnovasyon',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'b99b5662-dd06-477e-b89b-bcb693cd11d3 Powered by'
      },
      {
        name: 'İşe Alım Süreci',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '96547836-21cf-4d06-a1b3-58cc4679fd53'
      },
      {
        name: 'GİRİŞİMCİLİK Göknur ATALAY',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '0a42b103-3f6b-4c2b-a9ac-4d524da87ff1'
      },
      {
        name: 'GİRİŞİMCİLİK Nazlı AKYAY',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '53cc0f9c-1481-44fb-a9e6-1f63861e5135'
      },
      {
        name: 'GİRİŞİMCİLİK Ayşe Kuyrukcu',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '4c4982fa-6abb-41b6-925c-d65ed8019582'
      },
      {
        name: 'SOSYAL MEDYA',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '19897818-7319-4ca5-b9db-63d579b04551'
      },
      {
        name: 'SATIŞ VE PAZARLAMA',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: ': b35223a5-5755-4776-b05b-6c6d3f070cf9'
      },
      {
        name: 'HUKUKİ MEVZUAT Yiğit Gökçen',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '3468eb1e-b45b-472a-95f5-be5f7c175d30'
      },
      {
        name: 'HUKUKİ MEVZUAT Çiğdem Çamurdan',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: 'ac639136-d72d-4d97-9bb6-6681fe94d394 Powered by'
      },
      {
        name: 'DİJİTAL PAZARLAMA YÖNTEMLERİ',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: '5b889697-dd18-4ad2-960f-f62dd8f630c0'
      },
      {
        name: 'BİLGİ GÜVENLİĞİ',
        issuer: 'TBD TÜRKİYE BİLİŞİM DERNEĞİ',
        date: 'Haziran 2026',
        credential_id: 'f224f9b7-ce1e-4332-a54e-40115f18946e'
      },
      {
        name: 'İş Yerinde Psikolojik Taciz (Mobbing)',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'fb35c3d6-37c7-4b28-8142-ebf8db9fcf05'
      },
      {
        name: 'Ofiste Sağlıklı Yaşam',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'f048ca63-a61b-4457-aad2-aafb508e0aad'
      },
      {
        name: 'İlk Yardım',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '633a4680-cbc2-4719-8f34-8790b65e40bf'
      },
      {
        name: 'Dronelar ve Ticari Amaçlı Kullanımları',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '63a5b6cd-8829-4e1c-8e7a-0328518e9dc4'
      },
      {
        name: 'Güneş Enerjisinden Yararlanma',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: '76b9e099-84cb-4ed7-9119-2036e41ae412'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Haziran 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Temel Elektronik',
        issuer: 'Bilgeİş',
        date: 'Haziran 2026',
        credential_id: 'f0bda3dc-c410-4ff7-b699-9c3c9a161ff7'
      },
      {
        name: 'Teknoloji ve Verimliliğin Anahtarı Yenilikçi Firmalar',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '05b9ff0f-5bf1-42b4-bd8f-789734134a67'
      },
      {
        name: 'İnternette Güvenliğinizi Arttırın',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: 'b68d9857-fae2-4100-800d-a2f99c6b4a00'
      },
      {
        name: 'İşiniz İçin Sosyal Medya',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '8c75eedb-cfde-434a-921b-6688970bb107'
      },
      {
        name: 'Genel İş Sağlığı ve Güvenliği',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '0ea58e7a-b577-4708-9cc9-8288f876dba4'
      },
      {
        name: 'Zor İnsanlarla Baş Etme',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: 'fa215315-706d-45d2-903c-fd667626a43d'
      },
      {
        name: 'Liderlik',
        issuer: 'Bilgeİş',
        date: 'Mayıs 2026',
        credential_id: '4f43acef-7ec0-48c0-a9ee-c67af2f10072 Powered by'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Uygulamalı Kaggle',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'nKqhnLg2Xk'
      },
      {
        name: 'Bulut Bilişim Mimarileri',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: '8jmhNYGW1m'
      },
      {
        name: 'Microsoft Word Temelleri',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'mKEhkdwO6L'
      },
      {
        name: 'Adli Bilişime Giriş',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'dx1hla67nb'
      },
      {
        name: 'Yazılım Geliştirme Araçları',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'jK1hKXNyYr'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Turkcell Geleceği Yazanlar',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Girişim Merkezi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Türk Dünyası Gençlik Vakfı',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'T3 Akademi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Ankara Üniversitesi Siyasal Bilgiler Fakültesi',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'aaG1FrnANKp'
      },
      {
        name: 'Türk Dünyası Gençlik Vakfı',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: '2026_KTÜ6146132280674'
      },
      {
        name: 'Bilgi Güvenliği Derneği',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Kamu İhale Kanunu',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'XV1hW1napx'
      },
      {
        name: 'Bilgi Okuryazarlığı',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'm6oqskdgbJJ'
      },
      {
        name: 'Dijital Okuryazarlık',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'w92KSm8LyqD'
      },
      {
        name: 'Vatandaşlık Okuryazarlığı',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'N28vfnvx6yl'
      },
      {
        name: 'Veri Okuryazarlığı',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'qEgjTeL4MVk'
      },
      {
        name: 'Kültür Okuryazarlığı',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'YEmkT8mnMwK'
      },
      {
        name: 'Sürdürülebilirlik Okuryazarlığı',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'eAxetO6aZeX'
      },
      {
        name: 'KTÜ Yönetim Bilişim Sistemleri Kulübü',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Microsoft 365 Copilot ve Office Uygulamaları',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'MAZUEAVVxy'
      },
      {
        name: 'Ford Otosan',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Nesnelerin İnterneti (IoT) ve Güvenliği',
        issuer: 'BTK Akademi',
        date: 'Nis 2026',
        credential_id: 'XV1hWjGjJn'
      },
      {
        name: 'Türkiye Uzay Ajansı',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Yapay Zekâ ile Görsel Sentez',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'D2xhE1Alml'
      },
      {
        name: 'TS EN 50600 Veri Merkezi Tesisleri ve Altyapıları Standardı',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'mKEhkNWJ6X'
      },
      {
        name: 'Sitescope ile Sistem İzleme',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'qKrheYWd01'
      },
      {
        name: 'Bilgi Güvenliği Yönetim Sistemi',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: '4qgueLmnLY'
      },
      {
        name: 'API ve API Testi',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: '4qguegXX7r'
      },
      {
        name: 'SIEM Temelleri',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'gK2hakvzwK'
      },
      {
        name: 'Telekomünikasyon Sistemleri Güvenliği',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'XV1hBdNm8l'
      },
      {
        name: 'İnternet Alan Adları Hukuku',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'qKrheYWWE4'
      },
      {
        name: '6-Karayolu Yapım Çalışmaları',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'zXztnmNe2o'
      },
      {
        name: '8-Karayollarında Trafik Güvenliği Çalışmaları',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'L8dcNpnYyA'
      },
      {
        name: '10-Özel ve Tarihi Köprüler',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'nKqhnWbmG7'
      },
      {
        name: 'Uzaktan Erişim Araçları',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: '8jmhNZEEZZ'
      },
      {
        name: 'Yapay Zekâ Hukuku',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'qKrheZ0lrM'
      },
      {
        name: 'KVKK, GDPR Eğitim Seti',
        issuer: 'BTK Akademi',
        date: 'Mar 2026',
        credential_id: 'WJ1SMLnmrd'
      },
      {
        name: 'Sosyal Medya Uzmanlığına Giriş',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: '7rptZxEryp'
      },
      {
        name: 'Makine Öğrenmesinin Matematiksel Temelleri',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'gK2halKOrV'
      },
      {
        name: '4-Kamulaştırma Süreci',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'wmlFmB1rX4'
      },
      {
        name: '9-Devlet ve İl Yollarında Bakım ve İşletme Sürecine Giriş',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: '6mqF01q9Yy'
      },
      {
        name: '7-Yol Yapım, Bakım, Onarım Makine ve Ekipmanları',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'ZA1Ura7jgd'
      },
      {
        name: '1-KGM Tarihçesi, Görev, Yetki ve Sorumlulukları',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'lK1hwkggAa'
      },
      {
        name: '5-Malzeme Ocakları Yönetim Süreci',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'GoDfm64AA9'
      },
      {
        name: 'Uluslararası İş Analizi Metodolojisi ve Teknikleri',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'L8dcNeAVPK'
      },
      {
        name: '23 | Yirmi Üç',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: '1774b535-4b29-4c25-b11b-291d57f9b481'
      },
      {
        name: 'Sosyal Medya ve İnternet Muhabirliği',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'XlOOsBKZW6Z'
      },
      {
        name: 'Sosyal Medyada Marka İletişimi ve İşbirlikleri',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'VljjsgWkaKA'
      },
      {
        name: 'Sosyal Medya Etkileyicilerinin Hukuki Sorumluluğu',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'xoBBUN4brZL'
      },
      {
        name: 'Teknopark Ankara',
        issuer: 'BTK Akademi',
        date: 'Şub 2026',
        credential_id: 'jeqDhGDaZKq'
      },
      {
        name: 'Başarı Sertifikası Articulate Storyline 360 ile İleri Seviye Etkileşimli İçerik Hazırlama',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'nwJltz89'
      },
      {
        name: 'Türk Dünyası Gençlik Vakfı',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: '2025_KTÜ6146006461910'
      },
      {
        name: 'Markaların Korunması',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'WJ1SMLlqMZ'
      },
      {
        name: '23 | Yirmi Üç',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: '3c44f88d-1944-4919-b750-67f769f6e5ad'
      },
      {
        name: 'HeyGen',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'WJ1SkN2p9n'
      },
      {
        name: 'ElevenLabs',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: '8jmhNjXbP2'
      },
      {
        name: 'Gemini Veo',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'oJpSgnayWO'
      },
      {
        name: 'Finansal Piyasalara Giriş',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'Ko9fEG7WZG'
      },
      {
        name: 'Üretken Yapay Zekâ ile Tercüme',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'OKMhwopAnN'
      },
      {
        name: 'Veri Bilimi için Temel İstatistik',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'lK1h7n9And'
      },
      {
        name: 'Matematik 101',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'yjahJpZVEB'
      },
      {
        name: 'İnsan Haklarına Giriş',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'JoNf2pbD6z'
      },
      {
        name: 'Uluslararası İlişkilerde Yapay Zekâ',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'pKmhqp2DYG'
      },
      {
        name: 'NotebookLM',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: '8jmhNZeyk6'
      },
      {
        name: 'KTUGEMDTEK (KTÜ Gemi İnşaatı ve Deniz Teknolojileri Kulübü)',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Yapay Zekâ Dünyasına Giriş',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: '7rptPBld1p'
      },
      {
        name: 'Perplexit',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'Ko9fE4NpKx'
      },
      {
        name: 'Canva Magic Desing',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'ZA1UrdEkWO'
      },
      {
        name: 'Gamma',
        issuer: 'BTK Akademi',
        date: 'Oca 2026',
        credential_id: 'GoDfm1rwNr'
      },
      {
        name: 'KTÜ İşletme ve Ekonomi Kulübü',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Certificate of Achievement – Use of Artificial Intelligence in Multimedia Data Security Workshop',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'WzBbI9py'
      },
      {
        name: 'Social Engineering and Phishing',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'WJ1SkZbe4d'
      },
      {
        name: 'T3 Vakfı',
        issuer: 'BTK Akademi',
        date: 'Ara 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'TÜBİTAK',
        issuer: 'BTK Akademi',
        date: 'Kas 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Artificial Intelligence Ethics',
        issuer: 'BTK Akademi',
        date: 'Eki 2025',
        credential_id: 'MAZUE7xX2D'
      },
      {
        name: 'Use of Generative Artificial Intelligence in Research',
        issuer: 'BTK Akademi',
        date: 'Eki 2025',
        credential_id: 'D2xhEEKoYN'
      },
      {
        name: 'Introduction to Generative Artificial Intelligence',
        issuer: 'BTK Akademi',
        date: 'Eki 2025',
        credential_id: 'eK1hOjmKgG'
      },
      {
        name: 'Gençlik ve Spor Bakanlığı',
        issuer: 'BTK Akademi',
        date: 'Ağu 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'GDG Trabzon',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Fundamentals of Cryptography',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'kK1hVD09dy'
      },
      {
        name: 'Introduction to Cybersecurity',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'XV1hWEow9j'
      },
      {
        name: 'Karadeniz Teknik Üniversitesi Yazılım Kulübü',
        issuer: 'BTK Akademi',
        date: 'Mayıs 2026',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Financial Literacy',
        issuer: 'BTK Akademi',
        date: 'Ara 2024',
        credential_id: 'AJaSdLzWW1'
      },
      {
        name: 'Karadeniz Teknik Üniversitesi Endüstri Mühendisliği Kulübü',
        issuer: 'BTK Akademi',
        date: 'Şub 2025',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Gençlik ve Spor Bakanlığı',
        issuer: 'BTK Akademi',
        date: 'Ara 2024',
        credential_id: 'CERT-2026'
      },
      {
        name: 'GDG Trabzon',
        issuer: 'BTK Akademi',
        date: 'Ara 2024',
        credential_id: 'CERT-2026'
      },
      {
        name: 'KTU Artificial Intelligence Society',
        issuer: 'BTK Akademi',
        date: 'Ara 2024',
        credential_id: 'CERT-2026'
      },
      {
        name: 'Small Basic',
        issuer: 'BTK Akademi',
        date: 'Kas 2024',
        credential_id: '9Xrtq18yXl'
      },
      {
        name: 'Persuasion Skills',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'pKmhKr9Xxj'
      },
      {
        name: 'Effective Communication Strategies',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'vpWc8Mb1Ao'
      },
      {
        name: 'Public Speaking and Presentation Techniques',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'GoDfn0V2xB'
      },
      {
        name: 'Introduction to Artificial Intelligence',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'zXztak2EeO'
      },
      {
        name: 'İşletim Sistemlerine Giriş',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: '7rptZxqGKp'
      },
      {
        name: 'Circuit Design with Proteus',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'ax1hDAjV9N'
      },
      {
        name: 'Fundamentals of Entrepreneurship',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'XV1hWEv6VY'
      },
      {
        name: 'Communication and Network Management',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'yjahJpaPNz'
      },
      {
        name: 'Presentation Techniques',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'zXztak2MEd'
      },
      {
        name: 'Problem Solving Techniques',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'zXztak7gdZ'
      },
      {
        name: 'Team Building and Management',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: '7rptZxqG9P'
      },
      {
        name: 'C Programming Language',
        issuer: 'BTK Akademi',
        date: 'Eki 2024',
        credential_id: 'GoDfn444BW'
      },

      {
        name: "Etkili İletişim Stratejileri",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "vpWc8Mb1Ao"
      },
      {
        name: "İkna Becerileri",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "pKmhKr9Xxj"
      },
      {
        name: "Topluluk Önünde Konuşma ve Etkili Sunum",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "GoDfn0V2xB"
      },
      {
        name: "Ekip Kurma ve Yönetme",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "7rptZxqG9P"
      },
      {
        name: "Problem Çözme Teknikleri",
        issuer: "BTK Akademi",
        date: "Aralık 2024",
        credential_id: "zXztak7gdZ"
      },
      {
        name: "Kariyerde Hedef Belirleme",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "0KohzoGvkW"
      },
      {
        name: "Mülakat Teknikleri",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "lK1h7nZOBZ"
      },
      {
        name: "Stresle Başa Çıkma ve Bilinçli Farkındalık",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "MAZUNeOraZ"
      },
      {
        name: "Genç Profesyoneller İçin Kariyeri Tehdit Eden Yaklaşımlar",
        issuer: "BTK Akademi",
        date: "Tarih Belirtilmemiş",
        credential_id: "MAZUENAJ9z"
      },
      {
        name: "Dijital Okuryazarlık",
        issuer: "BTK Akademi",
        date: "Temmuz 2025",
        credential_id: "OKMhqeyObw"
      },
    ],
  }
};
