'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  ArrowUpRight,
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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const teamPreview = [
  { key: 'jason', isPhoto: true, image: '/jason-photo.png' },
  { key: 'northstar', icon: Compass, gradientFrom: '#06B6D4', gradientTo: '#22D3EE' },
  { key: 'houdini', icon: Wand2, gradientFrom: '#A855F7', gradientTo: '#C084FC' },
  { key: 'watchdog', icon: Shield, gradientFrom: '#1E3A5F', gradientTo: '#334155' },
  { key: 'vampire', icon: BarChart3, gradientFrom: '#7C3AED', gradientTo: '#BE185D' },
  { key: 'echo', icon: AudioLines, gradientFrom: '#06B6D4', gradientTo: '#0891B2' },
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Floating orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl float-delayed" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="mb-8">
              <Image
                src="/zone-lab-logo.png"
                alt="Zone Lab"
                width={64}
                height={64}
                className="mx-auto drop-shadow-lg"
                priority
              />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            >
              {t('hero.heading')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] font-semibold text-sm px-8 py-4 rounded-lg hover:bg-white/90 hover:scale-[1.02] transition-all duration-150 shadow-lg"
              >
                {t('hero.ctaTeam')}
                <ArrowRight size={16} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-150"
              >
                {t('hero.ctaProducts')}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0F172A] to-transparent" />
      </section>

      {/* ═══════════════ VISION ═══════════════ */}
      <section id="vision" className="py-20 md:py-28 px-6 bg-[#F9FAFB] dark:bg-[#1E293B]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2]">
              {t('vision.heading')}
            </h2>
            <p className="mt-4 text-lg text-[#374151] dark:text-[#E2E8F0] max-w-2xl mx-auto">
              {t('vision.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-white dark:bg-[#0F172A] rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-[1.3]">
                {t('vision.card1Title')}
              </h3>
              <p className="text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
                {t('vision.card1Text')}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-white dark:bg-[#0F172A] rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-6">
                <Target size={24} className="text-secondary dark:text-secondary-light" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-[1.3]">
                {t('vision.card2Title')}
              </h3>
              <p className="text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
                {t('vision.card2Text')}
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className="bg-white dark:bg-[#0F172A] rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-6">
                <Rocket size={24} className="text-accent dark:text-accent-light" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-[1.3]">
                {t('vision.card3Title')}
              </h3>
              <p className="text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
                {t('vision.card3Text')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ═══════════════ */}
      <section id="products" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2]">
              {t('products.heading')}
            </h2>
            <p className="mt-4 text-lg text-[#374151] dark:text-[#E2E8F0] max-w-xl">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Marawanna — Live, Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-700 relative overflow-hidden card-glow"
            >
              {/* Accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-orange-400" />

              {/* App Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">M</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold">{t('products.marawannaName')}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-500/20 text-accent dark:text-accent-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent badge-pulse" />
                  {t('products.marawannaBadge')}
                </span>
              </div>

              <p className="text-[#374151] dark:text-[#E2E8F0] mb-6 leading-relaxed">
                {t('products.marawannaDesc')}
              </p>

              <a
                href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111827] dark:bg-white text-white dark:text-[#111827] font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg width="16\" height="16\" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('products.marawannaCta')}
              </a>
            </motion.div>

            {/* Project Alpha — Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-700 opacity-75 hover:opacity-100 card-glow"
            >
              {/* App Icon placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-6 shadow-md">
                <div className="w-8 h-8 rounded-full border-2 border-white/60" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold">{t('products.alphaName')}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-secondary dark:text-secondary-light">
                  {t('products.alphaBadge')}
                </span>
              </div>

              <p className="text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
                {t('products.alphaDesc')}
              </p>
            </motion.div>

            {/* Project Beta — In Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-700 opacity-75 hover:opacity-100 card-glow"
            >
              {/* App Icon placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-6 shadow-md">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white/60" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold">{t('products.betaName')}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-primary dark:text-primary-light">
                  {t('products.betaBadge')}
                </span>
              </div>

              <p className="text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
                {t('products.betaDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM PREVIEW ═══════════════ */}
      <section id="team" className="py-20 md:py-28 px-6 bg-[#F9FAFB] dark:bg-[#1E293B]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2]">
              {t('team.heading')}
            </h2>
            <p className="mt-4 text-lg text-[#374151] dark:text-[#E2E8F0] max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
          >
            {teamPreview.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.key} variants={fadeUp} className="group text-center">
                  <div className="mb-4 mx-auto w-[120px] h-[120px]">
                    {m.isPhoto ? (
                      <Image
                        src={m.image!}
                        alt={t(`members.${m.key}.name`)}
                        width={120}
                        height={120}
                        className="rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 shadow-md"
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md"
                        style={{ background: `linear-gradient(135deg, ${m.gradientFrom}, ${m.gradientTo})` }}
                      >
                        {Icon && (
                          <Icon size={36} className="text-white" strokeWidth={1.5} />
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-base">
                    {t(`members.${m.key}.name`)}
                  </h3>
                  <p className="text-sm text-[#374151] dark:text-[#E2E8F0] mt-1">
                    {t(`members.${m.key}.role`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              {t('team.meetEveryone')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer id="footer" className="py-16 px-6 bg-[#111827] dark:bg-[#0F172A] text-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/zone-lab-logo.png"
                  alt="Zone Lab"
                  width={40}
                  height={40}
                />
                <span className="font-semibold text-white">zone lab</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#vision" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.about')}
                  </a>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.team')}
                  </Link>
                </li>
                <li>
                  <a href="#products" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.products')}
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@zonelab.tw" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
                {t('footer.connect')}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/zone-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-light transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/zonelab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-light transition-colors"
                  >
                    <Twitter size={14} /> X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@zonelab.tw"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-light transition-colors"
                  >
                    <Mail size={14} /> hello@zonelab.tw
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-xs text-gray-500">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
