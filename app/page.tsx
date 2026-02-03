const links = {
  github: "https://github.com/vivekbhai-radadiya",
  linkedin: "https://www.linkedin.com/in/vivekbhai-radadiya/",
  email: "radadiya.vi@northeastern.edu",
};

const projects = [
  {
    name: "LLM Evaluation + Reliability Framework",
    impact:
      "Built rubric-driven evaluation design with failure-mode analysis to improve reliability of real-world LLM tasks.",
    stack: ["LLM Eval", "Rubrics", "Prompting", "Experimentation"],
  },
  {
    name: "Ozone Layer Risk Monitoring Pipeline (MLOps)",
    impact:
      "Developed an end-to-end ML pipeline with orchestration, model tracking, monitoring, and API deployment.",
    stack: ["Airflow", "MLflow", "GCP", "Docker", "FastAPI"],
  },
  {
    name: "Pneumonia Detection using Deep Neural Networks",
    impact:
      "Designed a medical imaging workflow focusing on leakage prevention, calibration, and clinically meaningful metrics.",
    stack: ["PyTorch", "CNN", "Computer Vision", "Model Evaluation"],
  },
  {
    name: "Risk & Fraud Intelligence System",
    impact:
      "Built fraud signals + scoring pipeline with monitoring logic to reduce fraud exposure while controlling false positives.",
    stack: ["Python", "SQL", "XGBoost", "Monitoring"],
  },
];

const experience = [
  {
    role: "Senior Data Scientist (Contract)",
    org: "Sepal AI, Inc.",
    time: "Nov 2025 – Present",
    bullets: [
      "Designed evaluation frameworks for LLM quality using rubric-based scoring, reviewer checklists, and evidence-first acceptance criteria.",
      "Created structured workflows for failure-mode discovery (hallucinations, unsupported claims, missing constraints) to improve iteration speed and reduce rework.",
      "Collaborated with reviewers and ops to align deliverables with strict project guidelines and improve task sign-off quality.",
    ],
  },
  {
    role: "Machine Learning Researcher / Graduate Research Assistant",
    org: "Northeastern University (DATA Lab)",
    time: "Mar 2024 – May 2025",
    bullets: [
      "Developed ML prototypes and experimental workflows with emphasis on reproducibility and clear evaluation methodology.",
      "Built data processing and training pipelines to accelerate iteration cycles and reduce manual effort.",
    ],
  },
  {
    role: "Data Scientist / Senior Data Scientist",
    org: "Risk & Fraud Analytics (Industry)",
    time: "2019 – 2023",
    bullets: [
      "Developed fraud signals and ML models, optimizing thresholds based on business costs and operational constraints.",
      "Partnered cross-functionally to translate vague business problems into measurable metrics and deployable logic.",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Model Evaluation",
  "Experiment Design",
  "Airflow",
  "Docker",
  "MLflow",
  "FastAPI",
  "GCP",
  "LLM Evaluation",
  "Prompt Engineering",
];

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {text}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#" className="font-semibold">
            Vivek Radadiya
          </a>

          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#experience" className="hover:text-slate-900">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900">
              Skills
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="flex gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-600">Boston, MA · Open to US roles</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              Vivek Radadiya
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              <span className="font-medium text-slate-900">Data Scientist</span>{" "}
              focused on building decision-grade ML systems, evaluation frameworks,
              and production pipelines that hold up in the real world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Connect on LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                View GitHub
              </a>
              <a
                href={`mailto:${links.email}`}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Email me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                I’m a Data Scientist with 5+ years of industry-aligned experience
                across ML modeling, evaluation, analytics, and production pipeline
                thinking.
              </p>
              <p>
                Recently, my focus has been GenAI reliability and LLM evaluation:
                defining rubrics, acceptance criteria, and failure-mode analysis so
                model behavior can be measured and improved systematically.
              </p>
              <p>
                I care about clarity, measurable outcomes, and engineering discipline
                — not just experimenting, but delivering.
              </p>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-4">
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-slate-700">{exp.org}</p>
                  </div>
                  <p className="text-sm text-slate-600">{exp.time}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-slate-700">
                  <span className="font-medium text-slate-900">Impact:</span>{" "}
                  {p.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Pill key={s} text={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Pill key={s} text={s} />
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              If you’re hiring for Data Scientist roles and want someone who
              combines evaluation rigor with production thinking, let’s connect.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${links.email}`}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Email
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                GitHub
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              © {new Date().getFullYear()} Vivek Radadiya
            </p>
          </div>
        </Section>

        <div className="py-10" />
      </div>
    </main>
  );
}
