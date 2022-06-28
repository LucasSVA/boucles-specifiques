//  ---- ex 1

// let array = [1, 2, 3, 4, 5]

// let double = array.map((array) => {
//     return array * 2
// })
// console.log(double);


// ---- ex 2

// const longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// let shortName = longNames.map((element) => {



//     console.log(element.firstName);
//     return { name: `${element.firstName} ${element.lastName}` }


// })
// console.log(shortName);


// ---- ex -3

// const array = [1, "toto", 34, "Javascript", 8]

// const numbers = array.filter((number) => {


//     return number > 0

// })
// console.log(numbers);






// ---- ex 4


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let even = numbers.filter((number) => {

//     return number % 2 === 0
// })

// console.log(even);


// ---- ex 5

// const cakes = [
//     {
//         name: "cake",
//         flavor: "vanilla",
//         status: "available"
//     },
//     {
//         name: "brownie",
//         flavor: "chocolate",
//         status: "available"
//     },
//     {
//         name: "pie",
//         flavor: "strawberry",
//         status: "available"
//     },
//     {
//         name: "muffin",
//         flavor: "pistachio",
//         status: "available"
//     },
//     {
//         name: "donut",
//         flavor: "chocolate",
//         status: "available"
//     },
// ]

// const cakesChocilat = cakes.filter((element) => {

//     return element.flavor === "chocolate"
// })


// cakesChocilat.map((element) => {
//     element.status = "sold out"

//     return element
// })


// console.log(cakesChocilat);


// ---- ex 6

// const cakes = [
//     {
//         name: "cake",
//         flavor: "vanilla",
//         status: "available"
//     },
//     {
//         name: "brownie",
//         flavor: "chocolate",
//         status: "available"
//     },
//     {
//         name: "pie",
//         flavor: "strawberry",
//         status: "available"
//     },
//     {
//         name: "muffin",
//         flavor: "pistachio",
//         status: "available"
//     },
//     {
//         name: "donut",
//         flavor: "chocolate",
//         status: "available"
//     },
// ]


// const pie = cakes.find((element) => {


//     return element.name === "pie"

// })

// console.log(pie);


// ---- ex - 7 


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let result = 1

//  array.forEach((element) => {

//  result *= element
   

//  })

// console.log(result);