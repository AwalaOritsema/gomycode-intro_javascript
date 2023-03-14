// Document Object Model
// const dom = {
//   html: {
//     head: {
//       meta: "bla",
//       meta: "bla",
//       meta: "bla",
//       link: "bla",
//       script: "bla",
//     },
//     body: {
//       h1: "lorem",
//       p: "lorem",
//       ul: {
//         li1: "bla",
//         li2: "bla",
//         li3: "bla",
//         li4: "bla",
//         li5: "bla",
//       },
//     },
//   },
// }

// get all the elements that are h1
// document.getElementsByTagName("h1")

// get all elements with class "text"
// document.getElementsByClassName("text")

// get a single element by its id attribute
// document.getElementById("lorem")

// get a single element using css selectors
// document.querySelector(".text")
// document.querySelector("h1")
// document.querySelector("ul li:first-child")

// get multiple elements using css selectors
// document.querySelectorAll(".text")
// document.querySelectorAll("h1")
// document.querySelectorAll("ul li:first-child")

function whenClicked() {
  console.log("heyy someone clicked the h1 now")
}

const h1 = document.querySelector("h1")
h1.addEventListener("click", whenClicked)
