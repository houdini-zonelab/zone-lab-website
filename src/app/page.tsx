'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-orange-500/5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/zone-lab-logo.png"
              alt="zone lab logo"
              width={120}
              height={120}
              className="mx-auto mb-8 hover-lift"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Building software that helps you level up.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              AI-augmented product studio based in Taiwan.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                href="#team"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform glow-cyan hover-lift"
              >
                Meet the Team
              </Link>
              <Link
                href="#products"
                className="inline-block px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-orange-400 hover:text-orange-400 transition-colors hover-lift"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Software with purpose.</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gray-900/50 hover-lift"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Self-improvement, not distraction</h3>
              <p className="text-gray-300">
                我們相信科技應該讓人變得更好，而不是讓人分心。每個產品都圍繞一個核心問題：「這如何幫助使用者成長？」
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gray-900/50 hover-lift"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Focused execution</h3>
              <p className="text-gray-300">
                我們是精實團隊，每個成員都是專家。少即是多——專注做對的事，而不是做很多事。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gray-900/50 hover-lift"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Ship fast, iterate faster</h3>
              <p className="text-gray-300">
                我們不做 5 年計劃。我們快速推出、收集反饋、持續改進。產品永遠是 beta，因為我們永遠在進化。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What we're building.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marawanna - Live Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover-lift glow-cyan"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  M
                </div>
                <span className="ml-3 px-3 py-1 bg-green-500 text-black text-sm font-bold rounded-full">
                  Live
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Marawanna</h3>
              <p className="text-gray-300 mb-6">Your personal marathon coach, powered by data.</p>
              <a
                href="https://apps.apple.com/tw/app/marawanna/id6754880832?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Download on App Store
              </a>
            </motion.div>

            {/* Coming Soon Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-purple-500/60 transition-all hover-lift opacity-75"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <span className="ml-3 px-3 py-1 bg-gray-600 text-gray-300 text-sm font-bold rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">[Product Name]</h3>
              <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <button
                disabled
                className="inline-block w-full text-center px-6 py-3 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
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
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-orange-500/60 transition-all hover-lift opacity-75"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-2xl">
                  🔥
                </div>
                <span className="ml-3 px-3 py-1 bg-gray-600 text-gray-300 text-sm font-bold rounded-full">
                  In Development
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">[Product Name]</h3>
              <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              <button
                disabled
                className="inline-block w-full text-center px-6 py-3 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
              >
                Stay Tuned
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the team.</h2>
            <p className="text-xl text-gray-300 mb-8">
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
              <div className="relative mb-4">
                <Image
                  src="/jason-photo.png"
                  alt="Jason"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:scale-105 transition-transform"></div>
              </div>
              <h3 className="text-lg font-bold">Jason</h3>
              <p className="text-sm text-gray-400">Founder</p>
            </motion.div>

            {/* Other team members */}
            {[
              { name: 'North Star', role: 'Product Manager', emoji: '🧭' },
              { name: 'Houdini', role: 'Full-Stack Engineer', emoji: '🎩' },
              { name: 'WatchDog', role: 'DevOps Engineer', emoji: '🐕' },
              { name: 'Vampire', role: 'Data Analyst', emoji: '🧛' },
              { name: 'Echo', role: 'Customer Support', emoji: '📢' },
              { name: 'Thomas', role: 'Operations', emoji: '📋' },
              { name: 'Godin', role: 'Marketing & Content', emoji: '✍️' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4">
                  <div className="w-[120px] h-[120px] rounded-full mx-auto bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                    {member.emoji}
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/team"
              className="inline-block px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors hover-lift"
            >
              Meet everyone →
            </Link>
          </motion.div>
        </div>
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
                <li><Link href="#products" className="hover:text-white transition-colors">Projects</Link></li>
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