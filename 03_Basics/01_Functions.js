function my_name(){
    console.log("My name is Nikita Jaiswal")
}

function addTwonumber(number1 , number2){
    return number1 + number2
}

let result = addTwonumber(4 , 5)
console.log(result)

// my_name // This is just refernce of the function 
my_name() 

// While function definition => Parameter
// While function call => Arguments
// If not passed any argument , then the value is undefined 

function loggedIn(username = "NJ") {

    if(username)
        console.log(`${username} logged in successfully !`)

    else    
        console.log('Error while getting username !')

    return
}

loggedIn()
loggedIn("Nikita")

