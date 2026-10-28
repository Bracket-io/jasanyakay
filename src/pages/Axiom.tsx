import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { axiom } from "@/data/axiom";

const surfaces = [
  { number: "01", title: "Preview before Program", subtitle: "Control at the critical moment", description: "Separate what the operator is preparing from what the room sees. Preview and Program make the transition explicit, rather than allowing preparation to become an accidental live change." },
  { number: "02", title: "Useful without a workspace", subtitle: "A smaller first commitment", description: "A free standalone Mac or Windows app supports local media and offline Bibles. A team can get value from presentation without first setting up connected church operations." },
  { number: "03", title: "Context follows the service", subtitle: "A deliberate handoff", description: "Leader keeps the agenda, conversations, and files alongside a service. Tech retains presentation control; member-facing content reaches AxiomU through reviewed publishing." },
];

export default function Axiom() {
  return <Layout>
    <Link to="/work" className="text-link mb-8">← All product work</Link>
    <header className="axiom-project-intro"><p className="eyebrow">Independent build / Church technology</p><h1>Axiom.<br /><span>A whole service.<br />A connected system.</span></h1><p>{axiom.description}</p><div className="flex flex-wrap gap-5 mt-8"><a href={axiom.demoUrl} target="_blank" rel="noopener noreferrer" className="primary-link">Explore the live demo <ArrowUpRight size={16} aria-hidden="true" /></a><a href={axiom.url} target="_blank" rel="noopener noreferrer" className="text-link">Product website ↗</a></div></header>
    <figure className="axiom-project-image"><img src="/images/axiom-studio.png" alt="Actual Axiom Pro editor with service sections, slides, Preview, and Program controls" width="1600" height="1000" /><figcaption>The actual Axiom Pro editor. Explore the public demo with its separate sample service.</figcaption></figure>
    <section className="editorial-section"><p className="section-label"><span>01</span>The key decisions</p><div className="section-heading"><h2>Three boundaries.<br />One coherent product.</h2><div><p>A live service connects preparation, team coordination, and an audience. The product separates those responsibilities while keeping their context together.</p></div></div><div className="chapter-grid">{surfaces.map(surface=><article key={surface.number}><span className="chapter-index">{surface.number} / {surface.subtitle}</span><h3>{surface.title}</h3><p>{surface.description}</p></article>)}</div></section>
    <details className="axiom-planning-detail"><summary>Inside the planning workspace <span aria-hidden="true">+</span></summary><figure className="axiom-project-image"><img src="/images/axiom-leader.png" alt="AxiomLeader showing a service agenda, team conversation, and handoff controls" width="1600" height="1000" loading="lazy" /><figcaption>AxiomLeader: planning context and team coordination alongside the service.</figcaption></figure></details>

    <section className="editorial-section axiom-scope"><div><p className="section-label"><span>02</span>Product boundaries</p><h2 className="editorial-heading">Useful on its own.<br />Connected when needed.</h2></div><div><p>Axiom Pro offers a free standalone desktop app for Mac and Windows, with local media and offline Bibles. Church Workspace adds team planning and connected publishing.</p><p>The public demo makes the presentation workflow tangible with a separate sample service. It demonstrates the interaction and product boundaries; it does not establish adoption or operational impact.</p><a href={axiom.url} className="text-link" target="_blank" rel="noopener noreferrer">See current features and availability ↗</a></div></section>
    <div className="case-end"><h2>Get past the portfolio.<br />Try the actual product.</h2><a href={axiom.demoUrl} className="primary-link" target="_blank" rel="noopener noreferrer">Open Axiom demo <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </Layout>;
}
