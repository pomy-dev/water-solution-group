import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl md:mb-16", align === "center" ? "mx-auto text-center" : "")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("display-title mt-3 text-3xl text-balance sm:text-4xl lg:text-5xl", dark ? "text-white" : "")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", dark ? "text-white/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
