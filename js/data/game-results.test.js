import {assert} from 'chai';
import gameResults from './game-results';

describe(`Result score function`, () => {
  it(`Less then 10 right answers`, () => {
    assert.equal(gameResults([
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: false, time: 10},
    ], 3), -1);
  });
  it(`10 right answers, middle time`, () => {
    assert.equal(gameResults([
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
    ], 3), 1150);
    assert.equal(gameResults([
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
    ], 0), 1000);
    assert.equal(gameResults([
      {success: true, time: 9},
      {success: true, time: 10},
      {success: true, time: 9},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 10},
      {success: true, time: 21},
      {success: true, time: 10},
      {success: true, time: 21},
    ], 0), 1000);
  });
  it(`10 right answers, fast`, () => {
    assert.equal(gameResults([
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
      {success: true, time: 9},
    ], 3), 1650);
  });
  it(`10 right answers, slow`, () => {
    assert.equal(gameResults([
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
      {success: true, time: 21},
    ], 3), 650);
  });
});
