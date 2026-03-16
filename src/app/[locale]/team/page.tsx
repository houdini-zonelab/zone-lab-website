"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { TeamAvatar } from "@/components/TeamAvatar";
import { Footer } from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TeamPage() {
  const t = useTranslations("team");
  const members = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Page Title */}
      <Section className="pt-20 md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("page_title")}
        </motion.h1>
      </Section>

      {/* Founder Section */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden rounded-2xl bg-muted/50 dark:bg-muted/20"
          >
            <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:items-start md:gap-12 md:p-12 lg:p-16">
              {/* Photo */}
              <div className="shrink-0">
                <Image
                  src="/jason-photo.png"
                  alt="Jason"
                  width={300}
                  height={300}
                  className="aspect-square h-48 w-48 rounded-2xl object-cover shadow-lg md:h-64 md:w-64 lg:h-72 lg:w-72"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {t("founder.name")}
                </h2>
                <p className="mt-1 text-lg font-medium text-muted-foreground">
                  {t("founder.role")}
                </p>
                <p className="mt-3 text-base italic text-muted-foreground">
                  &ldquo;{t("founder.tagline")}&rdquo;
                </p>

                {/* Bio */}
                <p className="mt-5 leading-relaxed text-foreground/80">
                  {t("founder.bio_1")}
                </p>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  {t("founder.bio_2")}
                </p>

                {/* Experience */}
                <div className="mt-6">
                  <ul className="space-y-2 text-sm md:text-base">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i} className="text-foreground/70">
                        {t(`founder.experience.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/qazwsx521943"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "bg-[#0A66C2] text-white hover:bg-[#004182]"
                    )}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    {t("founder.linkedin_label")}
                  </a>
                  <a
                    href="mailto:jasonchungdev@gmail.com"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" })
                    )}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("founder.email_label")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {t("team_section_title")}
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {t("team_section_subtitle")}
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
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
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:items-start md:p-8">
                      <div className="shrink-0">
                        <TeamAvatar name={name} index={i} size="lg" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold md:text-2xl">
                          {name}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          {t(`members.${i}.role`)}
                        </p>
                        <p className="mt-2 text-sm italic text-muted-foreground md:text-base">
                          &ldquo;{t(`members.${i}.tagline`)}&rdquo;
                        </p>
                        <p className="mt-3 leading-relaxed text-foreground/80 md:text-base">
                          {t(`members.${i}.bio`)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
