import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Search, Filter, ShieldCheck, CheckCircle, ExternalLink, Sparkles, BookOpen, Layers, Cpu, Terminal, Radio } from "lucide-react";
import { useCyberSound } from "@/hooks/use-cyber-sound";

interface CertItem {
  name: string;
  issuer: string;
  category: string;
  date?: string;
  credential_id?: string;
}

const certificationsData: CertItem[] = [
  // 🤖 Yapay Zekâ & Büyük Dil Modelleri
  { name: "Yapay Zekâya Giriş", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Yapay Zekâ Dünyasına Giriş", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Üretken Yapay Zekâya Giriş", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Yapay Zekâ ile Görsel Sentez", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Yapay Zekâ Etiği", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Yapay Zekâ Hukuku", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Uluslararası İlişkilerde Yapay Zekâ", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Araştırmada Üretken Yapay Zekâ Kullanımı", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Sosyal Medyada Yapay Zeka ile Dijital Pazarlama", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Makine Öğrenmesinin Matematiksel Temelleri", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Yapay Zeka ve Algoritmalarına Giriş", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Multimedya Veri Güvenliğinde Yapay Zekâ Kullanımı", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Anthropic Claude", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "ChatGPT", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "DeepSeek", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Manus AI", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "NotebookLM", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Perplexity", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "HeyGen", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "ElevenLabs", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Gemini Veo", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Hailuo AI", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Canva Magic Design", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Gamma", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Microsoft 365 Copilot ve Office Uygulamaları", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Üretken Yapay Zekâ ile Tercüme", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Üretken Yapay Zekâ ile Sunum Hazırlama", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },
  { name: "Kişiselleştirilmiş GPT'ler", issuer: "BTK Akademi", category: "Yapay Zekâ & LLM" },

  // 💻 Programlama & Yazılım Geliştirme
  { name: "C Programlama Dili", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "C++ ile Programlamaya Giriş", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Python 1 – Yeni Başlayanlar", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Python 2", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Go ile Programlamaya Giriş", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Javascript Temelleri", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "HTML5 ile Web Geliştirme", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "CSS Temelleri", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Versiyon Kontrolü: Git ve GitHub", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Small Basic", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "MicroPython ile MicroBit Programlama", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Tinkercad ile Arduino Programlama", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Proteus ile Devre Tasarımı", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Temel Elektronik ve Robotiğe Giriş", issuer: "BTK Akademi", category: "Programlama & Yazılım" },
  { name: "Articulate Storyline 360 ile İleri Seviye İçerik Hazırlama", issuer: "BTK Akademi", category: "Programlama & Yazılım" },

  // 🔐 Siber Güvenlik & Ağ
  { name: "Beyaz Şapkalı Hacker Eğitimi", issuer: "Siber Vatan (SSB)", category: "Siber Güvenlik & Ağ" },
  { name: "Kamp+ Siber Güvenlik Kampı", issuer: "Bilgi Güvenliği Derneği", category: "Siber Güvenlik & Ağ" },
  { name: "Siber Güvenliğe Giriş", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Temel Kriptografi", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Güvenlik Duvarına Giriş", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "SIEM Temelleri", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Bilgi Güvenliği Yönetim Sistemi (ISO 27001)", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Mobil Güvenlik ve Sızma Teknikleri", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Sosyal Mühendislik ve Oltalama", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "DoS/DDoS Saldırıları ve Koruma", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Telekomünikasyon Sistemleri Güvenliği", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Nesnelerin İnterneti (IoT) ve Güvenliği", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Uzaktan Erişim Araçları", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "API ve API Testi", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },
  { name: "Web Sitesi Kullanılabilirliği", issuer: "BTK Akademi", category: "Siber Güvenlik & Ağ" },

  // 🛸 Havacılık, Uzay & Otonom Sistemler
  { name: "İHA-1 Sportif/Amatör Pilotaj Lisansı", issuer: "Sivil Havacılık Genel Müdürlüğü (SHGM)", category: "Havacılık & Otonom" },
  { name: "6. Dönem Havacılık Motorları Okulu", issuer: "TEI - TUSAŞ Motor Sanayii A.Ş.", category: "Havacılık & Otonom" },
  { name: "KAMP+ Havacılık ve Uzay Kampı (Bursa)", issuer: "T.C. GSB & TÜBİTAK", category: "Havacılık & Otonom" },
  { name: "İnsansız Hava Araçlarına Giriş Eğitimi", issuer: "BTK Akademi", category: "Havacılık & Otonom" },
  { name: "TUA Astro Hackathon (15 Açık Kaynak Proje)", issuer: "Türkiye Uzay Ajansı (TUA)", category: "Havacılık & Otonom" },
  { name: "Ankara AI Hackathon '26 (Aura Hockey AR)", issuer: "BTK Akademi & Teknopark Ankara", category: "Havacılık & Otonom" },
  { name: "Sualtı Sistemleri Eğitimi", issuer: "T3 Vakfı", category: "Havacılık & Otonom" },
  { name: "INTERSTELLAR PROBLEM SOLVER", issuer: "Türkiye Uzay Ajansı (TUA)", category: "Havacılık & Otonom" },
  { name: "ROTAMIZ UFKUN ÖTESİ", issuer: "KTÜ GEMİDTEK", category: "Havacılık & Otonom" },

  // 📊 Veri Bilimi & Analitik
  { name: "Veri Bilimi için Temel İstatistik", issuer: "BTK Akademi", category: "Veri & Analitik" },
  { name: "Matematik 101", issuer: "BTK Akademi", category: "Veri & Analitik" },
  { name: "Veri Okuryazarlığı", issuer: "BTK Akademi", category: "Veri & Analitik" },
  { name: "Veri Okuryazarlığı Eğitimi", issuer: "23 | Yirmi Üç", category: "Veri & Analitik" },
  { name: "Doküman Tipleri ve Veri Formatları", issuer: "BTK Akademi", category: "Veri & Analitik" },
  { name: "Datathon 2025 Veri Yarışması", issuer: "BTK Akademi", category: "Veri & Analitik" },
  { name: "Web Tabanlı Coğrafi Bilgi Sistemleri (GIS)", issuer: "BTK Akademi", category: "Veri & Analitik" },

  // ⚙️ Proje Yönetimi & Standartlar
  { name: "Proje Yönetimi", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Proje Yönetim Temelleri", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Proje ve Risk Yönetimi", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Program ve Portföy Yönetimi", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Uluslararası İş Analizi Metodolojisi ve Teknikleri", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Kamu İhale Kanunu", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Sözleşme Yönetimi Hukuku", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "TS EN 50600 Veri Merkezi Tesisleri Standardı", issuer: "BTK Akademi", category: "Proje & Yönetim" },
  { name: "Sitescope ile Sistem İzleme", issuer: "BTK Akademi", category: "Proje & Yönetim" },

  // ⚖️ Hukuk & Fikri Mülkiyet
  { name: "Patent ve Faydalı Modellerin Korunması", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "Markaların Korunması", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "Tasarımların Korunması", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "Coğrafi İşaretlerin Korunması", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "Fikri ve Sınai Mülkiyet Hakları", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "KVKK, GDPR Eğitim Seti", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "Bilişim Hukuku", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "İnternet Alan Adları Hukuku", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },
  { name: "İnsan Haklarına Giriş", issuer: "BTK Akademi", category: "Hukuk & Fikri Mülkiyet" },

  // 📈 Girişimcilik & Finans
  { name: "Girişimcilik Temelleri", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Uygulamalı İş Modeli Üretimi", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Şirket Değerleme ve Yatırım Süreçleri", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Pazar Araştırması ve Fiyatlandırma Stratejileri", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Finansal Piyasalara Giriş", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Finansal Okuryazarlık", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Finansal Okuryazarlık Eğitimi", issuer: "23 | Yirmi Üç", category: "Girişimcilik & Finans" },
  { name: "E-Ticarete Giriş", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Google Dijital Pazarlama Temelleri", issuer: "Google", category: "Girişimcilik & Finans" },
  { name: "Sosyal Medyada Marka İletişimi ve İşbirlikleri", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },
  { name: "Satış ve Pazarlama Yönetimi", issuer: "BTK Akademi", category: "Girişimcilik & Finans" },

  // 🎓 Etkinlik & Zirveler
  { name: "Ankara AI Hackathon", issuer: "Teknopark Ankara (Şub 2026)", category: "Etkinlik & Zirveler" },
  { name: "Karadeniz Bilişim Zirvesi KBZ'26", issuer: "KTÜ YBS Kulübü (Nis 2026)", category: "Etkinlik & Zirveler" },
  { name: "Ford Otosan Kariyer ve Gelişim Haftası", issuer: "Ford Otosan (Nis 2026)", category: "Etkinlik & Zirveler" },
  { name: "Yapay Zeka Zirvesi 2024", issuer: "Türkiye Girişimcilik Vakfı", category: "Etkinlik & Zirveler" },
  { name: "DATA&AI SUMMIT", issuer: "KTÜ Yapay Zeka Topluluğu", category: "Etkinlik & Zirveler" },
  { name: "DevFest Trabzon", issuer: "GDG Trabzon (Ara 2024)", category: "Etkinlik & Zirveler" },
  { name: "Android Atölyesi", issuer: "GDG Trabzon (May 2025)", category: "Etkinlik & Zirveler" },
  { name: "8. Yazılım Günü", issuer: "KTÜ Yazılım Kulübü", category: "Etkinlik & Zirveler" },
  { name: "Gençlik Vizyon Çalıştayı", issuer: "Gençlik ve Spor Bakanlığı", category: "Etkinlik & Zirveler" },
  { name: "Hüyük Gençlik Kampı", issuer: "Gençlik ve Spor Bakanlığı", category: "Etkinlik & Zirveler" },
  { name: "21. Yüzyılda Sahadan Akademiye Uluslararası Terörizm", issuer: "Türk Dünyası Gençlik Vakfı", category: "Etkinlik & Zirveler" },
  { name: "Türk Kültür Mitolojisinde Türeyiş-Yeniden Doğuş Sembolü: Kurt", issuer: "Türk Dünyası Gençlik Vakfı", category: "Etkinlik & Zirveler" },

  // 🌱 Kişisel Gelişim & Soft Skills
  { name: "Etkili İletişim Stratejileri", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Topluluk Önünde Konuşma ve Sunum Teknikleri", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Girişimcilikte Sunum Teknikleri ve İletişim Yönetimi", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "İkna Becerileri", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Problem Çözme Teknikleri", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Ekip Kurma ve Yönetme", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Mülakat Teknikleri", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Kariyerde Hedef Belirleme", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Kariyeri Tehdit Eden Yaklaşımlar", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "Stresle Başa Çıkma ve Bilinçli Farkındalık", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "İletişim ve Network Yönetimi", issuer: "BTK Akademi", category: "Kişisel Gelişim" },
  { name: "LinkedIn'de Etkili Profil Oluşturma", issuer: "BTK Akademi", category: "Kişisel Gelişim" }
];

export const CertificationVault: React.FC = () => {
  const { playSound } = useCyberSound();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("ALL");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    certificationsData.forEach((c) => cats.add(c.category));
    return ["ALL", ...Array.from(cats)];
  }, []);

  const filteredCerts = useMemo(() => {
    return certificationsData.filter((cert) => {
      const matchCat = selectedCat === "ALL" || cert.category === selectedCat;
      const matchSearch =
        cert.name.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase()) ||
        cert.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCat]);

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-neon-blue/10 border border-neon-blue/40 rounded-xl text-neon-blue">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white tracking-wide">
              120+ SERTİFİKA, AKREDİTASYON & ZİRVE KASASI
            </h3>
            <p className="text-xs font-mono text-white/50">
              BTK AKADEMİ · SİBER VATAN · SHGM İHA-1 · TUA · TÜBİTAK · T3 VAKFI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-white/60">
          <span className="px-3 py-1.5 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-lg font-bold">
            {certificationsData.length} TOPLAM AKREDİTASYON
          </span>
        </div>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sertifika adı, kurum (BTK, Siber Vatan, SHGM...) veya yetkinlik ara..."
            className="w-full pl-10 pr-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-neon-blue transition-all"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                playSound("click");
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                selectedCat === cat
                  ? "border-neon-blue bg-neon-blue/20 text-neon-blue font-bold shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                  : "border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              {cat} {cat === "ALL" && `(${certificationsData.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(idx * 0.02, 0.4) }}
            className="p-4 bg-white/[0.03] border border-white/10 hover:border-neon-blue/40 rounded-xl transition-all group relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">
                  {cert.category}
                </span>
                <h4 className="text-sm font-semibold text-white group-hover:text-neon-blue transition-colors leading-snug pt-1">
                  {cert.name}
                </h4>
                <p className="text-xs font-mono text-neon-blue/70 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> {cert.issuer}
                </p>
              </div>

              <div className="p-1.5 bg-white/5 rounded-lg text-white/30 group-hover:text-neon-blue group-hover:bg-neon-blue/10 transition-colors shrink-0">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
