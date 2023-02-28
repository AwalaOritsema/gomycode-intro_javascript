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

function getNumberType(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`)
  } else {
    console.log(`${number} is odd`)
  }
}

getNumberType(10)
getNumberType(5)
getNumberType(78)
getNumberType(11)
