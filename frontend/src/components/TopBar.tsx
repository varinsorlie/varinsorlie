import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type TopBarProps = {
  // Where the back link goes and what it says — defaults to home, but e.g.
  // ListPage points back to /travelPage since that's where lists are
  // actually reached from.
  backTo?: string;
  backLabel?: string;
};

// Shared sticky header for standalone pages (blog list, article/travel detail
// pages) that live outside the homepage's single-page nav — gives them a way
// back to the site without duplicating this markup on every page.
export function TopBar({ backTo = "/", backLabel = "Back home" }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40" style={{ background: "var(--background)" }}>
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg" style={{ color: "var(--font-color)" }}>
          Vårin Sørlie
        </Link>
        <Link
          to={backTo}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
      </nav>
    </header>
  );
}
