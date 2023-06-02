// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}

const cat: Cat = {
  name: 'lucy',
  age: 3
}

function heello(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`)
}

heello.call(cat, 'my cat')