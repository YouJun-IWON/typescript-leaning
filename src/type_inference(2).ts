// type inference
//? 타입 추론 기능이 있기 때문에 typescript가 알기 힘든 곳에서만 type을 넣어주면 된다. 

// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 변환 값이 있는 함수

// 초기화된 변수 `num`
let num12 = 12;

// 기본값이 지정된 매개 변수 'b' + 반환 값이 확실한 함수 'add'
  function add12(a: number, b = 2): number {
    return a + b
  }
  



