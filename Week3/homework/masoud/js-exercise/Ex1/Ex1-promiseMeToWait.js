// Exercise A
async function getData(url) {
  try {
    const number = await fetch(url);
    return await number.json();
  }
  catch (error) {
    console.log('error');
  }
}

getData('https://randomfox.ca/floof/').then(res => {
  console.log(res.image);
})
  .catch(error => {
    console.log('error');
  })


// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {

  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        throw 'Error: Not all items in the array are strings!';
      }
    })
    return capsArray;
  }

  catch (error) {
    return error;
  }
}

makeAllCaps(arrayOfWords).then(res => {
  console.log(res)
});