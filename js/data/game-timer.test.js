import {assert} from 'chai';
import gameTimer from './game-timer';

describe(`Update timer function`, () => {
  it(`Default timer ticks`, () => {
    assert.equal(gameTimer().tick(), `Time is over`);
  });
  it(`10 timer ticks`, () => {
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
  it(`Reset timer ticks`, () => {
    assert.equal(gameTimer(10).tick(), 9);
    assert.equal(gameTimer().tick(), 8);
    assert.equal(gameTimer(10).tick(), 9);
    assert.equal(gameTimer().tick(), 8);
    assert.equal(gameTimer(100).tick(), 99);
  });
});
