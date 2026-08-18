import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./Layout.js";

// Ported from the old standalone CvPage.tsx timeline design, wired up to
// the translated exp1..exp7 keys in Layout.tsx instead of hardcoded text.

type Category = "all" | "work" | "edu";

type CVEntry = {
  key: string; // maps to expNDate / expNRole / expNOrg / expNDesc in Layout.tsx
  cat: Exclude<Category, "all">;
  tags: string[];
};

type CVGroup = {
  year: string;
  entries: CVEntry[];
};

const CV_DATA: CVGroup[] = [
  {
    year: "2026",
    entries: [{ key: "exp1", cat: "work", tags: ["Python", "PySpark", "Databricks"] }],
  },
  {
    year: "2025",
    entries: [
      { key: "exp2", cat: "work", tags: ["Figma", "React", "TypeScript"] },
      { key: "exp3", cat: "edu", tags: ["Software architecture", "Systems"] },
      { key: "exp4", cat: "work", tags: ["React", "Python", "Figma"] },
      { key: "exp6", cat: "edu", tags: ["HCI", "UX design"] },
    ],
  },
  {
    year: "2024",
    entries: [{ key: "exp5", cat: "edu", tags: [] }],
  },
  {
    year: "2021",
    entries: [{ key: "exp7", cat: "edu", tags: [] }],
  },
];

const BADGE_COLOR: Record<Exclude<Category, "all">, string> = {
  work: "bg-orange-100 text-orange-800",
  edu: "bg-green-100 text-green-800",
};

const skills = [
  "Python",
  "JavaScript",
  "Java",
  "Kotlin",
  "PySpark",
  "Databricks",
  "React",
  "Docker",
  "Git",
  "Android Studio",
  "VS Code",
  "Figma",
];

// Hook: fires when element enters viewport
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function TimelineCard({
  entry,
  index,
  isLeft,
  t,
}: {
  entry: CVEntry;
  index: number;
  isLeft: boolean;
  t: (key: string) => string;
}) {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const desc = t(`${entry.key}Desc`);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`
        group relative bg-white border border-black/10 rounded-2xl p-5
        transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-0.5
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
      `}
    >
      {/* dot on timeline */}
      <span
        className={`absolute top-5 w-2.5 h-2.5 rounded-full border-2 border-black/20 bg-[#f5f0e8] group-hover:bg-[#c94b1f] group-hover:border-[#c94b1f] transition-colors ${
          isLeft ? "-right-[18px]" : "-left-[18px]"
        }`}
      />

      <div className={`flex items-start justify-between gap-3 mb-1 ${isLeft ? "flex-row-reverse" : ""}`}>
        <p className={`font-serif text-[1.1rem] leading-snug tracking-tight ${isLeft ? "text-right" : "text-left"}`}>
          {t(`${entry.key}Role`)}
        </p>
        <span className={`text-[0.62rem] tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0 font-medium ${BADGE_COLOR[entry.cat]}`}>
          {t(entry.cat === "work" ? "filterWork" : "filterEdu")}
        </span>
      </div>

      <p className={`text-sm italic text-black/50 mb-1 ${isLeft ? "text-right" : "text-left"}`}>
        {t(`${entry.key}Org`)}
      </p>
      <p className={`text-sm italic text-black/50 mb-2 ${isLeft ? "text-right" : "text-left"}`}>
        {t(`${entry.key}Date`)}
      </p>

      {desc && (
        <p className={`text-sm text-black/70 leading-relaxed ${isLeft ? "text-right" : "text-left"}`}>{desc}</p>
      )}

      {entry.tags.length > 0 && (
        <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? "justify-end" : "justify-start"}`}>
          {entry.tags.map((tag) => (
            <span key={tag} className="text-[0.68rem] bg-[#ede8dc] text-black/70 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("all");
  const { ref: lineRef, inView: lineIn } = useInView({ threshold: 0.05 });

  const FILTERS: { key: Category; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "work", label: t("filterWork") },
    { key: "edu", label: t("filterEdu") },
  ];

  const visibleGroups = CV_DATA.filter((g) => active === "all" || g.entries.some((e) => e.cat === active));

  return (
    <section id="experience" className="scroll-mt-24 py-20" style={{ background: "var(--background1)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--font-color)" }}>
            {t("experienceTitle")}
          </h2>
        </motion.div>

        {/* FILTERS */}
        <div className="max-w-3xl mx-auto px-6 flex gap-2 flex-wrap mb-4">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-[0.72rem] tracking-[.12em] uppercase border rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer
                ${
                  active === f.key
                    ? "bg-[#0d0d0d] text-[#f5f0e8] border-[#0d0d0d]"
                    : "border-black/15 text-black/50 hover:border-black/40 hover:text-black"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="max-w-3xl mx-auto px-0 mt-10 mb-16 relative">
          {/* vertical line */}
          <div
            ref={lineRef}
            style={{
              transformOrigin: "top",
              transform: lineIn ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.2s cubic-bezier(.16,1,.3,1)",
            }}
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/10"
          />

          {visibleGroups.map((group) => {
            const entries = active === "all" ? group.entries : group.entries.filter((e) => e.cat === active);
            if (!entries.length) return null;
            return (
              <div key={group.year} className="relative mb-12 px-6 sm:px-0">
                {/* year label */}
                <span className="hidden sm:block absolute left-0 top-0.5 w-[110px] text-right pr-6 font-serif italic text-sm text-black/40">
                  {group.year}
                </span>
                <span className="sm:hidden block font-serif italic text-sm text-black/40 mb-3">{group.year}</span>

                <div className="sm:flex sm:flex-col">
                  {entries.map((entry, i) => {
                    const isLeft = i % 2 === 0; // alternate left/right
                    return (
                      <div
                        key={`${group.year}-${entry.key}`}
                        className={`relative mb-3 sm:flex sm:gap-6 ${isLeft ? "sm:flex-row-reverse" : ""}`}
                      >
                        {/* spacer for centering */}
                        <div className="hidden sm:block sm:w-[50%]" />

                        {/* card */}
                        <div className="sm:w-[50%]">
                          <TimelineCard entry={entry} index={i} isLeft={isLeft} t={t} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto px-6 pt-10 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-3 tracking-wide">{t("skillsLabel")}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.75rem] px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
