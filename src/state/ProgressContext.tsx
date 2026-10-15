import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import type { StageId } from '../data/stages';
import { STORAGE_KEY, normalizeProgress, completeStage } from './progress.mjs';
type Progress = { completed: StageId[]; storageError: string; clearStage: (id: StageId) => void; reset: () => void };
const Context = createContext<Progress | null>(null);
export function ProgressProvider({ children }: { children: ReactNode }) {
  const [storageError, setStorageError] = useState('');
  const [completed, setCompleted] = useState<StageId[]>(() => {
    try { return normalizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')); }
    catch { return []; }
  });
  const latestCompleted = useRef(completed);
  function save(next: StageId[]) {
    // 저장에 실패해도 현재 탭에서의 진행은 유지하고 사용자에게 알려줍니다.
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, completed: next })); setStorageError(''); }
    catch { setStorageError('브라우저 저장소를 사용할 수 없습니다. 현재 진행은 이 탭에서만 유지됩니다.'); }
    // 연속 완료 이벤트가 같은 렌더에서 발생해도 이전 완료 기록을 잃지 않습니다.
    latestCompleted.current = next;
    setCompleted(next);
  }
  function reset() {
    save([]);
    // 다른 사이트의 데이터는 건드리지 않고 이 게임의 쿠폰만 지웁니다.
    try { localStorage.removeItem('birthday-quest:coupon:v1'); }
    catch { setStorageError('저장소에 접근할 수 없어 저장된 쿠폰을 초기화하지 못했습니다.'); }
  }
  return <Context.Provider value={{ completed, storageError, clearStage: id => save(completeStage(latestCompleted.current, id)), reset }}>{children}</Context.Provider>;
}
export function useProgress() { const value = useContext(Context); if (!value) throw new Error('ProgressProvider가 필요합니다.'); return value; }
