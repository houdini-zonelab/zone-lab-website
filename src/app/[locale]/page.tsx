'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
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

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const visionItems = [
  { icon: Target, number: '01', accentColor: '#06B6D4' },
  { icon: Zap, number: '02', accentColor: '#A855F7' },
  { icon: Rocket, number: '03', accentColor: '#F97316' },
];

const teamMembers = [
  { key: 'jason', name: 'Jason', image: '/jason-photo.png', isPhoto: true },
  { key: 'northstar', name: 'North Star', icon: Compass, gradient: 'linear-gradient(135deg, #06B6D4, #A855F7)' },
  { key: 'houdini', name: 'Houdini', icon: Wand2, gradient: 'linear-gradient(135deg, #A855F7, #6366F1)' },
  { key: 'watchdog', name: 'WatchDog', icon: Shield, gradient: 'linear-gradient(135deg, #475569, #3B82F6)' },
  { key: 'vampire', name: 'Vampire', icon: BarChart3, gradient: 'linear-gradient(135deg, #E11D48, #9333EA)' },
  { key: 'echo', name: 'Echo', icon: Megaphone, gradient: 'linear-gradient(135deg, #06B6D4, #14B8A6)' },
  { key: 'thomas', name: 'Thomas', icon: ClipboardList, gradient: 'linear-gradient(135deg, #64748B, #93C5FD)' },
  { key: 'godin', name: 'Godin', icon: PenTool, gradient: 'linear-gradient(135deg, #F97316, #F43F5E)' },
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="mesh-orb absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 dark:opacity-30"
            style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)', top: '-10%', right: '-5%' }}
          />
          <div
            className="mesh-orb-delayed absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-15 dark:opacity-25"
            style={{ background: 'radial-gradient(circle, #A855F7, transparent 70%)', bottom: '-5%', left: '-10%' }}
          />
          <div
            className="mesh-orb-slow absolute w-[350px] h-[350px] rounded-full blur-[100px] opacity-10 dark:opacity-15"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)', top: '40%', left: '30%' }}
          />
          <div className="absolute inset-0 grid-pattern-light dark:hidden" />
          <div className="absolute inset-0 hidden dark:block grid-pattern" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 md:mb-10"
          >
            <Image
              src="/zone-lab-logo.png"
              alt="zone lab"
              width={100}
              height={100}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] mb-6"
          >
            {t('hero.heading')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a href="#team" className={buttonVariants({ size: 'lg', className: 'text-base px-8' })}>
              {t('hero.ctaTeam')}
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#products" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'text-base px-8' })}>
              {t('hero.ctaProducts')}
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ Vision ═══ */}
      <Section id="vision" className="bg-white dark:bg-zinc-950">
        <SectionHeader title={t('vision.heading')} subtitle={t('vision.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {visionItems.map((item, i) => {
            const titles = [t('vision.card1Title'), t('vision.card2Title'), t('vision.card3Title')];
            const texts = [t('vision.card1Text'), t('vision.card2Text'), t('vision.card3Text')];
            return (
              <motion.div key={item.number} variants={fadeInUp}>
                <Card className="h-full relative overflow-hidden border-0 bg-zinc-50/50 dark:bg-white/[0.03] shadow-sm dark:shadow-none">
                  <span className="editorial-number">{item.number}</span>
                  <CardContent className="relative p-6 md:p-8">
                    <div className="flex justify-center mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${item.accentColor}15`, border: `1px solid ${item.accentColor}30` }}
                      >
                        <item.icon size={24} style={{ color: item.accentColor }} />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-center">{titles[i]}</h3>
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed text-center">{texts[i]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ═══ Products ═══ */}
      <Section id="products" className="bg-zinc-50 dark:bg-black">
        <SectionHeader title={t('products.heading')} subtitle={t('products.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {/* Marawanna — Featured */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative card-glow shadow-md border-cyan-200/70 dark:border-cyan-500/20">
              <CardContent className="p-6 md:p-8">
                <Badge className="absolute top-4 right-4 bg-orange-50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/30 hover:bg-orange-50">
                  <span className="badge-pulse inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5" />
                  {t('products.marawannaBadge')}
                </Badge>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #0891B2)' }}
                >
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{t('products.marawannaName')}</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mb-6">{t('products.marawannaDesc')}</p>
                <a
                  href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ className: 'w-full' })}
                >
                  {t('products.marawannaCta')}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Alpha */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative opacity-60 hover:opacity-80 transition-opacity duration-300">
              <CardContent className="p-6 md:p-8">
                <Badge variant="secondary" className="absolute top-4 right-4">
                  {t('products.alphaBadge')}
                </Badge>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-zinc-100 dark:bg-zinc-800">
                  <div className="w-7 h-7 rounded-full" style={{ background: 'linear-gradient(135deg, #06B6D4, #A855F7)' }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-zinc-400">{t('products.alphaName')}</h3>
                <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 mb-6">{t('products.alphaDesc')}</p>
                <Button variant="secondary" disabled className="w-full">
                  {t('products.stayTuned')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Beta */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative opacity-60 hover:opacity-80 transition-opacity duration-300">
              <CardContent className="p-6 md:p-8">
                <Badge variant="secondary" className="absolute top-4 right-4">
                  {t('products.betaBadge')}
                </Badge>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-zinc-100 dark:bg-zinc-800">
                  <div className="w-6 h-6 rotate-45 rounded-sm" style={{ background: 'linear-gradient(135deg, #F97316, #EC4899)' }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-zinc-400">{t('products.betaName')}</h3>
                <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-500 mb-6">{t('products.betaDesc')}</p>
                <Button variant="secondary" disabled className="w-full">
                  {t('products.stayTuned')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* ═══ Team Preview ═══ */}
      <Section id="team" className="bg-white dark:bg-zinc-950">
        <SectionHeader title={t('team.heading')} subtitle={t('team.subtitle')} />

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {teamMembers.map((m) => {
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
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                          style={{ background: m.gradient }}
                        >
                          {Icon && <Icon size={28} className="text-white drop-shadow-lg" />}
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm md:text-base font-bold mb-0.5">{m.name}</h3>
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

      {/* ═══ Footer ═══ */}
      <footer className="py-12 md:py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#070D1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
            <div>
              <Image src="/zone-lab-logo.png" alt="zone lab" width={48} height={48} className="mb-4" />
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-zinc-500 dark:text-zinc-400">
                <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors link-underline">{t('footer.home')}</Link></li>
                <li><Link href="/team" className="hover:text-zinc-900 dark:hover:text-white transition-colors link-underline">{t('footer.team')}</Link></li>
                <li><a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition-colors link-underline">{t('footer.products')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.connect')}</h4>
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
