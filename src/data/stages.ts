export const stages = [
  { id: 'dates', title: '우리의 데이트 핫플 TOP 3', subtitle: '함께 걸었던 좌표를 불러옵니다.', icon: 'map', tag: 'MEMORY MAP', color: 'pink' },
  { id: 'faker', title: '페이커 × 남자친구 궁합', subtitle: '두 미드라이너의 케미를 분석합니다.', icon: 'sword', tag: 'MATCH ANALYSIS', color: 'yellow' },
  { id: 'report', title: '남자친구 성능 평가 리포트', subtitle: '연구 대상의 매력 수치를 확인합니다.', icon: 'chart', tag: 'PLAYER STATS', color: 'blue' },
  { id: 'gacha', title: '생일 선물 가챠 시스템', subtitle: '오늘의 행운을 뽑아보세요.', icon: 'gift', tag: 'LUCKY DRAW', color: 'yellow' },
  { id: 'quiz', title: '여자친구 데이터셋 이해도 테스트', subtitle: '사랑으로 학습한 데이터를 검증합니다.', icon: 'heart', tag: 'DATASET TEST', color: 'pink' },
  { id: 'github', title: '우리의 연애 GitHub', subtitle: '차곡차곡 쌓인 우리의 커밋 기록.', icon: 'code', tag: 'LOVE COMMITS', color: 'green' },
] as const;
export type Stage = typeof stages[number];
export type StageId = Stage['id'];
