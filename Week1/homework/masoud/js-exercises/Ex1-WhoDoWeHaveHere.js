const URL = 'https://www.randomuser.me/api';

function requestWithXHR(URL){
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
xhr.open('GET', URL, true);
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200 && xhr.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    const response = JSON.parse(xhr.responseText);
    console.log(response.results[0].gender);
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
  console.log("Request failed");
};
};

function requestWithAxios(URL){
  const axios = require('axios').default;
  axios.get(URL)
  .then(function (response) {
    // handle success
    console.log(response.data.results[0].gender);
  })
  .catch(function (error) {
    // handle error
    console.log("Request failed");
  })
  .then(function () {
    // always executed
  });

};

requestWithXHR(URL);
requestWithAxios(URL);