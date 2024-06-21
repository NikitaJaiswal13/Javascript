let mydate = new Date()

console.log(typeof mydate)
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())

// let mycreated_date = new Date(2030 , 0 , 21)
// let mycreated_date = new Date(2030, 0 , 21 , 12 ,19)
// let mycreated_date = new Date("2023-01-14")
let mycreated_date = new Date("01-14-2023")


console.log(mycreated_date.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreated_date.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());