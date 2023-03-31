// declaring/defining a function
function speakName(name) {
  console.log(`Your name is ${name}`)
}

// cost, discount percentage
// selling price
function getSellingPrice(costPrice, discount) {
  const sellingPrice = costPrice - costPrice * discount
  return sellingPrice
}

// const price1 = getSellingPrice(5800, 0.2)
// console.log("price 1:", price1)

// const price2 = getSellingPrice(79540, 0.4)
// console.log("price 2:", price2)

// const price3 = getSellingPrice(287000, 0.5)
// console.log("price 3:", price3)

let addNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber
}

console.log(addNumbers(10, 65))

// vectors => [[1, 2], [3, 4], [5, 6]]
// function dotProduct(v1, v2) {
//   //  calculate dot product of v1 and v2
//   const sum = 0
//   for (const key in v1) {
//     sum += v1[key] * v2[key]
//   }

//   return sum
// }

// algorithm to find orthogonal vectors
// function isOrthogonal(v1, v2) {
//   const sum = dotProduct(v1, v2)

//   if (sum === 0) console.log("is orthogonal")
// }
