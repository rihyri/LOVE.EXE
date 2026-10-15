import { Link } from 'react-router-dom';
import type { Stage } from '../data/stages';
import { PixelIcon } from './PixelIcon';
export function StageCard({ stage, index, completed }: { stage: Stage; index: number; completed: boolean }) {
 return <Link to={`/stages/${stage.id}`} className={`stage-card ${stage.color}`}><div className="card-top"><span>STAGE 0{index+1}</span><span className="status">{completed?'✓ CLEAR':'PLAY'}</span></div><div className="icon-box"><PixelIcon name={stage.icon}/></div><span className="eyebrow">{stage.tag}</span><h3>{stage.title}</h3><p>{stage.subtitle}</p><div className="card-bottom"><span>{completed?'클리어 완료 · 다시 플레이':'FIRST CLEAR +1 EXP'}</span><span aria-hidden="true">↗</span></div></Link>;
}
