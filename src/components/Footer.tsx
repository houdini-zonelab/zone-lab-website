"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/zone-lab-logo.png"
                alt="zone lab logo"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-lg font-bold tracking-tight">
                zone lab
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center gap-2">
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Links
            </h4>
            <a
              href="#vision"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {t("nav.about")}
            </a>
            <Link
              href={`/${locale}/team`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {t("nav.team")}
            </Link>
            <a
              href="#products"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {t("nav.projects")}
            </a>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("footer.contact_title")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/qazwsx521943"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-[#0A66C2]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/cx_870630?igsh=MTJma3dodm95aDhlbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-[#E4405F]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:jasonchungdev@gmail.com"
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
