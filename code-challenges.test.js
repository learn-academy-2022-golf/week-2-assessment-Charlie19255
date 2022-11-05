// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
      expect(divBy3(object1)).toEqual("15 is divisible by three")
      expect(divBy3(object2)).toEqual("0 is divisible by three")
      expect(divBy3(object3)).toEqual("-7 is not divisible by three")
    })
  })

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

//output: ReferenceError: divBy3 is not defined

// b) Create the function that makes the test pass.

//Create a function called divBy3
  //The parameter will be called object
  //The function will check with an if statement if the object is divisble by 3.
    // use object.number to input the number value into the function
    //if it is then it will return `${object.number} is divisible by three`
    //else it will return `${object.number} is not divisible by three`
//run jest to verify function.

const divBy3 = (object) =>{
    if (object.number% 3 ===0) {
        {return `${object.number} is divisible by three`}
    }
    else
    { return `${object.number} is not divisible by three`}
  }
//output: Jest encountered an unexpected token 
//missing last closing curly brace.

//output: ● divBy3 › takes a object as an argument and decides if the number inside it is evenly divisible by three or not

    // expect(received).toEqual(expected) // deep equality

    // Expected: "15 is divisible by three"
    // Received: "[object Object] is divisible by three"
//missing dot notation and number to put the actual number into the function.

//output: Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capital", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(capital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

//output: ReferenceError: capital is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

//Create a function called capital.
  //The parameter will be called array
  //The function will apply the charAt,toUpperCase, and slice methods to the values in the array
    //Touppercase and charAt will uppercase the first letter
    //the slice method will attach the rest of the array without being capitalized
  //return the array
//run jest to verify function

const capital = (array) =>{
  return array.map(value => {
  return value.charAt(0).toUpperCase()+value.slice(1)
  
})
}
//output: expect(received).toEqual(expected) // deep equality

    // - Expected  - 5
    // + Received  + 5

    //   Array [
    // -   "Streetlamp",
    // -   "Potato",
    // -   "Teeth",
    // -   "Conclusion",
    // -   "Nephew",
    // +   "STREETLAMPtreetlamp",
    // +   "POTATOotato",
    // +   "TEETHeeth",
    // +   "CONCLUSIONonclusion",
    // +   "NEPHEWephew",
    //   ]
//added charAt(0) for uppercase to target first letter only
//output:
Expected: "Temperature"
Received: ["Temperature", "Database", "Chopsticks", "Mango"]
//added brackets in the expected output

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
    
  })
}) 

//output: ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

//create a function called firstVowel
  //the parameter will be string
    //The function will look through the string and will log the index of the first vowel with a for loop
      //The for loop will contain an if statement
        //if string value at index is equal to any of the vowels with the logical OR
          //returns the index of the value
//run jest to verify function

// const firstVowel = (string) => {
//   let array= string.split("")
//   if (array[0] === "a" || "e" || "i" || "o" || "u") {
//     return 0
//   }
//   else if (array[1]=== "a" || "e" || "i" || "o" || "u") {
//     return 1
//   }
//   else if (array[2]=== "a" || "e" || "i" || "o" || "u") {
//     return 2
//   }
// }
// output:expect(received).toEqual(expected) // deep equality

// Expected: 1
// Received: 0

//     Expected: 1
//     Received: 0
// gave up for a different solution of using indexOf built in method to find the first vowel.

// const firstVowel = (string) =>{
//   return string.indexOf("a","e","i","o","u")
// }

//output:TypeError: array.indexof is not a function
//Changed the "o" to "O"
//     Expected: 2
//     Received: 0
//function works if first variable is removed due to "a" being first and finding it before moving on to "e"
//moved on to a for loop way of finding the vowel by going through each one at each index.

const firstVowel = (string) =>{
  for(let i=0; i< string.length; i++){
    if (string[i] === "a" ||string[i] === "e" ||string[i] === "i" ||string[i] === "o" ||string[i] === "u"){
      return i
    }
  }
}
//output: expect(received).toEqual(expected) // deep equality
//     Expected: 1
//     Received: 0
//Had to add string[i] === to every vowel instead of just "a"
//output: Test Suites: 1 passed, 1 total
//Tests:       3 passed, 3 total
