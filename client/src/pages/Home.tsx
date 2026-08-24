import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Cpu, Github, Linkedin, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { profileData } from "@/lib/data";

const focusAreas = [
  {
    icon: Cpu,
    label: "Yapay zekâ",
    title: "Modelleri ürüne dönüştürüyorum.",
    text: "LLM, model optimizasyonu ve bilgi sistemlerini gerçek problemlere dokunan ürünlere bağlıyorum.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Ürün & mimari",
    title: "Karmaşık sistemleri sadeleştiriyorum.",
    text: "Fikirden çalışan prototipe; ölçülebilir, sürdürülebilir ve anlaşılır sistemler kuruyorum.",
  },
  {
    icon: Sparkles,
    label: "Merak & üretim",
    title: "Her hafta yeni bir şey öğreniyorum.",
    text: "Projeler, yazılar ve sertifikalarla sürekli gelişen bir mühendislik pratiği oluşturuyorum.",
  },
];

export default function Home() {
  const certificateCount = Object.values(profileData.certificates).reduce((total, group) => total + group.length, 0);
  const selectedProjects = profileData.featured_projects.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Merhaba, ben Bahattin Yunus
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Fikirleri <span className="accent">çalışan</span> sistemlere dönüştürüyorum.
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Yazılım mühendisliği öğrencisi, yapay zekâ meraklısı ve sistem tasarımcısıyım. İnsanların işini kolaylaştıran, geleceğe hazır teknolojiler üretmek için çalışıyorum.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <Link href="/operations" className="button-primary">
              Projelerimi gör <ArrowRight size={16} />
            </Link>
            <Link href="/comms" className="button-secondary">
              Birlikte çalışalım <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="hero-note"><span /> Şu anda yeni projelere ve iyi fikirlere açığım.</div>
        </div>

        <motion.aside
          className="hero-aside"
          initial={{ opacity: 0, scale: .97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .7, delay: .12 }}
        >
          <div className="profile-card">
            <div className="profile-image">
              <img src={profileData.personal.avatar_url} alt="Bahattin Yunus Çetin" />
              <div className="profile-overlay">
                <div>
                  <strong>Bahattin Yunus Çetin</strong>
                  <span>AI · Yazılım · Sistem mimarisi</span>
                </div>
                <div className="profile-badge"><Sparkles size={20} /></div>
              </div>
            </div>
            <div className="profile-meta">
              <div><strong>{profileData.github_stats.public_repos}+</strong><span>Açık kaynak proje</span></div>
              <div><strong>{certificateCount}+</strong><span>Sertifika</span></div>
              <div><strong>2026</strong><span>Aktif üretim</span></div>
            </div>
          </div>
        </motion.aside>
      </section>

      <section aria-labelledby="focus-title">
        <div className="section-heading">
          <div>
            <div className="section-eyebrow">Odak alanlarım</div>
            <h2 id="focus-title">Teknolojiye insan tarafından bakıyorum.</h2>
          </div>
          <p>Strateji, mühendislik ve öğrenme merakını aynı masada buluşturan bir çalışma biçimi.</p>
        </div>

        <div className="project-preview-grid">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.label}
                className="preview-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .3 }}
                transition={{ duration: .45, delay: index * .08 }}
              >
                <div>
                  <div className="preview-card-top"><span>{area.label}</span><Icon size={18} /></div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
                <span className="preview-card-link">Daha fazlası <ArrowUpRight size={14} /></span>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <div className="section-eyebrow">Seçilmiş işler</div>
            <h2 id="projects-title">Masamdan çıkan bazı şeyler.</h2>
          </div>
          <Link href="/operations" className="button-secondary">Tüm projeler <ArrowRight size={15} /></Link>
        </div>

        <div className="project-preview-grid">
          {selectedProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="preview-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .45, delay: index * .08 }}
            >
              <div>
                <div className="preview-card-top"><span>0{index + 1} · {project.language}</span><ArrowUpRight size={17} /></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <a className="preview-card-link" href={project.url} target="_blank" rel="noreferrer">GitHub'da incele <Github size={14} /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-strip" aria-labelledby="about-title">
        <h2 id="about-title">İyi teknoloji, iyi sorularla başlar.</h2>
        <div>
          <p>{profileData.personal.bio.split("\n")[0]}</p>
          <p>Bugün odağım; yapay zekâ sistemleri, siber güvenlik ve karmaşık teknolojileri herkes için daha anlaşılır hâle getiren ürünler.</p>
          <div className="about-points">
            <span>AI & LLM</span>
            <span>Sistem mimarisi</span>
            <span>Siber güvenlik</span>
            <span>Açık kaynak</span>
          </div>
          <div className="hero-actions">
            <Link href="/doctrine" className="button-secondary">Hikâyemi oku <ArrowRight size={15} /></Link>
            <a href={profileData.personal.linkedin_url} target="_blank" rel="noreferrer" className="button-secondary"><Linkedin size={15} /> LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
