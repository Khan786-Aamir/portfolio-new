import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20 relative scroll-mt-16 text-center">
      <ScrollReveal>
        <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
          My Journey & Core Focus
        </h2>
      </ScrollReveal>

      <div className="space-y-6 text-slate-600 dark:text-slate-350 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto text-left">
        <ScrollReveal delay={100}>
          <p>
            I am a passionate Full Stack Developer with a strong interest in building modern, scalable, and
            user-centric web applications. I enjoy working across the entire development stack, from crafting
            responsive and intuitive user interfaces using React and Tailwind CSS to developing robust backend
            systems with Node.js, Express.js, and MongoDB.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p>
            As a B.Tech Information Technology student, I believe in learning by building real-world projects
            that solve practical problems. Through hands-on experience, I have developed a solid understanding
            of RESTful APIs, database design, authentication, and full-stack application architecture. I
            consistently focus on writing clean, maintainable code and improving performance and usability.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p>
            I am also actively strengthening my problem-solving abilities through Data Structures and
            Algorithms, which helps me approach challenges logically and efficiently. I am highly motivated,
            curious, and always eager to learn new technologies. My long-term goal is to grow as a skilled Full
            Stack Developer, contribute to impactful products, and build software that delivers real value to
            users.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
