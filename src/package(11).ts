// 이름을 바꾸려면 아래와 같은 방법을 사용한다.
/// <reference path="./main.d.ts"/>

import _ from 'lodash';
// lodash.d.ts // 이름을 바꾸지 않아야 한다.
const str = 'the brown';

console.log(_.camelCase(str));
console.log(_.snakeCase(str));
console.log(_.kebabCase(str));
