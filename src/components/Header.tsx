"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLocale = () => {
    const newLocale = locale === "zh" ? "en" : "zh";
    const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src="/zone-lab-logo.png"
            alt="zone lab logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-lg font-bold tracking-tight">zone lab</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#vision"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("about")}
          </a>
          <a
            href="#products"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("projects")}
          </a>
          <Link
            href={`/${locale}/team`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("team")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLocale}
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
          </Button>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
