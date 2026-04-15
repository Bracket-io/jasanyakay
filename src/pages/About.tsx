import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>

      <div className="space-y-6 text-sm leading-relaxed max-w-[600px] mb-14">
        <p>
          Kay Jasanya is a Data Product Manager focused on building systems that
          improve decision-making across finance, public infrastructure, and
          digital products.
        </p>
        <p>
          His work spans fintech, civic analytics, and early-stage venture
          ecosystems, combining data, product strategy, and operational thinking
          to design scalable solutions.
        </p>
        <p>
          He has contributed to projects impacting thousands of users and
          large-scale systems, including city-wide analytics platforms and
          financial decision tools.
        </p>
        <p>
          Currently, he is building Bracket, a platform focused on helping users
          make better financial decisions through structured, data-driven
          workflows.
        </p>
        <p>
          His interests include decision systems, financial behavior, and the
          intersection of data and product design.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Education
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-bold">Morgan State University</span>
            <span className="text-muted-foreground"> — MBA</span>
          </li>
          <li>
            <span className="font-bold">Johns Hopkins University</span>
            <span className="text-muted-foreground"> — M.S. Engineering Management</span>
          </li>
          <li>
            <span className="font-bold">Morgan State University</span>
            <span className="text-muted-foreground"> — B.S. Electrical Engineering</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          What I Do
        </h2>
        <ul className="space-y-2 text-sm">
          <li>Product strategy for data-driven systems</li>
          <li>Design of analytics and decision tools</li>
          <li>Turning complex data into intuitive product experiences</li>
          <li>Geospatial analysis and civic data platforms</li>
          <li>Venture capital due diligence and investment analysis</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Experience
        </h2>
        <p className="text-sm leading-relaxed max-w-[600px]">
          I've worked across product, analytics, and operations to improve
          decision-making systems at organizations including the City of
          Baltimore, Morgan Stanley, Johns Hopkins Hospital, Oracle, Morgan State University, VMware, and Oasis Inc.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Tools & Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm text-muted-foreground">
          <span>SQL</span>
          <span>ArcGIS</span>
          <span>Power BI</span>
          <span>Product Analytics</span>
          <span>Excel & Automation</span>
          <span>Figma</span>
          <span>Airtable</span>
          <span>Grafana</span>
          <span>Python</span>
          <span>APEX</span>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
          Languages
        </h2>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>English — Native</li>
          <li>French — Limited</li>
          <li>Spanish — Limited</li>
          <li>Yoruba — Conversational</li>
        </ul>
      </section>
    </Layout>
  );
};

export default About;
