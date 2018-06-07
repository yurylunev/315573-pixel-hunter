const getElementFromTemplate = (template) => {
  const parser = new DOMParser();
  const element = parser.parseFromString(template, `text/html`);
  return element.body;
};

export default getElementFromTemplate;
