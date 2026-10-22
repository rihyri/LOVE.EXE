import { useState } from 'react';
import { useProgress } from '../state/ProgressContext';
import fakerImage from '../img/faker.jpg';
import focusIcon from '../img/icon/focus.webp';
import allInIcon from '../img/icon/all_in.webp';
import assistIcon from '../img/icon/assist.webp';
import protectIcon from '../img/icon/protect.webp';
import cautionIcon from '../img/icon/caution.webp';
import retreatIcon from '../img/icon/retreat.webp';
import onMyWayIcon from '../img/icon/on_my_way.webp';
import missingIcon from '../img/icon/enemy_missing.webp';
import visionIcon from '../img/icon/need_vision.webp';
const reportPings = [
 { icon: focusIcon, label: '공통 취향 포착' },
 { icon: onMyWayIcon, label: '합류 완료' },
 { icon: protectIcon, label: '밸런스 유지' },
 { icon: assistIcon, label: '웃음 지원 요청' },
 { icon: protectIcon, label: '팀 분위기 보호' },
 { icon: retreatIcon, label: '한 발 양보' },
 { icon: cautionIcon, label: '과감한 진입 주의' },
 { icon: visionIcon, label: '조합 탐색 필요' },
 { icon: missingIcon, label: '숨은 시너지 발견' },
];
const lines=['두 분 모두 미드에서 메이지를 즐기는 공통 속성이 감지되었습니다.','1996.05.07과 2001.11.01, 서로 다른 패치에서 등장한 두 플레이어입니다.','가상 오행 분석 결과: 침착함과 장난기가 의외의 밸런스를 이룹니다.','평소 아재개그를 즐긴다는 점에서 유머 듀오 시너지가 높습니다.','농담이 썰렁해도 서로 웃어준다면 팀 분위기 버프가 적용됩니다.','미드 라인에서는 각자의 자존심을 살짝 양보하는 것이 좋겠습니다.','석현님의 과감한 플레이에는 안정성 패치가 권장됩니다.','페이커 서포터와 석현님 원딜 조합은… 테스트 서버부터 권장합니다.','바텀 궁합은 미지수지만, 함께 게임 이야기를 나눌 궁합은 훌륭합니다.','최종 판정: 게임과 개그를 공유할 수 있는 유쾌한 듀오입니다!'];
export function FakerQuest(){const [analyzed,setAnalyzed]=useState(false);const {clearStage}=useProgress();return <><p className="quest-objective">목표: 듀오 궁합 분석 결과를 확인해 주세요.</p><img className="faker-player-photo" src={fakerImage} alt="페이커" /><div className="duo-grid"><div className="result-panel"><span className="eyebrow">LEGEND PLAYER</span><h2>페이커</h2><span className="player-ping"><img src={focusIcon} alt="" />침착한 미드 사령관</span><p>1996.05.07 · 미드라이너</p></div><span className="duo-cross">×</span><div className="result-panel"><span className="eyebrow">OUR FAVORITE PLAYER</span><h2>석현님</h2><span className="player-ping"><img src={allInIcon} alt="" />과감한 우리 팀 에이스</span><p>2001.11.01 · 최애 플레이어</p></div></div><p className="muted">순수 유머용 가상 궁합입니다. 실제 사주 분석이나 선수의 의견과 무관합니다.</p><button className="pixel-button primary" onClick={()=>{setAnalyzed(true);clearStage('faker');}}>{analyzed?'다시 분석하기':'궁합 분석 실행'} <img className="ping-button-icon" src={assistIcon} alt="" /></button>{analyzed&&<article className="synergy-result result-panel" aria-live="polite"><div className="synergy-score"><span className="eyebrow">DUO SYNERGY</span><h2 className="big-score">90 <small>/ 100</small></h2></div><div className="synergy-verdict"><span className="synergy-match-badge"><img src={allInIcon} alt="" />DUO MATCH · 함께라면 ALL IN</span><h3>게임도 개그도,<br/>함께하면 좋은 듀오.</h3><p>{lines[lines.length - 1].replace('최종 판정: ', '')}</p></div><ol className="analysis-lines">{lines.slice(0, -1).map((line, index)=><li key={line}><span className="report-ping-icon"><img src={reportPings[index].icon} alt="" /></span><div><span className="report-ping-label">{reportPings[index].label}</span><p>{line}</p></div></li>)}</ol></article>}</>;}
