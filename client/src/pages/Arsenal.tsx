import { motion } from "framer-motion";
import { BrainCircuit, Code2, Container, ShieldCheck, Wrench } from "lucide-react";
import { profileData } from "@/lib/data";

const groups = [
  { title: "Yapay zekâ & makine öğrenmesi", icon: BrainCircuit, color: "#b9f36b", items: profileData.ai_tools.map((item) => item.name) },
  { title: "Diller", icon: Code2, color: "#f08a7e", items: profileData.skills.languages },
  { title: "Framework & kütüphaneler", icon: Container, color: "#b9f36b", items: profileData.skills.frameworks },
  { title: "Araçlar & altyapı", icon: Wrench, color: "#f08a7e", items: profileData.skills.tools },
];

export default function Arsenal() {
  return (
    <div className="space-y-12 pb-12">
      <header className="max-w-3xl">
        <div className="section-eyebrow">Araç kutum</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Yetenekler</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 md:text-lg">Bir teknoloji listesinden fazlası: problemi doğru çerçeveleyip, doğru aracı doğru yerde kullanma alışkanlığı.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:border-[#b9f36b]/40 hover:bg-white/[.05]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .4, delay: index * .07 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl" style={{ color: group.color, background: `${group.color}12` }}><Icon size={20} /></span><h2 className="text-xl font-semibold">{group.title}</h2></div>
                <span className="font-mono text-[10px] text-white/30">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-xs text-white/65">{item}</span>)}</div>
            </motion.article>
          );
        })}
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#b9f36b]/[.05] p-7 md:p-9">
        <div className="flex items-start gap-4"><ShieldCheck className="mt-1 shrink-0 text-[#b9f36b]" size={22} /><div><h2 className="text-2xl font-semibold">Çalışma prensibim</h2><p className="mt-3 max-w-3xl leading-7 text-white/55">Teknoloji benim için gösteriş değil, kaldıraç. Önce problemi ve kullanıcıyı anlıyor; sonra ölçülebilir bir çözüm tasarlıyor, küçük bir prototiple doğruluyor ve sürdürülebilir bir sisteme dönüştürüyorum.</p></div></div>
        <div className="mt-7 flex flex-wrap gap-2">{profileData.skills.concepts.map((concept) => <span key={concept} className="rounded-full border border-[#b9f36b]/25 px-3 py-2 text-xs text-[#ccecae]">{concept}</span>)}</div>
      </section>
    </div>
  );
}
