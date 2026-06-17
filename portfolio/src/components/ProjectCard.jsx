import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const isWeatherly = project.title?.includes("Weatherly");

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
      
      {/* Premium Browser Mockup Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0">
        {/* Mock Controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-400 dark:bg-rose-500/80 block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500/80 block" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 dark:bg-emerald-500/80 block" />
        </div>
        
        {/* Mock Address Bar */}
        <div className="px-6 py-1 rounded-md bg-slate-200/50 dark:bg-slate-800/60 text-[10px] font-mono text-slate-500 dark:text-slate-400 text-center w-3/5 truncate">
          {project.github.replace("https://", "").replace("www.", "")}
        </div>
        
        <div className="w-6" /> {/* Spacer to center the address bar */}
      </div>

      {/* Project Image Viewport */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center flex-shrink-0">
        {/* Image overlay glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
            isWeatherly ? "object-contain p-4" : "object-cover object-top"
          }`}
          loading="lazy"
        />
      </div>

      {/* Card Body & Details */}
      <div className="p-6 flex flex-col flex-grow bg-white dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex-shrink-0 mt-1">
            {project.date}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-350 px-2.5 py-1 rounded-md text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Button Links */}
        <div className="flex gap-3 mt-auto">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-sm hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaExternalLinkAlt size={10} />
              <span>Live Site</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaGithub size={12} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
