// function
// object
// loops

const myNumbers = [1, 1, 3, 5, 6, 7, 1, 2, 5, 4, 2, 1]

// 1. Create an empty [frequency] object that should hold the elements of the
// array as keys and the number of times they appear as values
// 2. Loop over all the elements of the array
// 2.1. For each element: check if that element is a key that
// exists in the [frequency] object
// 2.1.1. If element is a key: increment the value of that key by 1
// If element is not a key: create a new property with the element
// as key and 1 as the [initial] value
// 3. Loop over the object
// 4. For each property of the object
// 4.1. If the value of that property is 1, append "time" to that value
//      If the value of that property os greater than 1, append "times"
// 5. Return the object

function numbersFrequency(numbers) {
  // create an empty object frequency
  const frequency = {}

  // loop over all elements of numbers array
  for (const number of numbers) {
    if (Boolean(frequency[number])) {
      frequency[number] += 1
    } else {
      frequency[number] = 1
    }
  }

  //   loop over frequency object
  for (const key in frequency) {
    if (frequency[key] === 1) {
      frequency[key] += " time"
    } else {
      frequency[key] += " times"
    }
  }

  // return the [frequency] object
  return frequency
}

const myName = "" // falsy
const myNumber = 0 // falsy
const otherName = "Michael" // truthy
const otherNumber = 10 // truthy
// console.log(Boolean(myName))
// console.log(Boolean(myNumber))

// console.log(Boolean(undefined))
// console.log(Boolean(null))

const person = {
  name: "Michael",
  nationality: "Nigerian",
}

// person.score = 80
// person.name => "Michael"

console.log(numbersFrequency(myNumbers))
