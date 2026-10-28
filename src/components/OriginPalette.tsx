import { useEffect, useState } from "react";

type Palette = "editorial" | "nigeria" | "usa" | "uk";
const places = [
  { id: "nigeria", lead: "Born in", city: "Lagos", country: "Nigeria" },
  { id: "usa", lead: "Bred in", city: "Baltimore", country: "United States" },
  { id: "uk", lead: "Based in", city: "London", country: "United Kingdom" },
] as const;

function Flag({ country }: { country: string }) {
  return <svg viewBox="0 0 30 20" width="21" height="14" aria-hidden="true" className="origin-flag">
    {country === "nigeria" ? <><rect width="30" height="20" fill="#008751" /><rect x="10" width="10" height="20" fill="#fff" /></>
    : country === "usa" ? <><rect width="30" height="20" fill="#fff" />{[0,3,6,9,12,15,18].map(y=><rect key={y} y={y} width="30" height="1.5" fill="#b22234" />)}<rect width="13" height="11" fill="#3c3b6e" />{[2,5,8].flatMap(y=>[2,5,8,11].map(x=><circle key={`${x}-${y}`} cx={x} cy={y} r=".5" fill="#fff" />))}</>
    : <><rect width="30" height="20" fill="#012169" /><path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" /><path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="1.5" /><path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="7" /><path d="M15 0V20M0 10H30" stroke="#c8102e" strokeWidth="4" /></>}
  </svg>;
}

export function OriginPalette() {
  const [selected, setSelected] = useState<Palette>(() => {
    try { const saved = localStorage.getItem("home-palette"); return places.some(place => place.id === saved) ? saved as Palette : "editorial"; } catch { return "editorial"; }
  });
  const [hovered, setHovered] = useState<Palette | null>(null);
  const [focused, setFocused] = useState<Palette | null>(null);
  const active = hovered ?? focused ?? selected;

  useEffect(() => {
    document.documentElement.dataset.homePalette = active;
    return () => { delete document.documentElement.dataset.homePalette; };
  }, [active]);
  useEffect(() => { try { localStorage.setItem("home-palette", selected); } catch { /* The palette still works without storage. */ } }, [selected]);

  return <div className="origin-palette" aria-label="Three cities that shaped me">
    <div className="origin-places" role="group" aria-label="Preview or choose a homepage colour palette">{places.map(place=><button key={place.id} type="button" onPointerEnter={event=>{if(event.pointerType!=="touch")setHovered(place.id);}} onPointerLeave={()=>setHovered(null)} onFocus={()=>setFocused(place.id)} onBlur={()=>setFocused(null)} onClick={()=>setSelected(place.id)} aria-pressed={selected===place.id} aria-label={`${place.lead} ${place.city}. Choose ${place.country} colours.`} data-preview={active===place.id ? "true" : undefined}><span>{place.lead}</span><strong>{place.city}</strong><Flag country={place.id} /></button>)}</div>
    <div className="origin-palette-help"><span className="hidden sm:inline">Hover to preview. Click to keep.</span><span className="sm:hidden">Tap a city to choose its colours.</span>{selected!=="editorial" && <button type="button" onClick={()=>{setSelected("editorial");setHovered(null);setFocused(null);}}>Reset colours</button>}</div>
    <span className="sr-only" role="status">{selected === "editorial" ? "Original editorial colours selected." : `${places.find(place=>place.id===selected)?.country} colours selected.`}</span>
  </div>;
}
