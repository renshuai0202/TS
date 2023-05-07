const str: 'apple' = 'apple';
const num: 20 = 20;
const bool: true = true;

interface Person {
  name: 'zhangsan',
  age: 18,
  male: true
}
const p: Person = {
  name: 'zhangsan',
  age: 18,
  male: true
}

console.log(str, num, bool, p);

/**
 * 字符串、数字、布尔、对象字面量类型
 */