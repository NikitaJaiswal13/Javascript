const data = require('./data.json')

let coding = [ "C" , "Python" , "C++" , "Web Development"]

let value1 = coding.forEach( (item) => item > 4)
// console.log(value1)

// For each loop does not return any value

// --------------------------------------
//               Filter 
// --------------------------------------

let mynums = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let new_nums = mynums.filter( (item) => item > 3)

new_nums = mynums.filter( (item) => {
    return item > 4
})
console.log(new_nums)

console.log()
console.log(data);

let data1 = data.filter( (item) => {
    return item.age > 10
})
console.log(data1);
