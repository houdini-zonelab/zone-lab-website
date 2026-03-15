'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Target,
  Zap,
  Rocket,
  Compass,
  Wand2,
  Shield,
  BarChart3,
  Megaphone,
  ClipboardList,
  PenTool,
  ArrowRight,
  Github,
  Mail,
  ExternalLink,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const visionCards = [
  { icon: Target, colorClass: 'text-purple-500 dark:text-purple-400', bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/20' },
  { icon: Zap, colorClass: 'text-cyan-500 dark:text-cyan-400', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/20' },
  { icon: Rocket, colorClass: 'text-green-500 dark:text-green-400', bgClass: 'bg-green-500/10', borderClass: 'border-green-500/20' },
];

const teamPreview = [
  { key: 'jason', name: 'Jason', image: '/jason-photo.png', isPhoto: true },
  { key: 'northstar', name: 'North Star', icon: Compass, gradient: 'from-purple-400 to-pink-400' },
  { key: 'houdini', name: 'Houdini', icon: Wand2, gradient: 'from-cyan-400 to-blue-400' },
  { key: 'watchdog', name: 'WatchDog', icon: Shield, gradient: 'from-green-400 to-emerald-400' },
  { key: 'vampire', name: 'Vampire', icon: BarChart3, gradient: 'from-red-400 to-pink-400' },
  { key: 'echo', name: 'Echo', icon: Megaphone, gradient: 'from-yellow-400 to-orange-400' },
  { key: 'thomas', name: 'Thomas', icon: ClipboardList, gradient: 'from-indigo-400 to-purple-400' },
  { key: 'godin', name: 'Godin', icon: PenTool, gradient: 'from-pink-400 to-red-400' },
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Hero — full viewport, special layout */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
        <div className="gradient-orbs hidden dark:block">
          <div className="gradient-orb" />
          <div className="gradient-orb" />
          <div className="gradient-orb" />
        </div>
        <div className="grid-overlay opacity-30 dark:opacity-100" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div className="mb-8 md:mb-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src="/zone-lab-logo.png"
                alt="zone lab"
                width={120}
                height={120}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 font-heading">
              {t('hero.heading')}
            </h1>

            <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-300 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="#team" className={buttonVariants({ size: 'lg', className: 'text-base px-8' })}>
                {t('hero.ctaTeam')}
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#products" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'text-base px-8' })}>
                {t('hero.ctaProjects')}
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <Section className="bg-white dark:bg-zinc-950">
        <SectionHeader title={t('vision.heading')} subtitle={t('vision.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {visionCards.map((card, i) => {
            const titles = [t('vision.card1Title'), t('vision.card2Title'), t('vision.card3Title')];
            const texts = [t('vision.card1Text'), t('vision.card2Text'), t('vision.card3Text')];
            return (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full text-center border-0 bg-zinc-50/50 dark:bg-white/[0.03] shadow-sm dark:shadow-none">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-2xl ${card.bgClass} border ${card.borderClass}`}>
                        <card.icon size={24} className={card.colorClass} />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 font-heading">{titles[i]}</h3>
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">{texts[i]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Products */}
      <Section id="products" className="bg-zinc-50 dark:bg-black">
        <SectionHeader title={t('products.heading')} subtitle={t('products.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {/* Marawanna */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative border-purple-200 dark:border-purple-500/30 shadow-md dark:shadow-purple-500/10">
              <CardContent className="p-6 md:p-8">
                <Badge className="absolute top-4 right-4 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/30 hover:bg-green-100">
                  Live
                </Badge>
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 font-heading">Marawanna</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mb-6">{t('products.marawannaDesc')}</p>
                <a href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB" target="_blank" rel="noopener noreferrer" className={buttonVariants({ className: 'w-full' })}>
                  {t('products.download')}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Placeholders */}
          {[0, 1].map((i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full opacity-50 hover:opacity-70 transition-opacity relative">
                <CardContent className="p-6 md:p-8">
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {t('products.comingSoon')}
                  </Badge>
                  <div className="w-14 h-14 bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-5">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${i === 0 ? 'from-purple-400 to-cyan-400' : 'from-cyan-400 to-green-400'}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 font-heading text-zinc-400">[Product Name]</h3>
                  <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  <Button variant="secondary" disabled className="w-full">
                    {t('products.stayTuned')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Preview */}
      <Section id="team" className="bg-white dark:bg-zinc-950">
        <SectionHeader title={t('team.heading')} subtitle={t('team.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {teamPreview.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.key} variants={fadeInUp} className="text-center group">
                <Card className="border-0 bg-zinc-50/50 dark:bg-white/[0.03] shadow-sm dark:shadow-none">
                  <CardContent className="p-4 md:p-6">
                    <div className="relative mb-3 md:mb-4 mx-auto w-16 h-16 md:w-20 md:h-20">
                      {m.isPhoto ? (
                        <Image
                          src={m.image!}
                          alt={m.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover w-full h-full aspect-square group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                          {Icon && <Icon size={28} className="text-white drop-shadow-lg" />}
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm md:text-base font-bold font-heading mb-0.5">{m.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">{t(`members.${m.key}.role`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center">
          <Link href="/team" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            {t('team.meetEveryone')}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
            <div>
              <Image src="/zone-lab-logo.png" alt="zone lab" width={56} height={56} className="mb-4" />
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 font-heading text-sm md:text-base">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-zinc-500 dark:text-zinc-400">
                <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.home')}</Link></li>
                <li><Link href="/team" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.team')}</Link></li>
                <li><a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.projects')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 font-heading text-sm md:text-base">{t('footer.connect')}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-zinc-500 dark:text-zinc-400">
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
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-zinc-400 dark:text-zinc-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
