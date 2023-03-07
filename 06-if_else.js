function getNumberType(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`)
  } else {
    console.log(`${number} is odd`)
  }
}

// getNumberType(10)
// getNumberType(5)
// getNumberType(78)
// getNumberType(11)

// Calculating students' grades
// 70 - 100 -> A
// 60 - 69 -> B
// 50 - 59 -> C
// 40 - 49 -> D
// 0 - 39 -> F

function getGrade(score) {
  //   if (score >= 70) {
  //     console.log("Grade is: A")
  //   } else if (score >= 60) {
  //     console.log("Grade is: B")
  //   } else if (score >= 50) {
  //     console.log("Grade is: C")
  //   } else if (score >= 40) {
  //     console.log("Grade is: D")
  //   } else {
  //     console.log("Grade is: F")
  //   }
  switch (true) {
    case score >= 70:
      console.log("Grade is: A")
      break
    case score >= 60:
      console.log("Grade is: B")
      break
    case score >= 50:
      console.log("Grade is: C")
      break
    case score >= 40:
      console.log("Grade is: D")
      break
    default:
      console.log("Grade is: F")
  }
}

getGrade(91)
getGrade(28)
// getGrade(61)
// getGrade(89)
