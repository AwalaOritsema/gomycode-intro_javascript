// array data structure -> iterable
const numbers = [
  10, 32, 87, 67, 90, 12, 11, 13, 15, 54, 67, 83, 99, 01, 28, 33, 34, 92,
]

// types of loops in JS
// for-loop
// while-loop
// do-while-loop

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log("hello world")
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`${i}th element is ${numbers[i]}`)
// }

// for (const number of numbers) {
//   console.log(`Number is ${number}`)
// }

// for (const index in numbers) {
//   console.log(`Index ${index}`)
// }

const person = {
  firstName: "Michael",
  lastName: "Peter",
  email: "michaelhpet@gmail.com",
}
// person.firstName -> "Michael"
// person["firstName"] -> "Michael"

// for (const key in person) {
//   console.log("Key is", key)
// }

// for (const key in person) {
//   console.log("Value is", person[key])
// }

// let i = 0

// while (i < 5) {
//   console.log(`Hello world ${i} times`)
//   i++
// }

// let email = 'some'
// let password = 1234
// while (email !== realEmail && password !== 3421) {
//    console.log('please enter email and password')
// }

// let i = 10

// while (i < 5) {
//   console.log("hello world")
//   i++
// }

// do {
//   console.log("hello world")
//   i++
// } while (i < 5)

// do {
//   console.log(`Hello world ${i} times`)
//   i = i + 1
// } while (i < 5)

// BREAK and CONTINUE

// for (let i = 1; i < 11; i++) {
//   console.log(i)
//   if (i === 5) {
//     break
//   }
// }

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 1) {
//     continue
//   }
//   console.log(i)
// }

// const customers = [
//   { name: "Michael", subscribed: false },
//   { name: "Nathanael", subscribed: true },
//   { name: "Awala", subscribed: true },
//   { name: "Sheriff", subscribed: false },
//   { name: "Anthonia", subscribed: false },
// ]

// for (let i = 0; i < customers.length; i++) {
//   if (customers[i].subscribed === false) {
//     continue // skip/jump
//   }
//   console.log(customers[i])
// }
// for (const customer of customers) {
//   if (customer.subscribed === false) {
//     continue
//   }
//   console.log(customer)
// }
