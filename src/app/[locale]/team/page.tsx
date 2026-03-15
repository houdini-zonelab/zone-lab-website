'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
  Compass,
  Code2,
  Palette,
  Smartphone,
  BarChart3,
  Terminal,
  PenTool,
  Mail,
  Github,
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const members = [
  { key: 'jason', isPhoto: true, image: '/jason-photo.png' },
  { key: 'emily', icon: Compass, gradient: 'from-rose-400 to-amber-300' },
  { key: 'kevin', icon: Code2, gradient: 'from-cyan-400 to-blue-500' },
  { key: 'hannah', icon: Palette, gradient: 'from-violet-400 to-pink-400' },
  { key: 'brian', icon: Smartphone, gradient: 'from-orange-400 to-red-400' },
  { key: 'cindy', icon: BarChart3, gradient: 'from-emerald-400 to-teal-400' },
  { key: 'alex', icon: Terminal, gradient: 'from-lime-400 to-green-500' },
  { key: 'zoe', icon: PenTool, gradient: 'from-fuchsia-400 to-purple-400' },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Fixed Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t('team.backHome')}
            </Link>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold tracking-[-0.03em] leading-[0.95]">
              {t('team.pageTitle')}
            </h1>
            <p className="mt-4 text-lg opacity-50 max-w-xl">
              {t('team.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ MEMBERS ═══════════════ */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {members.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="editorial-card p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      {m.isPhoto ? (
                        <Image
                          src={m.image!}
                          alt={t(`members.${m.key}.name`)}
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-24 h-24"
                        />
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center`}
                        >
                          {Icon && (
                            <Icon
                              size={36}
                              className="text-white"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">
                        {t(`members.${m.key}.name`)}
                      </h3>
                      <p className="text-sm font-heading uppercase tracking-wider text-accent-deep dark:text-accent mb-4">
                        {t(`members.${m.key}.role`)}
                      </p>
                      <blockquote className="text-base italic border-l-2 border-accent pl-4 mb-4 opacity-80">
                        &ldquo;{t(`members.${m.key}.quote`)}&rdquo;
                      </blockquote>
                      <p className="text-sm opacity-50 leading-relaxed">
                        {t(`members.${m.key}.bio`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 md:py-32 px-6 border-t border-current/10">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-heading font-bold mb-4">
              {t('team.ctaHeading')}
            </h2>
            <p className="text-lg opacity-50 max-w-xl mx-auto mb-8">
              {t('team.ctaSubtitle')}
            </p>
            <a
              href="mailto:hello@zonelab.tw"
              className="inline-flex items-center gap-2 bg-accent text-[#0A0A0A] font-heading font-bold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:bg-accent/80 transition-colors"
            >
              <Mail size={16} />
              {t('team.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-16 px-6 border-t border-current/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image
                src="/zone-lab-logo.png"
                alt="Zone Lab"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="opacity-40 text-sm">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-35">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2 text-sm opacity-50">
                <li>
                  <Link
                    href="/"
                    className="hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all"
                  >
                    {t('footer.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all"
                  >
                    {t('footer.team')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-35">
                {t('footer.connect')}
              </h4>
              <ul className="space-y-2 text-sm opacity-50">
                <li>
                  <a
                    href="mailto:hello@zonelab.tw"
                    className="inline-flex items-center gap-2 hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all"
                  >
                    <Mail size={14} /> hello@zonelab.tw
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/zone-lab"
                    className="inline-flex items-center gap-2 hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr-accent mb-8" />
          <p className="text-center text-xs opacity-25 font-heading uppercase tracking-widest">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
