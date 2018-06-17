import {assert} from 'chai';
import gameTimer from './game-timer';

describe(`Update timer function`, () => {
  it(`Less then 10 right answers`, () => {
    assert.equal(gameTimer(10).tick(), 9);
    assert.equal(gameTimer().tick(), 8);
    assert.equal(gameTimer().tick(), 7);
    assert.equal(gameTimer().tick(), 6);
    assert.equal(gameTimer().tick(), 5);
    assert.equal(gameTimer().tick(), 4);
    assert.equal(gameTimer().tick(), 3);
    assert.equal(gameTimer().tick(), 2);
    assert.equal(gameTimer().tick(), 1);
    assert.equal(gameTimer().tick(), 0);
    assert.equal(gameTimer().tick(), `Time is over`);
  });
});
