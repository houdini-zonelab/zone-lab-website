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
    <div className="flex items-center text-[13px] font-medium">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded-md transition-colors duration-150 cursor-pointer ${
          locale === 'en'
            ? 'text-primary dark:text-primary-light font-semibold'
            : 'text-[#555] dark:text-[#aab] hover:text-[#1a1a1a] dark:hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300 dark:text-slate-600 select-none">|</span>
      <button
        onClick={() => switchLocale('zh')}
        className={`px-2 py-1 rounded-md transition-colors duration-150 cursor-pointer ${
          locale === 'zh'
            ? 'text-primary dark:text-primary-light font-semibold'
            : 'text-[#555] dark:text-[#aab] hover:text-[#1a1a1a] dark:hover:text-white'
        }`}
        aria-label="切換至繁體中文"
      >
        繁中
      </button>
    </div>
  );
}
