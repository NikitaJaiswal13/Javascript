//++++++++++++++++++++++++++++++++++++++++++++ Numbers in Javascript +++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("Hello Everyone")

const number = 93.654
const score = 93
const money = 1000000000
console.log(score)
console.log(typeof score)


//By using advance method console will print that the variable is number
const new_score = new Number(93)  //Advance Method
console.log(new_score)


//Like the strings for more information on number and Maths run console.log(new_score.__proto)

//Some example of Numbers are given below

console.log(score.toString())//Returns the number in string form so that the strin method can be applied to a number
console.log(score.toFixed(3))//returns 93.000
console.log(number.toPrecision(3)) // Returns the number by rounding off
console.log(money.toLocaleString('en-IN')) //Returns the same number with commas

//+++++++++++++++++++++++++++++++++++++++++++++++ Maths in Javascript ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//JavaScript provides a built-in Math object which contains properties and methods for mathematical constants and functions.

console.log(Math.abs(-13)) // Returns negactive value by converting it to positive
console.log(Math.round(4.67))//Returns the number by rounding off as an integer without decimal
console.log(Math.ceil(9.4))//Chooses the top value
console.log(Math.floor(9.6))//choose the lower value 
console.log(Math.sqrt(55)) //Returns the square root
console.log(Math.min(1,4,7))//Returns the min value
console.log(Math.max(4,6,2))//returns the max value

console.log(Math.random())//returns random number between 0 to 1
console.log((Math.random()*10) + 1) //returns random number between 0 to 1 by multiplying it to 10 and 1 is added to avoid zero

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min) // it will give random number between 10 to 20