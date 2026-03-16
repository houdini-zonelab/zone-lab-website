"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";

const TESTIMONIAL_COUNT = 10;
const AUTO_PLAY_INTERVAL = 5000;

const avatarColors = [
  "from-green-400 to-emerald-600",
  "from-cyan-400 to-teal-600",
  "from-amber-400 to-yellow-600",
  "from-green-500 to-lime-600",
  "from-orange-400 to-red-500",
  "from-teal-400 to-cyan-600",
  "from-yellow-400 to-amber-600",
  "from-violet-400 to-purple-600",
  "from-amber-300 to-orange-500",
  "from-emerald-400 to-green-600",
];

const ratings = [5, 5, 5, 4, 5, 5, 5, 5, 4, 5];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ name, colorClass }: { name: string; colorClass: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className={`flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colorClass} text-xl font-bold text-white shadow-md`}
    >
      {initials}
    </div>
  );
}

export function TestimonialSection() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIAL_COUNT);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <Section id="testimonials">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <div className="relative mx-auto max-w-2xl">
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:-left-12"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-md transition-colors hover:bg-accent md:-right-12"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Card */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <Avatar
                  name={t(`items.${current}.name`)}
                  colorClass={avatarColors[current]}
                />
                <div className="flex flex-1 flex-col gap-2">
                  <StarRating rating={ratings[current]} />
                  <p className="text-base leading-relaxed text-muted-foreground">
                    &ldquo;{t(`items.${current}.content`)}&rdquo;
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold">
                      {t(`items.${current}.name`)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(`items.${current}.role`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: TESTIMONIAL_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
