export function addDescriptionToDOM(bodyTable, element) {
  const table = ` 
  <tr>
    <td>Repository</td>
    <td><a href="https://github.com/${element.owner.login}/${element.name}">${element.name}</a></td>
  </tr>
  <tr>
    <td>Description</td>
    <td>${element.description}</td>
   </tr>
   <tr>
    <td>Forks</td>
    <td>${element.forks}</td>
   </tr>
   <tr>
    <td>Updated</td>
    <td>${element.updated_at}</td>
  </tr>`;
  bodyTable.innerHTML = table;
}