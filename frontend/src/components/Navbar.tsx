import { Link } from "react-router-dom";
import { useLanguage } from "./Layout.js";

const sectionLinks = [
  { id: "about", key: "navAbout" },
  { id: "experience", key: "navExperience" },
  { id: "projects", key: "navProjects" },
];

export default function NavBar() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "no" ? "en" : "no");
  };

  // The app uses HashRouter, which owns the URL hash for routing — a plain
  // `href="#about"` would be interpreted as a navigation to the "/about"
  // route (matching the ":slug" catch-all) rather than an in-page scroll.
  // So intercept the click and scroll manually instead of letting the
  // browser follow the hash.
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40" style={{ background: "var(--background)" }}>
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => scrollToId(e, "top")}
          className="font-serif text-lg"
          style={{ color: "var(--font-color)" }}
        >
          {t("greeting")}
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => scrollToId(e, link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
          <li>
            {/* Separate page, not an in-page section — plain router Link. */}
            <Link
              to="/travelPage"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {t("navBlog")}
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToId(e, "contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {t("navContact")}
            </a>
          </li>
        </ul>

        <button
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="px-4 py-1.5 rounded-full border border-border text-sm bg-white"
        >
          {language === "no" ? "English" : "Norsk"}
        </button>
      </nav>
    </header>
  );
}
