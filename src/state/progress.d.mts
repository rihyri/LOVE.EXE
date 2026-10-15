import type { StageId } from '../data/stages';
export const STORAGE_KEY: string;
export const STAGE_IDS: readonly StageId[];
export function normalizeProgress(value: unknown): StageId[];
export function completeStage(completed: StageId[], id: StageId): StageId[];
