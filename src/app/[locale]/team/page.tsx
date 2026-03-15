'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
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
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Header */}
      <Section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-heading">
            {t('team.pageHeading')}
          </h1>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            {t('team.pageSubtitle')}
          </p>
          <Link href="/" className={buttonVariants({ variant: 'outline' })}>
            <ArrowLeft size={18} className="mr-2" />
            {t('team.backToHome')}
          </Link>
        </motion.div>
      </Section>

      {/* Members */}
      <Section className="bg-white dark:bg-black pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {members.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-zinc-50/50 dark:bg-white/[0.03] shadow-sm dark:shadow-none">
                  <CardContent className="p-5 md:p-7">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        {m.isPhoto ? (
                          <Image
                            src={m.image!}
                            alt={m.name}
                            width={88}
                            height={88}
                            className="rounded-full object-cover w-[80px] h-[80px] md:w-[88px] md:h-[88px] aspect-square"
                          />
                        ) : (
                          <div className={`w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center`}>
                            {Icon && <Icon size={36} className="text-white drop-shadow-lg" />}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold font-heading mb-0.5">{m.name}</h3>
                        <p className="text-sm md:text-base text-green-600 dark:text-green-400 font-medium mb-2">{t(`members.${m.key}.role`)}</p>
                        <blockquote className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 italic border-l-2 border-green-500 pl-3 mb-2">
                          &ldquo;{t(`members.${m.key}.quote`)}&rdquo;
                        </blockquote>
                        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">{t(`members.${m.key}.description`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
            {t('team.ctaHeading')}
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto">{t('team.ctaSubtitle')}</p>
          <a href="mailto:hello@zonelab.tw" className={buttonVariants({ size: 'lg' })}>
            <Mail size={18} className="mr-2" />
            {t('team.ctaButton')}
          </a>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-10 md:py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image src="/zone-lab-logo.png" alt="zone lab" width={56} height={56} className="mb-3" />
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 font-heading text-sm">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.home')}</Link></li>
                <li><Link href="/team" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.team')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 font-heading text-sm">{t('footer.connect')}</h4>
              <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <li>
                  <a href="mailto:hello@zonelab.tw" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Mail size={14} /> Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zone-lab" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
