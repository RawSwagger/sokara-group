"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "/#about" },
    { label: "The Work", href: "/#pillars" },
    { label: "Convenings", href: "/convenings" },
    { label: "The Practice", href: "/the-practice" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/sokara-s-mark-sm.webp"
              alt=""
              width={28}
              height={28}
              className={`transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-90"
              } group-hover:opacity-100`}
            />
            <span
              className={`label-caps text-[14px] tracking-[0.25em] transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Sokara
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link label-caps text-[11px] transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal/70" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="group label-caps text-[11px] px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Inquire privately
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 border-b border-light-border" : "max-h-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="label-caps text-[12px] text-charcoal/70 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="label-caps text-[12px] px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all text-center"
          >
            Inquire privately
          </Link>
        </div>
      </div>
    </nav>
  );
}
