"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Triangle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const productIcons = [
  { bg: "from-cyan-500 to-blue-600", icon: "M" },
  { bg: "from-amber-400 to-orange-500", Icon: Circle },
  { bg: "from-purple-500 to-pink-500", Icon: Triangle },
];

export function ProductsSection() {
  const t = useTranslations("products");
  const items = [0, 1, 2];

  return (
    <Section id="products">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
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
              <Card className="group h-full transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center md:p-8">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${product.bg} mb-4 text-white shadow-lg`}
                  >
                    {product.icon ? (
                      <span className="text-2xl font-bold">{product.icon}</span>
                    ) : product.Icon ? (
                      <product.Icon className="h-8 w-8" />
                    ) : null}
                  </div>

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

                  {isLive && (
                    <a
                      href="#"
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
