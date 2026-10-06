import { Github, Linkedin, Menu, Terminal, Sparkles, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/data/portfolio";
import { CommandTerminal } from "./command-terminal";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "bg-[#060911]/90 shadow-lg shadow-black/40" : "bg-transparent"}`}>
        <nav className="page-shell flex h-20 items-center justify-between" aria-label="Main navigation">
          {/* Brand Logo */}
          <a href="/#home" className="brand-mark group" aria-label="Bibek Kumar Jha, home">
            <span className="brand-dot" />
            <span className="group-hover:text-emerald-400 transition-colors">BIBEK.DEV</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1.5 lg:flex rounded-full border border-border/60 bg-card/40 px-2 py-1.5 backdrop-blur-md shadow-[0_12px_28px_rgba(2,6,23,0.25)]">
            {navigation.map((item) => (
              <a
                className="nav-link text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-2.5 md:flex">
            {/* Command Terminal Trigger Button */}
            <button
              onClick={() => setTerminalOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-border/80 bg-[#0c1222] px-3 py-1.5 text-xs font-mono text-muted-foreground hover:border-emerald-500/40 hover:text-foreground hover:bg-[#10182d] transition-all shadow-sm"
              title="Open Command Terminal (⌘K)"
            >
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>Terminal</span>
              <kbd className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground font-semibold">
                ⌘K
              </kbd>
            </button>

            <Button asChild variant="ghost" size="icon" className="hover:text-sky-300 text-muted-foreground border border-border/60 bg-card/30">
              <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:brightness-110 font-semibold shadow-[0_12px_26px_rgba(14,165,233,0.25)]"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Trigger & Terminal */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTerminalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-card/60 px-2.5 py-1.5 text-xs font-mono text-emerald-400"
              aria-label="Open terminal"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>⌘K</span>
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full border-border/70 bg-[#090d18] sm:max-w-sm">
                <SheetTitle className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="brand-dot" />
                  BIBEK.DEV
                </SheetTitle>
                <div className="mt-12 grid gap-2">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6">
                  <Button asChild variant="outline" className="justify-start gap-2">
                    <a href={siteConfig.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" /> GitHub Profile
                    </a>
                  </Button>
                  <Button asChild className="justify-start gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950">
                    <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
                  </Button>
                  <Button
                    onClick={() => {
                      setOpen(false);
                      setTerminalOpen(true);
                    }}
                    variant="secondary"
                    className="justify-start gap-2 font-mono text-xs"
                  >
                    <Terminal className="h-4 w-4 text-emerald-400" /> Launch CLI Terminal
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Command Terminal Modal */}
      <CommandTerminal open={terminalOpen} onOpenChange={setTerminalOpen} />
    </>
  );
}