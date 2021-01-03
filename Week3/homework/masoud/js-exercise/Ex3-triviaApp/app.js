window.onload = main;

function main() {
  const url = 'https://opentdb.com/api.php?amount=5';
  fetchData(url).then(response => {
    AddToDOM(response);
  })
    .catch(error => { console.log(error) });
};

function AddToDOM(Data) {
  const trivia = Data.results;
  const questions = document.querySelector('.questions');
  const div = document.createElement('div');
  const answers = document.getElementsByClassName('answer');

  trivia.forEach(array => {
    const question = document.createElement('p');
    const answer = document.createElement('p');

    question.textContent = decodeHTML(array.question);
    question.classList.add('question');
    answer.textContent = decodeHTML(array.correct_answer);
    answer.style.display = 'none';
    answer.classList.add('answer');

    div.appendChild(question);
    div.appendChild(answer);
    questions.appendChild(div);

    close();
    function open() {
      answer.style.display = 'block';
      question.removeEventListener('click', open);
      question.addEventListener('click', close);
    };
    function close() {
      answer.style.display = 'none';
      question.removeEventListener('click', close);
      question.addEventListener('click', open);
    };

    document.addEventListener('click', function (event) {
      const isClickInsideElement = div.contains(event.target);
      if (!isClickInsideElement) {
        Array.from(answers).forEach(element => {
          element.style.display = 'none';
          close();
        });
      };
    });
  });
};

function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

async function fetchData(url) {
  const Data = await fetch(url);
  return await Data.json();
};