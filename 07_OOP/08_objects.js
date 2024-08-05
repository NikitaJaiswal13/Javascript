const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const fruits = {
    name: 'Apple',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(fruits, "name"));

Object.defineProperty(fruits, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(fruits, "name"));

for (let [key, value] of Object.entries(fruits)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}