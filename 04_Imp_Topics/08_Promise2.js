new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async Task 2`)
        data ={ 
            name:"NikitaJaiswal05" , 
            password: "MNop1234@"
        }
        resolve(data)
    },1000)
})
.then(function(){
    console.log(`Promise 3 Consumed`)
    console.log(data)
})

//We can pass function , objects i.e parameters is resolve
//To avoid scenario of hell call back we use chain of then()