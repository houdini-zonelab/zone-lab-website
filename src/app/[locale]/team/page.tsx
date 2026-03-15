'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Compass, Wand2, Shield, BarChart3,
  Ear, ClipboardList, PenTool, ArrowLeft,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const TEAM_MEMBERS = [
  { key: 'jason', icon: null, gradient: '', color: '#06b6d4' },
  { key: 'northstar', icon: Compass, gradient: 'from-cyan-500 to-blue-600', color: '#06b6d4' },
  { key: 'houdini', icon: Wand2, gradient: 'from-purple-500 to-pink-600', color: '#a855f7' },
  { key: 'watchdog', icon: Shield, gradient: 'from-amber-500 to-orange-600', color: '#f59e0b' },
  { key: 'vampire', icon: BarChart3, gradient: 'from-red-500 to-rose-700', color: '#ef4444' },
  { key: 'echo', icon: Ear, gradient: 'from-emerald-500 to-teal-600', color: '#10b981' },
  { key: 'thomas', icon: ClipboardList, gradient: 'from-sky-500 to-indigo-600', color: '#0ea5e9' },
  { key: 'godin', icon: PenTool, gradient: 'from-fuchsia-500 to-violet-600', color: '#d946ef' },
] as const;

export default function TeamPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)' }}>
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/zone-lab-logo.png" alt="Zone Lab logo" width={36} height={36} />
            <span className="font-heading text-lg font-semibold tracking-tight">Zone Lab</span>
          </Link>
          <LanguageSwitcher />
        </nav>
      </header>

      <main className="pt-24 pb-20 md:pb-30">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              {t('team.backHome')}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl font-bold leading-[1.2] tracking-[-0.02em] md:text-7xl lg:text-[72px]"
          >
            {t('team.pageTitle')}
          </motion.h1>

          {/* Team cards */}
          <motion.div
            className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {TEAM_MEMBERS.map((member) => {
              const MemberIcon = member.icon;
              return (
                <motion.article
                  key={member.key}
                  variants={fadeInUp}
                  className="glass-card flex gap-6 p-6 transition-transform hover:-translate-y-1 md:p-8"
                >
                  {/* Avatar */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full md:h-24 md:w-24">
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
                        {MemberIcon && <MemberIcon size={36} className="text-white/90" />}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-heading text-xl font-semibold md:text-2xl">
                        {t(`team.members.${member.key}.name`)}
                      </h2>
                      <span className="text-sm text-white/40">
                        {t(`team.members.${member.key}.role`)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm italic md:text-base" style={{ color: member.color }}>
                      &ldquo;{t(`team.members.${member.key}.quote`)}&rdquo;
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                      {t(`team.members.${member.key}.bio`)}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-[1280px] px-6 text-center text-xs text-white/30">
          {t('footer.rights')}
        </div>
      </footer>
    </>
  );
}
