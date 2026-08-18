import { useLanguage } from "./Layout.js";
 
export function OpenToWorkBadge() {
  const { t } = useLanguage();
 
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-[0.75rem] tracking-wide bg-white w-fit"
      style={{ color: "var(--font-color)" }}
    >
      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
      {t("openToWork") ?? "Open to work"}
    </span>
  );
}
 