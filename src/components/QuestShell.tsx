import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Stage } from '../data/stages';
import { useProgress } from '../state/ProgressContext';
export function QuestShell({stage,children}:{stage:Stage;children:ReactNode}){const {completed,storageError}=useProgress();return <div className={`quest-page quest-${stage.id}`}><Link className="back-link" to="/hub">← 퀘스트 보드</Link><div className="quest-heading"><span className="eyebrow">{stage.tag}</span><h1>{stage.title}</h1><p>{stage.subtitle}</p></div>{children}<div className={`quest-clear ${completed.includes(stage.id)?'is-clear':''}`} role="status">{completed.includes(stage.id)?'✓ QUEST CLEAR · 최초 클리어 EXP +1 반영 완료':'퀘스트 목표를 달성하면 EXP가 1 증가합니다.'}</div>{storageError&&<p className="storage-error" role="status">{storageError}</p>}<Link className="navigation-button" to="/hub">허브로 돌아가기 ←</Link></div>;}
