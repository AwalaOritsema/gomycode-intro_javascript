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

// window.addEventListener("load", () => {
//   function whenClicked() {
//     console.log("heyy someone clicked the h1 now");
//   }

//   const h1 = document.querySelector("h1");
//   h1.addEventListener("click", whenClicked);
// });

// function whenClicked() {
//   console.log("heyy someone clicked the h1 now");
// }

// const h1 = document.querySelector("h1");
// h1.addEventListener("click", whenClicked);

// const h1 = document.querySelector() -> selects a single element
// const h1 = document.querySelectorAll() -> selects multiple elements

const h1 = document.querySelector("h1");
// console.log(h1)
h1.innerText = "Hello World";
// console.log(h1.classList)
// h1.classList.add("extra-class")

// h1.addEventListener('mouseover', (event) => {
//   const h1 = event.target
//   h1.classList.add("extra-class")
// })

// h1.addEventListener("mouseleave", (event) => {
//   const h1 = event.target
//   h1.classList.remove("extra-class")
// })

const fruitsUl = document.querySelector("ul");
const inputField = document.querySelector("input");
const button = document.querySelector("button");

// button.addEventListener('click', (event) => {
//   console.log('hello world')
// })

// button.onclick = (event) => {
//   //
//   const text = inputField.value
//   const newLi = document.createElement('li')
//   newLi.innerHTML = text
// }

button.onclick = function (event) {
  // get the text input that was collected in inputField
  const text = inputField.value;

  if (Boolean(text) === true) {
    // create a new "li" element
    const newLi = document.createElement("li");

    // add the input text inside the new li element
    newLi.innerText = text;

    // add the li to the fruitsUl list
    fruitsUl.appendChild(newLi);

    // clear the input field
    inputField.value = "";
  }
};

// const person = {
//   name: "Michael",
// };

// person.lastName = "Peter";
