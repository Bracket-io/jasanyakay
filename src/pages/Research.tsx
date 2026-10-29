import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";

const orcid = "https://orcid.org/0009-0005-5732-799X";
const works = [
  {
    title: "Evaluating the impact of policy interventions on CO2 emissions in Sub-Saharan Africa",
    year: "2025", type: "Journal article", venue: "Sustainable Futures · Volume 10",
    description: "Examining how energy policy can support development while limiting carbon emissions in Sub-Saharan Africa.",
    authors: "Gawusu, S.; Abdul-Fatawu, M.; Solahudeen Tando, M.; Ackah, I.; Tizumah, M. W.; Jasanya, O.",
    href: "https://doi.org/10.1016/j.sftr.2025.100936", label: "Read the article", doi: "10.1016/j.sftr.2025.100936",
  },
  {
    title: "Efficiency of Blockchain Technology on Financial Security: Beyond Online Transaction",
    year: "2 November 2025", type: "Special issue article / preprint platform", venue: "NIPES JSTR Special Issue",
    description: "Exploring blockchain-based identity management and privacy protection in financial services.",
    authors: "Okewale, K.; Akinhanmi, O.; Idowu, I.; Jasanya, O.; Peter, O. E.",
    href: "https://journals.nipes.org/index.php/jstrissue/article/view/2285", label: "View the paper", doi: "10.37933/nipes/7.4.2025.SI159",
  },
  {
    title: "Eyes on Baltimore: Leveraging Surveillance and Community Engagement to Reduce Illegal Dumping",
    year: "14 January 2026", type: "Working paper", venue: "Civic systems & community engagement",
    description: "Investigating the role of surveillance and community engagement in addressing illegal dumping in Baltimore.",
    authors: "Oluwakayode Jasanya",
    href: orcid, label: "View the ORCID record", doi: null,
  },
];

export default function Research() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Research | Kay Jasanya";
    return () => { document.title = previous; };
  }, []);

  return <Layout>
    <header className="research-intro">
      <p className="eyebrow">Research / Oluwakayode Jasanya</p>
      <h1>Question the system.<br /><em>Follow the evidence.</em></h1>
      <div className="research-intro-bottom"><p>I study the decisions and technologies that shape public life. My work connects sustainability, financial security, and civic systems—with the same curiosity I bring to building products.</p><a href={orcid} target="_blank" rel="noopener noreferrer" className="text-link">ORCID · 0009-0005-5732-799X <ArrowUpRight size={14} aria-hidden="true" /></a></div>
    </header>

    <nav className="speaking-section-nav" aria-label="Research page sections"><a href="#works">Selected works <span>03</span></a><a href="#peer-review">Peer review</a></nav>

    <section id="works" aria-labelledby="research-works-heading">
      <div className="section-title-line"><h2 id="research-works-heading" className="eyebrow">Publications & working papers</h2><span>2025—2026</span></div>
      {works.map((work, index) => <article key={work.title} className="research-work">
        <div className="research-work-meta"><span>0{index + 1}</span><span>{work.year}</span><span>{work.type}</span></div>
        <div><p className="eyebrow">{work.venue}</p><h3><a href={work.href} target="_blank" rel="noopener noreferrer">{work.title}</a></h3><p className="research-description">{work.description}</p><p className="research-authors">{work.authors}</p><a href={work.href} target="_blank" rel="noopener noreferrer" className="text-link">{work.label}<ArrowUpRight size={14} aria-hidden="true" /></a>{work.doi && <p className="research-doi">DOI: {work.doi}</p>}</div>
      </article>)}
    </section>

    <section id="peer-review" className="research-review" aria-labelledby="review-heading">
      <div><p className="eyebrow">Academic service</p><h2 id="review-heading">Contributing to<br /><em>the conversation.</em></h2></div>
      <div><p className="eyebrow">Peer reviewer / Discover Sustainability</p><h3>Careful scrutiny is part of the work.</h3><p>Alongside my own research, I review manuscripts for Discover Sustainability, contributing to the evaluation of research in sustainability and digital transformation.</p><p className="research-review-record">Three completed reviews · September–October 2026</p><a href="https://link.springer.com/journal/43621" target="_blank" rel="noopener noreferrer" className="text-link">About the journal<ArrowUpRight size={14} aria-hidden="true" /></a></div>
    </section>
  </Layout>;
}
