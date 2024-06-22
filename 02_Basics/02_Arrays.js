let arr1 = [ 1, 3 , 5];
let arr2 = [ 2 , 4 , 6];

// arr1.push(arr2) //creates arr2 in arr1 it consider array 2 as a whole another array
// console.log(arr1)

let arr3 = arr1.concat(arr2); //continue array 2 in array 1
console.log(arr3);

// concat creates a new arrat , push work on existing array

let arr4 = [...arr1 , ...arr2 , ...arr3];
console.log(arr4); // more preferable than concat

let a = [1 , 2 , 3 ,[ 4 , 5 , 6 ] , 7 ,[8 , 9, 0 ,[ 10 , 11 , [12 , 13]]]]
console.log(a.flat(Infinity)) //Creates a single array

// The Array.isArray method checks if the passed argument is an array. It returns true if the argument is an array, and false otherwise.

// The Array.from method creates a new array instance from an array-like or iterable object. When applied to a string, it converts the string into an array of characters.

// The Array.of method creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments.

console.log(Array.isArray("Nikita Jaiswal"))
console.log(Array.from("Nikita"))
console.log(Array.of(1 ,2 , 3))