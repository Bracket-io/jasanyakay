import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight, Download, FolderOpen, Plus, Search } from "lucide-react";
import { Layout } from "@/components/Layout";
import { evidenceCategories, evidenceEntries, notionArchiveUrl, retiredEvidenceIds, type EvidenceEntry } from "@/data/extraordinaire";

const storageKey = "jasanyakay.extraordinaire.v1";
const inputClass = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm hover:bg-muted transition-colors";

function isEntry(value: unknown): value is EvidenceEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as EvidenceEntry;
  return typeof entry.id === "string" && !!entry.id && entry.id !== "new" &&
    typeof entry.title === "string" && !!entry.title.trim() &&
    evidenceCategories.some(category => category.id === entry.category) &&
    ["Needs elaboration", "Collecting evidence", "Documented"].includes(entry.status) &&
    [entry.summary, entry.impact, entry.organization, entry.year, entry.nextStep, entry.narrative, entry.artifactNeeded, entry.sourceNote].every(value => value === undefined || typeof value === "string") &&
    (entry.progress === undefined || (typeof entry.progress === "number" && entry.progress >= 0 && entry.progress <= 100)) &&
    (entry.kind === undefined || ["Achievement", "Expert opinion"].includes(entry.kind)) &&
    Array.isArray(entry.documents) && entry.documents.every(document => typeof document?.label === "string" && typeof document?.url === "string" && /^https?:\/\//i.test(document.url)) &&
    (entry.evidenceContext === undefined || (Array.isArray(entry.evidenceContext) && entry.evidenceContext.every(source => typeof source?.text === "string" && typeof source?.label === "string" && typeof source?.url === "string" && /^https?:\/\//i.test(source.url)))) &&
    (entry.sections === undefined || (Array.isArray(entry.sections) && entry.sections.every(section => typeof section?.title === "string" && typeof section?.body === "string")));
}

function readDrafts(): { entries: EvidenceEntry[]; error: string } {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { entries: [], error: "" };
    const entries: unknown = JSON.parse(raw);
    if (!Array.isArray(entries) || !entries.every(isEntry)) throw new Error();
    return { entries, error: "" };
  } catch {
    return { entries: [], error: "Saved drafts could not be loaded. Existing browser data has been left untouched. Export any available backup before replacing it." };
  }
}

function EntryEditor({ entry, onSave, onCancel }: { entry: EvidenceEntry; onSave: (entry: EvidenceEntry) => void; onCancel: () => void }) {
  const [draft, setDraft] = useState(entry);
  const update = <K extends keyof EvidenceEntry>(key: K, value: EvidenceEntry[K]) => setDraft(current => ({ ...current, [key]: value }));
  return (
    <form onSubmit={event => { event.preventDefault(); onSave({ ...draft, title: draft.title.trim() }); }} className="space-y-6">
      <label className="block text-sm font-medium">Title<input required value={draft.title} onChange={event => update("title", event.target.value)} className={`${inputClass} mt-2`} /></label>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-medium">Organisation<input value={draft.organization ?? ""} onChange={event => update("organization", event.target.value)} className={`${inputClass} mt-2`} /></label>
        <label className="block text-sm font-medium">Year or period<input value={draft.year ?? ""} onChange={event => update("year", event.target.value)} className={`${inputClass} mt-2`} /></label>
        <label className="block text-sm font-medium">Status<select value={draft.status} onChange={event => update("status", event.target.value as EvidenceEntry["status"])} className={`${inputClass} mt-2`}>{["Needs elaboration", "Collecting evidence", "Documented"].map(status => <option key={status}>{status}</option>)}</select></label>
        <label className="block text-sm font-medium">Progress (%)<input type="number" min="0" max="100" value={draft.progress ?? ""} onChange={event => update("progress", event.target.value === "" ? undefined : Number(event.target.value))} className={`${inputClass} mt-2`} /></label>
        <label className="block text-sm font-medium">Category<select value={draft.category} onChange={event => update("category", event.target.value as EvidenceEntry["category"])} className={`${inputClass} mt-2`}>{evidenceCategories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}</select></label>
        <label className="block text-sm font-medium">Entry type<select value={draft.kind ?? "Achievement"} onChange={event => update("kind", event.target.value as EvidenceEntry["kind"])} className={`${inputClass} mt-2`}><option>Achievement</option><option>Expert opinion</option></select></label>
      </div>
      {([ ["summary", "The story", "What did you do? Describe the context, your contribution, and what happened."], ["narrative", "How this fits my story", "Explain how this experience connects with the rest of your work."], ["artifactNeeded", "Evidence to add", "Which document would best substantiate this entry?"], ["sourceNote", "Source context", "What do the linked sources establish?"], ["impact", "Impact", "Who benefited? Add outcomes, numbers, and independent references."], ["nextStep", "Next steps", "What still needs to be collected or explained?"] ] as const).map(([key, label, placeholder]) => <label key={key} className="block text-sm font-medium">{label}<textarea rows={key === "summary" ? 8 : 4} value={draft[key] ?? ""} onChange={event => update(key, event.target.value)} placeholder={placeholder} className={`${inputClass} mt-2 leading-7`} /></label>)}
      <fieldset className="space-y-3"><legend className="text-sm font-medium mb-3">Additional sections</legend>
        {draft.sections?.map((section, index) => <div key={index} className="rounded-lg border border-border p-4 space-y-3">
          <input aria-label={`Section ${index + 1} heading`} required value={section.title} onChange={event => update("sections", draft.sections?.map((item, i) => i === index ? { ...item, title: event.target.value } : item))} className={inputClass} placeholder="Section heading" />
          <textarea aria-label={`Section ${index + 1} text`} rows={5} value={section.body} onChange={event => update("sections", draft.sections?.map((item, i) => i === index ? { ...item, body: event.target.value } : item))} className={inputClass} />
          <button type="button" onClick={() => update("sections", draft.sections?.filter((_, i) => i !== index))} className="text-xs underline">Remove section</button>
        </div>)}
        <button type="button" onClick={() => update("sections", [...(draft.sections ?? []), { title: "", body: "" }])} className={buttonClass}><Plus className="h-4 w-4" aria-hidden="true" />Add section</button>
      </fieldset>
      <fieldset className="space-y-3"><legend className="text-sm font-medium mb-3">Supporting links</legend>
        <p className="text-xs text-muted-foreground">Link to documents in Notion, Drive, or another source. Files remain with their existing host.</p>
        {draft.documents.map((document, index) => <div key={index} className="rounded-lg border border-border p-4 space-y-3">
          <input aria-label={`Document ${index + 1} label`} required value={document.label} onChange={event => update("documents", draft.documents.map((item, i) => i === index ? { ...item, label: event.target.value } : item))} placeholder="Document label" className={inputClass} />
          <input aria-label={`Document ${index + 1} URL`} required type="url" pattern="https?://.*" value={document.url} onChange={event => update("documents", draft.documents.map((item, i) => i === index ? { ...item, url: event.target.value } : item))} placeholder="https://…" className={inputClass} />
          <button type="button" onClick={() => update("documents", draft.documents.filter((_, i) => i !== index))} className="text-xs underline">Remove link</button>
        </div>)}
        <button type="button" onClick={() => update("documents", [...draft.documents, { label: "", url: "" }])} className={buttonClass}><Plus className="h-4 w-4" aria-hidden="true" />Add link</button>
      </fieldset>
      <div className="flex gap-3 border-t border-border pt-6"><button type="submit" className={`${buttonClass} bg-foreground text-background hover:bg-foreground/90`}>Save in this browser</button><button type="button" onClick={onCancel} className={buttonClass}>Cancel</button></div>
    </form>
  );
}

const Extraordinaire = () => {
  const { categoryId, entryId } = useParams();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(readDrafts);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  // Retired baseline records stay in browser backups but no longer appear in the curated archive.
  const activeDrafts = saved.entries.filter(entry => !retiredEvidenceIds.includes(entry.id));
  const mergedEntries = evidenceEntries.map(base => {
    const draft = activeDrafts.find(item => item.id === base.id);
    if (!draft) return base;
    return { ...base, ...draft, evidenceContext: base.evidenceContext, summary: draft.summary || base.summary,
      documents: [...new Map([...base.documents, ...draft.documents].map(document => [document.url, document])).values()] };
  });
  const entries = [...mergedEntries, ...activeDrafts.filter(draft => !evidenceEntries.some(base => base.id === draft.id))];
  const category = evidenceCategories.find(item => item.id === categoryId);
  const entry = entries.find(item => item.id === entryId && item.category === categoryId);
  const isNew = entryId === "new";
  const invalid = (categoryId && !category) || (entryId && !isNew && !entry);

  useEffect(() => { setQuery(""); setEditing(false); setMessage(""); }, [categoryId, entryId]);
  useEffect(() => {
    const title = document.title;
    document.title = `${entry?.title ?? category?.title ?? "Extraordinaire"} — Kay Jasanya`;
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const oldContent = existing?.content;
    const robots = existing ?? document.createElement("meta");
    robots.name = "robots"; robots.content = "noindex, nofollow";
    if (!existing) document.head.appendChild(robots);
    return () => { document.title = title; if (existing) existing.content = oldContent ?? ""; else robots.remove(); };
  }, [category?.title, entry?.title]);

  const persist = (drafts: EvidenceEntry[]) => {
    if (saved.error) { setMessage("Cannot save while existing draft data is unreadable. Restore it from a backup or resolve browser storage first."); return false; }
    try { localStorage.setItem(storageKey, JSON.stringify(drafts)); setSaved({ entries: drafts, error: "" }); return true; }
    catch { setMessage("Could not save to browser storage. Your text is still in the editor; copy it before leaving and check available storage."); return false; }
  };
  const save = (draft: EvidenceEntry) => {
    if (!isEntry(draft)) { setMessage("Please check the title, progress, and document links."); return; }
    if (persist([...saved.entries.filter(item => item.id !== draft.id), draft])) {
      setEditing(false);
      navigate(`/extraordinaire/${draft.category}/${draft.id}`);
      setMessage("Saved in this browser.");
    }
  };
  const exportArchive = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify([...entries, ...saved.entries.filter(entry => retiredEvidenceIds.includes(entry.id))], null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "extraordinaire-backup.json"; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const search = query.trim().toLowerCase();
  const matching = entries.filter(item => (!categoryId || item.category === categoryId) && [item.title, item.organization, item.year, item.summary, item.impact, item.kind].filter(Boolean).join(" ").toLowerCase().includes(search));

  return <Layout>
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-8">
      <Link to="/extraordinaire" className="hover:text-foreground">Extraordinaire</Link>
      {category && <><ChevronRight className="h-3 w-3" aria-hidden="true" /><Link to={`/extraordinaire/${category.id}`} className="hover:text-foreground">{category.title}</Link></>}
      {entryId && <><ChevronRight className="h-3 w-3" aria-hidden="true" /><span>{isNew ? "New entry" : entry?.title ?? "Not found"}</span></>}
    </nav>
    {invalid ? <div><h1 className="text-3xl font-bold">Entry not found</h1><Link className="inline-block mt-5 underline" to="/extraordinaire">Return to the archive</Link></div> : <>
      <header className="mb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">A living record · Kay Jasanya</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight break-words">{isNew ? "New entry" : entry?.title ?? category?.title ?? "Extraordinaire."}</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{entry ? [entry.organization, entry.year].filter(Boolean).join(" · ") : category?.description ?? "A growing collection of my work, recognition, and contributions. Open a category to explore and expand the record."}</p>
      </header>
      {(saved.error || message) && <p role="status" className="mb-6 rounded-lg border border-border p-4 text-sm">{saved.error || message}</p>}
      {(isNew || editing) && category ? <EntryEditor key={entryId} entry={entry ?? { id: crypto.randomUUID(), category: category.id, title: "", status: "Needs elaboration", documents: [], kind: "Achievement" }} onSave={save} onCancel={() => { if (isNew) navigate(`/extraordinaire/${category.id}`); else setEditing(false); }} /> : entry ? <>
        <div className="flex flex-wrap items-center gap-3 mb-8"><button className={buttonClass} onClick={() => setEditing(true)}>Edit entry</button><span className="text-xs text-muted-foreground">{entry.status}</span>{entry.progress !== undefined && <span className="text-xs text-muted-foreground">Recorded progress: {entry.progress}%</span>}</div>
        <div className="space-y-8">
          {[
            { title: "The story", body: entry.summary || "Add the context, what you did, and your contribution." },

            ...(entry.impact ? [{ title: "Impact", body: entry.impact }] : []),
            ...(entry.sections ?? []),
          ].map((section, index) => <section key={index}><h2 className="text-lg font-semibold mb-3">{section.title}</h2><p className="text-sm leading-7 whitespace-pre-wrap break-words text-muted-foreground">{section.body}</p></section>)}
          <section>
            <h2 className="text-lg font-semibold mb-3">Programme standing & evidence</h2>
            {entry.evidenceContext?.length ? <div className="space-y-4">{entry.evidenceContext.map(source => <article key={source.url} className="border border-border rounded-xl p-5"><p className="text-sm leading-7 text-muted-foreground">{source.text}</p><a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex gap-2 items-center text-xs underline underline-offset-4">{source.label}<ArrowUpRight aria-hidden="true" className="h-3 w-3 shrink-0" /></a></article>)}</div> : <p className="text-sm leading-7 text-muted-foreground">Exact publication details are needed to identify the right source. Add the paper title, author list, DOI or manuscript, and acceptance email; a publisher’s name alone does not establish the journal’s standing or this paper’s publication status.</p>}
          </section>
          <section><h2 className="text-lg font-semibold mb-3">Linked artifacts & personal records</h2>
            {entry.sourceNote && <p className="mb-4 text-xs leading-6 text-muted-foreground">{entry.sourceNote}</p>}{entry.documents.length ? <ul className="space-y-3">{entry.documents.map((document, index) => <li key={index}><a className="inline-flex items-center gap-2 text-sm underline underline-offset-4 break-all" href={document.url} target="_blank" rel="noopener noreferrer">{document.label === "Notion source" ? "Notion evidence folder · emails and supporting documents" : document.label}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a></li>)}</ul> : <p className="text-sm text-muted-foreground">No documents linked yet.</p>}</section>
          <section className="rounded-xl border border-border p-5"><h2 className="text-sm font-semibold mb-2">Evidence to add</h2><p className="text-sm leading-7 whitespace-pre-wrap text-muted-foreground">{entry.nextStep || entry.artifactNeeded || category?.prompt}</p></section>
        </div>
      </> : <>
        <div className="flex flex-wrap gap-3 mb-8">
          {category ? <Link to={`/extraordinaire/${category.id}/new`} className={buttonClass}><Plus className="h-4 w-4" aria-hidden="true" />Add entry</Link> : <a href={notionArchiveUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>Original Notion archive<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
          <button onClick={exportArchive} className={buttonClass}><Download className="h-4 w-4" aria-hidden="true" />Export backup</button>
          <label className={`${buttonClass} cursor-pointer`}>Import backup<input type="file" accept="application/json,.json" className="sr-only" onChange={async event => {
            const file = event.target.files?.[0]; event.target.value = ""; if (!file) return;
            try {
              const imported: unknown = JSON.parse(await file.text());
              if (!Array.isArray(imported) || !imported.every(isEntry)) throw new Error();
              // Keep existing local edits on conflicts; import adds missing records.
              const merged = [...new Map([...imported, ...saved.entries].map(item => [item.id, item])).values()];
              if (persist(merged)) setMessage("Backup imported. Existing local edits were kept where IDs overlapped.");
            } catch { setMessage("This file is not a valid archive backup. No records were changed."); }
          }} /></label>
        </div>
        <label className="relative block mb-8"><span className="sr-only">Search entries</span><Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" aria-hidden="true" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={category ? `Search ${category.title.toLowerCase()}…` : "Search across the archive…"} className={`${inputClass} pl-10`} /></label>
        {!category && !search ? <div className="grid sm:grid-cols-2 gap-4">{evidenceCategories.map((item, index) => {
          const count = entries.filter(entry => entry.category === item.id).length;
          return <Link key={item.id} to={`/extraordinaire/${item.id}`} className="group rounded-xl border border-border p-6 hover:bg-muted/40 transition-colors"><div className="flex justify-between text-muted-foreground"><FolderOpen className="h-5 w-5" aria-hidden="true" /><span className="text-xs">{String(index + 1).padStart(2, "0")}</span></div><h2 className="mt-6 text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p><div className="mt-6 flex justify-between items-center text-xs"><span className="text-muted-foreground">{count} entries</span><span className="inline-flex items-center gap-1">Open category<ChevronRight className="h-4 w-4" aria-hidden="true" /></span></div></Link>;
        })}</div> : <div className="space-y-3">{matching.map(item => <Link key={item.id} to={`/extraordinaire/${item.category}/${item.id}`} className="flex items-center gap-4 rounded-xl border border-border p-5 hover:bg-muted/40"><div className="flex-1 min-w-0"><h2 className="text-sm font-semibold">{item.title}</h2>{item.summary && <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>}<p className="mt-2 text-xs text-muted-foreground">{item.kind ?? "Achievement"} · {item.status}</p></div>{item.progress !== undefined && <span className="text-xs text-muted-foreground">{item.progress}%</span>}<ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>)}{!matching.length && <p role="status" className="py-8 text-sm text-muted-foreground">{search ? "No matching entries. Try another search." : category?.id === "high-salary" ? "Nothing yet. This category is reserved for future compensation evidence." : "No entries yet. Add the first story in this category."}</p>}</div>}
        {category && <p className="mt-6 text-xs text-muted-foreground leading-6">Percentages are your recorded progress notes. Notion document contents have not been imported. Open an entry to add the story and supporting material.</p>}
      </>}
      {category && <Link to={entryId ? `/extraordinaire/${category.id}` : "/extraordinaire"} className="inline-flex items-center gap-2 mt-10 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{entryId ? `Back to ${category.title}` : "All categories"}</Link>}
    </>}
  </Layout>;
};

export default Extraordinaire;
