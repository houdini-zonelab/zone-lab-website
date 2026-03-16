"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "./Section";
import { Sparkles, Target, Zap } from "lucide-react";

const icons = [Sparkles, Target, Zap];

export function VisionSection() {
  const t = useTranslations("vision");
  const items = [0, 1, 2];

  return (
    <Section id="vision">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {items.map((i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="rounded-xl border border-border/50 bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold md:text-xl">
                {t(`items.${i}.title`)}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t(`items.${i}.description`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
