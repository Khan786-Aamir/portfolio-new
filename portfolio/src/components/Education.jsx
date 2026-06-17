import ScrollReveal from "./ScrollReveal";
import { education } from "../data/education";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
      <div className="text-center mb-16">
        <ScrollReveal>
          <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            My engineering foundation and academic milestones.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative max-w-3xl mx-auto pl-8 sm:pl-12 py-4">
        {/* Vertical Timeline Track Line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />

        {education.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 150} className="relative mb-12 last:mb-0">
            {/* Timeline Node Point */}
            <div className="absolute left-[-28px] sm:left-[-38px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 text-sm" />
            </div>

            {/* Timeline Item Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-indigo-950/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 w-fit">
                  <FaCalendarAlt size={10} />
                  {edu.years}
                </span>
                
                {edu.affiliation && (
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {edu.affiliation}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {edu.institution}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
