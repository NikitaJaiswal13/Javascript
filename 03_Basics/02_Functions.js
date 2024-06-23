// (...) rest and spread operator

function mycart(...num) {
    console.log(...num)
    return 
}

mycart(10,20,30,40)

//rest operator => can be used to print unknown number of parameter

// Objects in function

function MyObject(obj){
    console.log(`Username is ${obj.username} and the age is ${obj.age}`)
    return
}

MyObject({
    username: "nikita",
    age: 18
})

// Array in function

function handleArray(arr) {
    console.log(`Array is ${arr}`)
    console.log(arr[3])
}

handleArray([1, 2, 3, 4, 5])
