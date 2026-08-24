import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Filter, GitFork, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { profileData } from "@/lib/data";

const filters = ["Hepsi", "Yapay zekâ", "Siber güvenlik", "Robotik", "Web & araçlar"];

const filterMatchers: Record<string, RegExp> = {
  "Yapay zekâ": /ai|antenna|poseidon|neuro|libramind|llm|zeka|deep|model|paint|math/i,
  "Siber güvenlik": /cyber|security|prison|btk|hack|siber/i,
  Robotik: /robot|autonomous|iha|auv|neptune|deniz|cizgi|sürü|ika/i,
  "Web & araçlar": /route|dev|university|milli|noaa|meta|tool|engineer/i,
};

export default function Operations() {
  const [filter, setFilter] = useState("Hepsi");
  const projects = useMemo(() => {
    if (filter === "Hepsi") return profileData.featured_projects;
    const matcher = filterMatchers[filter];
    return profileData.featured_projects.filter((project) => matcher.test(`${project.name} ${project.description}`));
  }, [filter]);

  return (
    <div className="space-y-10 pb-12">
      <header className="max-w-3xl">
        <div className="section-eyebrow">Seçilmiş işler</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Projeler</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
          Yapay zekâ, optimizasyon ve güvenlik ekseninde geliştirdiğim açık kaynak çalışmalar. Her proje, bir soruyu daha iyi çözme denemesi.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
        <div className="mr-2 flex items-center gap-2 text-xs text-white/40"><Filter size={14} /> Filtrele</div>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-xs transition ${filter === item ? "border-[#b9f36b] bg-[#b9f36b] text-[#0b0d0f]" : "border-white/12 bg-white/[.03] text-white/55 hover:border-white/30 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
        <span className="ml-auto text-xs text-white/35">{projects.length} proje</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition hover:-translate-y-1 hover:border-[#b9f36b]/45 hover:bg-[#b9f36b]/[.045]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
            transition={{ duration: .4, delay: Math.min(index * .035, .22) }}
          >
            <div className="relative h-48 overflow-hidden bg-[#19201d]">
              <img src={project.image} alt={project.name} className="h-full w-full object-cover opacity-75 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0f] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0b0d0f]/70 px-3 py-1 font-mono text-[10px] text-[#b9f36b] backdrop-blur">{project.language}</span>
              <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/40">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#b9f36b]">{project.name}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">{project.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/35">
                <div className="flex gap-3"><span className="inline-flex items-center gap-1"><Star size={13} /> {project.stars}</span><span className="inline-flex items-center gap-1"><GitFork size={13} /> {project.forks}</span></div>
                <div className="flex items-center gap-3">
                  <Link href={`/operations/${project.name.toLowerCase()}`} className="inline-flex items-center gap-1 text-white/65 hover:text-[#b9f36b]">Detay <ArrowUpRight size={13} /></Link>
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/65 hover:text-[#b9f36b]" aria-label={`${project.name} GitHub`}>Kaynak <ExternalLink size={13} /></a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {projects.length === 0 && <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center text-white/45">Bu filtrede henüz proje görünmüyor.</div>}
    </div>
  );
}
