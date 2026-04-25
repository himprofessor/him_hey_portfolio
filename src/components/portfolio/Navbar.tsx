import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface Props {
  onDownload: () => void;
}

const Navbar = ({ onDownload }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setLight((v) => !v);
  };

  return (
    <header
      className={cn(
        "no-print fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all",
          scrolled ? "glass shadow-soft" : ""
        )}
      >
        <a href="#about" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground">
            YN
          </span>
          <span className="hidden sm:inline text-gradient">Your.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button
            onClick={onDownload}
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden container mt-2">
          <div className="glass rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-secondary/60"
              >
                {l.label}
              </a>
            ))}
            <Button onClick={onDownload} variant="hero" className="mt-2">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
