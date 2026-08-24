import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { profileData } from "@/lib/data";

export function Intelligence() {
  const [searchTerm, setSearchTerm] = useState("");
  const posts = useMemo(() => profileData.blog_posts.filter((post) => `${post.title} ${post.summary}`.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);

  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col justify-between gap-7 border-b border-white/10 pb-10 md:flex-row md:items-end">
        <div className="max-w-2xl"><div className="section-eyebrow">Notlar & düşünceler</div><h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Yazılar</h1><p className="mt-5 text-base leading-8 text-white/55 md:text-lg">Yapay zekâ, teknoloji kültürü ve geleceği kurma biçimlerimiz üzerine düşündüğüm yer.</p></div>
        <label className="relative block w-full md:w-72"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" size={16} /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Yazılarda ara..." className="w-full rounded-full border border-white/12 bg-white/[.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#b9f36b]/50" /></label>
      </header>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition hover:border-[#b9f36b]/40 hover:bg-white/[.05] md:grid-cols-[190px_1fr_auto] md:items-center md:p-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .4, delay: index * .06 }}
          >
            <div className="h-32 overflow-hidden rounded-xl bg-[#19201d] md:h-28"><img src={post.image} alt="" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /></div>
            <div><div className="flex items-center gap-2 text-xs text-[#b9f36b]"><BookOpen size={13} /> {post.date}</div><h2 className="mt-3 text-xl font-semibold text-white transition group-hover:text-[#b9f36b]">{post.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">{post.summary}</p></div>
            <ArrowUpRight className="hidden text-white/30 transition group-hover:text-[#b9f36b] md:block" size={20} />
          </motion.a>
        ))}
        {posts.length === 0 && <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center text-white/45">Aramanla eşleşen bir yazı bulunamadı.</div>}
      </div>
    </div>
  );
}
