const username = "Nikita-Jaiswal-13"
const student_Id = 198923
// const anotherusername = "    sakshi    "
const anotherusername = "Sakshi"

console.log(username);
console.log(student_Id);

// console.log(`Hello My Username is ${username} and my Student Id is ${student_Id}`);

// Advance method to declare string
// const myname = new String("Nikita-Jaiswal-13")
// console.log(myname)

// To know all the string method => run advanced method to declare string in console  

// console.log(username.__proto__); => It will give more inforamation about string on console 

// Some types of strings are given below 

console.log(username.length) // Returns the length of the string
console.log(username.charAt(5)) //Returns the character by providing the index
console.log(username.indexOf('a')) //Returns the index by providing the character
console.log(username.substring(0 , 10)) //Returns the character between o to 9
console.log(username.slice(-13 , 8)) //Same like substring but negative value is present in slice 
console.log(anotherusername.trim())//Returns the string by removing extra whitespaces
console.log(username.replace('Jaiswal' , 'xyz'))//returns the same string by replacing the string
console.log(username.includes(13))//returns true if 13 is present in the string
console.log(anotherusername.split(""))//Splits the string by (space)