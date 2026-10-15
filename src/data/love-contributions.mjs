/** Editable decorative data. These counts are sample artwork, not actual daily records. */
export const contributionArtwork = {
 year: 2026,
 description: '오늘도 서로를 좋아한 날 ♥',
 heart: ['011000110','111101111','111111111','011111110','001111100','000111000','000010000'],
 starts: [1,14,27,40],
};

export function buildContributionCalendar(year = contributionArtwork.year) {
 if (!Number.isInteger(year) || year < 1000 || year > 9998) throw new RangeError('지원하지 않는 연도입니다.');
 const first = new Date(Date.UTC(year, 0, 1));
 const last = new Date(Date.UTC(year, 11, 31));
 const start = new Date(first);
 start.setUTCDate(start.getUTCDate() - start.getUTCDay());
 const dayCount = Math.round((last.getTime() - start.getTime()) / 86400000) + 1;
 const weeks = Math.ceil(dayCount / 7);
 const days = Array.from({ length: weeks * 7 }, (_, index) => {
  const date = new Date(start);
  date.setUTCDate(start.getUTCDate() + index);
  const week = Math.floor(index / 7);
  const weekday = index % 7;
  const inYear = date.getUTCFullYear() === year;
  const filled = contributionArtwork.starts.some(offset => contributionArtwork.heart[weekday][week - offset] === '1');
  const count = inYear && filled ? 1 + ((week * 3 + weekday) % 4) : 0;
  const isoDate = date.toISOString().slice(0, 10);
  return { isoDate, date: isoDate.replaceAll('-', '.'), inYear, week, weekday, month: date.getUTCMonth(), count, level: count };
 });
 const months = Array.from({ length: 12 }, (_, month) => {
  const date = new Date(Date.UTC(year, month, 1));
  return { month, label: `${month + 1}월`, week: Math.floor((date.getTime() - start.getTime()) / 86400000 / 7) };
 });
 return { year, weeks, days, months, total: days.reduce((sum, day) => sum + day.count, 0) };
}
