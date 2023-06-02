declare module 'lodash' {
  interface Lodash {
    camelCase: (str: string) => string;
    snakeCase: (str: string) => string;
  }
  const _: Lodash;
  export default _;
}

// 그러나 일일히 모든 함수들을 선언할 수 없다
// 그래서 이미 type으로 선언된 모듈들이 만들어져 있다. 
// 설치해서 사용하면 된다. 
// node_modules => types 폴더에 해당 내용이 들어 있다. 