// interface

// 선택적 속성 - ?
// 읽기 전용 속성 -readonly
interface Userr {
  name: string;
  readonly age: number;
  isValid?: boolean;
}

const youjunn: Userr = {
  name: 'youjun',
  age: 22,
};

// readonly 기능으로 인해 error가 발생한다.
//! youjunn.age = 333 error

const youn: Userr = {
  name: 'youjun',
  age: 22,
  isValid: true,
};

// 함수 타입 = call signature

interface GetName {
  // => 함수 타입을 지정 (재사용할 때 이렇게 한다. 매개변수 이름은 같지 않아도 된다. 매개변수 이름과 타입만 맞으면 된다.)
  (message: string): string;
}

interface Usere {
  name: string;
  age: number;
  getName: GetName;
  // getName: (message: string) => string
  // 여기서만 지정될 경우 이렇게도 쓰일 수 있다.
}

const yyou: Usere = {
  name: 'youjun',
  age: 55,
  getName(message: string) {
    console.log(message);
    return this.name; // => 일반 함수로 정의했기 때문에 호출될 때 this의 의미를 알 수 있다.
  },
};

yyou.getName('hello');

// 인덱스 가능 타입 - index signature

// array
interface Fruits {
  [item: number]: string;
}

const fruitss: Fruits = ['apple', 'banana', 'cherry'];
console.log(fruitss);

// object
interface Uuser {
  [key: string]: unknown;
  name: string;
  age: number;
}

const youuj: Uuser = {
  name: 'youjun',
  age: 29,
};

youuj['valid'] = true;
youuj['emails'] = ['thfjw@gmail.com', 'test@gmail.com'];

console.log(youuj); // 모든 내용이 포함되어 있음

//* 2)
interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

// 위의 함수에서 인덱스 가능한 타입이 되기 위해서 '//' 이 부분을 넣어줘야 한다.
interface User {
  [key: string]: unknown; //
  name: string;
  age: number;
  isValid: boolean;
}

const youju: User = {
  name: 'youjun',
  age: 78,
  isValid: true,
};

logValues(youju);

// 확장(상속)
//* 1)
interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const neo: UserB = {
  name: 'neo',
  age: 102,
  isValid: true,
};

//* 2)
interface FullName {
  firstName: string;
  lastName: string;
}

interface FullName {
  middleName: string;
  //! lastName: boolean error
}

const fullName: FullName = {
  firstName: 'jo',
  middleName: 'sean',
  lastName: 'coo',
};
