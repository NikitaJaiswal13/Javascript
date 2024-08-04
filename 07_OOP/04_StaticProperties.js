class teacher{
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

const name =new teacher.logMe("Nikita")
console.log(teacher.createId())
