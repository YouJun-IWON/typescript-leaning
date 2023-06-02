{

// 컴파일할 세부 옵션
"compilerOptions": {

"target": "ES2015", => typescript를 javascript 몇 버전으로 변환할 지

"module": "ESNext", => 최신 버전으로 ES 모듈을 사용하겠다.

"moduleResolution": "Node", => 모듈의 해석 방식 지정 => 폴더의 이름만으로 index.js 라는 파일을 가져올 수 있다.

"esModuleInterop": true, => ESM(javascript module), CommonJs(nodejs) 모두 사용 (commonjs(export const --- 만 존재) 와 nodejs(export default, expror const --- 다 가능)의 가져오기 방식이 다르다.)

"lib": ["ESNext", "DOM"], => typescript가 javascript로 컴파일할 때 필요한 라이브러리들

"strict": true => typescript의 문법을 따르겠다.

"isolatedModules": true, => import와 export가 모든 파일에 있어야 한다. 모든 파일을 모듈화 해야한다.

"baseUrl": "./" => 모듈 해석에 사용할 기준 경로 지정

"typeRoots": ["./node_modules/@types] => 컴파일러가 참조할 타입(d.ts) 선언 경로를 지정

},

// 컴파일할 파일 목록
"include": [
"src/**/*.ts" => 어느 부분에 typescript를 찾을 수 있는 지 명시한다.
],

// 컴파일에서 제외할 파일 경로 목록
"exclude": [
"node_modules" => 제외할 부분
]

}
