import ScrollReveal from "./ScrollReveal";
import { skills } from "../data/skills";
import { FaJava, FaJs, FaReact, FaBootstrap, FaNodeJs, FaServer, FaCode, FaGithub, FaHtml5, FaCss3Alt, FaTerminal, FaNetworkWired, FaCogs } from "react-icons/fa";
import { SiC, SiMui, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

// Direct mapping of flat skill names to React Icons and gradients
const skillMetadata = {
  "Java": {
    icon: <FaJava className="text-xl text-orange-500 group-hover:text-white transition-colors" />,
    gradient: "from-orange-500 to-amber-600"
  },
  "C": {
    icon: <SiC className="text-xl text-blue-600 group-hover:text-white transition-colors" />,
    gradient: "from-blue-600 to-cyan-500"
  },
  "JavaScript": {
    icon: <FaJs className="text-xl text-yellow-500 group-hover:text-white transition-colors" />,
    gradient: "from-yellow-400 to-amber-500"
  },
  "HTML5": {
    icon: <FaHtml5 className="text-xl text-orange-600 group-hover:text-white transition-colors" />,
    gradient: "from-orange-600 to-red-500"
  },
  "CSS3": {
    icon: <FaCss3Alt className="text-xl text-blue-500 group-hover:text-white transition-colors" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  "React.js": {
    icon: <FaReact className="text-xl text-cyan-400 group-hover:text-white transition-colors animate-spin-slow" style={{ animationDuration: '12s' }} />,
    gradient: "from-cyan-400 to-blue-500"
  },
  "Bootstrap": {
    icon: <FaBootstrap className="text-xl text-purple-500 group-hover:text-white transition-colors" />,
    gradient: "from-purple-500 to-violet-600"
  },
  "Material UI": {
    icon: <SiMui className="text-xl text-blue-500 group-hover:text-white transition-colors" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  "Node.js": {
    icon: <FaNodeJs className="text-xl text-green-500 group-hover:text-white transition-colors" />,
    gradient: "from-green-500 to-emerald-600"
  },
  "Express.js": {
    icon: <SiExpress className="text-xl text-slate-500 group-hover:text-white transition-colors" />,
    gradient: "from-gray-400 to-slate-600"
  },
  "RESTful APIs": {
    icon: <FaServer className="text-xl text-teal-400 group-hover:text-white transition-colors" />,
    gradient: "from-teal-400 to-emerald-500"
  },
  "MongoDB": {
    icon: <SiMongodb className="text-xl text-emerald-500 group-hover:text-white transition-colors" />,
    gradient: "from-emerald-500 to-green-600"
  },
  "MySQL": {
    icon: <SiMysql className="text-xl text-blue-600 group-hover:text-white transition-colors" />,
    gradient: "from-blue-600 to-indigo-500"
  },
  "Data Structures and Algorithms": {
    icon: <FaCode className="text-xl text-red-500 group-hover:text-white transition-colors" />,
    gradient: "from-red-500 to-rose-600"
  },
  "OOPS Concepts": {
    icon: <FaCogs className="text-xl text-indigo-500 group-hover:text-white transition-colors" />,
    gradient: "from-indigo-500 to-purple-600"
  },
  "Operating Systems": {
    icon: <FaTerminal className="text-xl text-slate-600 group-hover:text-white transition-colors" />,
    gradient: "from-slate-600 to-slate-800"
  },
  "Computer Networks": {
    icon: <FaNetworkWired className="text-xl text-cyan-500 group-hover:text-white transition-colors" />,
    gradient: "from-cyan-500 to-blue-500"
  },
  "Git": {
    icon: <FaCode className="text-xl text-orange-500 group-hover:text-white transition-colors" />,
    gradient: "from-orange-500 to-red-650"
  },
  "GitHub": {
    icon: <FaGithub className="text-xl text-slate-700 group-hover:text-white transition-colors" />,
    gradient: "from-gray-700 to-slate-900"
  },
  "VS Code": {
    icon: <FaCode className="text-xl text-blue-500 group-hover:text-white transition-colors" />,
    gradient: "from-blue-500 to-sky-500"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16 bg-dot-pattern">
      <div className="text-center mb-16">
        <ScrollReveal>
          <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase">
            My Toolbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Technical Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A representation of language syntax systems, frameworks, runtime environments, and databases I work with.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => {
              const metadata = skillMetadata[skill] || {
                icon: <FaCode className="text-xl" />,
                gradient: "from-indigo-500 to-violet-600"
              };
              
              return (
                <div
                  key={index}
                  className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-semibold bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-250 shadow-sm hover:text-white dark:hover:text-white hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-default overflow-hidden"
                >
                  <span className="relative z-10 flex-shrink-0">
                    {metadata.icon}
                  </span>
                  <span className="relative z-10">
                    {skill}
                  </span>
                  
                  {/* Brand gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metadata.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
