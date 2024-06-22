//Singleton 

/*
     Constructer
     Object.create
*/

const mysym = Symbol("key1")

const jsUser = {
    "Full name" : "Nikita Jaiswal",
    age : 18,
    email : "nikkijaiswal535@gmail.com",
    isloggedin : true,
    city : "Pune",
    [mysym] : "Value1"
}

console.log(jsUser);
console.log(jsUser["Full name"]);
console.log(jsUser.age);

//For symbol
console.log(jsUser[mysym]);

// Object element cannot be change
// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log(`Hello Everyone, this is ${this["Full name"]}`)
}

console.log(jsUser.greeting) //This will give ref of function
console.log(jsUser.greeting()) // This will execute the function