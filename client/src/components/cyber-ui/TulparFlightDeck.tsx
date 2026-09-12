import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, Compass, Activity, Shield, Navigation, Wind, Radio, Zap, Play, Pause } from "lucide-react";
import { useCyberSound } from "@/hooks/use-cyber-sound";

export const TulparFlightDeck: React.FC = () => {
  const { playSound } = useCyberSound();
  const [isSimulating, setIsSimulating] = useState(true);
  const [altitude, setAltitude] = useState(1420); // meters
  const [speed, setSpeed] = useState(185); // km/h
  const [battery, setBattery] = useState(87); // %
  const [pitch, setPitch] = useState(2.4);
  const [roll, setRoll] = useState(-1.1);
  const [heading, setHeading] = useState(42);
  const [selectedDrone, setSelectedDrone] = useState<"TULPAR-S1" | "ANKA-EVTOL" | "KUZGUN-STRIKE">("TULPAR-S1");

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setAltitude((prev) => +(prev + (Math.random() * 6 - 3)).toFixed(1));
      setSpeed((prev) => +(prev + (Math.random() * 4 - 2)).toFixed(1));
      setPitch((prev) => +(prev + (Math.random() * 0.8 - 0.4)).toFixed(2));
      setRoll((prev) => +(prev + (Math.random() * 0.6 - 0.3)).toFixed(2));
      setHeading((prev) => Math.round((prev + (Math.random() * 2 - 1) + 360) % 360));
    }, 800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="relative rounded-2xl border border-neon-blue/30 bg-black/80 backdrop-blur-xl p-6 md:p-8 overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)]">
      {/* Background Grid & Scanlines */}
      <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-neon-blue/10 border border-neon-blue/40 rounded-xl text-neon-blue animate-pulse">
            <Plane className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 bg-neon-blue/20 text-neon-blue rounded border border-neon-blue/30">
                TULPAR AERO-DYNAMICS
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> OTONOM SİSTEM AKTİF
              </span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white tracking-wide mt-1">
              UAV / eVTOL TELEMETRİ FLIGHT DECK
            </h3>
          </div>
        </div>

        {/* Drone selector & Simulation Toggle */}
        <div className="flex items-center gap-2">
          {(["TULPAR-S1", "ANKA-EVTOL", "KUZGUN-STRIKE"] as const).map((drone) => (
            <button
              key={drone}
              onClick={() => {
                setSelectedDrone(drone);
                playSound("click");
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-all ${
                selectedDrone === drone
                  ? "border-neon-blue bg-neon-blue/20 text-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.3)]"
                  : "border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              {drone}
            </button>
          ))}

          <button
            onClick={() => {
              setIsSimulating(!isSimulating);
              playSound("click");
            }}
            className="p-2 border border-white/20 rounded hover:border-neon-blue hover:text-neon-blue transition-colors text-white/70"
            title={isSimulating ? "Telemetriyi Duraklat" : "Telemetriyi Başlat"}
          >
            {isSimulating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main HUD Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Primary Flight Instruments */}
        <div className="lg:col-span-8 space-y-6">
          {/* Artificial Horizon / Flight Gauge */}
          <div className="relative h-64 rounded-xl border border-white/15 bg-black/60 overflow-hidden flex items-center justify-center">
            {/* Horizon Graphic */}
            <motion.div
              animate={{ rotate: roll, y: pitch * 5 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="absolute w-[200%] h-[200%] flex flex-col pointer-events-none"
            >
              <div className="w-full h-1/2 bg-sky-950/40 border-b-2 border-neon-blue/80 flex items-end justify-center pb-2">
                <span className="text-[10px] font-mono text-neon-blue/60 tracking-widest">SKY // +PITCH</span>
              </div>
              <div className="w-full h-1/2 bg-amber-950/30 flex items-start justify-center pt-2">
                <span className="text-[10px] font-mono text-amber-500/60 tracking-widest">GROUND // -PITCH</span>
              </div>
            </motion.div>

            {/* Crosshair & Pitch Ladder */}
            <div className="relative z-10 flex flex-col items-center pointer-events-none">
              <div className="w-16 h-0.5 bg-neon-green shadow-[0_0_8px_#39ff14]" />
              <div className="w-2 h-2 rounded-full border border-neon-green my-2" />
              <div className="w-16 h-0.5 bg-neon-green shadow-[0_0_8px_#39ff14]" />
            </div>

            {/* Digital Speed Tape (Left) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 border border-white/20 p-2 rounded text-right font-mono">
              <div className="text-[10px] text-white/40">AIRSPEED</div>
              <div className="text-xl font-bold text-neon-blue">{speed}</div>
              <div className="text-[9px] text-white/30">KM/H</div>
            </div>

            {/* Digital Altitude Tape (Right) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 border border-white/20 p-2 rounded text-left font-mono">
              <div className="text-[10px] text-white/40">ALTITUDE</div>
              <div className="text-xl font-bold text-emerald-400">{altitude}</div>
              <div className="text-[9px] text-white/30">METERS MSL</div>
            </div>

            {/* Heading Compass (Top) */}
            <div className="absolute top-3 px-4 py-1 bg-black/80 border border-neon-blue/40 rounded-full font-mono text-xs text-neon-blue flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-neon-blue" />
              <span>HDG {heading}° NNE</span>
            </div>

            {/* Autopilot Banner (Bottom) */}
            <div className="absolute bottom-3 px-4 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded font-mono text-[10px] text-neon-blue flex items-center gap-2">
              <Activity className="w-3 h-3" />
              <span>UE5 PHYSICS ENGINE · ROS2 WAYPOINT TRACKING · ACCURACY 99.4%</span>
            </div>
          </div>

          {/* Submetrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                <Wind className="w-3.5 h-3.5 text-neon-blue" /> RÜZGAR HIZI
              </div>
              <div className="text-lg font-bold font-mono text-white mt-1">14.2 <span className="text-xs font-normal text-white/40">kts</span></div>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                <Radio className="w-3.5 h-3.5 text-emerald-400" /> SİNYAL GÜCÜ
              </div>
              <div className="text-lg font-bold font-mono text-emerald-400 mt-1">-58 <span className="text-xs font-normal text-white/40">dBm</span></div>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                <Zap className="w-3.5 h-3.5 text-yellow-400" /> BATARYA / GÜÇ
              </div>
              <div className="text-lg font-bold font-mono text-yellow-400 mt-1">{battery}% <span className="text-xs font-normal text-white/40">24.2V</span></div>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                <Shield className="w-3.5 h-3.5 text-neon-green" /> PROTOKOL
              </div>
              <div className="text-lg font-bold font-mono text-neon-green mt-1">MAVLink2</div>
            </div>
          </div>
        </div>

        {/* Right: Flight Computer & Architecture Capabilities */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
            <h4 className="text-sm font-mono font-semibold text-neon-blue uppercase tracking-wider flex items-center gap-2">
              <Navigation className="w-4 h-4" /> Uçuş Mimarisi Yetkinlikleri
            </h4>
            
            <ul className="space-y-3 font-mono text-xs text-white/70">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
                <span><strong>Unreal Engine 5:</strong> Fizik tabanlı 6-DoF aerodinamik ve hava akımı simülasyonu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>ROS2 Entegrasyonu:</strong> Düşük gecikmeli düğüm iletişimi ve otonom engelden kaçınma.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                <span><strong>SHGM İHA-1 Lisanslı:</strong> Sahada bizzat test edilmiş otonom kalkış, seyrüsefer ve iniş.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 shrink-0" />
                <span><strong>Security by Design:</strong> Şifreli telemetri ve GPS Spoofing dayanıklılığı.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>MİMARİ: Tulpar Core v3</span>
              <span className="text-emerald-400">STATUS: HAZIR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
