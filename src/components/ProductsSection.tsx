"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Triangle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const appStoreLinks: Record<string, string> = {
  Marawanna: "https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB",
  Summur: "https://apps.apple.com/tw/app/summur-cat-dog-care/id6730121236?l=en-GB",
};

type ProductIcon =
  | { type: "image"; src: string; alt: string }
  | { type: "placeholder"; bg: string; Icon: React.ComponentType<{ className?: string }> };

const productIcons: ProductIcon[] = [
  { type: "image", src: "/marawanna-icon.png", alt: "Marawanna" },
  { type: "image", src: "/summur-icon.png", alt: "Summur" },
  { type: "placeholder", bg: "from-gray-400 to-slate-500", Icon: Circle },
  { type: "placeholder", bg: "from-gray-400 to-slate-500", Icon: Triangle },
];

export function ProductsSection() {
  const t = useTranslations("products");
  const items = [0, 1, 2, 3];

  return (
    <Section id="products">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 md:gap-8">
        {items.map((i) => {
          const product = productIcons[i];
          const isLive = t(`items.${i}.status`) === "live";

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
              className={!isLive ? "opacity-60" : undefined}
            >
              <Card className={cn(
                "group h-full transition-shadow hover:shadow-lg",
                isLive && "ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/10 md:scale-105"
              )}>
                <CardContent className="flex flex-col items-center p-6 text-center md:p-8">
                  {product.type === "image" ? (
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={80}
                      height={80}
                      className="mb-4 rounded-2xl shadow-lg"
                    />
                  ) : (
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${product.bg} mb-4 text-white shadow-lg`}
                    >
                      {product.type === "placeholder" && <product.Icon className="h-8 w-8" />}
                    </div>
                  )}

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
                    {isLive ? t("live") : t("coming_soon")}
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
