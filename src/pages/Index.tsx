import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { OriginPalette } from "@/components/OriginPalette";
import { Layout } from "@/components/Layout";
import { WorkCard } from "@/components/WorkCard";
import { AxiomFeature } from "@/components/AxiomFeature";
import { selectedWork } from "@/data/projects";

const perspectives = [
  { title: "Begin with the real question.", body: "For Bracket, 20+ student interviews revealed a gap between finding financial information and knowing what to do with it. That distinction shaped the product.", to: "/project/bracket", label: "Discovery & direction" },
  { title: "Understand the system around it.", body: "City data becomes useful when it connects to an operational decision. My civic work brings analysis, geographic priorities, and the people responsible for action together.", to: "/project/citiwatch", label: "Systems & decisions" },
  { title: "Stay close to the making.", body: "From Axiom’s presentation workspace to small browser extensions, building keeps me close to the details that shape how a product feels and works.", to: "/work#more-builds", label: "Craft & execution" },
];

export default function Index() {
  const visibleProjects = selectedWork.slice(0, 2);

  return <Layout>
    <section className="premium-hero" aria-labelledby="intro-title">
      <div className="premium-hero-top"><p className="eyebrow">Kay Jasanya · Product, data & systems</p></div>
      <h1 id="intro-title">Clarity in thought.<br /><em>Care in the making.</em></h1>
      <div className="premium-hero-bottom"><p>I’m Kay, a product leader with an engineer’s instinct.<br className="hidden sm:block" /> I turn complex problems into thoughtful products —<br className="hidden sm:block" /> across data, civic systems, fintech, and applied AI.</p><OriginPalette /></div>
      <a className="hero-scroll" href="#selected-work"><span>Explore selected work</span><ArrowDown size={16} strokeWidth={1} aria-hidden="true" /></a>
    </section>

    <section id="selected-work" className="premium-work" aria-labelledby="work-heading"><div className="section-title-line"><h2 id="work-heading" className="eyebrow">Selected work</h2><span>01 — {String(visibleProjects.length + 1).padStart(2, "0")}</span></div><AxiomFeature />
      <div className="portfolio-filter"><p className="eyebrow">Further selected work</p><Link to="/work" className="text-link">See all projects <ArrowUpRight size={14} aria-hidden="true" /></Link></div><div className="project-grid">{visibleProjects.map((project,index)=><WorkCard key={project.slug} project={project} index={index+1} />)}</div><div className="all-work-link"><Link to="/work" className="text-link">View the complete portfolio <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
    </section>

    <section className="premium-about" aria-labelledby="about-heading"><p className="eyebrow">A little perspective</p><div className="premium-about-grid"><h2 id="about-heading">Different disciplines.<br /><em>One considered approach.</em></h2><div><p>Engineering taught me to understand the system. Data taught me to question the evidence. Product taught me to care about what people can actually do with both.</p><p>That thread runs from enterprise technology at Morgan Stanley and Oracle to public-sector data products and the independent tools I build today.</p><Link to="/resume" className="text-link">Explore my résumé <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div><div className="editorial-evidence"><div><strong>41K+</strong><p>city service records analyzed</p></div><div><strong>15+</strong><p>agencies supported by reporting</p></div><div><strong>100+</strong><p>early users on Bracket</p></div></div></section>

    <section className="premium-perspectives" aria-labelledby="perspectives-heading"><div className="section-title-line"><h2 id="perspectives-heading" className="eyebrow">Principles, put into practice</h2><span>A way of working</span></div><div className="field-note-grid">{perspectives.map((note,index)=><article key={note.to}><span className="note-number">0{index+1}</span><h3>{note.title}</h3><p>{note.body}</p><Link to={note.to} className="text-link">{note.label}<ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}</div></section>

    <aside className="collection-home-link"><div><p className="eyebrow">There’s more in the collection</p><h2>Tools, experiments,<br /><em>and things taking shape.</em></h2></div><Link to="/work#more-builds" className="text-link">Explore all builds <ArrowUpRight size={16} aria-hidden="true" /></Link></aside>

  </Layout>;
}
