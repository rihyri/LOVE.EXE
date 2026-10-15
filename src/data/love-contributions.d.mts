export type ContributionDay = {
 isoDate: string; date: string; inYear: boolean; week: number; weekday: number;
 month: number; count: number; level: number;
};
export const contributionArtwork: { year: number; description: string; heart: string[]; starts: number[] };
export function buildContributionCalendar(year?: number): {
 year: number; weeks: number; days: ContributionDay[];
 months: { month: number; label: string; week: number }[]; total: number;
};
