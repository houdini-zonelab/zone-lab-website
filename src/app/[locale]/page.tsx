'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Compass, Wand2, Shield, BarChart3,
  Ear, ClipboardList, PenTool, ArrowRight,
  Github, Twitter, Mail,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const TEAM_MEMBERS = [
  { key: 'jason', icon: null, gradient: '' },
  { key: 'northstar', icon: Compass, gradient: 'from-cyan-500 to-blue-600' },
  { key: 'houdini', icon: Wand2, gradient: 'from-purple-500 to-pink-600' },
  { key: 'watchdog', icon: Shield, gradient: 'from-amber-500 to-orange-600' },
  { key: 'vampire', icon: BarChart3, gradient: 'from-red-500 to-rose-700' },
  { key: 'echo', icon: Ear, gradient: 'from-emerald-500 to-teal-600' },
  { key: 'thomas', icon: ClipboardList, gradient: 'from-sky-500 to-indigo-600' },
  { key: 'godin', icon: PenTool, gradient: 'from-fuchsia-500 to-violet-600' },
] as const;

export default function LandingPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)' }}>
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/zone-lab-logo.png" alt="Zone Lab logo" width={36} height={36} />
            <span className="font-heading text-lg font-semibold tracking-tight">Zone Lab</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#vision" className="transition-colors hover:text-white">{t('nav.about')}</a>
              <a href="#products" className="transition-colors hover:text-white">{t('nav.projects')}</a>
              <a href="#team" className="transition-colors hover:text-white">{t('nav.team')}</a>
            </div>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main>
        {/* ===== Hero Section ===== */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="gradient-orbs">
            <div className="gradient-orb" />
            <div className="gradient-orb" />
            <div className="gradient-orb" />
          </div>
          <div className="grid-overlay" />

          <motion.div
            className="relative z-10 mx-auto max-w-[1280px] px-6 text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Image src="/zone-lab-logo.png" alt="Zone Lab logo" width={80} height={80} className="mx-auto" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl font-bold leading-[1.2] tracking-[-0.02em] md:text-7xl lg:text-[72px]"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#team"
                className="rounded-full px-8 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
              >
                {t('hero.ctaTeam')}
              </a>
              <a
                href="#products"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {t('hero.ctaProjects')}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== Vision Section ===== */}
        <section id="vision" className="py-20 md:py-30">
          <motion.div
            className="mx-auto max-w-[1280px] px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl font-bold leading-[1.2] tracking-[-0.02em] md:text-[56px]"
            >
              {t('vision.title')}
            </motion.h2>

            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
              {[
                { titleKey: 'vision.item1Title', descKey: 'vision.item1Desc', color: '#06b6d4' },
                { titleKey: 'vision.item2Title', descKey: 'vision.item2Desc', color: '#a855f7' },
                { titleKey: 'vision.item3Title', descKey: 'vision.item3Desc', color: '#10b981' },
              ].map((item) => (
                <motion.div key={item.titleKey} variants={fadeInUp} className="glass-card p-8">
                  <div className="mb-4 h-1 w-12 rounded-full" style={{ background: item.color }} />
                  <h3 className="font-heading text-xl font-semibold md:text-2xl">{t(item.titleKey)}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60 md:text-lg">{t(item.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ===== Products Section ===== */}
        <section id="products" className="py-20 md:py-30">
          <motion.div
            className="mx-auto max-w-[1280px] px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl font-bold leading-[1.2] tracking-[-0.02em] md:text-[56px]"
            >
              {t('products.title')}
            </motion.h2>

            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
              {/* Marawanna — Live */}
              <motion.div
                variants={fadeInUp}
                className="glass-card relative overflow-hidden p-8"
                style={{ borderColor: 'rgba(6,182,212,0.3)' }}
              >
                <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 30% 30%, #06b6d4, transparent 70%)' }} />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
                      <span className="text-2xl font-bold text-white">M</span>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-medium text-cyan-300" style={{ background: 'rgba(6,182,212,0.15)' }}>
                      {t('products.live')}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold">Marawanna</h3>
                  <p className="mt-2 text-base text-white/60">{t('products.marawannaDesc')}</p>
                  <a
                    href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}
                  >
                    {t('products.download')}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>

              {/* Placeholder products */}
              {[
                { nameKey: 'products.placeholder1Name', descKey: 'products.placeholder1Desc', gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)' },
                { nameKey: 'products.placeholder2Name', descKey: 'products.placeholder2Desc', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
              ].map((product) => (
                <motion.div
                  key={product.nameKey}
                  variants={fadeInUp}
                  className="glass-card p-8 opacity-50"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: product.gradient }}>
                      <span className="text-2xl font-bold text-white">?</span>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/40">
                      {t('products.comingSoon')}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold">{t(product.nameKey)}</h3>
                  <p className="mt-2 text-base text-white/60">{t(product.descKey)}</p>
                  <span className="mt-6 inline-block text-sm text-white/30">{t('products.stayTuned')}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ===== Team Section ===== */}
        <section id="team" className="py-20 md:py-30">
          <motion.div
            className="mx-auto max-w-[1280px] px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl font-bold leading-[1.2] tracking-[-0.02em] md:text-[56px]"
            >
              {t('team.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-base text-white/60 md:text-lg">
              {t('team.subtitle')}
            </motion.p>

            <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
              {TEAM_MEMBERS.map((member) => {
                const MemberIcon = member.icon;
                return (
                  <motion.div
                    key={member.key}
                    variants={fadeInUp}
                    className="glass-card flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1"
                  >
                    {/* Avatar */}
                    <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24">
                      {member.key === 'jason' ? (
                        <Image
                          src="/jason-photo.png"
                          alt="Jason"
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : (
                        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${member.gradient}`}>
                          {MemberIcon && <MemberIcon size={32} className="text-white/90" />}
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading text-sm font-semibold md:text-base">
                      {t(`team.members.${member.key}.name`)}
                    </h3>
                    <p className="mt-1 text-xs text-white/50 md:text-sm">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeInUp} className="mt-10 text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {t('team.ctaAll')}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/5 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left — Logo + tagline */}
            <div>
              <div className="flex items-center gap-3">
                <Image src="/zone-lab-logo.png" alt="Zone Lab logo" width={32} height={32} />
                <span className="font-heading text-lg font-semibold">Zone Lab</span>
              </div>
              <p className="mt-3 text-sm text-white/40">{t('footer.tagline')}</p>
            </div>

            {/* Middle — Links */}
            <div className="flex gap-8 text-sm text-white/50">
              <div className="flex flex-col gap-2">
                <a href="#vision" className="transition-colors hover:text-white">{t('nav.about')}</a>
                <Link href="/team" className="transition-colors hover:text-white">{t('nav.team')}</Link>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#products" className="transition-colors hover:text-white">{t('nav.projects')}</a>
                <a href="mailto:hello@zonelab.tw" className="transition-colors hover:text-white">{t('nav.contact')}</a>
              </div>
            </div>

            {/* Right — Social */}
            <div className="flex items-start gap-4 md:justify-end">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-white" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-white" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@zonelab.tw" className="text-white/40 transition-colors hover:text-white" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-white/30">
            {t('footer.rights')}
          </div>
        </div>
      </footer>
    </>
  );
}
