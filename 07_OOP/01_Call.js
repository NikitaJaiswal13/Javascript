console.log("hi")

function SetUsername(username) {
    this.username = username
    console.log("Called")
}

function createUser(username , email , password){
        SetUsername.call(this , username)
        this.email = email
        this.password = password
}

const name = new createUser("Nikita Jaiswal" , "nikkijaiswal535@gmail.com" , "MNop1234@")
console.log(name)
