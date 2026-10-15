import test from 'node:test';
import assert from 'node:assert/strict';
import { buildContributionCalendar } from '../src/data/love-contributions.mjs';

test('연간 기여도는 7행과 52~54주를 구성하고 모든 날짜가 한 번씩 나타난다', () => {
 for (const year of [2024,2026,2028]) {
  const calendar = buildContributionCalendar(year);
  const dates = calendar.days.filter(day => day.inYear);
  assert.equal(calendar.days.length, calendar.weeks * 7);
  assert.ok(calendar.weeks >= 52 && calendar.weeks <= 54);
  assert.equal(dates.length, year % 4 === 0 ? 366 : 365);
  assert.equal(new Set(dates.map(day => day.isoDate)).size, dates.length);
  assert.equal(dates[0].isoDate, `${year}-01-01`);
  assert.equal(dates.at(-1).isoDate, `${year}-12-31`);
  assert.deepEqual(calendar.months.map(month => month.month), Array.from({length:12},(_,i)=>i));
 }
});

test('총 contributions는 표시되는 모든 칸의 합계와 일치하고 다섯 색상 단계만 사용한다', () => {
 const calendar = buildContributionCalendar();
 assert.equal(calendar.total, calendar.days.filter(day => day.inYear).reduce((sum,day)=>sum+day.count,0));
 assert.ok(calendar.total > 0);
 assert.deepEqual([...new Set(calendar.days.map(day=>day.level))].sort(),[0,1,2,3,4]);
 assert.ok(calendar.days.filter(day=>!day.inYear).every(day=>day.count===0));
 assert.deepEqual(buildContributionCalendar(), calendar);
});

test('월 레이블과 요일 배치는 UTC 달력상의 날짜에 일치한다', () => {
 const calendar = buildContributionCalendar();
 for (const day of calendar.days) assert.equal(new Date(`${day.isoDate}T00:00:00Z`).getUTCDay(),day.weekday);
 for (const month of calendar.months) {
  const first = calendar.days.find(day=>day.inYear&&day.month===month.month);
  assert.equal(month.week,first.week);
 }
});
