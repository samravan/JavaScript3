const URL = 'https://xkcd.now.sh/?comic=latest';
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

function requestWithXHR(URL){
const xhr = new XMLHttpRequest();
xhr.open('GET', URL, true);
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200 && xhr.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    image1.src = response.img;
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
  axios.get(URL)
  .then(function (response) {
    // handle success
    console.log(response.data);
    image2.src = response.data.img;
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