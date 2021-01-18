export function addListToDOM(data, selectElement) {
  data.forEach(element => {
    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = element.name;
    selectElement.appendChild(option);
  });
};