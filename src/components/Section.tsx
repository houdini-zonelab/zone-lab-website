import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export function Section({ id, children, className = "", fullWidth = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-30 px-6 md:px-12 ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-[1280px]">{children}</div>
      )}
    </section>
  );
}
