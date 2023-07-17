"use strict";
//string, boolean, number, ...
let x = 10;
x = 12;
console.log(x);
// inferencia x annotation
//Tipado com inferencia, ele declara e a variavel ja fica
//tipada de acordo com o valor que for passado.
let y = 12;
//y = 'teste' - vai dar erro
//Tipado com annotation, e a mesma coisa de cima, mas aqui
//deixamos mais claro declarando a tipagem que queremos.
let z = 12;
//z = 'teste' - vai dar erro
// Tipos básicos
let firstName = 'Matheus';
let age = 30;
const isAdmin = true;
// Object
let myNumbers = [1, 2, 3];
console.log(myNumbers);
// Tuplas -> tuple
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
//myTuple = [true, false, true] - vai dar erro, pois pede number, string, string[]
//object literals -> {prop: value}
const user = {
    name: 'luis',
    age: 18
};
console.log(user.name);
// any
let a = 0;
a = 'teste';
a = true;
a = [];
// union type
let id = '10';
id = 200;
const userId = 10;
const productId = 'teste';
// enum
//tamanho de roupas (size: Médio, size: Pequeno])
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "medio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: 'camisa gola v',
    size: Size.G
};
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
//console.log(sum('12',12)) vai dar erro
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Luis"));
function logger(msg) {
    console.log(msg);
}
logger('teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Luis");
greeting("Luis", 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
//narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
doSomething(true);
doSomething(5);
//generics
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['1', 'b', 'c '];
showArraysItens(a1);
showArraysItens(a2);
//classes
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
        console.log(`Ele tem ${this.wheels} rodas`);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
