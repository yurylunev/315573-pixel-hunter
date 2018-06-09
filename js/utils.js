const showScreen = (screen) => {
  const mainElement = document.querySelector(`#main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

const getElementFromTemplate = (template) => {
  const parser = new DOMParser();
  const element = parser.parseFromString(template, `text/html`);
  return element.body.children[0];
};

export {showScreen, getElementFromTemplate};
