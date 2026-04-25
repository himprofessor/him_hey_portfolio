import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const channels = [
  { icon: Mail, label: "heyhim99@gmail.com", href: "mailto:heyhim99@gmail.com" },
  { icon: Github, label: "https://github.com/himprofessor/him_hey_portfolio", href: "https://github.com" },
  { icon: Linkedin, label: "linkedin.com/in/himhey", href: "https://linkedin.com" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out — I'll reply within 24 hours.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-sm text-primary mb-3">04 · Say hello</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Let's build <span className="text-gradient">something great</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you have a project in mind or just want to chat, my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Channels</h3>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/60 transition-colors group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-4 w-4" />
                </span>
                <span className="text-sm group-hover:text-primary transition-colors break-all">
                  {c.label}
                </span>
              </a>
            ))}
            <div className="mt-auto pt-4 text-xs text-muted-foreground font-mono">
              Based in 🌍 Remote · CET timezone
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  Name
                </label>
                <Input required name="name" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <Input required type="email" name="email" placeholder="ada@example.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                Subject
              </label>
              <Input required name="subject" placeholder="Project inquiry" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">
                Message
              </label>
              <Textarea required name="message" rows={5} placeholder="Tell me about your idea…" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
              <Send className="h-4 w-4" />
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Him HEY · Crafted with ☕ and React
        </footer>
      </div>
    </section>
  );
};

export default Contact;
