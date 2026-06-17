import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
      <div className="text-center mb-16">
        <ScrollReveal>
          <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Recent Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A curated list of applications I've built, spanning full-stack architectures to client-side integrations.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 150}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
