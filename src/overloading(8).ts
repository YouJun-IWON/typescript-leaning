// 함수 overloading

//* 1)

function add2(a: string, b: string) {
  return a + b;
}

function add3(a: number, b: number) {
  return a + b;
}

add2('hello ', 'world~');
add3(1, 2);
//! add2( 'hello', 2 )
//! add3( 'hello', 2 )

//* 2) overloading
function add4(a: string, b: string): string; // 타입 선언
function add4(a: number, b: number): number; // 타입 선언
function add4(a: any, b: any) {
  // 함수 구현
  return a + b;
}

add4('hello', 'world');
add4(3, 2);
//! add4('hello', 2)
//! add4(3, 'world')
