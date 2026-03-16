import { useTranslations } from "next-intl";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--accent-cyan)] opacity-[0.07] blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-[var(--accent-violet)] opacity-[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] w-full pt-16">
        <div className="max-w-4xl">
          {/* Logo mark */}
          <div className="mb-8 animate-fade-in-up">
            <Image
              src="/zone-lab-logo.png"
              alt="zone lab"
              width={56}
              height={56}
              className="rounded-xl"
            />
          </div>

          {/* Main title */}
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up animation-delay-100">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-cyan)] text-[#0a0a0a] font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {t("ctaPrimary")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] rounded-lg hover:border-[var(--text-secondary)] transition-colors text-sm font-medium"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  const t = useTranslations("vision");

  const pillars = [
    {
      key: "improvement" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      key: "execution" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      key: "speed" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="vision">
      <div className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-[3.5rem] font-bold tracking-tight leading-tight">
          {t("title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map((pillar) => (
          <div key={pillar.key} className="group space-y-5">
            <div className="text-[var(--accent-cyan)] transition-transform group-hover:scale-110 duration-300">
              {pillar.icon}
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-semibold">
              {t(`pillars.${pillar.key}.title`)}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t(`pillars.${pillar.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProductsSection() {
  const t = useTranslations("products");

  const products = [
    {
      key: "marawanna" as const,
      status: "live" as const,
      gradient: "from-[#00e5ff] to-[#0088cc]",
      icon: "M",
    },
    {
      key: "product2" as const,
      status: "soon" as const,
      gradient: "from-[#8b5cf6] to-[#6d28d9]",
      icon: "A",
    },
    {
      key: "product3" as const,
      status: "soon" as const,
      gradient: "from-[#f59e0b] to-[#d97706]",
      icon: "B",
    },
  ];

  const statusLabel = (status: "live" | "soon") => {
    if (status === "live") return t("statusLive");
    return t("statusSoon");
  };

  return (
    <Section id="products">
      <div className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-[3.5rem] font-bold tracking-tight leading-tight">
          {t("title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.key}
            className={`group relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-8 transition-all duration-300 hover:border-[var(--text-secondary)] hover:-translate-y-1 hover:shadow-lg ${
              product.status === "soon" ? "opacity-70" : ""
            }`}
          >
            {/* App icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg`}>
              <span className="text-white font-bold text-2xl">{product.icon}</span>
            </div>

            {/* Status badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                product.status === "live"
                  ? "bg-[#00e5ff]/10 text-[var(--accent-cyan)]"
                  : "bg-[var(--border-color)] text-[var(--text-secondary)]"
              }`}>
                {statusLabel(product.status)}
              </span>
            </div>

            {/* Product info */}
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
              {t(`items.${product.key}.name`)}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {t(`items.${product.key}.description`)}
            </p>

            {/* CTA */}
            <a
              href={product.status === "live" ? "#" : undefined}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                product.status === "live"
                  ? "text-[var(--accent-cyan)] hover:underline"
                  : "text-[var(--text-secondary)] cursor-default"
              }`}
            >
              {t(`items.${product.key}.cta`)}
              {product.status === "live" && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              )}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TeamPreviewSection() {
  const t = useTranslations("team");

  const members = [
    { key: "jason", initials: "J", color: "bg-[#00e5ff]", hasPhoto: true },
    { key: "northstar", initials: "NS", color: "bg-[#8b5cf6]", hasPhoto: false },
    { key: "houdini", initials: "H", color: "bg-[#f59e0b]", hasPhoto: false },
    { key: "watchdog", initials: "WD", color: "bg-[#ef4444]", hasPhoto: false },
    { key: "vampire", initials: "V", color: "bg-[#ec4899]", hasPhoto: false },
    { key: "echo", initials: "E", color: "bg-[#10b981]", hasPhoto: false },
    { key: "thomas", initials: "T", color: "bg-[#6366f1]", hasPhoto: false },
    { key: "godin", initials: "G", color: "bg-[#f97316]", hasPhoto: false },
  ];

  return (
    <Section id="team">
      <div className="mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-[3.5rem] font-bold tracking-tight leading-tight">
          {t("title")}
        </h2>
      </div>
      <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-14 leading-relaxed">
        {t("description")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mb-14">
        {members.map((member) => (
          <div
            key={member.key}
            className="group text-center space-y-3"
          >
            {/* Avatar */}
            <div className="relative mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {member.hasPhoto ? (
                <Image
                  src="/jason-photo.png"
                  alt={t(`members.${member.key}.name`)}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`w-full h-full ${member.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-2xl md:text-3xl font-[family-name:var(--font-heading)]">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-base">
                {t(`members.${member.key}.name`)}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {t(`members.${member.key}.role`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/team"
        className="inline-flex items-center gap-2 text-[var(--accent-cyan)] font-medium text-lg hover:underline transition-colors"
      >
        {t("cta")}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ProductsSection />
      <TeamPreviewSection />
    </>
  );
}
