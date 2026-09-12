// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Send, X, Terminal, ArrowRight, Shield, RefreshCw } from 'lucide-react';
import { useCyberSound } from '@/hooks/use-cyber-sound';
import { useLocation } from 'wouter';
import { profileData } from '@/lib/data';

interface Message {
    sender: 'vanguard' | 'user';
    text: string;
    action?: { label: string; path: string };
}

export const VanguardAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'vanguard',
            text: `VANGUARD_AI // v4.5 AKTİF.\nBen Bahattin Yunus Çetin'in otonom zeka asistanıyım. Projeler, teknik mimariler, Anka Silicon Dynamics veya iletişim kanalları hakkında soru sorabilirsiniz.`,
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const { playSound } = useCyberSound();
    const [, setLocation] = useLocation();

    const quickPrompts = [
        { label: "👤 Bahattin Yunus Kimdir?", query: "Bahattin Yunus Çetin kimdir?" },
        { label: "🦅 Anka Silicon Dynamics", query: "Anka Silicon Dynamics nedir?" },
        { label: "🐝 BeeRoute & Trabzon Protokolü", query: "BeeRoute ve Trabzon Protokolü nedir?" },
        { label: "🛡 Siber Vatan & Savunma", query: "Siber güvenlik ve Siber Vatan tecrübesi nedir?" },
        { label: "⚡ Cephanelik & Yetkinlikler", query: "Hangi dilleri ve teknolojileri kullanıyor?" },
    ];

    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const generateResponse = (query: string): { text: string; action?: { label: string; path: string } } => {
        const q = query.toLowerCase().trim();

        if (q.includes("kimdir") || q.includes("kim") || q.includes("who") || q.includes("biyografi")) {
            return {
                text: "Bahattin Yunus Çetin; Karadeniz Teknik Üniversitesi Yazılım Mühendisliği öğrencisi, Anka Silicon Dynamics & Budak kurucusu ve Siber Vatanseverdir. LLM optimizasyonu, donanım bağımsız zeka ekosistemleri ve karmaşık sistem mimarileri üzerine çalışmaktadır.",
                action: { label: "Doktrini İncele", path: "/doctrine" }
            };
        }

        if (q.includes("anka") || q.includes("silicon") || q.includes("distill") || q.includes("llm")) {
            return {
                text: "Anka Silicon Dynamics: Türkiye'nin yapay zeka egemenliğini tesis etmek amacıyla 'donanım bağımsız' zeka ekosistemi inşa ediyor. Knowledge Distillation ile 7B/8B modelleri devasa modellerin yetenekleriyle donatıp uç cihazlarda çalıştırılabilir kılıyor.",
                action: { label: "Operasyonları Gör", path: "/operations" }
            };
        }

        if (q.includes("bee") || q.includes("route") || q.includes("trabzon") || q.includes("rota") || q.includes("optimizasyon")) {
            return {
                text: "BeeRoute: NP-Hard problemlerine biyo-mimetik (arı kolonisi) çözümler sunan, O(G·S·n²) karmaşıklıkta çalışan ve 'Trabzon Protokolü' katmanını içeren endüstriyel stokastik rota optimizasyon motorudur.",
                action: { label: "BeeRoute Sistem Detayı", path: "/operations/beeroute" }
            };
        }

        if (q.includes("siber") || q.includes("güvenlik") || q.includes("vatan") || q.includes("ctf") || q.includes("security")) {
            return {
                text: "T.C. Savunma Sanayii Başkanlığı ve Sanayi ve Teknoloji Bakanlığı himayesindeki Siber Vatan programı mezunu. CTF dereceleri, Ethical Hacking, sıfır güven mimarisi (Zero-Trust) ve siber tehdit modelleme uzmanlığı bulunmaktadır.",
                action: { label: "İstihbarat Arşivi", path: "/intelligence" }
            };
        }

        if (q.includes("yetenek") || q.includes("dil") || q.includes("teknoloji") || q.includes("stack") || q.includes("cephanelik") || q.includes("arsenal")) {
            return {
                text: "Temel Diller: Python, C++, Go, Rust, JavaScript/TypeScript.\nAI & ML: PyTorch, HuggingFace, Unsloth, vLLM, QLoRA, Knowledge Distillation.\nSistem: Docker, Kubernetes, Linux, MQTT, Zero-Trust.",
                action: { label: "Arsenal Sayfasına Git", path: "/arsenal" }
            };
        }

        if (q.includes("iletişim") || q.includes("mail") || q.includes("contact") || q.includes("ulaş")) {
            return {
                text: "Bahattin Yunus ile LinkedIn veya şifreli Comms kanalı üzerinden doğrudan güvenli bağlantı kurabilirsiniz.",
                action: { label: "Comms Kanalını Aç", path: "/comms" }
            };
        }

        // Generic intelligent fallback
        return {
            text: `[Sistem Yanıtı] "${query}" sorgusu işlendi. ${profileData.featured_projects.length} adet aktif operasyon ve ${profileData.skills.languages.join(', ')} cephaneliği ile ilgili tüm veriler sistemde doğrulanmıştır. Detay için ilgili menüyü seçebilirsiniz.`,
            action: { label: "Tüm Operasyonlar", path: "/operations" }
        };
    };

    const handleSend = (textToSend?: string) => {
        const query = textToSend || inputValue;
        if (!query.trim()) return;

        playSound('type');
        const userMsg: Message = { sender: 'user', text: query };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            playSound('transmit');
            const reply = generateResponse(query);
            setMessages(prev => [...prev, { sender: 'vanguard', text: reply.text, action: reply.action }]);
            setIsTyping(false);
        }, 600);
    };

    return (
        <div className="fixed bottom-24 right-6 md:right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        className="absolute bottom-16 right-0 w-[90vw] max-w-[380px] h-[520px] bg-black/95 border border-neon-blue/50 backdrop-blur-2xl cyber-clip-br shadow-[0_0_40px_rgba(0,243,255,0.25)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                            <div className="flex items-center gap-2 text-neon-blue">
                                <Brain className="w-4 h-4 animate-pulse" />
                                <span className="font-mono text-xs tracking-widest font-bold">VANGUARD_AI // v4.5</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        setMessages([{
                                            sender: 'vanguard',
                                            text: "Bellek sıfırlandı. Yeni sorgu bekliyorum.",
                                        }]);
                                        playSound('click');
                                    }}
                                    title="Sohbeti Sıfırla"
                                    className="text-white/40 hover:text-neon-blue transition-colors p-1"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/40 hover:text-neon-red transition-colors p-1"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Quick Prompts Chips */}
                        <div className="px-3 py-2 border-b border-white/5 bg-black/40 flex gap-1.5 overflow-x-auto scrollbar-hide">
                            {quickPrompts.map((p, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSend(p.query)}
                                    className="shrink-0 px-2 py-1 bg-white/5 hover:bg-neon-blue/20 border border-white/10 hover:border-neon-blue/50 text-[10px] font-mono text-white/70 hover:text-neon-blue rounded transition-all whitespace-nowrap"
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs scrollbar-hide">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`p-3 rounded max-w-[88%] leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-neon-blue/20 border border-neon-blue/40 text-white'
                                            : 'bg-white/5 border border-white/10 text-white/90'
                                            }`}
                                    >
                                        <p className="whitespace-pre-line">{msg.text}</p>
                                        {msg.action && (
                                            <button
                                                onClick={() => {
                                                    playSound('access');
                                                    setIsOpen(false);
                                                    setLocation(msg.action.path);
                                                }}
                                                className="mt-2.5 px-2.5 py-1 bg-neon-blue text-black font-bold text-[10px] rounded flex items-center gap-1 hover:bg-white transition-colors"
                                            >
                                                {msg.action.label} <ArrowRight className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                    <span className="text-[8px] text-white/30 mt-0.5 px-1 uppercase">
                                        {msg.sender === 'user' ? 'OPERATOR' : 'VANGUARD'}
                                    </span>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex items-center gap-1.5 text-neon-blue text-[10px] font-mono p-2 bg-white/5 border border-white/10 rounded w-fit animate-pulse">
                                    <Sparkles className="w-3 h-3" /> İŞLENİYOR...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Footer */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="p-3 border-t border-white/10 bg-white/5 flex gap-2"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Komut veya soru yazın..."
                                className="flex-1 bg-black/80 border border-white/20 px-3 py-2 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-neon-blue transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="px-3 bg-neon-blue text-black font-bold hover:bg-white disabled:opacity-30 transition-colors flex items-center justify-center"
                            >
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    playSound(isOpen ? 'click' : 'access');
                }}
                className={`
                    w-12 h-12 rounded-full flex items-center justify-center relative group
                    ${isOpen ? 'bg-neon-blue text-black' : 'bg-black border border-neon-blue/60 text-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.3)]'}
                    transition-all duration-300
                `}
                title="Vanguard AI Asistanı"
            >
                <Brain className={`w-6 h-6 ${isOpen ? '' : 'animate-pulse'}`} />

                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-neon-blue/30 rounded-full animate-[spin_8s_linear_infinite]" />
                <div className="absolute -inset-2 border border-neon-blue/15 rounded-full animate-[spin_12s_linear_infinite_reverse]" />

                {/* Ping Effect */}
                {!isOpen && (
                    <div className="absolute -inset-1 bg-neon-blue/20 rounded-full animate-ping opacity-50" />
                )}

                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full border-2 border-black animate-pulse" />
            </motion.button>
        </div>
    );
};
