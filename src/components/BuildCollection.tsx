import { ArrowUpRight, Search, X } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { buildingGroups } from "@/data/buildingProjects";
import { projects } from "@/data/projects";

const featuredNames = new Set(["Axiom", ...projects.map(project => project.title)]);
const builds = buildingGroups.flatMap(group => group.projects
  .filter(project => !featuredNames.has(project.name))
  .map(project => ({ ...project, kind: group.title === "In Progress" ? "Projects" : group.title })));
const kinds = ["All", ...new Set(builds.map(build => build.kind))];
const statusLabels: Record<string, string> = { LIVE: "Live", BUILDING: "In development", PROTOTYPE: "Prototype", EXPERIMENT: "Experiment" };

export function BuildCollection() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const saveParams = (next: URLSearchParams) => navigate({ search: next.toString() ? `?${next}` : "", hash }, { replace: true, preventScrollReset: true });
  const query = params.get("q") ?? "";
  const kind = kinds.includes(params.get("type") ?? "") ? params.get("type")! : "All";
  const status = ["LIVE", "BUILDING", "EXPERIMENT", "PROTOTYPE"].includes(params.get("status") ?? "") ? params.get("status")! : "All";
  const filtered = builds.filter(build =>
    (kind === "All" || build.kind === kind) &&
    (status === "All" || build.status === status) &&
    `${build.name} ${build.description ?? ""} ${build.kind}`.toLowerCase().includes(query.trim().toLowerCase()));

  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (!value || value === "All") next.delete(key); else next.set(key, value);
    saveParams(next);
  }
  function reset() {
    const next = new URLSearchParams(params);
    ["q", "type", "status"].forEach(key => next.delete(key));
    saveParams(next);
  }

  return <section id="more-builds" className="build-collection" aria-labelledby="builds-heading">
    <div className="section-title-line"><p className="eyebrow">The wider practice</p><span>{builds.length} independent builds</span></div>
    <div className="collection-intro"><h2 id="builds-heading">Smaller in scope.<br /><em>Just as considered.</em></h2><p>Apps, extensions, and experiments beyond the case studies. Explore by format, find something specific, or see what’s already live.</p></div>
    <div className="collection-tools"><div className="collection-search"><Search size={15} strokeWidth={1.5} aria-hidden="true" /><label htmlFor="build-search" className="sr-only">Search builds</label><input id="build-search" type="search" value={query} onChange={event => update("q", event.target.value)} placeholder="Find a build…" />{query && <button onClick={() => update("q", "")} aria-label="Clear search"><X size={15} aria-hidden="true" /></button>}</div><label className="collection-status">Stage<select value={status} onChange={event => update("status", event.target.value)}><option value="All">All stages</option>{[...new Set(builds.map(build => build.status))].map(value => <option key={value} value={value}>{statusLabels[value]}</option>)}</select></label></div>
    <div className="collection-filter-line"><div role="group" aria-label="Filter builds by format" className="collection-tabs">{kinds.map(value => <button key={value} aria-pressed={kind === value} onClick={() => update("type", value)}>{value}<span>{builds.filter(build => value === "All" || build.kind === value).length}</span></button>)}</div><p role="status" className="collection-result-count">{filtered.length} {filtered.length === 1 ? "build" : "builds"}</p></div>
    {filtered.length ? <div className="collection-grid">{filtered.map(build => <article key={build.name} className="collection-card"><div className="collection-card-top"><span className="collection-monogram" aria-hidden="true">{build.icon.toLowerCase()}.</span><span className={`collection-stage ${build.status === "LIVE" ? "stage-live" : "stage-development"}`}><span aria-hidden="true" />{statusLabels[build.status]}</span></div><p className="eyebrow collection-kind">{build.kind}</p><h3>{build.name}</h3><p className="collection-description">{build.description ?? (build.kind === "Games" ? "A playable game experiment." : "An independent project in development.")}</p><div className="collection-card-links">{build.url && <a href={build.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${build.name} in a new tab`}>Explore build<ArrowUpRight size={15} aria-hidden="true" /></a>}{build.links?.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div></article>)}</div> : <div className="collection-empty"><h3>No builds found.</h3><p>Try another name, format, or stage.</p><button onClick={reset} className="text-link">Clear all filters <span aria-hidden="true">↗</span></button></div>}
    {filtered.length > 0 && (query || kind !== "All" || status !== "All") && <button className="text-link mt-5" onClick={reset}>Clear all filters <X size={13} aria-hidden="true" /></button>}
  </section>;
}
