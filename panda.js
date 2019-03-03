class Panda {
    constructor(name){
        this.name = name
    }
    logName(){
        console.log(`Greetings ${this.name}`)
    }
}

let user = new Panda("John")

user.logName()