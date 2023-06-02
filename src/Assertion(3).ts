// type assertion

// 단언 키워드 - as

// 1 / 2 번 상황에서는 type guard가 가장 이상적이다. 왜냐하면 변수에 데이터가 있다는 것을 사람이 지정하는 것이 아니라 프로그램이 스스로 알 수 있도록 만들기 때문이다. 그래서 만약의 에러를 막을 수 있다.

//* 1)
const el = document.querySelector('body') as HTMLBodyElement;
// el이 null 일 수 있다.
// 그래서 만약 있다는 것을 확신할 때 위와 같이 선언하면 null 데이터일 수 있음으로서 발생되는 error를 없앨 수 있다.
el.textContent = 'hello';

//* 1-1)
const el1 = document.querySelector('body');
// el이 null 일 수 있다.
// 그래서 만약 있다는 것을 확신할 때 위와 같이 선언하면 null 데이터일 수 있음으로서 발생되는 error를 없앨 수 있다.
el1!.textContent = 'hello';

//* 1-2) type guard
if (el) {
  el.textContent = 'hello';
}

//* 2)
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
}
getNumber(null); // error가 발생

//* 2-1)
function getNumber1(x: number | null | undefined) {
  return Number(x!.toFixed(2));
}
getNumber1(null); // error 발생

//* 2-2) type guard
function getNumber2(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2));
  }
}
getNumber2(null);

//* 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}

getValue('hello', false); // HELLO
getValue(3.141592, true); // 3.14

// 할당 단언 (Assertion)

let numm: number;
//! console.log(numm) error
let numun!: number;
console.log(numun); // undefined
