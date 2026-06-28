import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "../types";
import { Language } from "../translations";

interface ServiceCardProps {
  key?: string | number;
  service: ServiceItem;
  index: number;
  onOpenDetails: (service: ServiceItem) => void;
  lang: Language;
}

export default function ServiceCard({ service, index, onOpenDetails, lang }: ServiceCardProps) {
  // Use pre-assigned Unsplash images fallback
  const fallbackImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80";
  const imageUrl = service.image || fallbackImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between bg-white border border-slate-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue-500/40 transition-all duration-300 h-full"
      id={`service-card-${service.id}`}
    >
      {/* 1. Visual Photo of Work at the Top (with Hover Zoom effect) */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-150">
        <img
          src={imageUrl}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
        />
        {/* Transparent grid schematic overlay to emphasize tech feeling */}
        <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay" />
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 2. Text Content & Technical Description */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Dynamic Title */}
          <h3 className="font-display font-bold text-base text-slate-900 leading-snug group-hover:text-brand-blue-600 transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* 3. Interactive Call-To-Action Button */}
        {(() => {
          const btnLabel = {
            pt: {
              details: "Ver Detalhes Técnicos",
              consult: "Solicitar Consulta",
            },
            ja: {
              details: "技術要件を見る",
              consult: "お問合せ・相談",
            },
            es: {
              details: "Ver Detalles Técnicos",
              consult: "Solicitar Consulta",
            },
          }[lang] || {
            details: "Ver Detalhes Técnicos",
            consult: "Solicitar Consulta",
          };

          const label = service.id === "cable-trunking" || service.id === "panel-termination" ? btnLabel.details : btnLabel.consult;

          return (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenDetails(service)}
              className="mt-6 w-full py-2.5 px-4 rounded-sm border border-slate-200 bg-slate-50 group-hover:bg-brand-blue-600 group-hover:border-transparent text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 group-hover:text-white flex items-center justify-between transition-all duration-300 cursor-pointer"
              id={`service-btn-${service.id}`}
            >
              <span>{label}</span>
              <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300 text-slate-400 group-hover:text-white" />
            </motion.button>
          );
        })()}
      </div>
    </motion.div>
  );
}
