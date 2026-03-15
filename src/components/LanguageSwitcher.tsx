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
    <div className="flex items-center text-sm font-medium">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded-md transition-colors duration-150 ${
          locale === 'en'
            ? 'text-primary dark:text-primary-light font-semibold'
            : 'text-[#374151] dark:text-[#E2E8F0] hover:text-primary dark:hover:text-primary-light'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300 dark:text-slate-600">|</span>
      <button
        onClick={() => switchLocale('zh')}
        className={`px-2 py-1 rounded-md transition-colors duration-150 ${
          locale === 'zh'
            ? 'text-primary dark:text-primary-light font-semibold'
            : 'text-[#374151] dark:text-[#E2E8F0] hover:text-primary dark:hover:text-primary-light'
        }`}
        aria-label="切換至繁體中文"
      >
        繁中
      </button>
    </div>
  );
}
