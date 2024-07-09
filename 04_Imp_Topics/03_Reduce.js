const data = require('./data.json')

const arr1 = [ 11 , 12 , 13 , 14 , 15 ]

const red1 = arr1.reduce( function (acc , curval) {
    return acc + curval  
} , 0)
console.log(red1)

const red2 = arr1.reduce( (acc , curval) => (acc+curval) , 0)
console.log(red2)

// Reduce is usually used when we make e-commerce website

//++++++++++++++++++++++++++++++++++++++++++++++ More Information +++++++++++++++++++++++++++++++++++++++++++++++++++++

// map , filter and reduce are higher-order functions

// Map :- The map function applies a given function to each item of an iterable (e.g., a list) and returns a list of the results. It does not modify the original iterable.

// Filter :- The filter function constructs an iterator from elements of an iterable for which a function returns true. Essentially, it filters out the elements that do not satisfy the condition defined by the function.

// Reduce :- The reduce function applies a rolling computation to sequential pairs of values in a list. It uses a function that takes two arguments and combines them into a single value, and then applies this function cumulatively to the items of the iterable.

