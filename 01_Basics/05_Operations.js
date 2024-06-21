// Arithmetic Operators

/* 
a+b
a-b
a*b
a**b  (a power of b)
a/b
a%b
++a/a--
++b/b--

prefix => returns value after increment
postfix => returns value before increment
*/

// Relational Operators

/* 
a == b / a != b     // Loose checking -> only value
a === b / a !== b     // Strict checking -> value and datatype both
>
>=
<
<=
?       // Ternary operator
condition ? ifTrue : ifFalse
*/

// Logical Operators

// &&
// ||
// !


// Assignment Operators

// =
// +=
// -=
// *=
// /=
// %=
// **=


// Bitwise Operators

// &
// |
// ~

console.log("1" + 2 + 3) 
console.log(1+2+'3')

// Equality operators (== and ===) and Comparision operators (>, >=, <, <=) work differently
// Comparison converts null to a number
console.log(null == 0);     // Because, null is no value but 0 is some value
console.log(null >= 0);     // >= converts null to number as 0     
console.log(null > 0);      // > converts null to number as 0