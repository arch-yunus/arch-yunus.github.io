import { ArrowLeft, ArrowUpRight, Github, Layers, ShieldCheck, Terminal } from "lucide-react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { profileData } from "@/lib/data";

export default function ProjectDetail() {
  const [, params] = useRoute("/operations/:projectId");
  const project = profileData.featured_projects.find((item) => item.name.toLowerCase() === params?.projectId?.toLowerCase());

  if (!project) {
    return (
      <div className="mx-auto max-w-xl py-24 text-center">
        <div className="section-eyebrow justify-center">Kayıt bulunamadı</div>
        <h1 className="mt-5 text-4xl font-semibold">Bu proje burada yok.</h1>
        <Link href="/operations" className="button-primary mt-8">Projeler sayfasına dön <ArrowLeft size={16} /></Link>
      </div>
    );
  }

  const architecture = project.architecture || ["Modüler yapı", "Veri işleme katmanı", "Otomasyon akışları", "Dokümante API"];
  const security = project.security || ["Güvenli varsayılanlar", "Girdi doğrulama", "İzlenebilirlik", "Sürekli iyileştirme"];

  return (
    <div className="space-y-12 pb-12">
      <Link href="/operations" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-[#b9f36b]"><ArrowLeft size={16} /> Projelere dön</Link>

      <header className="grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="section-eyebrow">{project.language} · Açık kaynak proje</div>
          <h1 className="mt-5 text-5xl font-semibold leading-[.98] tracking-tight md:text-7xl">{project.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">{project.description}</p>
          <div className="hero-actions">
            <a href={project.url} target="_blank" rel="noreferrer" className="button-primary">GitHub'da incele <Github size={16} /></a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 font-mono text-xs text-white/45"><span className="h-2 w-2 rounded-full bg-[#b9f36b]" /> Aktif kayıt</span>
          </div>
        </motion.div>
        <motion.div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.04]" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .08 }}>
          <img src={project.image} alt={project.name} className="aspect-video h-full w-full object-cover opacity-85" />
        </motion.div>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        <section className="rounded-2xl border border-white/10 bg-white/[.035] p-7 lg:col-span-2">
          <div className="flex items-center gap-3"><Layers size={19} className="text-[#b9f36b]" /><h2 className="text-2xl font-semibold">Nasıl çalışıyor?</h2></div>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            <div><h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-white/45"><Terminal size={14} /> Teknik yapı</h3><ul className="mt-4 space-y-3">{architecture.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/60"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b9f36b]" />{item}</li>)}</ul></div>
            <div><h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-white/45"><ShieldCheck size={14} /> Kalite yaklaşımı</h3><ul className="mt-4 space-y-3">{security.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/60"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f08a7e]" />{item}</li>)}</ul></div>
          </div>
        </section>
        <aside className="rounded-2xl border border-white/10 bg-[#b9f36b]/[.06] p-7">
          <h2 className="text-xl font-semibold">Proje özeti</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><dt className="text-white/45">Dil</dt><dd className="font-mono text-[#b9f36b]">{project.language}</dd></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><dt className="text-white/45">Yıldız</dt><dd className="font-mono text-white">{project.stars}</dd></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><dt className="text-white/45">Fork</dt><dd className="font-mono text-white">{project.forks}</dd></div>
          </dl>
          <a href={project.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b9f36b] hover:text-white">Kaynak koduna git <ArrowUpRight size={15} /></a>
        </aside>
      </div>
    </div>
  );
}
