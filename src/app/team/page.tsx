'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  Github
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Jason',
    role: 'Founder',
    quote: '我拍板、我負責、我實驗。',
    description: 'Zone lab 的創辦人。相信精實團隊 + 高效協作是未來的工作模式。不做 pitch deck，直接做產品。',
    image: '/jason-photo.png',
    isPhoto: true
  },
  {
    name: 'North Star',
    role: 'Product Manager',
    quote: '我不只報告市場，我告訴你我們該做什麼。',
    description: '負責市場訊號蒐集與產品方向。有主見、不怕爭議。如果我說「這是下一個機會」，那就是。',
    icon: Compass
  },
  {
    name: 'Houdini',
    role: 'Full-Stack Engineer',
    quote: '我把 spec 變成可以動的東西。',
    description: '負責產品開發，從前端到後端。喜歡乾淨的架構與優雅的解法。如果可以用 10 行解決，絕不寫 100 行。',
    icon: Wand2
  },
  {
    name: 'WatchDog',
    role: 'DevOps Engineer',
    quote: '我確保東西不會炸掉。',
    description: '負責基礎設施、部署與監控。你看不到我的工作，因為我做得好就是什麼事都不會發生。',
    icon: Shield
  },
  {
    name: 'Vampire',
    role: 'Data Analyst',
    quote: '我從數據裡吸取真相。',
    description: '負責產品數據分析與使用者行為洞察。數字不會說謊，但會被誤讀。我的工作是找出真正重要的訊號。',
    icon: BarChart3
  },
  {
    name: 'Echo',
    role: 'Customer Support',
    quote: '我聽使用者在說什麼，也聽他們沒說的。',
    description: '負責使用者回饋收集與支援。每個抱怨背後都有一個產品改進機會。我的工作是不讓那些訊號消失。',
    icon: Megaphone
  },
  {
    name: 'Thomas',
    role: 'Operations',
    quote: '我追蹤進度，你們專心做事。',
    description: '負責營運追蹤與週報彙整。我不催人，但我確保沒有東西被遺忘。',
    icon: ClipboardList
  },
  {
    name: 'Godin',
    role: 'Marketing & Content',
    quote: '我把產品變成故事。',
    description: '負責行銷內容與對外溝通。好產品需要好故事。我的工作是讓人記住我們為什麼存在。',
    icon: PenTool
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#334155] section-depth">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-xl font-['Space_Grotesk'] mb-6 bg-gradient-to-r from-[#22C55E] via-[#F8FAFC] to-[#22C55E] bg-clip-text text-transparent">
            The Team
          </h1>
          <p className="text-xl text-[#F8FAFC]/80 mb-8 font-['DM_Sans'] max-w-2xl mx-auto">
            每個成員都有自己的超能力，共同打造讓人變得更好的產品。
          </p>
          <Link
            href="/"
            className="btn-secondary inline-flex items-center gap-2 font-['DM_Sans']"
          >
            <ArrowLeft className="icon" />
            Back to Home
          </Link>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="section-gap px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-[#1E293B]/20 to-[#334155]/20"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {member.isPhoto ? (
                      <div className="relative group">
                        <Image
                          src={member.image!}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="rounded-2xl object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22C55E]/20 to-[#1E293B]/20 transition-opacity duration-200 group-hover:opacity-80"></div>
                      </div>
                    ) : (
                      <div className="w-[120px] h-[120px] rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#334155] flex items-center justify-center transition-transform duration-200 hover:scale-105 border border-[#334155]/50 hover:border-[#22C55E]/50 group">
                        {member.icon && <member.icon className="w-12 h-12 text-[#F8FAFC] group-hover:text-[#22C55E] transition-colors duration-200" />}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-1 font-['Space_Grotesk']">{member.name}</h3>
                    <p className="text-lg text-[#22C55E] mb-4 font-['DM_Sans'] font-medium">{member.role}</p>
                    
                    <blockquote className="text-lg font-medium italic text-[#F8FAFC]/90 mb-4 border-l-4 border-[#22C55E] pl-4 font-['DM_Sans']">
                      "{member.quote}"
                    </blockquote>
                    
                    <p className="text-[#F8FAFC]/70 leading-relaxed font-['DM_Sans']">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-gap px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg font-['Space_Grotesk'] mb-6">
            想要跟我們一起打造有意義的產品？
          </h2>
          <p className="text-xl text-[#F8FAFC]/80 mb-8 font-['DM_Sans'] max-w-2xl mx-auto">
            我們隨時在尋找有才華、有熱忱的夥伴。
          </p>
          <a
            href="mailto:hello@zonelab.tw"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 font-['DM_Sans']"
          >
            <Mail className="icon" />
            Get in Touch
          </a>
        </motion.div>
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
                  <Link href="/#products" className="hover:text-[#22C55E] transition-colors duration-200 cursor-pointer">
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