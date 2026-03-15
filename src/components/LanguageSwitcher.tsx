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
    <div className="flex items-center font-heading text-xs tracking-widest uppercase">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 transition-colors ${
          locale === 'en'
            ? 'text-accent-deep dark:text-accent'
            : 'text-current/40 hover:text-current/70'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-current/20">/</span>
      <button
        onClick={() => switchLocale('zh')}
        className={`px-2 py-1 transition-colors ${
          locale === 'zh'
            ? 'text-accent-deep dark:text-accent'
            : 'text-current/40 hover:text-current/70'
        }`}
        aria-label="切換至繁體中文"
      >
        中
      </button>
    </div>
  );
}
