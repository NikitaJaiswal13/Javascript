// Ways to declare an Array

const Arr = [0 , 1 , 2 , 3 , 4 , 5 ]
const My_Arr = new Array(0 , 1 , 2 , 3 , 4 ,5)

// Array Methods

const myArr = [0 , 1 , 2 , 3 , 4 , 5]

myArr.push(6) // It will add 6 in the original array
myArr.pop() //It will remove the last element in the array

myArr.unshift(9) //It will add the element at the starting of the array
myArr.shift() // Removes the first element in the array

myArr.includes(5) // Returns true if element is present in the array
myArr.indexOf(3) // Returns the index at which the element is present
myArr.join() // It changes the typeof array to string

console.log(myArr)

//slice and Splice

// The main difference between the slice and splice is that
// slice => does not manipulate the array (Does not changes the array)
// splice => Manipulates the array (Changes the array)

console.log(myArr.slice(1,3))
console.log(myArr)

console.log(My_Arr.splice(1,3))
console.log(myArr)
