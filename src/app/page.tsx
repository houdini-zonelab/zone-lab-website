'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, 
  Zap, 
  Rocket, 
  Star, 
  Flame,
  Compass,
  Wand2,
  Shield,
  BarChart3,
  Megaphone,
  ClipboardList,
  PenTool,
  ArrowRight,
  Github,
  Mail
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 via-[#1E293B]/20 to-[#334155]/10"></div>
        <div className="absolute inset-0 section-depth"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <Image
                src="/zone-lab-logo.png"
                alt="zone lab logo"
                width={140}
                height={140}
                className="mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
                priority
              />
            </div>
            
            <h1 className="heading-xl mb-6 font-['Space_Grotesk'] bg-gradient-to-r from-[#22C55E] via-[#F8FAFC] to-[#22C55E] bg-clip-text text-transparent">
              Building software that helps you level up.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#F8FAFC]/80 mb-12 font-['DM_Sans'] max-w-2xl mx-auto">
              AI-augmented product studio based in Taiwan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#team"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 font-['DM_Sans']"
              >
                Meet the Team
                <ArrowRight className="icon" />
              </Link>
              <Link
                href="#products"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4 font-['DM_Sans']"
              >
                View Projects
                <ArrowRight className="icon" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-gap px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg font-['Space_Grotesk'] mb-4">Software with purpose.</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                  <Target className="icon-xl text-[#22C55E]" />
                </div>
              </div>
              <h3 className="heading-md font-['Space_Grotesk'] mb-4 text-[#22C55E]">
                Self-improvement, not distraction
              </h3>
              <p className="text-[#F8FAFC]/80 font-['DM_Sans'] leading-relaxed">
                我們相信科技應該讓人變得更好，而不是讓人分心。每個產品都圍繞一個核心問題：「這如何幫助使用者成長？」
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#1E293B]/50 border border-[#334155]">
                  <Zap className="icon-xl text-[#F8FAFC]" />
                </div>
              </div>
              <h3 className="heading-md font-['Space_Grotesk'] mb-4">
                Focused execution
              </h3>
              <p className="text-[#F8FAFC]/80 font-['DM_Sans'] leading-relaxed">
                我們是精實團隊，每個成員都是專家。少即是多——專注做對的事，而不是做很多事。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                  <Rocket className="icon-xl text-[#22C55E]" />
                </div>
              </div>
              <h3 className="heading-md font-['Space_Grotesk'] mb-4 text-[#22C55E]">
                Ship fast, iterate faster
              </h3>
              <p className="text-[#F8FAFC]/80 font-['DM_Sans'] leading-relaxed">
                我們不做 5 年計劃。我們快速推出、收集反饋、持續改進。產品永遠是 beta，因為我們永遠在進化。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-gap px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg font-['Space_Grotesk'] mb-4">What we're building.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marawanna - Live Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-[#22C55E]/10 to-[#1E293B]/20 border-[#22C55E]/30 hover:border-[#22C55E]/60"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#0F172A]">M</span>
                </div>
                <span className="px-3 py-1 bg-[#22C55E] text-[#0F172A] text-sm font-bold rounded-full font-['DM_Sans']">
                  Live
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-['Space_Grotesk']">Marawanna</h3>
              <p className="text-[#F8FAFC]/80 mb-6 font-['DM_Sans']">
                Your personal marathon coach, powered by data.
              </p>
              <a
                href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center inline-flex items-center justify-center gap-2 font-['DM_Sans']"
              >
                Download on App Store
                <ArrowRight className="icon" />
              </a>
            </motion.div>

            {/* Coming Soon Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card bg-[#1E293B]/20 border-[#334155] hover:border-[#334155]/80 opacity-75"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#334155] to-[#1E293B] rounded-2xl flex items-center justify-center">
                  <Star className="icon text-[#F8FAFC]/60" />
                </div>
                <span className="px-3 py-1 bg-[#334155] text-[#F8FAFC]/80 text-sm font-bold rounded-full font-['DM_Sans']">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-['Space_Grotesk'] text-[#F8FAFC]/70">
                [Product Name]
              </h3>
              <p className="text-[#F8FAFC]/50 mb-6 font-['DM_Sans']">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
              <button
                disabled
                className="w-full px-6 py-3 bg-[#334155]/50 text-[#F8FAFC]/40 rounded-lg font-semibold cursor-not-allowed font-['DM_Sans']"
              >
                Stay Tuned
              </button>
            </motion.div>

            {/* Coming Soon Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card bg-[#1E293B]/20 border-[#334155] hover:border-[#334155]/80 opacity-75"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#334155] to-[#1E293B] rounded-2xl flex items-center justify-center">
                  <Flame className="icon text-[#F8FAFC]/60" />
                </div>
                <span className="px-3 py-1 bg-[#334155] text-[#F8FAFC]/80 text-sm font-bold rounded-full font-['DM_Sans']">
                  In Development
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-['Space_Grotesk'] text-[#F8FAFC]/70">
                [Product Name]
              </h3>
              <p className="text-[#F8FAFC]/50 mb-6 font-['DM_Sans']">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
              <button
                disabled
                className="w-full px-6 py-3 bg-[#334155]/50 text-[#F8FAFC]/40 rounded-lg font-semibold cursor-not-allowed font-['DM_Sans']"
              >
                Stay Tuned
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-gap px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg font-['Space_Grotesk'] mb-4">Meet the team.</h2>
            <p className="text-xl text-[#F8FAFC]/80 mb-8 font-['DM_Sans'] max-w-2xl mx-auto">
              精實、跨領域、高效執行。每個成員都專注在自己的領域，共同打造有意義的產品。
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Jason */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="relative mb-4 mx-auto w-[120px] h-[120px]">
                <Image
                  src="/jason-photo.png"
                  alt="Jason"
                  width={120}
                  height={120}
                  className="rounded-full group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22C55E]/20 to-[#1E293B]/20 group-hover:scale-105 transition-transform duration-200"></div>
              </div>
              <h3 className="text-lg font-bold font-['Space_Grotesk']">Jason</h3>
              <p className="text-sm text-[#F8FAFC]/60 font-['DM_Sans']">Founder</p>
            </motion.div>

            {/* Team members with Lucide icons */}
            {[
              { name: 'North Star', role: 'Product Manager', icon: Compass, delay: 0.2 },
              { name: 'Houdini', role: 'Full-Stack Engineer', icon: Wand2, delay: 0.3 },
              { name: 'WatchDog', role: 'DevOps Engineer', icon: Shield, delay: 0.4 },
              { name: 'Vampire', role: 'Data Analyst', icon: BarChart3, delay: 0.5 },
              { name: 'Echo', role: 'Customer Support', icon: Megaphone, delay: 0.6 },
              { name: 'Thomas', role: 'Operations', icon: ClipboardList, delay: 0.7 },
              { name: 'Godin', role: 'Marketing & Content', icon: PenTool, delay: 0.8 },
            ].map((member) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: member.delay }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-4 mx-auto w-[120px] h-[120px]">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#1E293B] to-[#334155] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 border border-[#334155]/50 group-hover:border-[#22C55E]/50">
                      <IconComponent className="icon-xl text-[#F8FAFC] group-hover:text-[#22C55E] transition-colors duration-200" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-['Space_Grotesk']">{member.name}</h3>
                  <p className="text-sm text-[#F8FAFC]/60 font-['DM_Sans']">{member.role}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/team"
              className="btn-secondary inline-flex items-center gap-2 font-['DM_Sans']"
            >
              Meet everyone
              <ArrowRight className="icon" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#334155]/30 bg-[#1E293B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/zone-lab-logo.png"
                  alt="zone lab logo"
                  width={80}
                  height={80}
                  className="transition-transform duration-200 hover:scale-105 cursor-pointer"
                />
              </div>
              <p className="text-[#F8FAFC]/70 font-['DM_Sans']">
                Building software that helps you level up.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-['Space_Grotesk']">Quick Links</h4>
              <ul className="space-y-2 text-[#F8FAFC]/70 font-['DM_Sans']">
                <li>
                  <Link href="/" className="hover:text-[#22C55E] transition-colors duration-200 cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#22C55E] transition-colors duration-200 cursor-pointer">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#22C55E] transition-colors duration-200 cursor-pointer">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-['Space_Grotesk']">Connect</h4>
              <ul className="space-y-2 text-[#F8FAFC]/70 font-['DM_Sans']">
                <li>
                  <a 
                    href="mailto:hello@zonelab.tw" 
                    className="inline-flex items-center gap-2 hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
                  >
                    <Mail className="icon" />
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/houdini-zonelab" 
                    className="inline-flex items-center gap-2 hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
                  >
                    <Github className="icon" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#334155]/30 mt-8 pt-8 text-center text-[#F8FAFC]/50">
            <p className="font-['DM_Sans']">© 2026 zone lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}