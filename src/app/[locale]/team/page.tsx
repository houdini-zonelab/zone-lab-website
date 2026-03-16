"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { TeamAvatar } from "@/components/TeamAvatar";
import { Footer } from "@/components/Footer";

export default function TeamPage() {
  const t = useTranslations("team");
  const members = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Section className="pt-20 md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("page_title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground md:text-lg"
        >
          {t("subtitle")}
        </motion.p>
      </Section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {members.map((i) => {
              const name = t(`members.${i}.name`);
              const isJason = name === "Jason";

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
                      {/* Avatar */}
                      <div className="shrink-0">
                        {isJason ? (
                          <Image
                            src="/jason-photo.png"
                            alt="Jason"
                            width={200}
                            height={200}
                            className="aspect-square h-32 w-32 rounded-full object-cover md:h-48 md:w-48"
                          />
                        ) : (
                          <TeamAvatar name={name} index={i} size="lg" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="text-center sm:text-left">
                        <h2 className="text-xl font-bold md:text-2xl">
                          {name}
                        </h2>
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
