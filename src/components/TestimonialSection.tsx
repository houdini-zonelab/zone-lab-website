"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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

function getIndex(i: number) {
  return ((i % TESTIMONIAL_COUNT) + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT;
}

export function TestimonialSection() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIAL_COUNT);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIAL_COUNT);
    resetTimer();
  }, [resetTimer]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT);
    resetTimer();
  }, [resetTimer]);

  const goTo = useCallback(
    (i: number) => {
      setCurrent(i);
      resetTimer();
    },
    [resetTimer]
  );

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // Visible indices: prev, current, next
  const visibleIndices = [
    getIndex(current - 1),
    current,
    getIndex(current + 1),
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="py-16 md:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>

        <div className="relative">
          {/* Navigation arrows - hidden on mobile */}
          <button
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-card sm:block md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-card sm:block md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Peek carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center justify-center gap-4 md:gap-6"
              animate={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {visibleIndices.map((idx, pos) => {
                const isCurrent = pos === 1;
                return (
                  <motion.div
                    key={`${current}-${pos}`}
                    initial={
                      isCurrent
                        ? { opacity: 0.7, scale: 0.95 }
                        : { opacity: 0, scale: 0.85 }
                    }
                    animate={{
                      opacity: isCurrent ? 1 : 0.55,
                      scale: isCurrent ? 1 : 0.92,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 ${
                      isCurrent ? "z-10" : "z-0"
                    } ${
                      isCurrent
                        ? "w-[300px] sm:w-[400px] md:w-[600px] lg:w-[650px]"
                        : "hidden w-[60px] sm:block sm:w-[80px] md:w-[150px] lg:w-[195px]"
                    }`}
                    onClick={
                      !isCurrent
                        ? () => goTo(idx)
                        : undefined
                    }
                    style={!isCurrent ? { cursor: "pointer" } : undefined}
                  >
                    <div
                      className={`rounded-2xl border border-border/50 bg-card p-6 sm:p-8 transition-transform duration-300 ${
                        isCurrent
                          ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                          : "shadow-sm"
                      }`}
                    >
                      <div
                        className={`flex flex-col items-center gap-4 text-center ${
                          isCurrent
                            ? "sm:flex-row sm:items-start sm:text-left"
                            : ""
                        }`}
                      >
                        <Avatar
                          name={t(`items.${idx}.name`)}
                          colorClass={avatarColors[idx]}
                        />
                        <div className="flex flex-1 flex-col gap-2 overflow-hidden">
                          <StarRating rating={ratings[idx]} />
                          <p
                            className={`text-base leading-relaxed text-muted-foreground ${
                              !isCurrent ? "line-clamp-2" : ""
                            }`}
                          >
                            &ldquo;{t(`items.${idx}.content`)}&rdquo;
                          </p>
                          <div className="mt-2">
                            <p className="font-semibold">
                              {t(`items.${idx}.name`)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {t(`items.${idx}.role`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: TESTIMONIAL_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all hover:scale-125 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
