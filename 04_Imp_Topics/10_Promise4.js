


let promise2 = new Promise(function(resolve,reject){
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

async function consumePromise() {

    try {
        let response = await promise2
        console.log(response.username);
    } catch (error) {
        console.log(error);    
    } finally {
        console.log(`Inside finally block!`);
    }
}

consumePromise()