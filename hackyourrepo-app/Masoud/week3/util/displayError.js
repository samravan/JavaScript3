export function displayError(error) {
  const errElement = document.createElement('h3');
  errElement.style.backgroundColor = 'orange';
  errElement.style.color = 'white';
  errElement.style.display = 'block';
  errElement.style.padding = '10px';
  errElement.style.position = 'fixed';
  errElement.style.top = '50%';
  errElement.style.left = '50%';
  errElement.style.transform = 'translate(-50%,-50%)'
  errElement.innerHTML = `
  network request failed
  <br>
  ${error}`;
  document.body.appendChild(errElement);
}