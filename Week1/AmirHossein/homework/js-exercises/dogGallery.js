const XMLBtn = document.getElementById('btn1');
const AxiosBtn = document.getElementById('btn2');

function xhrMethod() {
    const xhr = new XMLHttpRequest();
    const li = document.createElement('li');
    const image = document.createElement('img');
    const ul = document.getElementById('list');
    const url = 'https://dog.ceo/api/breeds/image/random'
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = processRequest;

    ul.appendChild(li.appendChild(image))

    function processRequest(e) {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            image.src = response.message;
            image.style.width = '300px'
            image.style.height = '300px'
            image.style.margin = '5px'

        };
    };
    xhr.onerror = function() {
        if (xhr.status != 200) {
            alert (`Error ${xhr.status}: ${xhr.statusText}`);
        };
    };

    };

XMLBtn.addEventListener('click', xhrMethod);



function axiosMethod() {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const ul = document.getElementById('list');
    ul.appendChild(li.appendChild(image))
    axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {

        image.src = response.data.message;
        image.style.width = '300px'
        image.style.height = '300px'
        image.style.margin = '5px'

    })
    .catch(function(error) {
        console.log(error)
    });
}


AxiosBtn.addEventListener('click', axiosMethod);
