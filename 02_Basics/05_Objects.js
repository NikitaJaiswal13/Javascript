let user = {
    course_name : "Javascript",
    price : 1999 , 
    course_instructer : "Nikita"
}

// console.log(user)

//Object destructure => This syntax allows you to pull values directly from an object and bind them to variables using a concise and readable form

//In this case we do not need to use user.course_name we can directly use course_name

let {course_name} = user 
console.log(course_name) 

// My Github API
// https://api.github.com/users/NikitaJaiswal13
