'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'zh' | 'en') {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'text-white bg-white/10'
            : 'text-white/50 hover:text-white/80'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => switchLocale('zh')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'zh'
            ? 'text-white bg-white/10'
            : 'text-white/50 hover:text-white/80'
        }`}
        aria-label="切換至繁體中文"
      >
        繁中
      </button>
    </div>
  );
}
