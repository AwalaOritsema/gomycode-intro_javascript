// A running sum:

// Given an array of numbers, create a function that
// computes the sum of all the numbers in that array

const myNumbers = [
  12,
  32,
  45,
  54,
  11,
  "hello",
  34,
  78,
  906,
  1203,
  0,
  87,
  1003,
  "there",
  54,
  89,
  88,
  11,
  78,
  91,
  98,
  346,
  34,
  44,
  56,
  69,
  60,
  31,
  32,
  54,
  10,
  92,
  44,
  31,
  53,
  76,
  77,
  80,
  1,
]

// function
// loop
// arithmetic (+)

function sum(numbers) {
  // check data type of parameter/argument
  if (Array.isArray(numbers) === false) {
    throw new Error("Please use an array data type")
  }

  // initialize the totalSum to zero
  let totalSum = 0

  // loop over all the numbers in the array input
  // for (let i = 0; i < numbers.length; i++) {
  //   // add the current number (each number) to totalSum
  //   // totalSum = totalSum + numbers[i]
  //   totalSum += numbers[i]
  // }

  // let i = 0
  // while (i < numbers.length) {
  //   totalSum += numbers[i]
  //   // i = i + 1
  //   // i += 1
  //   i++
  // }

  for (const number of numbers) {
    // first check is number is really number
    if (typeof number !== "number") {
      continue // skip/jump
    }

    totalSum += number
  }

  // you can log the totalSum to the console
  // console.log(totalSum)

  // return the totalSum
  return totalSum
}

// const result = sum(myNumbers)
// console.log(result)
// console.log(sum(myNumbers))

console.log(sum(myNumbers))
// console.log(typeof 54)
