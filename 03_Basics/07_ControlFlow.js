// If - else Condition

let score = 20

if(score < 31){
    console.log("Your score is less than 30")
}
else{
    console.log("Your score is more than 30")
}

// Shorthand for if - else

if(score<31) console.log("Your score is less than 30") ;

// && => both true -> true
// || => Atleast one true -> true

// Switch - case statement

let week = 3

switch (week) {
    case week: 1
        console.log("Monday")
        break;

        case week: 2
        console.log("Tuesday")
        break;

        case week: 3
        console.log("Wednesday")
        break;

        case week: 4
        console.log("Thursday")
        break;

        case week: 5
        console.log("Friday")
        break;

        case week: 6
        console.log("Saturday")
        break;

        case week: 7
        console.log("Sunday")
        break;

    default:
        console.log("Incorrect Input ! ")
        break;
}

// If break statement is not used whole code will be executed

// Truthy and Falsy Value
// Truthy => When we assume the value is true its truthy
// Falsy => When we assume the value is false its Falsy
// Every value which is not falsy is Truthy

/*
{
    Truthy Value 
    (
        "0"
        "false"
        " "
        []
        {}
        function(){}
    )
}

{
    Falsy Value
    (
        false
        0
        -0
        BigInt[0n]
        ""
        null
        undefined
        NaN
    )
}
*/

// To check Empty array 
// array_name.length === 0

// To check Empty object
// Object.keys(Object_name).length === 0

// Nullish Coalescing operator (??)

let val1 = 10??5
let val2 = 10??null
let val3 = undefined??10

console.log(`The value pf val1 is ${val1}`)
console.log(`The value pf val2 is ${val2}`)
console.log(`The value pf val3 is ${val3}`)

// Inshort use to ignore null and undefined

// Terniary Operator

// condition ? true : False 

let val4 = 20
val1>30 ? console.log("More than 21") : console.log("Less than 21")
