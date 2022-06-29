//  ---- ex 1

// const array = [1, 2, 3, 4, 5]

// const double = array.map((array) => {
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

// const shortName = longNames.map((element) => {



//     console.log(element.firstName);
//     return { name: `${element.firstName} ${element.lastName}` }


// })
// console.log(shortName);


// ---- ex -3

//const elements = [1, "toto", 34, "Javascript", 8]



// const numbers = elements.filter((element) => {


//     return typeof element === "number"

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

// const cakesChocolate = cakes.filter((element) => {

//     return element.flavor === "chocolate"
// })


// cakesChocolate.map((element) => {
//     element.status = "sold out"

//     return element
// })


// console.log(cakesChocolate);


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



 
// ----- ex 8    je l'ai teminé avec "correction"


//const length = [1,2,3,4,5,6,7,8]



// length.forEach((line, i) => {
//     let stringLine = ""

//     length.forEach((square, j )=>{
//       if ((i + j) % 2 === 0) {
//         stringLine = stringLine + "[ ]"
        
//       }else{
//         stringLine = stringLine + "[X]"
//       }
//     })
//     console.log(stringLine);
// });












