//string, boolean, number, ...
let x:number = 10

x = 12

console.log(x)


// inferencia x annotation
//Tipado com inferencia, ele declara e a variavel ja fica
//tipada de acordo com o valor que for passado.
let y = 12
//y = 'teste' - vai dar erro

//Tipado com annotation, e a mesma coisa de cima, mas aqui
//deixamos mais claro declarando a tipagem que queremos.
let z: number = 12
//z = 'teste' - vai dar erro

// Tipos básicos
let firstName: string = 'Matheus'
let age: number = 30
const isAdmin: boolean = true

// Object
let myNumbers:number[] = [1, 2, 3]
console.log(myNumbers)

// Tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

//myTuple = [true, false, true] - vai dar erro, pois pede number, string, string[]

//object literals -> {prop: value}
const user: {name: string, age: number} = {
  name: 'luis',
  age: 18
}

console.log(user.name)

// any
let a: any = 0

a = 'teste'
a = true
a = []

// union type
let id: string | number = '10'
id = 200
//id = true - vai dar erro
//id = [] - vai dar erro

// type alias
type myIdType = number | string

const userId:myIdType = 10
const productId:myIdType = 'teste'

// enum
//tamanho de roupas (size: Médio, size: Pequeno])
enum Size {
  P = 'pequeno',
  M = 'medio',
  G = 'grande'
}

const camisa = {
  name: 'camisa gola v',
  size: Size.G
}

//funcoes
function sum(a: number,b: number) {
  return a + b
}

console.log(sum(12,12))
//console.log(sum('12',12)) vai dar erro

function sayHelloTo(name: string):string {
  return `Hello ${name}`
}

console.log(sayHelloTo("Luis"))

function logger(msg: string): void {
  console.log(msg)
}

logger('teste!')

function greeting(name: string, greet?: string) {
  console.log(`Ola ${greet} ${name}`)
}

greeting("Luis")