class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username} has loggrd in`)
    }

    static createId(){
        return `1223`
    }
}

const name =new User("Nikita")
console.log(name)
