import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Insight Analytics",
    description:
      "A real‑time analytics dashboard with customizable widgets, role‑based access, and an event pipeline handling millions of events per day.",
    image: p1,
    stack: ["React", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Shopwave Mobile",
    description:
      "An e‑commerce PWA with offline cart, Stripe payments, and a recommendation engine. Optimized to a 98 Lighthouse score on mobile.",
    image: p2,
    stack: ["Next.js", "Tailwind", "Stripe", "Supabase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Lumen AI Chat",
    description:
      "An AI assistant interface with streamed responses, function calling, and a plugin marketplace. Built on edge functions for low latency.",
    image: p3,
    stack: ["React", "Node.js", "OpenAI", "Edge Functions"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-sm text-primary mb-3">03 · Selected work</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A handful of products I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group glass rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="hero" className="flex-1">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
