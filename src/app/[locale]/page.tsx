'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  Compass,
  Code2,
  Palette,
  Smartphone,
  BarChart3,
  Terminal,
  PenTool,
  ArrowRight,
  ExternalLink,
  Mail,
  Github,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const teamPreview = [
  { key: 'jason', isPhoto: true, image: '/jason-photo.png' },
  { key: 'emily', icon: Compass, gradient: 'from-rose-400 to-amber-300' },
  { key: 'kevin', icon: Code2, gradient: 'from-cyan-400 to-blue-500' },
  { key: 'hannah', icon: Palette, gradient: 'from-violet-400 to-pink-400' },
  { key: 'brian', icon: Smartphone, gradient: 'from-orange-400 to-red-400' },
  { key: 'cindy', icon: BarChart3, gradient: 'from-emerald-400 to-teal-400' },
  { key: 'alex', icon: Terminal, gradient: 'from-lime-400 to-green-500' },
  { key: 'zoe', icon: PenTool, gradient: 'from-fuchsia-400 to-purple-400' },
];

const marqueeText =
  'BUILDING SOFTWARE THAT HELPS YOU LEVEL UP \u00B7 打造幫助你進化的軟體 \u00B7 ZONE LAB \u00B7 ';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Fixed Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Logo */}
          <motion.div variants={fadeUp} className="mb-8">
            <Image
              src="/zone-lab-logo.png"
              alt="Zone Lab"
              width={72}
              height={72}
              className="mx-auto"
              priority
            />
          </motion.div>

          {/* Massive ZONE / LAB */}
          <div className="text-[clamp(5rem,14vw,12rem)] leading-[0.85] tracking-[-0.04em]">
            <div className="overflow-hidden">
              <motion.span
                className="block font-body italic font-light"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              >
                ZONE
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block font-heading font-extrabold"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.35,
                }}
              >
                LAB
              </motion.span>
            </div>
          </div>

          {/* Tagline + Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl font-body max-w-xl mx-auto opacity-60"
          >
            {t('hero.heading')}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-sm font-heading uppercase tracking-[0.15em] opacity-35"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 bg-accent text-[#0A0A0A] font-heading font-bold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:bg-accent/80 transition-colors"
            >
              {t('hero.ctaTeam')}
              <ArrowRight size={16} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 border border-current/20 font-heading font-bold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:border-accent hover:text-accent-deep dark:hover:text-accent transition-colors"
            >
              {t('hero.ctaProducts')}
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="bg-[#1A1A1A] dark:bg-accent text-accent dark:text-[#0A0A0A] py-4 overflow-hidden">
        <div className="marquee-track">
          <span className="font-heading text-sm tracking-[0.2em] uppercase whitespace-nowrap px-2">
            {marqueeText.repeat(6)}
          </span>
          <span className="font-heading text-sm tracking-[0.2em] uppercase whitespace-nowrap px-2">
            {marqueeText.repeat(6)}
          </span>
        </div>
      </div>

      {/* ═══════════════ VISION ═══════════════ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold tracking-[-0.02em]">
              {t('vision.heading')}
            </h2>
            <p className="mt-4 text-lg opacity-50 max-w-xl">{t('vision.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-12 md:gap-16"
          >
            <motion.div variants={fadeUp}>
              <span className="text-[4rem] md:text-[5rem] font-heading font-bold leading-none text-accent-deep dark:text-accent opacity-20">
                01
              </span>
              <hr className="hr-accent my-4" />
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('vision.card1Title')}
              </h3>
              <p className="opacity-60 leading-relaxed">{t('vision.card1Text')}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="text-[4rem] md:text-[5rem] font-heading font-bold leading-none text-accent-deep dark:text-accent opacity-20">
                02
              </span>
              <hr className="hr-accent my-4" />
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('vision.card2Title')}
              </h3>
              <p className="opacity-60 leading-relaxed">{t('vision.card2Text')}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="text-[4rem] md:text-[5rem] font-heading font-bold leading-none text-accent-deep dark:text-accent opacity-20">
                03
              </span>
              <hr className="hr-accent my-4" />
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('vision.card3Title')}
              </h3>
              <p className="opacity-60 leading-relaxed">{t('vision.card3Text')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ═══════════════ */}
      <section id="products" className="py-24 md:py-32 px-6 border-t border-current/10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold tracking-[-0.02em]">
              {t('products.heading')}
            </h2>
            <p className="mt-4 text-lg opacity-50 max-w-xl">{t('products.subtitle')}</p>
          </motion.div>

          {/* Marawanna — Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="editorial-card p-8 md:p-12 mb-8 border-l-4 border-l-accent relative"
          >
            <span className="absolute top-6 right-6 md:top-8 md:right-8 text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 bg-accent text-[#0A0A0A]">
              {t('products.marawannaBadge')}
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-heading font-bold text-black">M</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                {t('products.marawannaName')}
              </h3>
            </div>
            <p className="text-lg mb-2">{t('products.marawannaDesc')}</p>
            <p className="text-sm opacity-50 mb-8">{t('products.marawannaDetail')}</p>
            <a
              href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-[#0A0A0A] font-heading font-bold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:bg-accent/80 transition-colors"
            >
              {t('products.marawannaCta')}
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Coming Soon Products */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="editorial-card p-8 opacity-40"
            >
              <span className="text-xs font-heading font-bold tracking-widest uppercase opacity-60 mb-4 block">
                {t('products.comingSoon')}
              </span>
              <h3 className="text-xl font-heading font-bold mb-2">
                {t('products.zoneflowName')}
              </h3>
              <p className="opacity-70">{t('products.zoneflowDesc')}</p>
              <p className="text-xs font-heading mt-4 opacity-40 uppercase tracking-wider">
                {t('products.zoneflowStatus')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="editorial-card p-8 opacity-40"
            >
              <span className="text-xs font-heading font-bold tracking-widest uppercase opacity-60 mb-4 block">
                {t('products.comingSoon')}
              </span>
              <h3 className="text-xl font-heading font-bold mb-2">
                {t('products.mindpulseName')}
              </h3>
              <p className="opacity-70">{t('products.mindpulseDesc')}</p>
              <p className="text-xs font-heading mt-4 opacity-40 uppercase tracking-wider">
                {t('products.mindpulseStatus')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM PREVIEW ═══════════════ */}
      <section id="team" className="py-24 md:py-32 px-6 border-t border-current/10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold tracking-[-0.02em]">
              {t('team.heading')}
            </h2>
            <p className="mt-4 text-lg opacity-50 max-w-xl">{t('team.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {teamPreview.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.key} variants={fadeUp} className="group text-center">
                  <div className="mb-4 mx-auto w-16 h-16 md:w-20 md:h-20">
                    {m.isPhoto ? (
                      <Image
                        src={m.image!}
                        alt={t(`members.${m.key}.name`)}
                        width={80}
                        height={80}
                        className="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        {Icon && (
                          <Icon size={24} className="text-white" strokeWidth={1.5} />
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-sm md:text-base">
                    {t(`members.${m.key}.name`)}
                  </h3>
                  <p className="text-xs opacity-40 font-heading mt-0.5">
                    {t(`members.${m.key}.role`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-[0.1em] text-sm border border-current/20 px-8 py-4 hover:border-accent hover:text-accent-deep dark:hover:text-accent transition-colors"
            >
              {t('team.meetEveryone')}
              <ArrowRight size={16} />
            </Link>
          </div>
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
                <li>
                  <a
                    href="#products"
                    className="hover:opacity-100 hover:text-accent-deep dark:hover:text-accent transition-all"
                  >
                    {t('footer.projects')}
                  </a>
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
