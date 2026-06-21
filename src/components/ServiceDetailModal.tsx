import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Shield, Star, Award, Sparkles, MessageSquare } from "lucide-react";
import { ServiceItem } from "../types";
import { Language, translations } from "../translations";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ServiceDetailModal({ service, isOpen, onClose, lang }: ServiceDetailModalProps) {
  const t = translations[lang].modal;
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [phone, setPhone] = useState("");

  if (!service) return null;

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

  // Localized indicator subtexts for premium status
  const standards = {
    pt: {
      warrantyTitle: "Garantia Integral",
      warrantyDesc: "Suporte e Segurança",
      copperTitle: "Cobre Puro",
      copperDesc: "Excelente Condutividade",
      certTitle: "Norma JIS",
      certDesc: "Conformidade e Regulação",
    },
    ja: {
      warrantyTitle: "完全責任保証",
      warrantyDesc: "万全のアフターサポート",
      copperTitle: "最高基準純銅",
      copperDesc: "JIS C 3102 準拠",
      certTitle: "内線規程適合",
      certDesc: "技術基準検証済",
    },
    es: {
      warrantyTitle: "Garantía Integral",
      warrantyDesc: "Soporte y Seguridad",
      copperTitle: "Cobre Puro",
      copperDesc: "Excelente Conductividad",
      certTitle: "Norma JIS",
      certDesc: "Conformidad y Regulación",
    },
  }[lang] || {
    warrantyTitle: "Garantía Integral",
    warrantyDesc: "Soporte y Seguridad",
    copperTitle: "Cobre Puro",
    copperDesc: "Excelente Conductividad",
    certTitle: "Norma JIS",
    certDesc: "Conformidad y Regulación",
  };

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
            className="relative w-full max-w-xl rounded-sm border border-slate-205 bg-white p-6 md:p-8 overflow-hidden shadow-2xl z-10"
          >
            {/* Corner Tech Grid */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 tech-dotted-grid pointer-events-none" />

            {/* Exit/Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-800 border border-slate-200 hover:border-slate-350 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Title / Header */}
            <div className="space-y-1 pr-6">
              <span className="text-[10px] text-brand-blue-600 font-mono tracking-widest uppercase flex items-center gap-1.5 font-bold">
                <Sparkles size={11} className="animate-pulse" />
                <span>{t.engineeringTitle}</span>
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h3>
            </div>

            {/* Dividers */}
            <div className="my-5 h-px bg-slate-100" />

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.descriptionLabel}</p>
                <p className="font-sans text-xs text-slate-650 leading-relaxed">
                  {t.descriptionText}
                </p>
              </div>

              {/* Technical description details fallback */}
              <div className="space-y-2.5">
                <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.scopeLabel}</p>
                <div className="p-4 bg-slate-50 border border-slate-200 text-slate-650 text-xs rounded-sm leading-relaxed font-light">
                  {service.description}
                </div>
              </div>

              {/* Quality Standards indicators */}
              <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-sm border border-slate-200 text-center font-sans">
                <div className="space-y-0.5">
                  <div className="flex justify-center text-brand-blue-500 mb-1"><Shield size={16} /></div>
                  <p className="text-[10px] text-slate-900 font-bold">{standards.warrantyTitle}</p>
                  <p className="text-[9px] text-slate-400 font-light leading-none">{standards.warrantyDesc}</p>
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-center text-amber-500 mb-1"><Star size={16} /></div>
                  <p className="text-[10px] text-slate-900 font-bold">{standards.copperTitle}</p>
                  <p className="text-[9px] text-slate-400 font-light leading-none">{standards.copperDesc}</p>
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-center text-emerald-500 mb-1"><Award size={16} /></div>
                  <p className="text-[10px] text-slate-900 font-bold">{standards.certTitle}</p>
                  <p className="text-[9px] text-slate-400 font-light leading-none">{standards.certDesc}</p>
                </div>
              </div>

              {/* Callback request action form */}
              <div className="pt-4 border-t border-slate-100">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <motion.form
                      key="callback"
                      onSubmit={handleQuickRequest}
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <label className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {t.callbackLabel}
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
                          <MessageSquare size={13} />
                          <span>{sending ? t.submittingStatus : t.callbackButton}</span>
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-cb"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-brand-blue-50 rounded-sm border border-brand-blue-200 text-center text-xs space-y-1 text-brand-blue-700"
                    >
                      <p className="font-bold">{t.successTitle}</p>
                      <p className="text-slate-500 font-light">{t.successDesc}</p>
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
