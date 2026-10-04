import type { IndustryIcon as IconName } from "@/lib/content";

const paths: Record<IconName, React.ReactNode> = {
  mining: <path d="M3 20h18M5 20l4-9 3 5 3-7 4 11" />,
  hvac: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  oil: <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z" />,
  pharma: (
    <>
      <rect x="4" y="9" width="16" height="8" rx="4" />
      <path d="M12 9v8M8 3h8" />
    </>
  ),
  water: <path d="M2 10c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5-1M2 16c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5-1" />,
  infra: <path d="M4 21V8l6-4v17M10 21h10V11l-10-3M14 14h2M14 17h2" />,
};

export default function IndustryIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}
