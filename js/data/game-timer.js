let timerObject = {
  time: 0,
  tick: () => {
    timerObject.time--;
    if (timerObject.time < 0) {
      return `Time is over`;
    }
    return timerObject.time;
  }
};

export const gameTimer = (time) => {
  if (time) {
    timerObject.time = time;
  }
  return timerObject;
};

export default gameTimer;
