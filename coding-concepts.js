// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
//console.log(cohort.split(""))

// a) Your answer: not a function
// b) Verify and explain: This is because the .split built in method is able to convert a string into an array. The reason the letters are spaced out is because of the quotation marks added into the parentheses of the split function. It is used to separate each character individually.
//output :'G', 'o', 'l',
//        'f', ' ', '2',
//        '0', '2', '2'
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student
// b) Verify and explain: This is because the function greeter does not have a return statement. The resulting undefined is because the function does not give a proper response when invoked.
//output: undefined
// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer:[8,10,12,14,16]
// b) Verify and explain: This is because the function is on the same line as the return not requiring the return statement. Also the array is passed for the numbers in the array to be mulitiplied each by the number 2 as indicated by the parameter number.
//output: [ 8, 10, 12, 14, 16 ]
// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: This is because the function looks for numbers that are not divisible by two leaving the odd numbers in the array. This is done by the filter method and the modelo 2 and bang operator with loose equality.
//output: [ 11, 13, 15 ]
// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:"Javascript"
// b) Verify and explain: This is because myCodingSkills is an object. Utilizing dot notation we are able to access within the object to languages. We are then able to access Javascript utilizing the index [0] reaching the first value in the array of languages.
//output: JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:name George,cohort Foxtrot,year 2022
// b) Verify and explain:This is because of the new object made utilizing the new keyword and the Learn keyword with the variable learnStudent. Creating the George name along with the following values indicated by the class Learn. Which are cohort, Foxtrot and year, 2022.
//output: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
