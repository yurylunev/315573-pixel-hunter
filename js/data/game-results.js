export const gameResults = (answers = [], lives = 0) => {
  if (answers.every((answer) => answer.success)) {
    let score = answers.reduce((result, current) => {
      let sum = (current.success) ? 100 : 0;
      sum = (current.time < 10) ? (sum + 50) : sum;
      sum = (current.time > 20) ? (sum - 50) : sum;
      return result + sum;
    }, 0);
    return score + lives * 50;
  } else {
    return -1;
  }
};

export default gameResults;
