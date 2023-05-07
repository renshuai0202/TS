type AllTypes = keyof any;

const str: AllTypes = 'abc';
const num: AllTypes = 10;
// const symbol: AllTypes = Symbol('s'); // 正确的，只因是ES6的语法，现在的环境还不支持
// const obj: AllTypes = { name: 'zhangsan' }; // 报错

console.log(str);
console.log(num);
// console.log(symbol);

/**
 * keyof any
 * 与联合类型 sting | number | symbol 等效
 */



type Obj = {
  name: 'zhzhangsan',
  age: 18,
  male: true
}

type ObjKeys = keyof Obj;

const a: ObjKeys = 'name';
const b: ObjKeys = 'age';
const c: AllTypes = 'male';
console.log(a, b, c);

/**
 * keyof Type
 * 是一个联合类型
 * 获取Type的键
 */

