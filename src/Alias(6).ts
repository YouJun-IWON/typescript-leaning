// 타입 별칭 Alias

//* 1)
type TypeA = string;
type TypeB = string | number | boolean;

type Usser =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const userAa: Usser = {
  name: 'neo',
  age: 22,
  isValid: true,
};

const userBb: Usser = ['evan', 36, false];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case 'string':
      return param.toUpperCase(); // 문자데이터 반환
    case 'number':
      return param.toFixed(2); // 문자 데이터 반환
    default:
      //! return true error
      return 'boolean';
  }
}

//* 2)
// 아래 두개는 기능이 같다. 취향껏 사용
type TypeUser = { // 배열 / 객체 데이터 가능
  name: string;
  age: number;
  isValid: boolean;
};

interface InterfaceUser { // 객체 데이터 가능
  name: string;
  age: number;
  isValid: boolean;
}

const juju: InterfaceUser = { // TypeUser도 가능하다. 
  name: 'jojo',
  age: 33,
  isValid: true,
};
