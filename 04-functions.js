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

const price1 = getSellingPrice(5800, 0.2)
console.log("price 1:", price1)

const price2 = getSellingPrice(79540, 0.4)
console.log("price 2:", price2)

const price3 = getSellingPrice(287000, 0.5)
console.log("price 3:", price3)
