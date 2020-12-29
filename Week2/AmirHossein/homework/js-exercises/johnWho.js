const getAnonName = (firstName) => {
    return  new Promise((resolve, reject) => {
        const fullName = `${firstName} Doe`;
        if(firstName) {
        resolve(fullName);
        } else {
        reject(new Error("You didn't pass in a first name!"));
        }
    });
};
    getAnonName('Masood')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })




