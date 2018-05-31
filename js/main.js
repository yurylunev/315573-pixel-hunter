'use strict';
const Pages = [...document.querySelectorAll(`template, main.central`)];
let currentPage = 1;

const showPage = (pageNumber) => {
  Pages[0].innerHTML = Pages[pageNumber].innerHTML;
};

const increaseCurrentPage = () => {
  currentPage++;
  if (currentPage > Pages.length - 1) {
    currentPage = Pages.length - 1;
  }
  showPage(currentPage);
};

const decreaseCurrentPage = () => {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  showPage(currentPage);
};

document.addEventListener(`keyup`, (event) => {
  const keyName = event.key;
  switch (keyName) {
    case `ArrowLeft`:
      decreaseCurrentPage();
      break;
    case `ArrowRight`:
      increaseCurrentPage();
      break;
  }
}, false);

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
  decreaseCurrentPage();
}, false);
document.querySelectorAll(`button.arrows__btn`)[1].addEventListener(`click`, () => {
  increaseCurrentPage();
}, false);
