'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
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
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

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
    <div className="min-h-screen">
      {/* Controls */}
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
        {/* Background effects — dark mode only */}
        <div className="gradient-orbs hidden dark:block">
          <div className="gradient-orb" />
          <div className="gradient-orb" />
          <div className="gradient-orb" />
        </div>
        <div className="grid-overlay opacity-30 dark:opacity-100" />

        <div className="relative z-10 text-center px-6 w-full max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div className="mb-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src="/zone-lab-logo.png"
                alt="zone lab"
                width={140}
                height={140}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-6 font-heading text-zinc-900 dark:text-zinc-50">
              {t('hero.heading')}
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-300 mb-14 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                {t('hero.ctaTeam')}
                <ArrowRight size={18} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-semibold px-8 py-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {t('hero.ctaProjects')}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-30 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] mb-4 font-heading">
              {t('vision.heading')}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{t('vision.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { icon: Target, title: t('vision.card1Title'), text: t('vision.card1Text'), color: 'purple' },
              { icon: Zap, title: t('vision.card2Title'), text: t('vision.card2Text'), color: 'cyan' },
              { icon: Rocket, title: t('vision.card3Title'), text: t('vision.card3Text'), color: 'green' },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="glass-card p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-5 rounded-2xl bg-${card.color}-500/10 border border-${card.color}-500/20`}>
                    <card.icon size={28} className={`text-${card.color}-500 dark:text-${card.color}-400`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading">{card.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 md:py-30 px-6 bg-zinc-50 dark:bg-black">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] mb-4 font-heading">
              {t('products.heading')}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Marawanna — featured */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 relative border border-purple-300 dark:border-purple-500/30 shadow-lg dark:shadow-none"
              style={{ boxShadow: undefined }}
            >
              <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-500/30">
                Live
              </span>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold text-black">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 font-heading">Marawanna</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">{t('products.marawannaDesc')}</p>
              <a
                href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black font-semibold px-6 py-3 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors w-full justify-center"
              >
                {t('products.download')}
                <ExternalLink size={16} />
              </a>
            </motion.div>

            {/* Placeholder products */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-card p-8 opacity-50 hover:opacity-70 transition-opacity relative"
              >
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700/50 text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-600/30">
                  {t('products.comingSoon')}
                </span>
                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${i === 0 ? 'from-purple-400 to-cyan-400' : 'from-cyan-400 to-green-400'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-zinc-400">[Product Name]</h3>
                <p className="text-zinc-400 dark:text-zinc-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 rounded-xl font-semibold cursor-not-allowed border border-zinc-300/50 dark:border-zinc-700/50"
                >
                  {t('products.stayTuned')}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Preview */}
      <section id="team" className="py-20 md:py-30 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] mb-4 font-heading">
              {t('team.heading')}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{t('team.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {teamPreview.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.key} variants={fadeInUp} className="text-center group">
                  <div className="glass-card p-5 md:p-6">
                    <div className="relative mb-4 mx-auto w-20 h-20 md:w-24 md:h-24">
                      {m.isPhoto ? (
                        <Image
                          src={m.image!}
                          alt={m.name}
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div
                          className={`w-full h-full rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                        >
                          {Icon && <Icon size={32} className="text-white drop-shadow-lg" />}
                        </div>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-bold font-heading mb-1">{m.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">{t(`members.${m.key}.role`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 font-semibold px-8 py-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {t('team.meetEveryone')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black">
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
                <li><a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t('footer.projects')}</a></li>
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
