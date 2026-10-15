import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { buildContributionCalendar, contributionArtwork } from '../data/love-contributions.mjs';

const calendar = buildContributionCalendar();
const firstDay = calendar.days.findIndex(day => day.inYear);
const lastDay = calendar.days.length - 1 - [...calendar.days].reverse().findIndex(day => day.inYear);

export function LoveContributions() {
 const [focused, setFocused] = useState(firstDay);
 const [active, setActive] = useState(firstDay);
 const cells = useRef<(HTMLButtonElement | null)[]>([]);
 const day = calendar.days[active];
 function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
  let next = index;
  switch (event.key) {
   case 'ArrowRight': next += 7; break;
   case 'ArrowLeft': next -= 7; break;
   case 'ArrowDown': next += 1; break;
   case 'ArrowUp': next -= 1; break;
   case 'Home': next = event.ctrlKey ? firstDay : Math.floor(index / 7) * 7; break;
   case 'End': next = event.ctrlKey ? lastDay : Math.floor(index / 7) * 7 + 6; break;
   default: return;
  }
  event.preventDefault();
  next = Math.min(lastDay, Math.max(firstDay, next));
  setFocused(next);
  cells.current[next]?.focus();
 }
 return <section className="love-contributions" aria-labelledby="love-contributions-title">
  <div className="contribution-title"><h3 id="love-contributions-title"><strong>{calendar.total.toLocaleString('en-US')}</strong> love contributions</h3><span>{calendar.year} · 예시 활동 데이터</span></div>
  <div className="contribution-panel">
   <div className="contribution-scroll" role="region" aria-label={`${calendar.year}년 연애 기여도 그래프. 방향키로 날짜를 탐색할 수 있습니다.`}>
    <div className="contribution-calendar" style={{ '--weeks': calendar.weeks } as CSSProperties}>
     <div className="contribution-months" aria-hidden="true">{calendar.months.map(month => <span key={month.month} style={{ gridColumn: month.week + 1 }}>{month.label}</span>)}</div>
     <div className="contribution-weekdays" aria-hidden="true"><span>월</span><span>수</span><span>금</span></div>
     <div className="contribution-cells">{calendar.days.map((date, index) => date.inYear ? <button
      key={date.isoDate} ref={element => { cells.current[index] = element; }}
      className={`contribution-cell love-level-${date.level}`}
      aria-label={`${date.date}, ${date.count} love contributions, 예시 활동`}
      aria-describedby="love-day-detail" tabIndex={focused === index ? 0 : -1}
      onKeyDown={event => navigate(event, index)}
      onFocus={() => { setFocused(index); setActive(index); }}
      onMouseEnter={() => setActive(index)} onClick={() => { setFocused(index); setActive(index); }}
     /> : <span key={date.isoDate} className="contribution-cell outside-year" aria-hidden="true"/>)}</div>
    </div>
   </div>
   <div className="contribution-footer"><span className="graph-help">방향키로 탐색 · 터치로 확인</span><div className="contribution-legend" aria-label="활동 없음부터 4단계까지"><span>Less love</span>{[0,1,2,3,4].map(level => <i key={level} className={`love-level-${level}`} aria-hidden="true"/>)}<span>More love</span></div></div>
  </div>
  <div className="contribution-inspector" id="love-day-detail" role="status" aria-live="polite" aria-atomic="true"><time dateTime={day.isoDate}>{day.date}</time><strong>{day.count} love contributions</strong><span>{day.count ? contributionArtwork.description : '아직 채우지 않은 예시 잔디'}</span></div>
  <p className="contribution-note">잔디는 실제 커밋 수가 아닌, 함께한 마음을 표현한 장식입니다.</p>
 </section>;
}
