import {getElementFromTemplate, showScreen} from "./utils";
import greeting from "./screen-greeting";
import stats from "./screen-stats";
import {headerTemplate, statsTemplate} from "./templates";

const game3 = getElementFromTemplate(`<div>${headerTemplate({level: 3, lives: 1})}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    ${statsTemplate([`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`])}
  </div>
  </div>`);

const radios = Array.from(game3.querySelectorAll(`form>.game__option`));
radios.forEach((radio) => {
  radio.addEventListener(`click`, () => {
    showScreen(stats);
  });
});

(game3.querySelector(`button.back`)).addEventListener(`click`, () => {
  showScreen(greeting);
});

export default game3;
