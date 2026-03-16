"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
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
      <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground">
        {t("subtitle")}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 lg:gap-8">
        {/* Jason - Founder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-lg md:p-6"
        >
          <Image
            src="/jason-photo.png"
            alt="Jason"
            width={200}
            height={200}
            className="aspect-square h-20 w-20 rounded-full object-cover md:h-28 md:w-28"
          />
          <h3 className="mt-3 text-sm font-bold md:text-base">
            {t("founder.name")}
          </h3>
          <p className="text-xs text-muted-foreground md:text-sm">
            {t("founder.role")}
          </p>
        </motion.div>

        {/* Team Members */}
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
                delay: (i + 1) * 0.05,
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
