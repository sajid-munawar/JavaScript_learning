class User {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(`${this.name} logged in`)
    }
};

const user1 =new User('mario', 'abc@gmail.com');
console.log(user1.hasOwnProperty('name'));
user1.login()