for (let i = 0; i < 20; i++) {
    if (i === 13) {
        console.log("13 Detected")
        break
    }
   console.log(`The value of i is ${i}`)

}

for (let i = 0; i < 20; i++) {
    if (i === 13) {
        console.log("13 Detected")
        continue
    }
   console.log(`The value of i is ${i}`)

}