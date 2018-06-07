import greeting from "./screen-greeting";

const mainElement = document.querySelector(`main.central`);
const intro = document.createElement(`div`);
intro.innerHTML = `<div class="intro"><h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p></div>`;

const nextButton = intro.querySelector(`h1.intro__asterisk`);
nextButton.addEventListener(`click`, () => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(greeting);
});
mainElement.appendChild(intro);

export default intro;
