class mamals{
    constructor(name){
        this.name=name;
        this.sound = '';
        console.log('mamals constructor');
    }
    eat(){
        console.log('it eats');
    }
}

class dog extends mamals{
    constructor(name,sound,age){
        super(name);
        this.sound=sound;
        this.age=age;
        console.log('dog constructor');
    }
    bark(){
        console.log('it barks');
    }
}

class cat extends mamals {
    constructor(name,sound,age){
        super(name);
        this.sound=sound;
        this.age=age;
        console.log('cat constructor');
    }
    meow(){
        console.log('it meows');
    }
}

const dog1 = new dog('dog','bark',5);
const cat1 = new cat('cat','meow',3);