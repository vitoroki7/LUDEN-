import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, MapPin, Tag, Cpu, ShieldCheck } from "lucide-react";
import { ProjectTranslation } from "../translations";
import { Language, translations } from "../translations";

interface ProjectDetailModalProps {
  project: ProjectTranslation | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ProjectDetailModal({ project, isOpen, onClose, lang }: ProjectDetailModalProps) {
  const t = translations[lang].modal;
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [phone, setPhone] = useState("");

  if (!project) return null;

  const handleQuickRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setPhone("");
    }, 1200);
  };

  const localLabels = {
    pt: {
      detailsTitle: "Detalhamento Técnico da Obra",
      specsTitle: "Especificações e Escopo de Trabalho",
      requestTitle: "Gostaria de um orçamento para um serviço similar?",
      requestBtn: "Solicitar Consulta",
      successTitle: "Solicitação Registrada!",
      successDesc: "Luis Matsuoka entrará em contato para agendar uma vistoria técnica gratuita.",
    },
    ja: {
      detailsTitle: "施工詳細・エンジニアリングデータ",
      specsTitle: "施工要件・設計スペック",
      requestTitle: "同様の電気工事や設計のご相談・お見積り依頼",
      requestBtn: "施工相談を申し込む",
      successTitle: "ご相談を承りました",
      successDesc: "代表の松岡ルイスより、詳細のご確認のため折り返しご連絡いたします。",
    },
    es: {
      detailsTitle: "Detalle Técnico de la Obra",
      specsTitle: "Especificaciones y Alcance del Trabajo",
      requestTitle: "¿Desea un presupuesto para un proyecto similar?",
      requestBtn: "Solicitar Consulta",
      successTitle: "¡Solicitud Registrada!",
      successDesc: "Luis Matsuoka se pondrá en contacto para programar una inspección técnica presencial.",
    },
  }[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop glass overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-xl rounded-sm border border-slate-205 bg-white overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
          >
            {/* Scrollable Area */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-grow">
              
              {/* Exit/Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-800 border border-slate-200 hover:border-slate-350 flex items-center justify-center transition-all duration-200 cursor-pointer z-20"
              >
                <X size={15} />
              </button>

              {/* Top Banner Image */}
              <div className="relative w-full h-48 -mt-6 -mx-6 md:-mt-8 md:-mx-8 overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                
                {/* Overlay tags on image */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2.5 py-0.5 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider rounded-sm border border-amber-400/25 flex items-center gap-1">
                    <MapPin size={10} />
                    <span>{project.location}</span>
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono text-white font-bold uppercase tracking-wider rounded-sm border border-slate-800 flex items-center gap-1">
                    <Tag size={10} />
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Title / Header */}
              <div className="space-y-1">
                <span className="text-[10px] text-brand-blue-600 font-mono tracking-widest uppercase flex items-center gap-1.5 font-bold">
                  <Cpu size={11} className="animate-pulse" />
                  <span>{localLabels.detailsTitle}</span>
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="font-sans text-xs text-slate-650 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Scope Checklist Specs */}
              <div className="space-y-3">
                <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  {localLabels.specsTitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.scope && project.scope.map((spec, index) => (
                    <div 
                      key={index} 
                      className="p-3 bg-slate-50 border border-slate-200 rounded-sm flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-sans leading-tight font-light">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Form at bottom */}
              <div className="pt-5 border-t border-slate-100 flex-shrink-0">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <motion.form
                      key="project-callback"
                      onSubmit={handleQuickRequest}
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <label className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {localLabels.requestTitle}
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t.phonePlaceholder}
                          className="flex-grow bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 rounded-sm px-4 py-3 text-xs text-slate-900 placeholder-slate-300 focus:outline-none transition-all duration-300"
                        />
                        <button
                          type="submit"
                          disabled={sending}
                          className="px-5 py-3 sm:py-0 bg-brand-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-blue-700 disabled:opacity-50 flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer border-none shadow-sm shrink-0"
                        >
                          <ShieldCheck size={13} />
                          <span>{sending ? t.submittingStatus : localLabels.requestBtn}</span>
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="project-success-cb"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-brand-blue-50 rounded-sm border border-brand-blue-200 text-center text-xs space-y-1 text-brand-blue-700"
                    >
                      <p className="font-bold">{localLabels.successTitle}</p>
                      <p className="text-slate-500 font-light">{localLabels.successDesc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
