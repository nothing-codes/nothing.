"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Почему мы" },
  { href: "#catalog", label: "Сборки" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top =
        (target as HTMLElement).getBoundingClientRect().top +
        window.scrollY -
        88;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0A0A0A]/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-[15px] font-medium tracking-tight text-white cursor-pointer"
        >
          nothing<span className="text-white/40">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-white/50">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/nothing_codes"
          target="_blank"
          rel="noopener"
          className="btn-light hidden md:inline-flex items-center px-4 py-2 rounded-full text-[13px] font-medium"
        >
          Написать нам
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 p-2"
          aria-label="Меню"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl">
          <nav className="px-6 py-5 flex flex-col gap-4 text-[15px] text-white/60">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://t.me/nothing_codes"
              target="_blank"
              rel="noopener"
              className="btn-light mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[14px] font-medium"
            >
              Написать нам
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}