import { Code2, Database, Server, Wrench } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 80 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 88 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "Figma", level: 82 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

const badges = [
  "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Node.js",
  "Python", "PostgreSQL", "MongoDB", "Tailwind", "Docker", "AWS",
  "Figma", "Git", "GraphQL", "REST",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-sm text-primary mb-3">02 · Toolbox</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A curated stack I use daily to ship reliable, beautiful products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-primary"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {badges.map((b) => (
            <span
              key={b}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono border border-border bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
