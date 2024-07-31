
new Promise(function(resolve,reject){
    setTimeout(
        function(){

            let error = true

            if (!error) {
                let data = {
                    username:"NikitaJaiswal05",
                    password: "MNop1234@"
                }

                console.log(`Async Task 4`)
                console.log(data)
                resolve(data)
            }

            else{
            let errormsg ="ERROR : Something went wrong !"
            reject(errormsg)
            }
        } , 1000
    )
})
.then(function(data){
        console.log(`Username = ${data.username}`)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("Inside Finally block")
})