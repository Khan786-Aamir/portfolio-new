import ScrollReveal from "./ScrollReveal";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dot-pattern">
      {/* Decorative ambient glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: content details */}
        <div className="md:col-span-7 text-center md:text-left">
          <ScrollReveal delay={100}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Software Engineer Intern @ Yuga Yatra Retail (OPC) Private Ltd</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-gradient-primary">Aamir Khan</span>{" "}
              <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>👋</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-6 font-display">
              Full Stack Developer & Aspiring Software Developer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              I am a passionate Full Stack Developer who enjoys building scalable web applications using
              modern technologies like React, Node.js, and MongoDB. I focus on writing clean, efficient code
              and creating user-friendly digital experiences.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaEnvelope size={12} />
                <span>Let's Connect</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: premium profile picture frame */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <ScrollReveal delay={300} className="relative group">
            {/* Pulsing outer gradient glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-600 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-95" />
            
            {/* Spinning decorative outline */}
            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-400 animate-spin-slow opacity-90" style={{ animationDuration: '12s' }} />

            {/* Inner avatar container */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] animate-float-medium">
              <img
                src="/profile.jpg"
                alt="Aamir Khan"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
