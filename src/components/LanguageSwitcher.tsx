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
    <div className="flex items-center gap-1 text-sm bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur border border-zinc-300 dark:border-zinc-700 rounded-full px-1 py-1">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === 'en'
            ? 'text-zinc-900 dark:text-white bg-white dark:bg-white/15 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('zh')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === 'zh'
            ? 'text-zinc-900 dark:text-white bg-white dark:bg-white/15 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
        }`}
        aria-label="切換至繁體中文"
      >
        繁中
      </button>
    </div>
  );
}
