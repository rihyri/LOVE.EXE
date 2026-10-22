import { useState } from 'react';
import { useProgress } from '../state/ProgressContext';
const metrics = ['귀여움','잘생김','배려심','떼쓰기','우사기 따라하기'];
function MetricRadar() {
 const center = 250;
 const radius = 156;
 function point(index: number, distance: number) {
  const angle = -Math.PI / 2 + index * Math.PI * 2 / metrics.length;
  return { x: center + Math.cos(angle) * distance, y: center + Math.sin(angle) * distance };
 }
 const points = metrics.map((_, index) => point(index, radius));
 return <div className="metrics">
  <figure className="metric-radar">
   <figcaption><span className="eyebrow">PLAYER PERFORMANCE</span><strong>석현님 능력치 분석</strong><span className="radar-legend"><i aria-hidden="true" />애정 기반 평가 · 100점 만점</span></figcaption>
   <svg className="radar-chart" viewBox="0 0 500 480" role="img" aria-labelledby="report-radar-title report-radar-description">
    <title id="report-radar-title">석현님 성능 평가 레이더 차트</title>
    <desc id="report-radar-description">귀여움, 잘생김, 배려심, 떼쓰기, 우사기 따라하기 모두 100점 만점에 100점입니다. 롤 실력은 측정 보류로 차트에서 제외했습니다.</desc>
    {[20,40,60,80,100].map(value => <circle key={value} className={value === 100 ? 'radar-ring radar-ring-outer' : 'radar-ring'} cx={center} cy={center} r={radius * value / 100} />)}
    {metrics.map((name,index) => {
     const end = point(index,radius);
     return <line className="radar-axis" key={name} x1={center} y1={center} x2={end.x} y2={end.y} />;
    })}
    {[20,40,60,80].map(value => <text className="radar-tick" key={value} x={center + 6} y={center - radius * value / 100 - 5}>{value}</text>)}
    <polygon className="radar-area" points={points.map(p => `${p.x},${p.y}`).join(' ')} />
    {metrics.map((name,index) => {
     const p = points[index];
     const label = point(index,radius + 36);
     const anchor = label.x < center - 10 ? 'end' : label.x > center + 10 ? 'start' : 'middle';
     return <g key={name}>
      <circle className="radar-dot" cx={p.x} cy={p.y} r="4" />
      <text className="radar-label" x={label.x} y={label.y - 3} textAnchor={anchor}>{name}<tspan className="radar-value" x={label.x} dy="21">100<tspan className="radar-denominator"> / 100</tspan></tspan></text>
     </g>;
    })}
   </svg>
  </figure>
  <div className="radar-pending"><span className="radar-pending-tag">측정 보류</span><div><strong>롤 실력 · 흠..!</strong><p>위험 감수 수치가 높아 안정성 지표부터 재검토합니다.</p></div></div>
 </div>;
}
export function ReportQuest() {
 const [ran, setRan] = useState(false);
 const { clearStage } = useProgress();
 return <>
  <p className="quest-objective">목표: 벤치마크를 실행하고 최종 리포트를 확인해 주세요.</p>
  <div className="benchmark-intro result-panel">
   <div><span className="eyebrow">MODEL: SEOKHYEON / EVALUATOR: HYERI</span>
    <h2>최애 플레이어 벤치마크</h2>
    <p>평가 데이터: 함께한 일상 · 연구자의 애정 편향 100%</p></div>
   <button className="pixel-button primary" onClick={() => { setRan(true); clearStage('report'); }}>{ran ? '벤치마크 다시 실행' : 'RUN BENCHMARK'} ▶</button>
  </div>
  {ran && <article className="benchmark-results result-panel" aria-live="polite">
   <MetricRadar />
   <div className="benchmark-conclusion"><span className="eyebrow">FINAL RESEARCH NOTE</span><h2>최종 연구 결론</h2>
    <p>귀여움과 잘생김, 배려심까지 모두 갖춘 석현님! 다만 리그 오브 레전드에서 위험한 플레이를 즐기는 경향이 발견되었습니다. 안정성을 조금 더 챙겨보는 건 어떠세요? 그럼에도 혜리님의 최애 플레이어 순위는 변함없이 1위입니다.</p>
    <div className="conclusion-footer"><strong>혜리님의 최애 플레이어, 변함없이 1위</strong><span className="report-stamp">APPROVED WITH LOVE ♥</span></div></div>
  </article>}
 </>;
}
