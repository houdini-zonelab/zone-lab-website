'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
  Compass,
  Wand2,
  Shield,
  BarChart3,
  AudioLines,
  ClipboardList,
  PenTool,
  Mail,
  Github,
  Twitter,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const members = [
  { key: 'jason', isPhoto: true, image: '/jason-photo.png' },
  { key: 'northstar', icon: Compass, gradientFrom: '#06B6D4', gradientTo: '#22D3EE' },
  { key: 'houdini', icon: Wand2, gradientFrom: '#A855F7', gradientTo: '#C084FC' },
  { key: 'watchdog', icon: Shield, gradientFrom: '#1E3A5F', gradientTo: '#334155' },
  { key: 'vampire', icon: BarChart3, gradientFrom: '#7C3AED', gradientTo: '#BE185D' },
  { key: 'echo', icon: AudioLines, gradientFrom: '#06B6D4', gradientTo: '#0891B2' },
  { key: 'thomas', icon: ClipboardList, gradientFrom: '#64748B', gradientTo: '#475569' },
  { key: 'godin', icon: PenTool, gradientFrom: '#F97316', gradientTo: '#EF4444' },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#374151] dark:text-[#E2E8F0] hover:text-primary dark:hover:text-primary-light transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t('team.backHome')}
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1]">
              {t('team.pageTitle')}
            </h1>
            <p className="mt-4 text-lg text-[#374151] dark:text-[#E2E8F0] max-w-xl">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#1E293B] rounded-xl p-6 md:p-8 border border-gray-100 dark:border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {m.isPhoto ? (
                        <Image
                          src={m.image!}
                          alt={t(`members.${m.key}.name`)}
                          width={200}
                          height={200}
                          className="rounded-full object-cover w-[120px] h-[120px] md:w-[160px] md:h-[160px] shadow-md"
                        />
                      ) : (
                        <div
                          className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center shadow-md"
                          style={{ background: `linear-gradient(135deg, ${m.gradientFrom}, ${m.gradientTo})` }}
                        >
                          {Icon && (
                            <Icon
                              size={48}
                              className="text-white"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">
                        {t(`members.${m.key}.name`)}
                      </h3>
                      <p className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                        {t(`members.${m.key}.role`)}
                      </p>
                      <blockquote className="text-base italic border-l-2 border-primary dark:border-primary-light pl-4 mb-4 text-[#374151] dark:text-[#E2E8F0]">
                        &ldquo;{t(`members.${m.key}.quote`)}&rdquo;
                      </blockquote>
                      <p className="text-sm text-[#374151] dark:text-[#E2E8F0] leading-relaxed">
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
      <section className="py-20 md:py-28 px-6 bg-[#F9FAFB] dark:bg-[#1E293B]">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">
              {t('team.ctaHeading')}
            </h2>
            <p className="text-lg text-[#374151] dark:text-[#E2E8F0] max-w-xl mx-auto mb-8">
              {t('team.ctaSubtitle')}
            </p>
            <a
              href="mailto:hello@zonelab.tw"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-light text-white dark:text-[#0F172A] font-semibold text-sm px-8 py-4 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-150 shadow-md"
            >
              <Mail size={16} />
              {t('team.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-16 px-6 bg-[#111827] dark:bg-[#0F172A] text-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
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
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest mb-4 text-gray-400">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-primary-light transition-colors">
                    {t('footer.team')}
                  </Link>
                </li>
              </ul>
            </div>
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
