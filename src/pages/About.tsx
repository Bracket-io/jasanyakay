import { Layout } from "@/components/Layout";

const capabilities = [
  {
    title: "Product Strategy",
    items: [
      "Problem framing and product definition",
      "Roadmapping and prioritization",
      "Positioning and product narrative",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "Metric design and instrumentation",
      "SQL, Python, and analytics engineering",
      "Geospatial analysis and visualization",
    ],
  },
  {
    title: "Product Discovery",
    items: [
      "User research and stakeholder interviews",
      "Decision-flow and UX design",
      "Experimentation and validation",
    ],
  },
  {
    title: "Execution & Delivery",
    items: [
      "Working with engineering and design",
      "Shipping in regulated and public-sector contexts",
      "Process and workflow redesign",
    ],
  },
  {
    title: "Leadership & Influence",
    items: [
      "Cross-agency and cross-functional alignment",
      "Executive communication",
      "Mentoring and teaching",
    ],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      "Applied AI and NLP for low-resource languages",
      "ML-assisted detection and forecasting",
      "AI-enabled product workflows",
    ],
  },
];

const tools = [
  "SQL",
  "Python",
  "Power BI",
  "ArcGIS",
  "Grafana",
  "APEX",
  "Figma",
  "Airtable",
  "Quarto",
  "Hugging Face",
  "Excel & Automation",
  "Product Analytics",
];

const About = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>

      <div className="space-y-6 text-sm leading-relaxed max-w-[600px] mb-16">
        <p>
          I'm a product leader who builds systems that improve how people and
          institutions make decisions. My path ran from engineering to data to
          product, and each step added a layer: how systems are built, how
          evidence is produced, and how both turn into products people actually
          use.
        </p>
        <p>
          I started in electrical engineering and enterprise technology, working
          on infrastructure and monitoring systems at Morgan Stanley and
          dashboards at Oracle. That taught me how large systems fail and how
          much of product work is really about clarity under constraint.
        </p>
        <p>
          Data became the next layer. At the City of Baltimore I owned analytics
          and data products across environmental justice, performance
          management, and city services — work that touched 153 cities, 7,600+
          households, and 15+ agencies. Impact came from redesigning how
          decisions were made, not just from reporting on them.
        </p>
        <p>
          Today I work as a product leader across fintech, civic systems, and
          applied AI, building products like Bracket, QuantLens, and Ede. My
          work sits at the intersection of civic systems, product, fintech,
          data, AI, NLP, and language — a builder focused on where these
          domains converge.
        </p>
        <p>
          Alongside product work, I teach economics and professional
          communication, mentor students across HBCUs and youth programs, and
          publish research on urban systems, energy access, and fintech.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
          Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {capabilities.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold mb-2">{group.title}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-1 text-sm text-foreground">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Education
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-bold">Johns Hopkins University</span>
            <span className="text-muted-foreground">
              {" "}
              — M.S. Engineering Management
            </span>
          </li>
          <li>
            <span className="font-bold">Morgan State University</span>
            <span className="text-muted-foreground"> — MBA</span>
          </li>
          <li>
            <span className="font-bold">Morgan State University</span>
            <span className="text-muted-foreground">
              {" "}
              — B.S. Electrical Engineering
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Languages
        </h2>
        <ul className="space-y-1 text-sm text-foreground">
          <li>English — Native</li>
          <li>French — Conversational</li>
          <li>Spanish — Limited</li>
          <li>Yoruba — Native</li>
        </ul>
      </section>
    </Layout>
  );
};

export default About;
