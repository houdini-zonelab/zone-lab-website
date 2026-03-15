'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');

  const switchLocale = () => {
    const next = locale === 'zh' ? 'en' : 'zh';
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={switchLocale}
      aria-label={t('switchLangLabel')}
      className="fixed top-6 right-6 z-50 px-4 py-2 text-sm font-semibold bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-full text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
    >
      {t('switchLang')}
    </button>
  );
}
