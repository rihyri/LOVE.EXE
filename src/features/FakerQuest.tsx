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
const lines = [
 '두 분 모두 미드에서 메이지 챔피언을 즐기는 공통 속성이 감지되었습니다. 선호하는 포지션과 플레이 스타일에서 높은 유사도가 확인되었으며, 챔피언 선택 단계부터 자연스러운 공감대가 형성될 것으로 예상됩니다. 다만 두 분이 같은 팀이라면 미드 라인 소유권을 두고 협상이 필요할 수 있습니다.',
 '1996.05.07과 2001.11.01, 서로 다른 패치에서 등장한 두 플레이어입니다. 출시 시점에는 차이가 있지만, 두 분 모두 각자의 서버에서 꾸준히 경험치를 쌓아왔습니다. 서로 다른 메타를 경험한 만큼 예상치 못한 시너지가 발생할 가능성이 있으며, 현재 궁합 시스템에서는 정상적인 듀오 매칭으로 판정되었습니다.',
 '가상 오행 분석 결과, 두 분의 침착함과 장난기가 의외로 안정적인 밸런스를 이루고 있습니다. 한쪽이 지나치게 진지해지는 순간 다른 쪽의 유쾌함이 분위기를 환기할 수 있으며, 반대로 장난이 과해질 때는 침착함이 균형을 잡아줍니다. 현재까지는 별도의 밸런스 패치 없이도 유지 가능한 조합으로 분석됩니다.',
 '두 분 모두 평소 아재개그를 즐긴다는 공통 특성이 확인되어 유머 듀오 시너지가 높게 측정되었습니다. 일반적인 플레이어에게는 다소 높은 난이도의 농담도 서로에게는 치명적인 웃음 공격으로 작용할 수 있습니다. 단, 주변 팀원들의 반응은 보장되지 않으며, 일부 상황에서는 단체 침묵 디버프가 발생할 수 있습니다.',
 '농담이 예상보다 썰렁하더라도 서로 웃어준다면 팀 분위기 버프가 적용됩니다. 특히 상대방의 개그가 실패했을 때 보여주는 작은 리액션은 팀워크 유지에 중요한 역할을 합니다. 무리한 웃음까지 요구되지는 않지만, 적절한 호응이 지속될 경우 장기적인 듀오 안정성이 상승할 것으로 예상됩니다.',
 '두 분 모두 미드 라인에 대한 애정이 높은 만큼, 챔피언 선택 단계에서 의견 충돌이 발생할 가능성이 있습니다. 원활한 듀오 플레이를 위해서는 가끔씩 서로의 주 포지션을 양보하는 유연한 운영이 권장됩니다. 단, 페이커 선수에게 미드를 양보받는 전략은 현재 시스템에서도 성공 확률을 산정하기 어렵습니다.',
 '석현님의 과감한 플레이 성향이 감지되어 안정성 패치가 권장됩니다. 예상치 못한 타이밍에 교전을 시작하는 적극성은 팀에 새로운 변수를 만들어낼 수 있지만, 때로는 아군의 준비 상태를 확인하는 과정이 필요합니다. 특히 페이커 선수와의 듀오에서는 진입 전 핑을 한 번 더 찍는 습관이 생존율 향상에 도움이 될 것으로 분석됩니다.',
 '페이커 선수의 서포터와 석현님의 원딜 조합은 아직 충분한 검증 데이터가 확보되지 않았습니다. 두 플레이어의 잠재력은 높게 평가되지만, 익숙하지 않은 포지션에서 예상치 못한 변수가 발생할 가능성이 있습니다. 안정적인 랭크 점수 관리를 위해 실전 투입보다는 테스트 서버에서의 사전 검증을 권장합니다.',
 '바텀 라인에서의 궁합은 아직 미지수지만, 함께 게임 이야기를 나눌 궁합만큼은 매우 훌륭한 것으로 분석됩니다. 챔피언 밸런스부터 경기 운영, 예상치 못한 슈퍼 플레이까지 대화 주제가 끊이지 않을 가능성이 높습니다. 승패와 관계없이 게임 자체를 즐길 수 있다는 점에서 두 분의 듀오 시너지는 긍정적인 평가를 받았습니다.',
 '최종 판정: 게임과 개그를 공유할 수 있는 유쾌한 듀오입니다!',
];
function AnalysisCopy({ text }: { text: string }) {
 const sentences = text.split(/(?<=\.)\s+(?=[가-힣])/u);
 return <div className="analysis-copy">
  <p className="analysis-lead"><strong>{sentences[0]}</strong></p>
  <p>{sentences.slice(1, -1).join(' ')}</p>
  <p className="analysis-takeaway">{sentences[sentences.length - 1]}</p>
 </div>;
}
export function FakerQuest(){const [analyzed,setAnalyzed]=useState(false);const {clearStage}=useProgress();return <><p className="quest-objective">목표: 듀오 궁합 분석 결과를 확인해 주세요.</p><img className="faker-player-photo" src={fakerImage} alt="페이커" /><div className="duo-grid"><div className="result-panel"><span className="eyebrow">LEGEND PLAYER</span><h2>페이커</h2><span className="player-ping"><img src={focusIcon} alt="" />침착한 미드 사령관</span><p>1996.05.07 · 미드라이너</p></div><span className="duo-cross">×</span><div className="result-panel"><span className="eyebrow">OUR FAVORITE PLAYER</span><h2>석현님</h2><span className="player-ping"><img src={allInIcon} alt="" />과감한 우리 팀 에이스</span><p>2001.11.01 · 최애 플레이어</p></div></div><p className="muted">순수 유머용 가상 궁합입니다. 실제 사주 분석이나 선수의 의견과 무관합니다.</p><button className="pixel-button primary" onClick={()=>{setAnalyzed(true);clearStage('faker');}}>{analyzed?'다시 분석하기':'궁합 분석 실행'} <img className="ping-button-icon" src={assistIcon} alt="" /></button>{analyzed&&<article className="synergy-result result-panel" aria-live="polite"><div className="synergy-score"><span className="eyebrow">DUO SYNERGY</span><h2 className="big-score">90 <small>/ 100</small></h2></div><div className="synergy-verdict"><span className="synergy-match-badge"><img src={allInIcon} alt="" />DUO MATCH · 함께라면 ALL IN</span><h3>게임도 개그도,<br/>함께하면 좋은 듀오.</h3><p>{lines[lines.length - 1].replace('최종 판정: ', '')}</p></div><ol className="analysis-lines">{lines.slice(0, -1).map((line, index)=><li key={line}><span className="report-ping-icon"><img src={reportPings[index].icon} alt="" /></span><div className="analysis-entry"><h3 className="report-ping-label">{reportPings[index].label}</h3><AnalysisCopy text={line} /></div></li>)}</ol></article>}</>;}
