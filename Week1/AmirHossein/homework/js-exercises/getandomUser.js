function xhrMethod() {
const xhr = new XMLHttpRequest();
const url = 'https://www.randomuser.me/api'

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let respons = JSON.parse(xhr.responseText);
        console.log(respons)
    }
}

xhr.onerror = function() {
    if (xhr.status != 200) {
        alert (`Error ${xhr.status}: ${xhr.statusText}`)
    }
}

}


const axios = require('axios');
function axiosMethod() {
    axios
    .get('https://www.randomuser.me/api')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error)
    });
}


axiosMethod();
xhrMethod();