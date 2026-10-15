import { useState } from 'react';
import { coupons } from '../data/content';
import { useProgress } from '../state/ProgressContext';
const KEY='birthday-quest:coupon:v1';
export function GachaQuest(){const {clearStage}=useProgress();const [saveError,setSaveError]=useState('');const [draw,setDraw]=useState<number|null>(()=>{try{const value=JSON.parse(localStorage.getItem(KEY)??'null');return Number.isInteger(value)&&value>=0&&value<coupons.length?value:null;}catch{return null;}});
 // 마지막 쿠폰만 보관하며, 재추첨과 중복 당첨을 허용합니다.
 function pull(){const next=Math.floor(Math.random()*coupons.length);setDraw(next);clearStage('gacha');try{localStorage.setItem(KEY,JSON.stringify(next));setSaveError('');}catch{setSaveError('쿠폰을 저장하지 못했습니다. 현재 화면에서 확인해 주세요.');}}
 return <><p className="quest-objective">목표: 첫 번째 쿠폰을 뽑아 주세요. 중복 허용 · 횟수 제한 없음 · 8종 균등 확률</p><div className="gacha-machine"><span className="eyebrow">LOVE LAB / CAPSULE SUPPLY</span><div className="capsule-window" aria-hidden="true">● ◒ ●<br/>◓ ● ◒</div><h2>애정은 꽝이 없습니다.</h2><button className="pixel-button primary" onClick={pull}>{draw===null?'쿠폰 뽑기':'한 번 더 뽑기'} 🎁</button><p>각 쿠폰 당첨 확률 12.5%</p></div>{draw!==null&&<article className="coupon result-panel" aria-live="polite"><span className="eyebrow">YOUR BIRTHDAY REWARD</span><h2>{coupons[draw].name}</h2><p>{coupons[draw].description}</p><p className="coupon-date">유효기간: 2027년 12월 31일까지</p><p className="muted">사용할 때 혜리님에게 보여 주세요. 일정은 함께 상의해 주세요.</p></article>}{saveError&&<p role="status" className="storage-error">{saveError}</p>}</>;}
