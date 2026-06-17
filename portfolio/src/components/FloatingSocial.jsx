import { useEffect, useState } from "react";
import { FaHome, FaFileAlt, FaMoon, FaSun } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FloatingSocial() {
  const [theme, setTheme] = useState("light");

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        applyTheme(stored);
        return;
      }
      const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      applyTheme(initial);
    } catch {
      setTheme("light");
      applyTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dockItems = [
    {
      label: "Home",
      onClick: scrollToTop,
      icon: <FaHome size={20} />,
      type: "button"
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: <FaFileAlt size={20} />,
      type: "link"
    },
    {
      type: "divider"
    },
    {
      label: "GitHub",
      href: "https://github.com/Khan786-Aamir",
      icon: <FaGithub size={20} />,
      type: "link"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aamir-khan-278b71317",
      icon: <FaLinkedin size={20} />,
      type: "link",
      hoverClass: "hover:text-blue-400"
    },
    {
      label: "Twitter",
      href: "https://x.com/AamirKhan453200",
      icon: <FaXTwitter size={20} />,
      type: "link"
    },
    {
      type: "divider"
    },
    {
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
      icon: theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />,
      type: "button",
      hoverClass: theme === "dark" ? "hover:text-amber-400" : "hover:text-indigo-400"
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel px-6 py-3 rounded-full flex gap-4 md:gap-5 items-center shadow-2xl border border-white/20 dark:border-slate-800/80 transition-all duration-300">
        {dockItems.map((item, index) => {
          if (item.type === "divider") {
            return <div key={index} className="w-px h-6 bg-slate-300 dark:bg-slate-700/60" />;
          }

          const baseClass = `relative group flex items-center justify-center p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-1.5 active:scale-95 ${item.hoverClass || ""}`;

          const tooltip = (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white dark:text-slate-900 bg-slate-900/90 dark:bg-white/95 backdrop-blur-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none scale-75 group-hover:scale-100 whitespace-nowrap">
              {item.label}
            </span>
          );

          if (item.type === "button") {
            return (
              <button
                key={index}
                onClick={item.onClick}
                className={baseClass}
                aria-label={item.label}
              >
                {item.icon}
                {tooltip}
              </button>
            );
          }

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
              aria-label={item.label}
            >
              {item.icon}
              {tooltip}
            </a>
          );
        })}
      </div>
    </div>
  );
}
