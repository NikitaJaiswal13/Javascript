// Singleton object
// let user = new Object()

let user = {
    FullName : {
        FirstName : "Nikita",
        LastName : "Jaiswal",
    },
    email : "nikkijaiswal535@gmail.com",
    IsLoggedIn : true,
    Id : 123,
    City : "Pune"
}

console.log(user)
console.log(user.FullName?.FirstName)
console.log(user.FullName?.MiddleName)
console.log(user.FullName?.LastName)

let obj1 = {
    1 : "a",
    2 : "b"
}

console.log(obj1)

let obj2 = {
    3 : "c",
    4 : "d"
}

console.log(obj2)

console.log(Object.assign({} , obj1 , obj2)) //{} is the target

// let obj3 = {...obj1 , ...obj2}
// console.log(obj3)

// Object Methods

console.log("\n\n\n")
console.log(Object.keys(user)) //It makes array of all keys
console.log(Object.values(user)) // It makes array of all values
console.log(Object.entries(user)) //It makes array of key and value pair
console.log(user.hasOwnProperty("City")) // It checks whether City is present in user object or not