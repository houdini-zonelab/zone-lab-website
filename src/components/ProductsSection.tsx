"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const appStoreLinks: Record<string, string> = {
  Marawanna: "https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB",
  Summur: "https://apps.apple.com/tw/app/summur-cat-dog-care/id6730121236?l=en-GB",
};

const productIcons = [
  { src: "/marawanna-icon.png", alt: "Marawanna" },
  { src: "/summur-icon.png", alt: "Summur" },
  { src: "/poophub-icon.png", alt: "Poop Hub" },
  { src: "/recycle-icon.png", alt: "ReCycle" },
  { src: "/flavorflash-icon.jpg", alt: "FlavorFlash" },
];

export function ProductsSection() {
  const t = useTranslations("products");
  const items = [0, 1, 2, 3, 4];

  return (
    <Section id="products">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-5 md:gap-8">
        {items.map((i) => {
          const product = productIcons[i];
          const status = t(`items.${i}.status`);
          const isLive = status === "live";
          const isArchived = status === "archived";

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
              className={isArchived ? "opacity-75" : undefined}
            >
              <Card className={cn(
                "group h-full transition-shadow hover:shadow-lg",
                isLive && "ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/10 md:scale-105"
              )}>
                <CardContent className="flex flex-col items-center p-6 text-center md:p-8">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={80}
                    height={80}
                    className={cn(
                      "mb-4 rounded-2xl shadow-lg",
                      isArchived && "grayscale"
                    )}
                  />

                  <h3 className="text-lg font-bold md:text-xl">
                    {t(`items.${i}.name`)}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(`items.${i}.description`)}
                  </p>

                  <Badge
                    variant={isLive ? "default" : "secondary"}
                    className="mt-4"
                  >
                    {isLive ? t("live") : isArchived ? t("archived") : t("coming_soon")}
                  </Badge>

                  {isLive && appStoreLinks[t(`items.${i}.name`)] && (
                    <a
                      href={appStoreLinks[t(`items.${i}.name`)]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "mt-4 gap-1"
                      )}
                    >
                      {t("download")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
