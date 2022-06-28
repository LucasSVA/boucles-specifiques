//  ---- ex 1

// let array = [1, 2, 3, 4, 5]

// let double = array.map((array) => {
//     return array * 2
// })
// console.log(double);


// ---- ex 2

const longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

let shortName = longNames.map((element) => {



    console.log(element.firstName);
    return { name: `${element.firstName} ${element.lastName}` }


})
console.log(shortName);
