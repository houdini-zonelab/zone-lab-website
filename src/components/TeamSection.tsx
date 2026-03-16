"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { TeamAvatar } from "./TeamAvatar";
import { cn } from "@/lib/utils";

export function TeamSection() {
  const t = useTranslations("team");
  const locale = useLocale();
  const members = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Section id="team">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>

      {/* Founder Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-orange-50/50 p-6 dark:border-amber-500/20 dark:from-amber-950/30 dark:to-orange-950/20 md:mt-16 md:p-8"
      >
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-8">
          <Image
            src="/jason-photo.png"
            alt="Jason"
            width={150}
            height={150}
            className="aspect-square h-[120px] w-[120px] shrink-0 rounded-2xl object-cover shadow-md sm:h-[150px] sm:w-[150px]"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold md:text-2xl">
              {t("founder.name")}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {t("founder.role")}
            </p>
            <p className="mt-2 text-sm italic text-muted-foreground">
              &ldquo;{t("founder.tagline")}&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {t("founder.landing_bio")}
            </p>
            <div className="mt-4 flex justify-center gap-2 sm:justify-start">
              <a
                href="https://www.linkedin.com/in/qazwsx521943"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/cx_870630?igsh=MTJma3dodm95aDhlbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-pink-500/10 hover:text-pink-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:jasonchungdev@gmail.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team description */}
      <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
        {t("subtitle")}
      </p>

      {/* Team Members Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
        {members.map((i) => {
          const name = t(`members.${i}.name`);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-lg md:p-6"
            >
              <TeamAvatar name={name} index={i} />
              <h3 className="mt-3 text-sm font-bold md:text-base">{name}</h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                {t(`members.${i}.role`)}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/${locale}/team`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {t("cta")}
        </Link>
      </div>
    </Section>
  );
}
