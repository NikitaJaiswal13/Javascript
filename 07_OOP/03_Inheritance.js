class student{
    constructor(username){
        this.username= username
    }

    logMe() {
        return `${this.username} has logged in`
    }
}

class teacher extends student{
    constructor(username , email , password){
        super(username)
        this.password = password
        this.email = email
    }

    AddCourse(){
        return `A new course has been added by ${this.username}`
    }
}

const user = new teacher("Nikita Jaiswal" , "nikkijaiswal535@gmail.com" , "123")
console.log(user.AddCourse())
console.log(user.logMe())