import { Link, useParams } from 'react-router-dom';
import { stages, type StageId } from '../data/stages';
import { QuestShell } from '../components/QuestShell';
import { DatesQuest } from '../features/DatesQuest';
import { FakerQuest } from '../features/FakerQuest';
import { ReportQuest } from '../features/ReportQuest';
import { GachaQuest } from '../features/GachaQuest';
import { QuizQuest } from '../features/QuizQuest';
import { GithubQuest } from '../features/GithubQuest';
import type { ComponentType } from 'react';
const quests: Record<StageId, ComponentType> = { dates:DatesQuest, faker:FakerQuest, report:ReportQuest, gacha:GachaQuest, quiz:QuizQuest, github:GithubQuest };
export function StagePage(){
 const {stageId}=useParams();const stage=stages.find(item=>item.id===stageId);
 if(!stage)return <section className="placeholder"><h1>아직 발견되지 않은 좌표입니다.</h1><Link className="navigation-button" to="/hub">퀘스트 보드로 돌아가기</Link></section>;
 const Quest=quests[stage.id];return <QuestShell key={stage.id} stage={stage}><Quest/></QuestShell>;
}
