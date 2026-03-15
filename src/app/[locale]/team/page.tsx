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
  Megaphone,
  ClipboardList,
  PenTool,
  Mail,
  Github,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';

const members = [
  { key: 'jason', name: 'Jason', image: '/jason-photo.png', isPhoto: true },
  { key: 'northstar', name: 'North Star', icon: Compass, gradient: 'from-purple-400 to-pink-400' },
  { key: 'houdini', name: 'Houdini', icon: Wand2, gradient: 'from-cyan-400 to-blue-400' },
  { key: 'watchdog', name: 'WatchDog', icon: Shield, gradient: 'from-green-400 to-emerald-400' },
  { key: 'vampire', name: 'Vampire', icon: BarChart3, gradient: 'from-red-400 to-pink-400' },
  { key: 'echo', name: 'Echo', icon: Megaphone, gradient: 'from-yellow-400 to-orange-400' },
  { key: 'thomas', name: 'Thomas', icon: ClipboardList, gradient: 'from-indigo-400 to-purple-400' },
  { key: 'godin', name: 'Godin', icon: PenTool, gradient: 'from-pink-400 to-red-400' },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 text-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.02em] mb-4 font-heading">
              {t('team.pageHeading')}
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              {t('team.pageSubtitle')}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 font-semibold px-6 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <ArrowLeft size={18} />
              {t('team.backToHome')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Members */}
      <section className="pb-20 md:pb-30 px-6 bg-white dark:bg-black">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {members.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="flex-shrink-0">
                      {m.isPhoto ? (
                        <Image
                          src={m.image!}
                          alt={m.name}
                          width={100}
                          height={100}
                          className="rounded-full object-cover w-[100px] h-[100px]"
                        />
                      ) : (
                        <div
                          className={`w-[100px] h-[100px] rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center`}
                        >
                          {Icon && <Icon size={40} className="text-white drop-shadow-lg" />}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold font-heading mb-1">{m.name}</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium mb-3">{t(`members.${m.key}.role`)}</p>
                      <blockquote className="text-zinc-700 dark:text-zinc-200 italic border-l-2 border-green-500 pl-4 mb-3">
                        &ldquo;{t(`members.${m.key}.quote`)}&rdquo;
                      </blockquote>
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{t(`members.${m.key}.description`)}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-30 px-6 text-center bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold font-heading mb-4">
              {t('team.ctaHeading')}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto">{t('team.ctaSubtitle')}</p>
            <a
              href="mailto:hello@zonelab.tw"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <Mail size={18} />
              {t('team.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image src="/zone-lab-logo.png" alt="zone lab" width={64} height={64} className="mb-4" />
              <p className="text-zinc-500 dark:text-zinc-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
                <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.home')}</Link></li>
                <li><Link href="/team" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.team')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">{t('footer.connect')}</h4>
              <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
                <li>
                  <a href="mailto:hello@zonelab.tw" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Mail size={16} /> Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zone-lab" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-zinc-400 dark:text-zinc-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
