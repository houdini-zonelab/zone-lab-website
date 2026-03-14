'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    emoji: '🧭'
  },
  {
    name: 'Houdini',
    role: 'Full-Stack Engineer',
    quote: '我把 spec 變成可以動的東西。',
    description: '負責產品開發，從前端到後端。喜歡乾淨的架構與優雅的解法。如果可以用 10 行解決，絕不寫 100 行。',
    emoji: '🎩'
  },
  {
    name: 'WatchDog',
    role: 'DevOps Engineer',
    quote: '我確保東西不會炸掉。',
    description: '負責基礎設施、部署與監控。你看不到我的工作，因為我做得好就是什麼事都不會發生。',
    emoji: '🐕'
  },
  {
    name: 'Vampire',
    role: 'Data Analyst',
    quote: '我從數據裡吸取真相。',
    description: '負責產品數據分析與使用者行為洞察。數字不會說謊，但會被誤讀。我的工作是找出真正重要的訊號。',
    emoji: '🧛'
  },
  {
    name: 'Echo',
    role: 'Customer Support',
    quote: '我聽使用者在說什麼，也聽他們沒說的。',
    description: '負責使用者回饋收集與支援。每個抱怨背後都有一個產品改進機會。我的工作是不讓那些訊號消失。',
    emoji: '📢'
  },
  {
    name: 'Thomas',
    role: 'Operations',
    quote: '我追蹤進度，你們專心做事。',
    description: '負責營運追蹤與週報彙整。我不催人，但我確保沒有東西被遺忘。',
    emoji: '📋'
  },
  {
    name: 'Godin',
    role: 'Marketing & Content',
    quote: '我把產品變成故事。',
    description: '負責行銷內容與對外溝通。好產品需要好故事。我的工作是讓人記住我們為什麼存在。',
    emoji: '✍️'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            The Team
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            每個成員都有自己的超能力，共同打造讓人變得更好的產品。
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors hover-lift"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover-lift"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {member.isPhoto ? (
                      <div className="relative">
                        <Image
                          src={member.image!}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                      </div>
                    ) : (
                      <div className="w-[120px] h-[120px] rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-5xl">
                        {member.emoji}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lg text-cyan-400 mb-4">{member.role}</p>
                    
                    <blockquote className="text-lg font-medium italic text-gray-300 mb-4 border-l-4 border-purple-500 pl-4">
                      "{member.quote}"
                    </blockquote>
                    
                    <p className="text-gray-400 leading-relaxed">
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
      <section className="py-20 px-4 bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            想要跟我們一起打造有意義的產品？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            我們隨時在尋找有才華、有熱忱的夥伴。
          </p>
          <a
            href="mailto:hello@zonelab.tw"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform glow-cyan hover-lift"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/zone-lab-logo.png"
                alt="zone lab logo"
                width={80}
                height={80}
                className="mb-4"
              />
              <p className="text-gray-400">
                Building software that helps you level up.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/#products" className="hover:text-white transition-colors">Projects</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hello@zonelab.tw" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="https://github.com/houdini-zonelab" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 zone lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}