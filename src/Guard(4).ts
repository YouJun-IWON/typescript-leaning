// type guard

//* 1)
function logText(el: Element) {
  console.log(el.textContent);
}

const h1El = document.querySelector('h1') as HTMLHeadElement;
logText(h1El);
// 해당 요소가 없을 시(null 데이터가 반환될 시) 에러 발생
// 아래와 같이 만들었을 시 위와 같은 에러가 발생할 여지가 없음
const h1El1 = document.querySelector('h1');
if (h1El1 instanceof HTMLHeadingElement) {
  logText(h1El1);
}

//* 2)
function addd(val: string | number) {
  let res = 'Result =>';
  if (typeof val === 'number') {
    res += val.toFixed(2);
  } else {
    res += val.toUpperCase();
  }
  console.log(res);
}

addd(3.141592);
addd('hello');
