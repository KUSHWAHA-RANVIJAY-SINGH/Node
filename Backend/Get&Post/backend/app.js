// const createUser = (name, age) => {
//     return {
//         name,
//         age,
//         greeting: () => `Hello, my name is ${name} and I'm ${age} years old.`
//     };
// };


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

let p1 = new Person("John", 30);
let p2 = new Person("Jane", 25);
console.log(p1);
console.log(p2);
p1.greet(); // Hello, my name is John and I'm 30 years old.
p2.greet(); // Hello, my name is Jane and I'm 25 years old. 


const multiply = (a, b) => {
    const result = a * b;
    return result;
  };
  console.log(multiply(3, 4));

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}
let s1 = new Student("John", 30);
let s2 = new Student("Jane", 25);
console.log(s1);
console.log(s2);
s1.greet(); // Hello, my name is John and I'm 30 years old.