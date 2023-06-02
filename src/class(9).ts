// 클래스

// 접근 제어자 (Access Modifiers)
//? public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능 => default
//? protected - 나와 파생된 후손 클래스 내에서 접근 가능
//? private - 내 클래스에서만 접근 가능

class UserC {
  first: string = '';
  protected last: string;
  private age: number = 0;
  constructor(
    first: string,
    last: string,
    age: number
  ) // (public first: string = ', public last: string, public age: number = 0) => 이렇게 매개변수에서 접근제어자를 사용할 떄는 생략할 수 없다.
  {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserD extends UserC {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserE extends UserD {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

const neop = new UserC('Neo', 'Anderson', 102);
console.log(neop.first);
console.log(neop.last);
console.log(neop.age);

neop.getAge();
