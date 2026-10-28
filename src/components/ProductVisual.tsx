const visualClasses: Record<string, string> = {
  bracket: "visual-bracket",
  ede: "visual-ede",
  gradezy: "visual-gradezy",
  citiwatch: "visual-citiwatch",
};

/** Conceptual project artwork, rather than screenshots of the products. */
export function ProductVisual({ slug }: { slug: string }) {
  return (
    <div className={`product-visual ${visualClasses[slug] ?? "visual-bracket"}`} aria-hidden="true">
      <span className="visual-label">{slug === "bracket" ? "The decision gap" : slug === "ede" ? "Language & belonging" : slug === "gradezy" ? "A clearer workflow" : "Signals in the city"}</span>
      {slug === "bracket" ? <div className="bracket-art"><span className="bracket-glyph">[</span><div><span>Information</span><b>What comes<br /><em>next?</em></b><span className="visual-arrow">→</span></div><span className="bracket-glyph">]</span></div>
      : slug === "ede" ? <div className="ede-art"><span className="language-orbit orbit-one" /><span className="language-orbit orbit-two" /><span className="language-orbit orbit-three" /><b>Ede<span>Language is human.</span></b></div>
      : slug === "gradezy" ? <div className="gradezy-art"><div className="workflow-row"><span className="workflow-mark">01</span><span>Structure the data</span><i>✓</i></div><div className="workflow-row"><span className="workflow-mark">02</span><span>Surface exceptions</span><i>↗</i></div><div className="workflow-row"><span className="workflow-mark">03</span><span>Focus the review</span><i>→</i></div><span className="workflow-line" /></div>
      : <div className="city-art"><div className="city-map">{Array.from({length:35},(_,i)=><span key={i} className={[8,17,23].includes(i)?"map-signal":""} />)}</div><span className="city-caption">Patterns → Priorities</span></div>}
      <span className="visual-footnote">{slug === "bracket" ? "FINTECH / DISCOVERY" : slug === "ede" ? "APPLIED AI / NLP" : slug === "gradezy" ? "EDUCATION / AUTOMATION" : "CIVIC DATA / ANALYTICS"}</span>
    </div>
  );
}
