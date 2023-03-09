// let orange1 = 50
// let orange2 = 45
// let orange3 = 55
// let orange4 = 80
// let orange5 = 35

function sum(arrayToSum) {
  const result = arrayToSum.reduce((a, b) => a + b, 0)
  return result
}

// const totalPrice = orange1 + orange2 + orange3 + orange4 + orange5
const oranges = [50, 45, 55, 80, 35, 100, 189, 97, 11, 0, 11, 42, 79]
const totalPrice = sum(oranges)

const thirdOrange = oranges[2]
const eighthOrange = oranges[8]

// console.log("total price of oranges:", totalPrice)
// console.log("third orange price is", thirdOrange)
// console.log("eighth orange price is", eighthOrange)

// function printArray(arrayToPrint) {
//   for (const element of arrayToPrint) {
//     console.log(element)
//   }
// }

// const days = ["Sunday", "Monday", "Tuesday"]
// const months = ["Jan", "Feb", "Mar", "Apr"]

// days.push("Wednesday", "Thursday", "Friday", "Saturday")
// printArray(days)

// console.log("=====================================")

// const daysWithMonths = days.concat(months)
// printArray(daysWithMonths)

// array => object
// console.log(days.length)

const days = ["Monday", "Tuesday", "Wednesday", "Thursday"]
days.push("Friday")
days.push("Saturday")
// console.log(days)

// days.push("Sunday")
// console.log(days)
days.push("Sunday")
// console.log(days)

// ADDING ELEMENTS TO AN ARRAY
//  -> push - add to the end of the array
//  -> unshift - add to the beginning of the array

// REMOVING ELEMENTS FROM AN ARRAY
//  -> pop - remove the last element of the array
//  -> shift - remove the first element of the array

// ADD and REMOVE
//  -> splice - remove/add/replace elements at any index of an array

// days.pop()
// console.log(days)

// days.shift()
// console.log(days)

// ACCESSING ELEMENTS OF AN ARRAY
// console.log(days.at(2))

const scores = [89, 56, 39, 48, 84, 72]
// console.log(scores)

// scores.splice(1, 0, 14)
// console.log(scores)
// scores.splice(5, 1)
// console.log(scores)
// scores.pop()
// scores.splice(0, 2)
// console.log(scores)
// scores.splice(0, 2, 45, 10, 100, 87, 02, 32)
// console.log(scores)
