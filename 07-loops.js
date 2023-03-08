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
// person.firstName
// person["firstName"]

for (const key in person) {
  console.log("Key is", key)
}

for (const key in person) {
  console.log("Value is", person[key])
}
