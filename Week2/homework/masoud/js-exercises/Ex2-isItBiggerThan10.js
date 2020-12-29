const checkDoubleDigits = number => {
  return new Promise((resolves, rejects) => {
    if (number >= 10) {
      resolves('The number is bigger than or equal 10!');
    } else {
      rejects(new Error('Error! The number is smaller than 10...'));
    }
  })
};

const number = 10;

checkDoubleDigits(number).then(response => {
  console.log(response);
})
  .catch(error => {
    console.log(error);
  })