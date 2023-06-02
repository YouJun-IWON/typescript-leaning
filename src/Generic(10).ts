// 제너릭
/// 함수

// 오버로딩 방법
interface Obj {
  x: number;
}

type Arr = [number, number];

function toArray(a: string, b: string): string[];
function toArray(a: number, b: number): number[];
function toArray(a: boolean, b: boolean): boolean[];
function toArray(a: Obj, b: Obj): Obj[];
function toArray(a: Arr, b: Arr): Arr[];
function toArray(a: any, b: any) {
  return [a, b];
}

console.log(
  toArray('neo', 'anderson'),
  toArray(1, 2),
  toArray(true, true),
  toArray({ x: 1 }, { x: 2 }),
  toArray([1, 2], [3, 4])
);

// 제너릭
// 지정한 변수에 의해 정해짐 => 첫 번째 변수를 따름
function toArray1<T>(a: T, b: T) {
  return [a, b];
}

console.log(
  toArray1('neo', 123),
  toArray1<number>('neo', 123), // 타입 명시
  toArray1(1, 2),
  toArray1(true, true),
  toArray1({ x: 1 }, { x: 2 }),
  toArray1([1, 2], [3, 4, 9]), // number[] => tuple 타입으로 지정되지 않는다.
  toArray1<Arr>([1, 2], [3, 4, 9]) // 이렇게 따로 지정해 줘야 한다.
);

/// 클래스

class Usserr<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}

interface UserBType {
  name: string;
  age: number;
  emails: string[];
}

const youyou = new Usserr<UserAType>({
  name: 'youjun',
  age: 87,
  isValid: true,
  emails: ['efwef@gmail.com'],
});

/// interface, Constraints (제약조건)

interface MyData<T extends string | number> {
  name: string;
  value: T;
}
const dataA: MyData<string> = {
  name: 'Data A',
  value: 123,
};

const dataB: MyData<number> = {
  name: 'Data A',
  value: 1234,
};

const dataC: MyData<boolean> = {
  name: 'Data A',
  value: true,
};

const dataD: MyData<number[]> = {
  name: 'Data A',
  value: [1, 2, 3, 4],
};
