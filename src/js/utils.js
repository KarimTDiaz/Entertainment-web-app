const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const createElement = (
  element,
  className,
  className2,
  typeContent,
  dataset
) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className, className2);
  newElement.dataset.item = dataset;
  if (element !== 'img') {
    newElement.textContent = typeContent;
  } else {
    newElement.src = typeContent;
  }
  return newElement;
};

export { fetchData, createElement };
