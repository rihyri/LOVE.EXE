import { useState } from 'react';
import { places } from '../data/content';
import { useProgress } from '../state/ProgressContext';

export function DatesQuest() {
 const [visited, setVisited] = useState<number[]>([]);
 const [selected, setSelected] = useState<number | null>(null);
 const { clearStage } = useProgress();
 // The same three detail views remain the only completion condition.
 function open(index: number) {
  const next = [...new Set([...visited, index])];
  setVisited(next);
  setSelected(index);
  if (next.length === places.length) clearStage('dates');
 }
 return <>
  <p className="quest-objective">목표: 세 장소의 추억을 모두 열람해 주세요. ({visited.length}/3)</p>
  <div className="dates-layout">
   <div>
    <div className="memory-map" role="group" aria-label="추억 장소 탐색 안내. 실제 지리적 위치가 아닌 탐험 경로입니다.">
     <span className="map-caption">MEMORY ROUTE / TOP 03</span>
     <svg viewBox="0 0 440 260" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 185H80V145H150V170H230V120H320V80H440" fill="none" stroke="#30263f" strokeWidth="38"/>
      <path d="M50 95H150V145H330V200H145" fill="none" stroke="#8d77ab" strokeWidth="2" strokeDasharray="4 7"/>
      <path d="M0 235H80M360 35H440M260 240H440" stroke="#493b61" strokeWidth="12"/>
     </svg>
     {places.map((place, index) => <button className="map-stop" key={place.name} aria-label={`${place.name} 추억 열기`} aria-pressed={selected === index} onClick={() => open(index)}>
      <span aria-hidden="true">0{index + 1}</span>{place.name}
     </button>)}
    </div>
    <div className="place-grid">{places.map((place, index) => <button key={place.name} className={`place-card ${selected === index ? 'selected' : ''}`} onClick={() => open(index)} aria-pressed={selected === index}>
     <span className="eyebrow">TOP 0{index + 1} {visited.includes(index) ? '✓' : ''}</span>
     <strong>{place.name}</strong><span>{place.venue}</span>
    </button>)}</div>
   </div>
   {selected !== null ? <article className="date-notes result-panel" aria-live="polite">
    <span className="eyebrow">MEMORY 0{selected + 1}</span>
    <h2>{places[selected].name}</h2>
    <p>{places[selected].comment}</p>
    <p className="address">{places[selected].address}</p>
    <a className="text-button" href={`https://map.naver.com/p/search/${encodeURIComponent(places[selected].venue)}`} target="_blank" rel="noreferrer">지도에서 장소 찾아보기 ↗ (새 창)</a>
   </article> : <div className="date-notes date-empty"><span className="eyebrow">EXPLORATION LOG</span><p>장소를 선택해 추억을 열어보세요.</p></div>}
  </div>
  <p className="muted">지도는 새 창에서 확인할 수 있습니다. 장소 사진은 추후 우리의 사진으로 채울 예정입니다.</p>
 </>;
}
