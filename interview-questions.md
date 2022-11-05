# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder for the argument. The argument is the data used to pass in. For an example, I could write a function called const add5=(value)=> {value+5}. The function is called add5 and the parameter is value. The parameter is what makes the function dynamic allowing me to add different arguments. If I invoked the function like this, console.log(add5(5)). The result would be 10. It would change if I used different arguments resulting in different outcomes. Such as 10, 3, or 20. Invoking the function with said inputs would result in an output of 15, 8, and 25.

Researched answer: A parameter is a variable named by the coder as a place holder in the function to pass in arguments. The argument passes in the value data that it contains in order for the function to produce a result.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The built in method .map() takes in the predefined parameter of an array. If said parameter was not inserted then a type error would result. This is because the .map method can only take arrays. The arrays can however take in all six primitive data types. Which are null, undefined, boolean, numbers, strings, and symbol. How the .map filter operates using said datatypes is a different story depending on how the code is written using the method.

Researched answer: The map method takes in the predefined parameters of an element, an index, and an array. None of the parameters are required however for the map method to work at least one of the parameters must be present.

3. What is the difference between map and filter?

Your answer: The map method takes in an array and gives out an array of equal length. It works by doing what the code tells it to, to every value in the array. The filter method looks into the array and takes out what the code wants resulting in a smaller in length array. For an example, const function=(array)=> {array.map(value)=>{ `${value} does something`}} versus const function=(array)=> {array.filter(typeof value === "string")=>{return value}}. The map method will allow each value in the array to have the same string as `${value} does something` with the value inserted for value in the array, while the filter method will only have string values in the array.

Researched answer:Both map and filter methods create a new array and do not change the original array. The map method performs the function once to every value in the array. The filter method only allows the values that pass its criteria to move into the new array.

4. What is iteration?

Your answer: Iteration is the repeat of a series of event until a specific outcome is achieved. For an example, we could run a for loop for the argument of Mississippi. What we want is the amount of times the letter "s" appears because who wants to count that out? We would be able to count it out with the for loop to loop through each letter in the word "Mississpi" through the index starting at 0 or M and ending at 10 or i. It would result in us finding the amount of "s's" in the word which is 4.

Researched answer: A way to run a block of code until a certain condition is met. It can be refered to as looping as well. Other loops include the while, do while, for, for in, break and continue. They each have their own use in the iteration process.

5. What is the difference between a class and an object?

Your answer: A class is a variable that is able to be used to declare the blueprints for an object. An can be a result of a class or be a variable that has functions, strings, symbols, and numbers contained within. For an example, we could make a class to define what makes a user profile online. Once the neccessary information is inputted, the result of the class is a new object with identifying properties as all people online are different.

Researched answer: Classes are able to define how an object is made. They contain what pertains to what can be and what is the object. An object is something that has its own properties, values, and functions. The properties, values, and functions are created through name value pairs in the body of the object.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in Javascript is the act of pulling the code through a full loop of maintenace. This is done by having a critical error in the system and having to make a copy of the code in another file to troubleshoot to address the issue while still having it run.

Researched answer: I apologize for the previous answer. Hoisting is the act of allowing a variable to be pertaining to the function by bringing it up the block of code to be declared as the appropriate name. It is so the variable can be properly referenced and not result in an undefined.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: Stories from a first person point of view stating what should and shouldn't go into coding in order to achieve a specific purpose.

2. Spread operator:Applicable to strings and arrays where there are many values to type in a function as a way to short hand represented by (...).

3. React: A collection of code from Javascript utilized to make custom and creative UI's.

4. React props: Another name for parameter utilized in React for functions as the placeholder for arguments.

5. DOM events: A scenario to occur before a function or series of functions take place resulting from the scenario happening.
