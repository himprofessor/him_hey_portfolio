import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

interface Props {
  onDownload: () => void;
}

const Hero = ({ onDownload }: Props) => {
  return (
    <section id="about" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Him HEY</span>
            <br />
            <span className="text-foreground/90">Full‑Stack Developer</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I craft accessible, performant web experiences with modern
            JavaScript, thoughtful design systems, and resilient backends.
            Currently exploring AI‑driven interfaces and edge computing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button onClick={onDownload} variant="ghost" size="lg">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "3+", v: "Years" },
              { k: "20+", v: "Projects" },
              { k: "15+", v: "Clients" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl sm:text-3xl font-bold text-gradient">
                  {s.k}
                </dt>
                <dd className="text-xs text-muted-foreground uppercase tracking-wider">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative animate-float">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-primary opacity-70 blur" />
            <img
              src={profile}
              alt="Your Name profile portrait"
              width={500}
              height={500}
              className="relative rounded-[2rem] w-72 sm:w-96 aspect-square object-cover border border-border"
            />
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-elegant">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
