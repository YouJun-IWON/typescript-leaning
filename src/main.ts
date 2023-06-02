import { getFullName, User } from './user';

const yuyu: User = {
  firstName: 'you',
  lastName: 'park',
  age: 22,
  isValid: true,
};

const fullName = getFullName(yuyu);

console.log(fullName);
console.log(yuyu.isValid);
