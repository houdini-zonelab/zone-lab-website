import { useTranslations } from "next-intl";
import { Section } from "@/components/Section";
import Image from "next/image";

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

export default function TeamPage() {
  const t = useTranslations("team");

  return (
    <>
      {/* Hero header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-tight mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {t("pageDescription")}
          </p>
        </div>
      </section>

      {/* Team members */}
      <Section>
        <div className="space-y-12">
          {members.map((member, index) => (
            <div
              key={member.key}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] transition-all hover:border-[var(--text-secondary)] ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                  {member.hasPhoto ? (
                    <Image
                      src="/jason-photo.png"
                      alt={t(`members.${member.key}.name`)}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full ${member.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-5xl font-[family-name:var(--font-heading)]">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold">
                    {t(`members.${member.key}.name`)}
                  </h2>
                  <p className="text-[var(--accent-cyan)] font-medium mt-1">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[var(--accent-violet)] pl-4 italic text-[var(--text-secondary)]">
                  &ldquo;{t(`members.${member.key}.quote`)}&rdquo;
                </blockquote>

                {/* Bio */}
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {t(`members.${member.key}.bio`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
