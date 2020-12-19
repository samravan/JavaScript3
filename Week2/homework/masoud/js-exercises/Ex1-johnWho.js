const getAnonName = firstName => {
  return new Promise((resolves, rejects) => {
    if (firstName) {
      resolves(`${firstName} S`);
    } else {
      rejects(new Error("You didn't pass in a first name!"));
    }
  })
};

const firstName = 'Mas';
getAnonName(firstName).then(response => {
  console.log(response);
})
  .catch(error => {
    console.log(error);
  })