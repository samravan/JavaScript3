const getAnonName = (firstName) => {
    return  new Promise((resolve, reject) => {
        const fullName = `${firstName} Doe`
        resolve(fullName)
        console.log(fullName)



        reject(new Error("You didn't pass in a first name!"))

    })


};

getAnonName()