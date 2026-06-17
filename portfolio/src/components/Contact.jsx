import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";
import { FaEnvelope, FaPaperPlane, FaUser, FaInfoCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Validation
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - expected from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          to_email: "aamir706056@gmail.com",
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly at aamir706056@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16 bg-dot-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 dark:via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column: Heading and Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <ScrollReveal>
            <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-full mb-3 uppercase w-fit">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Let's build something remarkable together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
              Have an idea, project, or open role? Feel free to reach out. I am currently open to internship offers, full-stack freelance projects, and general collaborations.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            <ScrollReveal delay={100}>
              <div className="glass-card p-5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-slate-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:aamir706056@gmail.com"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                  >
                    aamir706056@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card p-5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-slate-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <FaInfoCircle size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Response Window
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Usually replies within 24 hours
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form Container */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={200}>
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-xl bg-white/45 dark:bg-slate-900/35">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <FaUser size={10} /> Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-500 transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <FaInfoCircle size={10} /> Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-500 transition-all duration-300 text-sm"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <FaEnvelope size={10} /> Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-500 transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your project context..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl text-xs font-semibold border transition-all duration-350 ${
                      status.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-350 dark:border-emerald-900/60"
                        : "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-350 dark:border-rose-900/60"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <FaPaperPlane size={10} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
