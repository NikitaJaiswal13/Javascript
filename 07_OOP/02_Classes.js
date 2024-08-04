// class user{
//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     NewUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const name = new user("Nikita Jaiswal" , "nikkijaiswal535@gmail.com" , "123")
// console.log(name.NewUsername())
// console.log(name.encryptpassword())

// Behind the scene

function user(username , email , password){
         this.username = username
         this.email = email
         this.password = password
}

user.prototype.encryptpassword = function(){
             return `${this.password}abc`
}

user.prototype.NewUsername = function(){
   return `${this.username.toUpperCase()}`
}

const yourname = new user("Nikita Jaiswal" , "nikkijaiswal535@gmail.com" , "123")
console.log(yourname.encryptpassword())
console.log(yourname.NewUsername())