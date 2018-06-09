import {getElementFromTemplate, showScreen} from "./utils";
import greeting from "./screen-greeting";

const intro = getElementFromTemplate(`<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p></div>`);

(intro.querySelector(`.intro__asterisk`)).addEventListener(`click`, () => {
  showScreen(greeting);
});

export default intro;
