import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Clock, Send, CheckCircle2, Instagram, Linkedin, Github, Compass, MapPin } from "lucide-react";
import LudenLogo from "./LudenLogo";
import { Language, translations } from "../translations";

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang].contact;
  const f = translations[lang].footer;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="relative py-24 px-4 bg-white/80 backdrop-blur-md overflow-hidden border-t border-slate-200" id="contact-section">
      {/* Blueprint Grid background for modern industrial look */}
      <div className="absolute inset-0 tech-dotted-grid opacity-[0.25] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight"
          >
            {t.titleStart} <span className="text-brand-blue-600">{t.titleHighlight}</span>
          </motion.h2>
          <p className="font-sans text-xs text-slate-400 mt-3 uppercase tracking-widest font-semibold">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Details and Schematic Map */}
          <div className="lg:col-span-12 xl:col-span-12 flex flex-col justify-between gap-8 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Phone box */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-sm">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 self-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-slate-400 uppercase tracking-wider font-bold">{t.hotline}</p>
                  <a href="tel:05068613659" className="block font-display font-bold text-sm md:text-base text-slate-900 mt-1 tracking-tight hover:text-amber-600 transition-colors cursor-pointer select-all no-underline">
                    050-6861-3659
                  </a>
                </div>
              </div>

              {/* Email box */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-sm">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 self-center">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-[10px] text-slate-400 uppercase tracking-wider font-bold">{t.division}</p>
                  <a href="mailto:luismatsuoka@luden-ele.com" className="block font-display font-bold text-xs md:text-sm text-slate-900 mt-1 tracking-tight truncate hover:text-amber-600 transition-colors cursor-pointer select-all no-underline">
                    luismatsuoka@luden-ele.com
                  </a>
                </div>
              </div>

              {/* Operational Response window */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 transition-all duration-300 shadow-sm">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-500 self-center border border-slate-250">
                  <MapPin size={20} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-slate-400 uppercase tracking-wider font-bold">{t.consultation}</p>
                  <p className="font-sans text-xs text-slate-500 mt-1 font-light leading-relaxed">
                    {t.consultationDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Custom High-Tech SVG Map Coordinate grid */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between h-56 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-10">
                <div className="h-px w-full bg-slate-300" />
                <div className="h-px w-full bg-slate-300" />
                <div className="h-px w-full bg-slate-300" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Compass size={14} className="text-brand-blue-500 animate-spin" style={{ animationDuration: "20s" }} />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-wider">{t.nodeNetwork}</span>
                </div>
                <span className="font-mono text-[9px] text-brand-blue-600 uppercase font-bold tracking-wider bg-brand-blue-100/50 px-2.5 py-0.5 rounded-full border border-brand-blue-200">{t.infrastructureActive}</span>
              </div>

              {/* Tokyo Node Central Spark SVG represent */}
              <div className="relative z-10 flex justify-center items-center h-24">
                <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-blue-500">
                  {/* Concentric Signal Rings */}
                  <circle cx="50" cy="50" r="12" fill="transparent" stroke="currentColor" strokeWidth="0.5" className="animate-ping opacity-35" />
                  <circle cx="50" cy="50" r="26" fill="transparent" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-25" />
                  <circle cx="50" cy="50" r="42" fill="transparent" stroke="currentColor" strokeWidth="0.25" className="opacity-15" />
                  
                  {/* Grid Node Cross */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#cbd5e1" strokeWidth="0.5" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="#cbd5e1" strokeWidth="0.5" />
                  
                  {/* Core central node point */}
                  <circle cx="50" cy="50" r="5" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
                </svg>
                
                {/* Visual Locator Tooltip Overlay */}
                <div className="absolute right-4 bottom-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-sans flex items-center gap-1.5 text-slate-600 shadow-sm">
                  <MapPin size={10} className="text-brand-blue-500" />
                  <span className="font-semibold">{t.operationsHQ}</span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end font-mono text-[9px] text-slate-400 font-medium">
                <span>{t.reliability}</span>
                <span>{t.aesEngaged}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-12 xl:col-span-12">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm relative h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {t.labelName}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.placeholderName}
                          className="w-full bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 rounded-xl px-4 py-3.5 text-xs text-slate-900 placeholder-slate-300 focus:outline-none transition-all duration-300 shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {t.labelEmail}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.placeholderEmail}
                          className="w-full bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 rounded-xl px-4 py-3.5 text-xs text-slate-900 placeholder-slate-300 focus:outline-none transition-all duration-300 shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        {t.labelMessage}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.placeholderMessage}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 rounded-xl px-4 py-3.5 text-xs text-slate-900 placeholder-slate-300 focus:outline-none transition-all duration-300 resize-none shadow-inner"
                      />
                    </div>

                    {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-display font-semibold text-xs uppercase tracking-widest cursor-pointer bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 text-white shadow-lg shadow-brand-blue-500/10 hover:shadow-brand-blue-500/25 disabled:opacity-50 flex items-center justify-center gap-2 transition-all duration-300 border-none"
                    >
                      {isSubmitting ? (
                        <span>{t.transmitting}</span>
                      ) : (
                        <>
                          <span>{t.transmitButton}</span>
                          <Send size={12} className="transform translate-y-[-1px]" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-600 flex items-center justify-center shadow-md animate-bounce"
                      >
                        <CheckCircle2 size={36} />
                      </motion.div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-2xl text-slate-900">{t.successTitle}</h3>
                      <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto leading-relaxed text-center font-light">
                        {t.successDesc}
                      </p>
                    </div>

                    <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">Inquiry Code: #LUD-{Math.floor(100000 + Math.random() * 900000)}</p>

                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 text-xs hover:border-brand-blue-400 hover:text-brand-blue-600 transition-all duration-300 font-sans font-bold uppercase tracking-wider"
                    >
                      {t.submitAnother}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
