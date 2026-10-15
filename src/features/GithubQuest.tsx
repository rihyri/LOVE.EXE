import { useState } from 'react';
import { commits } from '../data/content';
import { useProgress } from '../state/ProgressContext';
import { LoveContributions } from '../components/LoveContributions';
import './github-quest.css';

function groupLabel(date: string) {
 const parts = date.split('.');
 return parts.length === 3 ? `${parts[0]}년 ${Number(parts[1])}월` : date;
}

export function GithubQuest() {
 const [selected, setSelected] = useState<number | null>(null);
 const { clearStage } = useProgress();
 function open(index: number) {
  setSelected(index);
  // Preserve the existing release-detail completion event, including replay behavior.
  if (index === commits.length - 1) clearStage('github');
 }
 return <>
  <p className="quest-objective">목표: 마지막 생일 release 커밋을 열람해 주세요.</p>
  <header className="love-repository"><span className="eyebrow">HYERI / OUR-LOVE</span><h2>우리의 일상을 커밋합니다.</h2></header>
  <LoveContributions/>
  <section className="contribution-activity" aria-labelledby="contribution-activity-title">
   <h3 id="contribution-activity-title">Contribution activity</h3>
   <ol className="love-timeline">{commits.map((commit, index) => {
    const group = groupLabel(commit.date);
    const startsGroup = index === 0 || group !== groupLabel(commits[index - 1].date);
    return <li key={commit.title}>
     {startsGroup && <h4 className="activity-month"><span>{group}</span></h4>}
     <div className={`activity-entry ${selected === index ? 'is-selected' : ''}`}>
      <button className="activity-dot" aria-label={`${commit.title} 상세 보기`} aria-expanded={selected === index} aria-controls={`commit-detail-${index}`} onClick={() => open(index)}><span aria-hidden="true">♥</span></button>
      <div className="activity-content">
       <div className="activity-date"><span>{commit.date}</span>{index === commits.length - 1 && <span className="release-label">RELEASE</span>}</div>
       <button className="activity-title" aria-expanded={selected === index} aria-controls={`commit-detail-${index}`} onClick={() => open(index)}>{commit.title}<span aria-hidden="true">↗</span></button>
       <p className="activity-summary">{commit.detail}</p>
       <div id={`commit-detail-${index}`} hidden={selected !== index} className="commit-detail" aria-live="polite">
        {selected === index && <article><span className="eyebrow">COMMIT DETAILS</span><h2>{commit.title}</h2><p>{commit.detail}</p></article>}
       </div>
      </div>
     </div>
    </li>;
   })}</ol>
  </section>
 </>;
}
