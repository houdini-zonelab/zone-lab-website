'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  TrendingUp,
  Target,
  Rocket,
  Compass,
  Wand2,
  Shield,
  BarChart3,
  AudioLines,
  Mail,
  Github,
  Twitter,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const teamPreview = [
  { key: 'jason', isPhoto: true, image: '/jason-photo.png' },
  { key: 'northstar', icon: Compass, gradientFrom: '#06B6D4', gradientTo: '#22D3EE' },
  { key: 'houdini', icon: Wand2, gradientFrom: '#A855F7', gradientTo: '#C084FC' },
  { key: 'watchdog', icon: Shield, gradientFrom: '#1E3A5F', gradientTo: '#334155' },
  { key: 'vampire', icon: BarChart3, gradientFrom: '#7C3AED', gradientTo: '#BE185D' },
  { key: 'echo', icon: AudioLines, gradientFrom: '#06B6D4', gradientTo: '#0891B2' },
];

const visionItems = [
  { num: '01', titleKey: 'card1Title', textKey: 'card1Text', icon: TrendingUp, accent: 'text-primary dark:text-primary-light', accentBg: 'bg-cyan-50 dark:bg-cyan-950/40' },
  { num: '02', titleKey: 'card2Title', textKey: 'card2Text', icon: Target, accent: 'text-secondary dark:text-secondary-light', accentBg: 'bg-purple-50 dark:bg-purple-950/40' },
  { num: '03', titleKey: 'card3Title', textKey: 'card3Text', icon: Rocket, accent: 'text-accent dark:text-accent-light', accentBg: 'bg-orange-50 dark:bg-orange-950/40' },
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO — cinematic text reveal, dark atmosphere
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0B1120]">
        {/* Gradient mesh orbs — subdued for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/12 blur-[120px] mesh-orb" />
          <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-purple-500/8 blur-[140px] mesh-orb-delayed" />
          <div className="absolute top-[60%] left-[50%] w-[400px] h-[400px] rounded-full bg-cyan-400/6 blur-[100px] mesh-orb-slow" />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-[960px] mx-auto">
          {/* Animated accent line — draws from left */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
            className="w-12 h-[2px] bg-cyan-400 mx-auto mb-10 origin-left"
          />

          {/* Heading — clip reveal from below */}
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
              className="font-display text-[clamp(2.8rem,8.5vw,5.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            >
              {t('hero.heading')}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
            className="mt-7 text-lg md:text-xl text-white/45 max-w-xl mx-auto leading-relaxed font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#team"
              className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#0B1120] font-semibold text-sm px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              {t('hero.ctaTeam')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/12 text-white/60 font-medium text-sm px-8 py-4 rounded-xl hover:border-white/25 hover:text-white/85 transition-all duration-200"
            >
              {t('hero.ctaProducts')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAF8] dark:from-[#0B1120] to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════════════
          VISION — editorial rows, prominent numbers, breathing room
      ═══════════════════════════════════════════════════ */}
      <section id="vision" className="py-28 md:py-40 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Section header — left-aligned, editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20 md:mb-28 max-w-2xl"
          >
            <div className="section-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] leading-[1.1]">
              {t('vision.heading')}
            </h2>
            <p className="mt-5 text-lg text-[#666] dark:text-[#8899aa] leading-relaxed max-w-lg">
              {t('vision.subtitle')}
            </p>
          </motion.div>

          {/* Editorial vision items — no cards, horizontal dividers */}
          <div className="divide-y divide-gray-200 dark:divide-slate-800 border-t border-gray-200 dark:border-slate-800">
            {visionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="py-12 md:py-16 grid md:grid-cols-[90px_1fr] gap-4 md:gap-10 items-start"
                >
                  {/* Prominent number */}
                  <span className="font-display text-5xl md:text-6xl font-extrabold leading-none tracking-[-0.04em] text-primary/20 dark:text-primary-light/12 select-none">
                    {item.num}
                  </span>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-lg ${item.accentBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={16} className={item.accent} />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.01em]">
                        {t(`vision.${item.titleKey}`)}
                      </h3>
                    </div>
                    <p className="text-[#555] dark:text-[#99aabb] leading-[1.8] max-w-2xl ml-11">
                      {t(`vision.${item.textKey}`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRODUCTS — Marawanna hero-featured, others compact
      ═══════════════════════════════════════════════════ */}
      <section id="products" className="py-28 md:py-40 px-6 bg-[#F3F4F2] dark:bg-[#0F172A]">
        <div className="max-w-[1000px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-24"
          >
            <div className="section-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] leading-[1.1]">
              {t('products.heading')}
            </h2>
            <p className="mt-4 text-lg text-[#666] dark:text-[#8899aa] max-w-lg">
              {t('products.subtitle')}
            </p>
          </motion.div>

          {/* Featured: Marawanna */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#111827] rounded-2xl p-10 md:p-14 border border-gray-100 dark:border-slate-800 mb-6 relative overflow-hidden group hover:border-gray-200 dark:hover:border-slate-700 transition-all duration-300 card-glow"
          >
            {/* Accent top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-orange-400 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
              {/* App Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.25rem] bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl md:text-4xl font-display font-extrabold text-white">M</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.01em]">
                    {t('products.marawannaName')}
                  </h3>
                  <Badge className="bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 badge-pulse" />
                    {t('products.marawannaBadge')}
                  </Badge>
                </div>
                <p className="text-[#555] dark:text-[#99aabb] text-lg leading-relaxed mb-6 max-w-lg">
                  {t('products.marawannaDesc')}
                </p>
                <a
                  href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t('products.marawannaCta')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Secondary products — compact grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Project Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-gray-100 dark:border-slate-800 opacity-75 hover:opacity-100 transition-all duration-300 card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-5 shadow-md">
                <div className="w-7 h-7 rounded-full border-2 border-white/50" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl font-bold">{t('products.alphaName')}</h3>
                <Badge className="bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 font-semibold">
                  {t('products.alphaBadge')}
                </Badge>
              </div>
              <p className="text-[#555] dark:text-[#99aabb] leading-relaxed">
                {t('products.alphaDesc')}
              </p>
            </motion.div>

            {/* Project Beta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-gray-100 dark:border-slate-800 opacity-75 hover:opacity-100 transition-all duration-300 card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-5 shadow-md">
                <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[14px] border-b-white/50" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl font-bold">{t('products.betaName')}</h3>
                <Badge className="bg-cyan-100 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-semibold">
                  {t('products.betaBadge')}
                </Badge>
              </div>
              <p className="text-[#555] dark:text-[#99aabb] leading-relaxed">
                {t('products.betaDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TEAM PREVIEW — tight grid, personality on hover
      ═══════════════════════════════════════════════════ */}
      <section id="team" className="py-28 md:py-40 px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] leading-[1.1]">
              {t('team.heading')}
            </h2>
            <p className="mt-5 text-lg text-[#666] dark:text-[#8899aa] max-w-xl mx-auto leading-relaxed">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-8 mb-14"
          >
            {teamPreview.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.key} variants={fadeUp} className="group text-center">
                  <div className="mb-4 mx-auto w-[100px] h-[100px] md:w-[110px] md:h-[110px]">
                    {m.isPhoto ? (
                      <Image
                        src={m.image!}
                        alt={t(`members.${m.key}.name`)}
                        width={110}
                        height={110}
                        className="rounded-full object-cover w-full h-full group-hover:scale-[1.06] transition-transform duration-300 shadow-md ring-2 ring-white dark:ring-slate-800"
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center group-hover:scale-[1.06] transition-transform duration-300 shadow-md ring-2 ring-white dark:ring-slate-800"
                        style={{ background: `linear-gradient(135deg, ${m.gradientFrom}, ${m.gradientTo})` }}
                      >
                        {Icon && <Icon size={32} className="text-white" strokeWidth={1.5} />}
                      </div>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-base">
                    {t(`members.${m.key}.name`)}
                  </h3>
                  <p className="text-xs md:text-sm text-[#888] dark:text-[#778] mt-0.5">
                    {t(`members.${m.key}.role`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              {t('team.meetEveryone')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER — minimal, dark
      ═══════════════════════════════════════════════════ */}
      <footer id="footer" className="py-16 md:py-20 px-6 bg-[#111827] dark:bg-[#080D19] text-[#94A3B8]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/zone-lab-logo.png"
                  alt="Zone Lab"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <span className="font-display font-bold text-sm text-white/90">zone lab</span>
              </div>
              <p className="text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-[0.15em] mb-5 text-[#556]">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#vision" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.about')}
                  </a>
                </li>
                <li>
                  <Link href="/team" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.team')}
                  </Link>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.products')}
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@zonelab.tw" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-[0.15em] mb-5 text-[#556]">
                {t('footer.connect')}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://github.com/zone-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary-light transition-colors duration-150"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/zonelab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary-light transition-colors duration-150"
                  >
                    <Twitter size={14} /> X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@zonelab.tw"
                    className="inline-flex items-center gap-2 hover:text-primary-light transition-colors duration-150"
                  >
                    <Mail size={14} /> hello@zonelab.tw
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-xs text-[#445]">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
