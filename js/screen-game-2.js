import {getElementFromTemplate, showScreen} from "./utils";
import greeting from "./screen-greeting";
import game3 from "./screen-game-3";
import {headerTemplate, statsTemplate} from "./templates";

const game2 = getElementFromTemplate(`<div>${headerTemplate({level: 2, lives: 2})}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint game__answer--wide">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${statsTemplate([`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`])}
  </div>
  </div>`);

const radios = Array.from(game2.querySelectorAll(`input[type=radio]`));
radios.forEach((radio) => {
  radio.addEventListener(`click`, () => {
    showScreen(game3);
  });
});

(game2.querySelector(`button.back`)).addEventListener(`click`, () => {
  showScreen(greeting);
});

export default game2;
