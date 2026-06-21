import React from "react";
import { motion } from "motion/react";
import { Award, MapPin, Handshake } from "lucide-react";
import { Language, translations } from "../translations";

interface DifferenceSectionProps {
  lang: Language;
}

export default function DifferenceSection({ lang }: DifferenceSectionProps) {
  const t = translations[lang].trust;

  const trustItems = [
    {
      id: "registered",
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: t.col1Title,
      text: t.col1Text,
      color: "border-amber-100 bg-amber-50/10 hover:border-amber-300",
      glowColor: "bg-amber-400/5",
    },
    {
      id: "location",
      icon: <MapPin className="w-8 h-8 text-brand-blue-500 animate-bounce" style={{ animationDuration: "3s" }} />,
      title: t.col2Title,
      text: t.col2Text,
      color: "border-brand-blue-100 bg-brand-blue-50/10 hover:border-brand-blue-300",
      glowColor: "bg-brand-blue-500/5",
    },
    {
      id: "transparency",
      icon: <Handshake className="w-8 h-8 text-emerald-500" />,
      title: t.col3Title,
      text: t.col3Text,
      color: "border-emerald-100 bg-emerald-50/10 hover:border-emerald-300",
      glowColor: "bg-emerald-500/5",
    },
  ];

  return (
    <section 
      className="relative py-24 px-4 bg-white border-y border-slate-250 overflow-hidden" 
      id="differenca-section"
    >
      {/* Dynamic technical background highlights */}
      <div className="absolute inset-0 tech-dotted-grid opacity-25 pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-brand-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-amber-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title and Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-blue-50 border border-brand-blue-100 rounded-full text-[10px] font-mono font-bold text-brand-blue-700 uppercase tracking-widest text-center"
          >
            <span>{t.subtitle}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight"
          >
            {t.title}
          </motion.h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center group ${item.color} shadow-sm hover:shadow-md`}
              id={`trust-card-${item.id}`}
            >
              {/* Internal soft color glow in background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${item.glowColor}`} />
              
              {/* Icon container */}
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm mb-6 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight mb-4 relative z-10">
                {item.title}
              </h3>

              {/* Description Body */}
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light relative z-10">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
