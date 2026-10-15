export const STORAGE_KEY = 'birthday-quest:progress:v1';
export const STAGE_IDS = ['dates', 'faker', 'report', 'gacha', 'quiz', 'github'];
// 저장 데이터는 신뢰하지 않고, 유효한 스테이지만 중복 없이 복원합니다.
export function normalizeProgress(value) {
  if (!value || value.version !== 1 || !Array.isArray(value.completed)) return [];
  return STAGE_IDS.filter(id => value.completed.includes(id));
}
export function completeStage(completed, id) {
  return STAGE_IDS.includes(id) ? [...new Set([...completed, id])] : completed;
}
