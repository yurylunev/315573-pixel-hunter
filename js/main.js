'use strict';
const screens = [...document.querySelectorAll(`template, main.central`)];
let currentScreen = 1;

const showScreen = (screenNumber) => {
  currentScreen = screenNumber;
  screens[0].innerHTML = screens[screenNumber].innerHTML;
};

const increaseCurrentScreen = () => {
  showScreen(Math.min(++currentScreen, screens.length - 1));
};

const decreaseCurrentScreen = () => {
  showScreen(Math.max(--currentScreen, 1));
};

document.addEventListener(`keyup`, (event) => {
  const keyName = event.key;
  switch (keyName) {
    case `ArrowLeft`:
      decreaseCurrentScreen();
      break;
    case `ArrowRight`:
      increaseCurrentScreen();
      break;
  }
});

const arrowsWrapElement = document.createElement(`div`);
arrowsWrapElement.className = `arrows__wrap`;
arrowsWrapElement.innerHTML = `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;
document.body.appendChild(arrowsWrapElement);

document.querySelectorAll(`button.arrows__btn`)[0].addEventListener(`click`, () => {
  decreaseCurrentScreen();
});
document.querySelectorAll(`button.arrows__btn`)[1].addEventListener(`click`, () => {
  increaseCurrentScreen();
});
