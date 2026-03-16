"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/zone-lab-logo.png"
            alt="zone lab"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-[family-name:var(--font-heading)] font-semibold text-lg tracking-tight">
            zone lab
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#vision" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {t("about")}
          </a>
          <a href="#products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {t("projects")}
          </a>
          <a href="#team" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {t("team")}
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg)] px-6 py-6 space-y-4">
          <a href="#vision" className="block text-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileOpen(false)}>
            {t("about")}
          </a>
          <a href="#products" className="block text-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileOpen(false)}>
            {t("projects")}
          </a>
          <a href="#team" className="block text-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileOpen(false)}>
            {t("team")}
          </a>
          <div className="pt-4 flex items-center gap-4 border-t border-[var(--border-color)]">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
