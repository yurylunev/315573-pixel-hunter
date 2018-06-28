const headerTemplate = (state = {level: 0, lives: 3}) => `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.level}</h1>
    <div class="game__lives">
      ${new Array(3 - state.lives)
  .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
  .join(``)}
      ${new Array(state.lives)
  .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
  .join(``)}
    </div>
  </header>`;

const statsTemplate = (state = new Array(10)) => {
  let template = `<div class="stats"><ul class="stats">`;
  for (let i = 0; i < 10; i++) {
    template += (state[i]) ?
      `<li class="stats__result stats__result--${state[i]}"></li>` :
      `<li class="stats__result stats__result--unknown"></li>`;
  }
  template += `</ul></div>`;
  return template;
};

export {headerTemplate, statsTemplate};
