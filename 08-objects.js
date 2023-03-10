const book = {
  title: "The way of kings",
  publicationYear: 1988,
  author: "Brandon Sanderson",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg",
  pages: 1047,
  genre: "History",
}

// console.log(book.title)
// console.log(book["title"])
// console.log(book["publicationYear"])
// console.log(book[0])
// for (const key in book) {
//   console.log(book[key])
// }

// book.genre = "Comedy"

// console.log(book)

function walk() {
  console.log("walking")
}

// const person0 = ["Michael", "Programmer", "Nigerian"]

function introduce() {
  console.log("introducing")
}

// const person = {
//   name: "Michael",
//   profession: "Programmer",
//   nationality: "Nigerian",
//   introduce: function () {
//     console.log(this.name + " is a " + this.profession)
//   },
//   //   introduce: () => {
//   //     console.log(this.name + " is a " + this.profession)
//   //   },
//   // introduce() {
//   //   console.log(this.name + " is a " + this.profession)
//   // },
//   walk: function () {
//     console.log(`${this.name}, a ${this.profession} is walking`)
//   },
//   //   walk: () => {
//   //     console.log(`${this.name}, a ${this.profession} is walking`)
//   //   },
//   //   walk() {
//   //     console.log(`${this.name}, a ${this.profession} is walking`)
//   //   },
// }

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

const person = {
  name: "Michael Peter",
  profession: "Programmer",
  favoriteBook: {
    name: "The C Programming Language",
    author: "Dennis Rithcie & Ken Thompson",
    pages: 198,
    similarBooks: [book],
    flipPages: function () {
      console.log(this.name)
    },
  },
  introduce: function () {
    console.log(this.name)
  },
  readBook: function () {
    this.favoriteBook.flipPages()
  },
}

// console.log(person.name)
// console.log(person.favoriteBook)
// console.log(person.favoriteBook.title)
// console.log(person.favoriteBook.similarBooks[0].author)
// person.favoriteBook.flipPages()
// person.introduce()
// person.readBook()
// window.console.log()
const car = {
  year: 2022,
  color: "Black",
}

console.log(car)
// console.log(car.color)
car.manufacturer = "Tesla"
car.drive = function () {
  console.log("driving")
}

car.year = 2018
console.log(car)

delete car.year
console.log(car)
