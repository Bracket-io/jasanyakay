import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteLinks } from "@/data/projects";

export function ContactBlock() {
  return <section id="contact" className="premium-contact" aria-labelledby="contact-heading" tabIndex={-1}>
    <p className="eyebrow">A good place to begin</p>
    <h2 id="contact-heading">Something worth<br /><em>thinking about?</em></h2>
    <div><p>I’d love to hear about it. Open to thoughtful conversations<br className="hidden sm:block" /> about product, systems, and what comes next.</p><a href={`mailto:${siteLinks.email}`} className="contact-circle" aria-label={`Email Kay at ${siteLinks.email}`}><ArrowUpRight size={31} strokeWidth={1} aria-hidden="true" /></a></div>
    <div className="contact-inline-links"><a href={`mailto:${siteLinks.email}`} className="text-link contact-email">{siteLinks.email}<ArrowUpRight size={14} aria-hidden="true" /></a><a href={siteLinks.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><Link to="/resume" className="text-link">Résumé <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
  </section>;
}
