const number = document.getElementById('number');
const fact = document.getElementById('fact');

number.addEventListener('input', addText);

function addText(){
    const num = number.value;
    const URL = `http://numbersapi.com/${num}`;
   
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.send();
  
    // 4. This will be called after the response is received
    xhr.onload = function() {
      if (xhr.status != 200 && xhr.status != 200) {
        // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        let response = xhr.responseText;
        fact.style.display = 'block';
        fact.textContent = response;
      }
    };
  
    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
      }
    };
  
    xhr.onerror = function() {
      console.log('Request failed');
    };
  
 
}