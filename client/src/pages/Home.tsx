
// @ts-nocheck
import { profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useVault } from "@/contexts/VaultContext";
import { Zap, Activity, Microscope } from "lucide-react";
import { OperationLogs } from "@/components/cyber-ui/OperationLogs";
import { CyberGlobe } from "@/components/cyber-ui/CyberGlobe";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const FullText = "INITIALIZING OPERATOR PROFILE...";

  const { isSecureMode, metrics } = useVault();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(FullText.slice(0, i + 1));
      i++;
      if (i > FullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[60vh] gap-12">
      {/* Hero Header */}
      <div className="space-y-6">
        <div className="font-mono text-neon-blue/80 text-sm tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-neon-blue animate-pulse"></span>
          {typedText}<span className="animate-blink">_</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-display)] font-bold leading-none text-white mix-blend-screen">
          ARCHITECT.<br />
          STRATEGIST.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-red animate-gradient-x">METAL YAKA.</span>
        </h1>

        <p className="max-w-2xl text-lg text-white/60 font-mono leading-relaxed border-l-2 border-neon-blue/30 pl-6">
          {profileData.personal.tagline}
        </p>

        <div className="flex justify-center py-12">
          <CyberGlobe />
        </div>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/arsenal" className="block">
          <div className="p-6 border border-white/10 bg-white/5 cyber-clip-tl group hover:bg-neon-blue/5 hover:border-neon-blue/40 transition-all cursor-pointer h-full">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-6 h-6 text-neon-green" />
              <span className="font-mono text-xs text-neon-green">ACTIVE</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-white group-hover:text-neon-blue mb-1 transition-colors">
              CYBERNETICS
            </h3>
            <p className="text-sm text-white/50 font-mono">
              System architecture & AI Defense protocols online.
            </p>
          </div>
        </Link>

        <Link href="/intelligence" className="block">
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-neon-red/5 hover:border-neon-red/40 transition-all cursor-pointer h-full">
            <div className="flex items-center justify-between mb-4">
              <Cpu className="w-6 h-6 text-neon-red" />
              <span className="font-mono text-xs text-neon-red">OVERCLOCKED</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-white group-hover:text-neon-red mb-1 transition-colors">
              INTELLIGENCE
            </h3>
            <p className="text-sm text-white/50 font-mono">
              Neural networks & Optimization algorithms running.
            </p>
          </div>
        </Link>

        <Link href="/operations" className="block">
          <div className={`p-6 border cyber-clip-br group transition-all cursor-pointer h-full ${isSecureMode ? 'border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10' : 'border-white/10 bg-white/5 hover:bg-neon-blue/5 hover:border-neon-blue/40'}`}>
            <div className="flex items-center justify-between mb-4">
              <Terminal className={`w-6 h-6 ${isSecureMode ? 'text-yellow-500' : 'text-neon-blue'}`} />
              <span className={`font-mono text-xs ${isSecureMode ? 'text-yellow-500' : 'text-neon-blue'}`}>{isSecureMode ? 'SECURE_UPLINK' : 'DEPLOYED'}</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-white group-hover:text-neon-blue mb-1 transition-colors">
              OPERATIONS
            </h3>
            <p className="text-sm text-white/50 font-mono">
              {profileData.github_stats.public_repos} systems accessible via {isSecureMode ? 'encrypted' : 'public'} uplink.
            </p>
          </div>
        </Link>
      </div>

      {/* 5 Flagship Ventures Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white tracking-wide">
              VENTURES & AR-GE MİMARİLERİ
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">5 AKTİF İNOVASYON EKOSİSTEMİ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileData.ventures.map((venture, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-neon-blue/40 hover:bg-neon-blue/[0.04] transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neon-blue border border-white/5">
                  {venture.category}
                </span>
                <span className="text-[10px] font-mono text-white/40">{venture.period}</span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors mt-3">
                {venture.name}
              </h4>
              <p className="text-xs font-mono text-emerald-400 mt-0.5">{venture.role}</p>
              
              <p className="text-xs text-white/60 font-mono mt-3 leading-relaxed line-clamp-3">
                {venture.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                {venture.stack.slice(0, 3).map((st) => (
                  <span key={st} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flagship Direct Jump Pills */}
      <div className="p-4 bg-white/5 border border-white/10 rounded-lg flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-neon-blue">
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
          <span>TACTICAL_PRIORITIES:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/arsenal" className="px-3 py-1 bg-black/60 hover:bg-neon-blue/10 border border-white/10 hover:border-neon-blue/50 text-xs font-mono text-white/80 hover:text-neon-blue rounded transition-all">
            TULPAR // UAV FLIGHT DECK
          </Link>
          <Link href="/arsenal" className="px-3 py-1 bg-black/60 hover:bg-yellow-500/10 border border-white/10 hover:border-yellow-500/50 text-xs font-mono text-white/80 hover:text-yellow-500 rounded transition-all">
            BUDAK // %80 PRUNING LAB
          </Link>
          <Link href="/doctrine" className="px-3 py-1 bg-black/60 hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/50 text-xs font-mono text-white/80 hover:text-neon-green rounded transition-all">
            ANKA_SILICON // DISTILLATION
          </Link>
          <Link href="/intelligence" className="px-3 py-1 bg-black/60 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/50 text-xs font-mono text-white/80 hover:text-sky-500 rounded transition-all">
            120+ SERTİFİKA KASASI
          </Link>
        </div>
      </div>

      {/* Vanguard Dashboard (Secure Mode Only) */}
      {isSecureMode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-yellow-500/5 border border-yellow-500/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none"></div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500/60 uppercase">
              <Zap className="w-3 h-3" /> Core_Frequency
            </div>
            <div className="text-2xl font-[family-name:var(--font-display)] text-white">
              5.2 <span className="text-xs text-white/40 italic">GHz</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500/60 uppercase">
              <Activity className="w-3 h-3" /> Neural_Latency
            </div>
            <div className="text-2xl font-[family-name:var(--font-display)] text-white">
              {metrics?.latency || '12ms'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500/60 uppercase">
              <Microscope className="w-3 h-3" /> Threat_Level
            </div>
            <div className="text-2xl font-[family-name:var(--font-display)] text-white">
              {metrics?.threatLevel || 'LOW'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500/60 uppercase">
              <Shield className="w-3 h-3" /> Integrity
            </div>
            <div className="text-2xl font-[family-name:var(--font-display)] text-white">
              {metrics?.shieldStatus || '98.4%'}
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 p-2">
            <div className="w-1 h-1 bg-yellow-500 animate-ping"></div>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-6">
        <Link href="/operations" className="px-8 py-4 bg-neon-blue text-black font-bold font-[family-name:var(--font-display)] tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2">
          OPERASYONLARI İNCELE <ArrowRight className="w-4 h-4" />
        </Link>

        <a href={profileData.personal.github_url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-mono tracking-wider hover:bg-white/10 transition-all flex items-center gap-2">
          GITHUB REPOLARI ({profileData.github_stats.public_repos}) <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Operation Logs Overlay */}
      <div className="fixed bottom-24 right-6 w-64 hidden xl:block pointer-events-auto">
        <OperationLogs />
      </div>
    </div>
  );
}
