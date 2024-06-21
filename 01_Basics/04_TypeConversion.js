// String to number 

let score = '33abc'

let new_score = Number(score)

console.log(typeof new_score)
console.log(typeof score)
console.log(new_score)

console.table([typeof score,score , typeof new_score , new_score])

/*

'33' => 33
'33abs' => NaN
true => 1 
false => 0

*/

// Number to String

let year = 2024

let year1 = String(year)
let year2 = year.toString()     // year is primitive datatype then how there is method toString(), because Javascript creates temporary wrapper class

console.table([typeof year, typeof year1, typeof year2])


// Number to Boolean

let num = 1

let num1 = Boolean(num)

console.table([typeof num, typeof num1])