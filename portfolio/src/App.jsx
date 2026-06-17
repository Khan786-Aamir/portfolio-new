import { Component, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import FloatingSocial from "./components/FloatingSocial";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("App error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
          <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
            <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Something went wrong</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              The application encountered an unexpected runtime exception.
            </p>
            <pre className="text-left text-xs font-mono bg-slate-100 dark:bg-slate-900 p-4 rounded-xl overflow-auto max-h-48 border border-slate-200/50 dark:border-slate-850">
              {this.state.error?.toString?.()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold shadow-md transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500 selection:bg-indigo-500 selection:text-white relative">
        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-400 z-50 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
        <FloatingSocial />
      </div>
    </ErrorBoundary>
  );
}
