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
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#888] dark:text-[#778] hover:text-primary dark:hover:text-primary-light transition-colors mb-8 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t('team.backHome')}
            </Link>

            <div className="section-line mb-6" />

            <h1 className="font-display text-5xl md:text-[clamp(3rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              {t('team.pageTitle')}
            </h1>
            <p className="mt-4 text-lg text-[#666] dark:text-[#8899aa] max-w-lg">
              {t('team.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ MEMBERS ═══════════════ */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-5">
            {members.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#111827] rounded-2xl p-7 md:p-8 border border-gray-100 dark:border-slate-800 hover:border-gray-200 dark:hover:border-slate-700 transition-all duration-300 card-glow"
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
                          className="rounded-full object-cover w-[100px] h-[100px] md:w-[130px] md:h-[130px] shadow-md ring-2 ring-gray-100 dark:ring-slate-800"
                        />
                      ) : (
                        <div
                          className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full flex items-center justify-center shadow-md ring-2 ring-gray-100 dark:ring-slate-800"
                          style={{ background: `linear-gradient(135deg, ${m.gradientFrom}, ${m.gradientTo})` }}
                        >
                          {Icon && <Icon size={40} className="text-white" strokeWidth={1.5} />}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl md:text-[1.65rem] font-bold mb-0.5 tracking-[-0.01em]">
                        {t(`members.${m.key}.name`)}
                      </h3>
                      <p className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                        {t(`members.${m.key}.role`)}
                      </p>
                      <blockquote className="text-[15px] italic border-l-2 border-primary/30 dark:border-primary-light/30 pl-4 mb-4 text-[#555] dark:text-[#99aabb]">
                        &ldquo;{t(`members.${m.key}.quote`)}&rdquo;
                      </blockquote>
                      <p className="text-sm text-[#666] dark:text-[#8899aa] leading-[1.7]">
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
      <section className="py-24 md:py-32 px-6 bg-[#F3F4F6] dark:bg-[#0F172A]">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">
              {t('team.ctaHeading')}
            </h2>
            <p className="text-lg text-[#666] dark:text-[#8899aa] max-w-xl mx-auto mb-10">
              {t('team.ctaSubtitle')}
            </p>
            <a
              href="mailto:hello@zonelab.tw"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-light text-white dark:text-[#0B1120] font-semibold text-sm px-8 py-3.5 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-150 shadow-md"
            >
              <Mail size={16} />
              {t('team.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-16 md:py-20 px-6 bg-[#111827] dark:bg-[#080D19] text-[#94A3B8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-14">
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
            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-[0.15em] mb-5 text-[#556]">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-primary-light transition-colors duration-150">
                    {t('footer.team')}
                  </Link>
                </li>
              </ul>
            </div>
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
