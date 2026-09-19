import React, { useEffect, useState } from "react";
import { Terminal, CornerDownLeft, Sparkles, FolderGit2, Layers, Cpu, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { siteConfig } from "@/data/portfolio";
import { toast } from "sonner";

interface CommandTerminalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const commandsList = [
  { cmd: "projects", desc: "Jump to selected featured projects", action: () => scrollToId("projects") },
  { cmd: "architecture", desc: "View live system architecture simulator", action: () => scrollToId("architecture") },
  { cmd: "skills", desc: "Inspect technologies & technical toolkit", action: () => scrollToId("stack") },
  { cmd: "api", desc: "Launch interactive REST API sandbox", action: () => scrollToId("api-sandbox") },
  { cmd: "about", desc: "View developer background & focus", action: () => scrollToId("about") },
  { cmd: "contact", desc: "Jump to contact & hiring section", action: () => scrollToId("contact") },
  { cmd: "email", desc: "Copy email address to clipboard", action: copyEmail },
  { cmd: "github", desc: "Open GitHub profile (Bibek-Jha344)", action: () => window.open(siteConfig.github, "_blank") },
  { cmd: "help", desc: "List all supported terminal commands", action: () => {} },
  { cmd: "clear", desc: "Clear terminal output log", action: () => {} },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function copyEmail() {
  navigator.clipboard.writeText(siteConfig.email);
  toast.success("Email copied to clipboard!", {
    description: siteConfig.email,
  });
}

export function CommandTerminal({ open, onOpenChange }: CommandTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ text: string; type: "input" | "output" | "error" | "success" }>>([
    { text: "Welcome to Bibek Kumar Jha's Interactive CLI v2.4", type: "output" },
    { text: "Type 'help' or select any command below to navigate.", type: "output" },
  ]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...history, { text: `> ${cleanCmd}`, type: "input" as const }];

    if (cleanCmd === "help") {
      newLogs.push({
        text: "Available commands:\n• projects - Jump to featured work\n• architecture - Live concurrency simulator\n• api - REST API sandbox\n• skills - Technologies & stack\n• email - Copy direct email\n• github - Open GitHub profile\n• clear - Clear screen",
        type: "output",
      });
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cleanCmd === "projects") {
      scrollToId("projects");
      newLogs.push({ text: "Navigating to Selected Projects...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "architecture") {
      scrollToId("architecture");
      newLogs.push({ text: "Navigating to System Architecture Simulator...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "api") {
      scrollToId("api-sandbox");
      newLogs.push({ text: "Navigating to REST API Sandbox...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "skills") {
      scrollToId("stack");
      newLogs.push({ text: "Navigating to Technology Stack...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "about") {
      scrollToId("about");
      newLogs.push({ text: "Navigating to About Profile...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "contact") {
      scrollToId("contact");
      newLogs.push({ text: "Navigating to Contact form...", type: "success" });
      onOpenChange(false);
    } else if (cleanCmd === "email") {
      copyEmail();
      newLogs.push({ text: `Copied ${siteConfig.email} to clipboard.`, type: "success" });
    } else if (cleanCmd === "github") {
      window.open(siteConfig.github, "_blank");
      newLogs.push({ text: "Opening GitHub in new window...", type: "success" });
    } else {
      newLogs.push({
        text: `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`,
        type: "error",
      });
    }

    setHistory(newLogs);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-border/80 bg-[#090d18]/95 p-0 text-foreground shadow-2xl backdrop-blur-xl sm:rounded-2xl overflow-hidden">
        <DialogTitle className="sr-only">Developer Command Terminal</DialogTitle>
        <DialogDescription className="sr-only">Interactive developer terminal for navigating the portfolio</DialogDescription>
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border/60 bg-[#060911] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 font-mono text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              bibek@developer-box:~
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-border/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC to close
            </span>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="max-h-60 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-1.5 select-text">
          {history.map((log, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                log.type === "input"
                  ? "text-sky-300 font-semibold"
                  : log.type === "error"
                  ? "text-rose-400"
                  : log.type === "success"
                  ? "text-emerald-300 font-medium"
                  : "text-slate-300"
              }`}
            >
              {log.text}
            </div>
          ))}
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border/60 bg-[#060911]/80 px-4 py-3">
          <span className="font-mono text-xs font-bold text-emerald-400">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'projects', 'skills', 'architecture', 'email')..."
            className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="rounded bg-emerald-500/20 px-2 py-1 font-mono text-[10px] font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-colors"
          >
            <CornerDownLeft className="h-3 w-3" />
          </button>
        </form>

        {/* Quick Command Suggestions */}
        <div className="border-t border-border/40 bg-[#0b101e] p-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 mb-2 px-1">
            Quick Actions
          </p>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 font-mono text-xs">
            {commandsList.slice(0, 6).map((item) => (
              <button
                key={item.cmd}
                onClick={() => {
                  handleCommand(item.cmd);
                  item.action();
                }}
                className="flex items-center justify-between rounded-lg border border-border/40 bg-card/40 px-2.5 py-1.5 text-left text-muted-foreground hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-foreground transition-all"
              >
                <span className="font-semibold text-emerald-400">{item.cmd}</span>
                <span className="text-[10px] text-muted-foreground/60">↵</span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
