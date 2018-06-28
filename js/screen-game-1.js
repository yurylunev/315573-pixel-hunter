import {getElementFromTemplate, showScreen} from "./utils";
import greeting from "./screen-greeting";
import game2 from "./screen-game-2";
import {headerTemplate, statsTemplate} from "./templates";

const data = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  options: [
    {imgSrc: `http://placehold.it/468x458`, alt: `Option 1`, name: `question1`},
    {imgSrc: `http://placehold.it/468x458`, alt: `Option 2`, name: `question2`},
  ],
  state: {
    level: 1,
    lives: 3
  }
};

const game1 = (data) => {
  getElementFromTemplate(`<div>${headerTemplate(data.state)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${data.options[0].imgSrc}" alt="${data.options[0].alt}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="${data.options[0].name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${data.options[0].name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${data.options[1].imgSrc}" alt="${data.options[0].alt}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="${data.options[0].name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="${data.options[0].name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${statsTemplate([`wrong`, `slow`, `fast`, `correct`])}
  </div>
  </div>`);
};

(game1.querySelector(`button.back`)).addEventListener(`click`, () => {
  showScreen(greeting);
});

const radios = Array.from(game1.querySelectorAll(`input[type=radio]`));
radios.forEach((radio) => {
  radio.addEventListener(`click`, () => {
    if (Array.from(game1.querySelectorAll(`input[type=radio]:checked`)).length === 2) {
      showScreen(game2);
    }
  });
});

export default game1;
