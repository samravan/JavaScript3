

function xhrMethod() {
    const xhr = new XMLHttpRequest();
    const url = 'https://xkcd.now.sh/?comic=latest'
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            document.getElementsByTagName('img').src = response.img;
            console.log(response);
        };
    };
    xhr.onerror = function() {
        if (xhr.status != 200) {
            alert (`Error ${xhr.status}: ${xhr.statusText}`);
        };
    };
    };

    xhrMethod();





function axiosMethod() {
    axios
    .get('https://xkcd.now.sh/?comic=latest')
    .then(function(response) {
        console.log(response.data);
        document.getElementsByTagName('img').src = response.data.img;
    })
    .catch(function(error) {
        console.log(error)
    });
}


axiosMethod();
