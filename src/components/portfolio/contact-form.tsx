import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check, Send, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/portfolio";
import { toast } from "sonner";

const intentPills = [
  "🚀 Full-time Software Engineering Role",
  "💼 Contract / Freelance Project",
  "⚡ Backend & System Architecture",
  "☕ Quick Tech & Networking Chat",
];

export function ContactForm() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function handlePillClick(pill: string) {
    setMessage(`Hi Bibek,\n\nI'd like to talk regarding: ${pill}.\n\nLet's connect!`);
  }

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    toast.success("Email address copied to clipboard!", {
      description: siteConfig.email,
    });
    setTimeout(() => setCopied(false), 2500);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const msg = String(data.get("message") ?? "").trim();

    if (!name || !email || !msg) {
      setError("Please fill out all fields.");
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setError("");
    toast.success("Preparing your email client...");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`)}`;
  }

  return (
    <form onSubmit={submit} className="contact-form" noValidate>
      {/* Quick message presets */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Select Topic (Auto-Fills Message)
        </label>
        <div className="flex flex-wrap gap-2">
          {intentPills.map((pill) => (
            <button
              type="button"
              key={pill}
              onClick={() => handlePillClick(pill)}
              className="rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all text-left"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">
          Your Name
          <Input
            name="name"
            autoComplete="name"
            placeholder="John Doe"
            className="bg-[#060911] border-border/80 focus:border-emerald-500 h-11"
          />
        </label>
        <label className="field-label">
          Your Email
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            className="bg-[#060911] border-border/80 focus:border-emerald-500 h-11"
          />
        </label>
      </div>

      <label className="field-label">
        Message
        <Textarea
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the engineering role, project, or technical vision..."
          className="bg-[#060911] border-border/80 focus:border-emerald-500 resize-none font-sans text-sm"
        />
      </label>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-border/40">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          <span>Copy email directly ({siteConfig.email})</span>
        </button>

        <Button
          type="submit"
          size="lg"
          className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold gap-2 shadow-lg shadow-emerald-500/20"
        >
          <Send className="h-4 w-4" /> Send Message
        </Button>
      </div>

      {error && (
        <p className="text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}