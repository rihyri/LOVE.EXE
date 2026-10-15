import { Link } from 'react-router-dom';
import { PixelCouple } from '../components/PixelCouple';
import './intro.css';

export function IntroPage() {
 return <section className="intro intro-editorial" aria-labelledby="birthday-title">
  <div className="eyebrow intro-label">SPECIAL EVENT · NOVEMBER 01</div>
  <div className="intro-title-block">
   <p className="small-label">석현님을 위한 단 하나의 게임</p>
   <h1 id="birthday-title">BIRTHDAY<br/>QUEST<span>: LOVE.EXE</span></h1>
  </div>
  <div className="intro-scene">
   <div className="intro-moon" aria-hidden="true"/>
   <span className="star s1" aria-hidden="true">✦</span>
   <span className="star s2" aria-hidden="true">✧</span>
   <div className="intro-horizon" aria-hidden="true"/>
   <PixelCouple/>
   <div className="intro-ground" aria-hidden="true"><i/><i/><i/></div>
  </div>
  <div className="system-message">
   <span className="eyebrow">[ AI SYSTEM MESSAGE ]</span>
   <h2>석현님의 생일을 축하드립니다!</h2>
   <p>특별한 플레이어가 감지되었습니다.<br/>추억과 사랑으로 설계된 7개의 퀘스트가 기다립니다.</p>
   <p className="intro-secret">모든 퀘스트 너머, 시크릿 엔딩이 기다립니다.</p>
  </div>
  <div className="intro-actions">
   <Link className="pixel-button primary" to="/hub">게임 시작하기 <span aria-hidden="true">▶</span></Link>
   <p className="intro-hint">1 PLAYER · 무제한 애정 · 자동 저장</p>
  </div>
 </section>;
}
