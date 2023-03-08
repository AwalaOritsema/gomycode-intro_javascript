// const book = {
//   title: "The way of kings",
//   publicationYear: 1988,
//   author: "Brandon Sanderson",
//   coverImage: "https://google.com/photo.png",
//   pages: 1047,
//   genre: "History",
// }
// book.genre = "Comedy"

// console.log(book)

// function walk() {
//   console.log("walking")
// }

// const person0 = ["Michael", "Programmer", "Nigerian"]

const person = {
  name: "Michael",
  profession: "Programmer",
  nationality: "Nigerian",
  introduce: function () {
    console.log(this.name + " is a " + this.profession)
  },
  //   introduce: () => {
  //     console.log(this.name + " is a " + this.profession)
  //   },
  //   introduce() {
  //     console.log(this.name + " is a " + this.profession)
  //   },
  walk: function () {
    console.log(`${this.name}, a ${this.profession} is walking`)
  },
  //   walk: () => {
  //     console.log(`${this.name}, a ${this.profession} is walking`)
  //   },
  //   walk() {
  //     console.log(`${this.name}, a ${this.profession} is walking`)
  //   },
}

// person.profession
// person["profession"]

// DEFINING FUNCTIONS
// function myFunction() {
//   console.log("hello world")
// }

// const myFunction01 = function () {
//   console.log("hello world from 01")
// }

// // arrow function
// const myFunction02 = () => {
//   console.log("hello world from 02")
// }

// person.introduce()
// person.walk()
