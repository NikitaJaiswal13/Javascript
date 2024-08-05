class user{
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    get username(){
        return `${this._username.toUpperCase()}`
    }

    set username(value){
        this._username = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }


}

const name = new user("Nikita Jaiswal" , "nikkijaiswal535@gmail.com" , "123abc")
console.log(name.email)
console.log(name.username)

// Getters allow you to access a property, and setters allow you to change a property. 

class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        console.error('Name must be a string');
      }
    }
  
    // Getter for age
    get age() {
      return this._age;
    }
  
    // Setter for age
    set age(newAge) {
      if (typeof newAge === 'number' && newAge > 0) {
        this._age = newAge;
      } else {
        console.error('Age must be a positive number');
      }
    }
  }
  
  const person = new Person('John Doe', 30);
  
  console.log(person.name); // John Doe
  console.log(person.age); // 30
  
  person.name = 'Jane Doe';
  person.age = 32;
  
  console.log(person.name); // Jane Doe
  console.log(person.age); // 32
  
  // Trying to set invalid values
  person.name = 123; // Name must be a string
  person.age = -5; // Age must be a positive number
  