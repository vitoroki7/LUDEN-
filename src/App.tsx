import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Award, Sparkles, Phone, Mail, MapPin, ExternalLink, HelpCircle } from "lucide-react";
import LudenLogo from "./components/LudenLogo";
import ServiceCard from "./components/ServiceCard";
import DifferenceSection from "./components/DifferenceSection";
import ContactForm from "./components/ContactForm";
import ServiceDetailModal from "./components/ServiceDetailModal";
import { ServiceItem } from "./types";
import { Language, translations, serviceTranslations } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>("pt"); // Defaulting to PT-BR as preferred by the user prompt
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[lang];

  // Map service list based on active language
  const services: ServiceItem[] = serviceTranslations[lang].map((s) => ({
    ...s,
    iconName: "plug" // unified custom visual styling with top banner images
  }));

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <div className="bg-[#fcfdfd] text-slate-800 font-sans overflow-hidden min-h-screen relative selection:bg-brand-blue-500 selection:text-white" id="luden-applet-root">
      
      {/* 1. CABEÇALHO (Header) - Sticky fixed on top */}
      <nav className="sticky top-0 z-50 w-full bg-slate-950 border-b border-slate-800 py-3.5 px-4 md:px-8 text-xs font-mono text-slate-300 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Left Side: Professional Logo with Cursive L matching the asset */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          >
            <LudenLogo size={44} className="shadow-md rounded-full bg-slate-900 border-2 border-brand-blue-500/40 group-hover:border-amber-400 transition-colors" />
            <div className="flex flex-col items-start leading-none">
              <span className="font-display font-black tracking-[0.25em] text-white group-hover:text-amber-400 transition-colors text-base">
                LUDEN
              </span>
              <span className="text-[8.5px] font-mono tracking-widest text-slate-400 font-bold mt-1">YOKOHAMA</span>
            </div>
          </button>

          {/* Center/Right: Navigation Menu: Início | Serviços | Sobre | Contato */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              🏠 {lang === "pt" ? "Início" : lang === "ja" ? "ホーム" : "Inicio"}
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              ⚡ {t.menu.services}
            </button>
            <button
              onClick={() => scrollToSection("about-section")}
              className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              📐 {t.menu.standard}
            </button>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              ✉️ {t.menu.contact}
            </button>
          </div>

          {/* Extreme Right: WhatsApp and Language Controls */}
          <div className="flex items-center gap-4">
            
            {/* Integrated Language Switcher: ES, 日本語, PT */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-0.5 rounded">
              {([
                { key: "es", label: "ES" },
                { key: "ja", label: "日本語" },
                { key: "pt", label: "PT" }
              ]).map((langOption) => {
                const isActive = lang === langOption.key;
                return (
                  <button
                    key={langOption.key}
                    onClick={() => setLang(langOption.key as Language)}
                    className={`relative px-2 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-slate-950 bg-amber-400 font-extrabold" : "text-slate-500 hover:text-slate-300"
                    }`}
                    id={`nav-lang-btn-${langOption.key}`}
                  >
                    {langOption.label}
                  </button>
                );
              })}
            </div>

            {/* Request Quote Featured Button - Brand highlight amber/orange gradient */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("contact-section")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-widest rounded-sm border-none shadow-md cursor-pointer transition-all duration-300"
              id="header-quote-btn"
            >
              <span>{t.menu.ctaButton}</span>
            </motion.button>

          </div>
        </div>
      </nav>

      {/* 2. SEÇÃO PRINCIPAL (Hero Section) - Grounding elements */}
      <header className="relative py-28 md:py-36 px-4 bg-slate-900 overflow-hidden flex flex-col justify-center items-center text-center min-h-[85vh]">
        {/* Background Video: High-tech loop playing in the background with image fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-25"
          >
            <source
              src="/hero-bg.mp4"
              type="video/mp4"
            />
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
              alt="Luden Technical Electrical Installation Grid background fallback"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8 flex flex-col items-center">
          
          {/* Large Hero Logo for brand prominence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="relative flex items-center justify-center p-1 bg-slate-950/80 rounded-full border border-brand-blue-500/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-brand-blue-500/10 rounded-full blur-md animate-pulse" />
            <LudenLogo size={96} className="relative z-10" />
          </motion.div>

          {/* Quality Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400 rounded-sm text-[9px] font-bold text-slate-950 uppercase tracking-widest leading-none shadow-sm"
          >
            <Award size={11} className="stroke-[3]" />
            <span>{t.hero.engineeringBadge}</span>
          </motion.div>

          <div className="space-y-4">
            {/* Title: Soluções Elétricas Seguras e de Alta Qualidade */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl"
            >
              {t.hero.headlineStart}{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm block mt-1.5">
                {t.hero.headlineHighlight}
              </span>
            </motion.h1>

            {/* Subtitle: Atendimento especializado Yokohama */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="font-sans text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          {/* Action Buttons: Solicitar Orçamento Gratuito & Conheça Nossos Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md pt-4"
          >
            <button
              onClick={() => scrollToSection("contact-section")}
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold uppercase tracking-widest text-[11px] font-mono transition-all duration-200 cursor-pointer shadow-lg shadow-amber-500/10 border-none"
              id="hero-cta-primary"
            >
              {t.hero.ctaButton}
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-transparent border border-slate-700 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-[11px] font-mono transition-all duration-200 cursor-pointer"
              id="hero-cta-secondary"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>

        </div>

        {/* Scroll down cue */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-bounce pointer-events-none">
          <span className="font-mono text-[8px] text-slate-500 tracking-widest uppercase font-bold">{t.hero.scrollCue}</span>
          <ArrowDown size={12} className="text-amber-400" />
        </div>
      </header>

      {/* 3. SEÇÃO DE CONFIANÇA (Por que me escolher?) */}
      <DifferenceSection lang={lang} />

      {/* 4. NOSSOS SERVIÇOS (Especialidades Técnicas) - Grid layout of 6 cards */}
      <section className="relative py-24 px-4 bg-slate-50 border-b border-slate-200" id="services-section">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight"
            >
              {t.services.titleStart} <span className="text-brand-blue-600">{t.services.titleHighlight}</span>
            </motion.h2>
            <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              {t.services.subtitle}
            </p>
          </div>

          {/* Grid setup (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. SEÇÃO SOBRE MIM / A EMPRESA (Gera conexão) */}
      <section className="relative py-24 px-4 bg-white border-b border-slate-205" id="about-section">
        {/* Technical overlay grid background */}
        <div className="absolute inset-0 tech-blueprint-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Photo of Vitor */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative p-3.5 bg-slate-50 border border-slate-200 shadow-md max-w-sm rounded"
              >
                {/* Tech blueprint guides around photo */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500 -ml-1 -mt-1" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500 -mr-1 -mb-1" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-300 -mr-0.5 -mt-0.5" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-300 -ml-0.5 -mb-0.5" />

                <img
                  src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=800&q=80"
                  alt="Vitor - Eletricista de Confiança no Japão"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover grayscale-10 hover:grayscale-0 transition-all duration-500 rounded-sm"
                />
                
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold uppercase">
                  <span>SCALE: 1:1 ACTIVE</span>
                  <span>VITOR ・ OWNER</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Bio Details and Value Statement */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-50 border border-amber-100 rounded text-[9px] font-mono font-bold text-amber-800"
              >
                <span>LICENSED PROFESSIONAL IN JAPAN</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight"
              >
                {t.about.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-sans text-sm text-slate-600 leading-relaxed font-light"
              >
                {t.about.text}
              </motion.p>

              {/* Tagline showing support for Portuguese, Japanese, English */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="p-4 bg-slate-50 border border-slate-205 border-l-4 border-l-amber-500 rounded-r text-[10px] font-mono text-slate-500 font-bold leading-normal"
              >
                {t.about.tagline}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CONTATO E ORÇAMENTO */}
      <ContactForm lang={lang} />

      {/* FOOTER (Rodapé) */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 md:px-8 border-t border-slate-900 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LudenLogo size={52} className="shadow-md rounded-full bg-slate-900 border border-slate-800" />
              <div className="flex flex-col select-none leading-none">
                <span className="font-display font-black tracking-[0.25em] text-white text-lg">
                  LUDEN
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#94a3b8] font-bold mt-1">YOKOHAMA</span>
              </div>
            </div>
            <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-light max-w-sm">
              {t.footer.compliance}
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4 text-xs font-mono">
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] pb-1 border-b border-slate-900">
              ⚡ {t.footer.contactInfo}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-amber-400" />
                <a href="tel:+819083449642" className="hover:text-amber-400 transition-colors cursor-pointer font-bold select-all text-slate-400 no-underline">+81 90-8344-9642</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-amber-400" />
                <span className="hover:text-amber-400 transition-colors cursor-default font-light select-all">vitoroki7@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Coverage Area and Useful Links */}
          <div className="md:col-span-3 space-y-4 text-xs font-mono">
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] pb-1 border-b border-slate-900">
              📍 {t.footer.coverageTitle}
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-light">
              {t.footer.coverageArea}
            </p>
            
            {/* Useful links map */}
            <div className="pt-3 flex flex-col gap-2 font-bold text-[10px] uppercase text-amber-500">
              <button onClick={scrollToTop} className="text-left hover:underline transition-all cursor-pointer bg-transparent border-none p-0">
                ↑ {t.footer.backToTop}
              </button>
              <button onClick={() => alert("Política de Privacidade do site LUDEN: Seus dados estão completamente seguros e integrados em Yokohama.")} className="text-left hover:underline transition-all cursor-pointer bg-transparent border-none p-0">
                🔒 {t.footer.privacy}
              </button>
            </div>
          </div>

        </div>

        {/* Legal copyright watermark */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-600">
          <span>{t.footer.rights}</span>
          <span className="hidden sm:inline">MADE IN NIPPA, YOKOHAMA ・ DESIGNED FOR VITOR</span>
        </div>
      </footer>

      {/* Dynamic Detailed Dialog popup modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
