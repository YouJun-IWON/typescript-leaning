// type

/// 문자
let str: string;
let red: string = 'red';
let green: string = 'Green';
let mycolor: string = `my color is ${red}`;
let myColor: string = 'your color is' + green;

/// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

/// boolean
let isBoolean: boolean;
let isDone: boolean = false;

/// Null => 거의 쓰지 않음
let nul: null;
let und: undefined;

/// 배열
const fruits: string[] = ['apple', 'banana'];
const numbers: number[] = [11, 23];
const union: (string | number)[] = [11, 23, 'apple'];

/// 객체
const obj: object = {};
const arr: object = [];
const func: object = function () {};
//! 위와 같이는 잘 사용하지 않음. 아래와 같이 주로 사용함
// 보통 첫 글자를 대문자로 변수이름을 지정한다.
interface User {
  name: string;
  age: number;
}
// 재사용 가능한 모듈로 형성
const userA: User = {
  name: 'youjun',
  age: 25,
};
// 다른 속성은 사용할 수 없다.

/// function
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
// 이렇게 많이 쓴다.
const add1 = function (x: number, y: number): number {
  return x + y;
};

const a: number = add(1, 2);

const hello1: () => void = function () {
  console.log('hello1');
};

const h: void = hello1();

/// Any
//! 되도록이면 사용하지 않는 것이 좋다.
let hello2: any = 'hello';
// 123
// false
// null
// {}
// []
// function () {}

/// unknown
const a1: any = 123;
const u: unknown = 123;

const any: any = a1;
//? a1을 u 로 바꾸면 아래의 코드는 모두 에러가 발생한다.
const boo: boolean = a1;
const num1: number = a1;
const arr1: string[] = a1;
//! const obj1: { x: string; y: number } = u;

/// Tuple
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][] = [
  [1, 'neo', true],
  [2, 'Even', false],
];

/// Void
function hello3(msg: string): void {
  console.log(`hello ${msg}`);
}

const hi: void = hello3('world');

/// Never
// 아래와 같이 선언시 아무것도 할당할 수 없다.
const nev: [] = [];
//! nev.push(3); 에러 발생

/// Union
let union1: (string | number)[];

/// Intersection
interface User {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const youjun: User & Validation = {
  name: 'youjun',
  age: 25,
  isValid: false,
};
