const showScreen = (screen) => {
  const mainElement = document.querySelector(`main.central`);
  mainElement.innerHTML = screen.innerHTML;
};

export default showScreen;
