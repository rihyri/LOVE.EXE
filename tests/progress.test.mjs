import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeProgress, completeStage, STAGE_IDS } from '../src/state/progress.mjs';
test('저장 데이터의 중복과 알 수 없는 스테이지 제거',()=>assert.deepEqual(normalizeProgress({version:1,completed:['dates','dates','unknown']}),['dates']));
test('손상된 데이터와 지원하지 않는 버전은 초기 상태로 복원',()=>{for(const value of [null,{}, {version:2,completed:['dates']},{version:1,completed:'dates'}]) assert.deepEqual(normalizeProgress(value),[]);});
test('최초 클리어만 경험치에 반영하며 최대 6 유지',()=>{let completed=[];for(const id of STAGE_IDS){completed=completeStage(completed,id);completed=completeStage(completed,id);}assert.equal(completed.length,6);assert.deepEqual(completeStage(completed,'unknown'),completed);});
test('직렬화 후 진행을 그대로 복원',()=>assert.deepEqual(normalizeProgress(JSON.parse(JSON.stringify({version:1,completed:STAGE_IDS}))),STAGE_IDS));
