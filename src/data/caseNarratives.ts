export interface CaseNarrative {
  title: string;
  hook: string;
  tension: string[];
  decisions: { title: string; choice: string; tradeoff: string }[];
  delivery: string;
  outcomes: { value: string; label: string; detail: string }[];
  reflection: string;
}

/** Edited from the owner's existing project records; no new research or results are asserted. */
export const caseNarratives: Record<string, CaseNarrative> = {
  bracket: {
    title: "Information wasn’t the missing piece.",
    hook: "A financial decision product that attracted 100+ early users—and made retention the next real problem to solve.",
    tension: [
      "Students already had YouTube, ChatGPT, and financial websites. Another place to read about money would have been easy to build and difficult to justify.",
      "I interviewed 20+ students about their habits and how they made financial decisions. The product opportunity was the gap between finding an answer and knowing what to do next. That changed the brief from financial education to decision support.",
    ],
    decisions: [
      { title: "Build around a decision, rather than a library.", choice: "I prioritised guided financial questions and a practical next step. The experience could cover fewer topics, but each interaction had a clearer job.", tradeoff: "A broad content library offered easier coverage. A focused decision experience offered a stronger reason to use the product alongside existing information sources." },
      { title: "Earn the right to automate.", choice: "I kept account aggregation and automated financial transactions outside the initial scope. Wireframes and a Lovable prototype let me put the core idea in front of real users sooner.", tradeoff: "That limited the depth of automation, while avoiding substantial integration and trust complexity before the engagement assumption had been tested." },
    ],
    delivery: "I owned discovery, alternative-product research, prioritisation, wireframes, and the initial build. I launched publicly and used early behaviour to test the proposition beyond the interview group.",
    outcomes: [
      { value: "20+", label: "student interviews", detail: "Discovery shaped the initial proposition and the choice to focus on decisions." },
      { value: "100+", label: "early users", detail: "The launch generated real usage, but higher-than-desired churn challenged the assumption that initial interest meant durable value." },
    ],
    reflection: "The most useful result was the uncomfortable one: acquisition was easier to demonstrate than continued value. My next question became why people stopped returning, rather than which feature to add. A focused launch made that weakness visible early.",
  },
  ede: {
    title: "A language problem, before a model problem.",
    hook: "A public African-language NLP experiment built to understand where general-purpose AI falls short.",
    tension: [
      "A fluent-looking answer can conceal uneven language performance. African languages are underrepresented in available language technology, and choosing a larger model does not automatically resolve that gap.",
      "I tested language inputs, reviewed open datasets, and explored model and prompting approaches. Data coverage and evaluation emerged as constraints on what the product could reliably claim—not just implementation details to resolve later.",
    ],
    decisions: [
      { title: "Choose a learning loop over a training stack.", choice: "I scoped Ede as a focused, public experiment using available models and data. The immediate job was to expose language behaviour and learn from it.", tradeoff: "Large-model fine-tuning offered a higher potential quality ceiling, but required data and compute beyond the scope of an early experiment." },
      { title: "Treat evaluation as part of the product.", choice: "I made data exploration and observed language behaviour central to iteration. A change in model or prompt only mattered if there was a useful way to judge the result.", tradeoff: "A simple AI wrapper could have shipped faster. It would also have left the underlying coverage and evaluation problem largely untouched." },
    ],
    delivery: "I owned the problem framing, scope, data exploration, model experimentation, and public release. Making the experiment accessible moved evaluation beyond my development environment.",
    outcomes: [
      { value: "Public", label: "experiment released", detail: "A practical environment for exploring African-language behaviour with available AI approaches." },
      { value: "Coverage", label: "a defining constraint", detail: "The work identified data availability and evaluation quality as priorities for meaningful improvement." },
    ],
    reflection: "This is an experiment, rather than a demonstrated language-quality breakthrough. Its value is in making the limitations concrete. I would define the evaluation signal earlier, so that iteration could distinguish a convincing answer from a useful improvement.",
  },
  gradezy: {
    title: "Remove the work around the work.",
    hook: "A targeted automation tool for assessment review, designed around the workflow people already use.",
    tension: [
      "Assessment review crossed spreadsheets, learning platforms, email, and repeated file handling. People spent time processing records that did not all require the same level of attention.",
      "I mapped the workflow to separate repetitive data handling from decisions requiring human judgment. The opportunity was to reduce the path to a useful review, without asking the institution to replace its entire assessment process.",
    ],
    decisions: [
      { title: "Automate the repetition. Preserve the judgment.", choice: "I focused on structured processing and identifying records that needed attention. Human review remained part of the workflow where exceptions or interpretation mattered.", tradeoff: "End-to-end automation promised a larger change, but would also absorb decisions that could not responsibly be treated as routine processing." },
      { title: "Fit the institution’s workflow.", choice: "I built targeted automation around the existing process and kept its underlying systems as the source of truth where possible.", tradeoff: "Replacing the wider assessment platform would offer more control, at the cost of a much larger integration and adoption burden." },
    ],
    delivery: "I owned workflow mapping, product definition, the data flow, application development, and iteration. Delivery included GitHub Actions and deployment automation, with improvements focused on removing unnecessary data and file handoffs.",
    outcomes: [
      { value: "Working", label: "automation workflow", detail: "A functioning assessment-review tool built around a concrete operational process." },
      { value: "Fewer", label: "manual handling steps", detail: "The project reduced unnecessary handling. A quantified time-saving or error-rate improvement has not yet been recorded." },
    ],
    reflection: "The important product choice was the boundary of the automation. The tool should bring the right records to a person’s attention, rather than make every decision for them. I would establish a before-and-after measure of review time to make the operational benefit more precise.",
  },
  citiwatch: {
    title: "A detection is only useful if someone can act.",
    hook: "Reframing Baltimore’s camera network as a targeted operational data opportunity for illegal-dumping response.",
    tension: [
      "Illegal-dumping reports were largely reactive. Baltimore already had camera infrastructure; the harder question was where better detection could lead to a useful city response.",
      "I examined camera coverage and geographic incident patterns, and worked with Google AI/ML partners to explore detection feasibility. The work had to connect technical capability with operational priorities, privacy, and the realities of a city service.",
    ],
    decisions: [
      { title: "Prioritise places before scaling detection.", choice: "I focused on geographic prioritisation and higher-impact locations, using the existing network as the starting point.", tradeoff: "Uniform, city-wide automation offered broader coverage, but introduced more technical and governance complexity before the operating model was established." },
      { title: "Define value at the point of response.", choice: "I framed the recommendations around actionable intelligence for city leadership, rather than model performance alone.", tradeoff: "A detection capability could demonstrate technical promise without improving an operational decision. The product had to account for the people and processes receiving the signal." },
    ],
    delivery: "I owned problem framing, camera and incident analysis, geographic prioritisation, opportunity definition, and executive communication. Technical partners and city stakeholders informed the feasibility and recommendations.",
    outcomes: [
      { value: "Targeted", label: "coverage framework", detail: "A data-driven approach to prioritising camera coverage and higher-impact geographic areas." },
      { value: "Explored", label: "AI-assisted detection", detail: "Analysis and recommendations to inform camera optimisation—not a claim of a deployed city-wide detector or measured incident reduction." },
    ],
    reflection: "The strongest insight was operational: model capability is one link in the chain. A useful civic product also needs a clear response path and responsible constraints. Technical feasibility matters when it supports an action the city can realistically take.",
  },
};
