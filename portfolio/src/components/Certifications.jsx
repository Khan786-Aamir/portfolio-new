import ScrollReveal from "./ScrollReveal";
import { certifications } from "../data/certifications";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
      <div className="text-center mb-16">
        <ScrollReveal>
          <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Professional Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified achievements, certifications, and course work.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center mb-5">
                  <FaCertificate className="text-indigo-600 dark:text-indigo-400 text-lg" />
                </div>
                
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-350 font-semibold text-xs mb-1">
                  {cert.issuer}
                </p>
                
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2">
                  Issued: {cert.date}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
