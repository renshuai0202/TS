var str = 'abc';
var num = 10;
// const symbol: AllTypes = Symbol('s'); // 正确的，只因是ES6的语法，现在的环境还不支持
// const obj: AllTypes = { name: 'zhangsan' }; // 报错
console.log(str);
console.log(num);
var a = 'name';
var b = 'age';
var c = 'male';
console.log(a, b, c);
/**
 * keyof Type
 * 是一个联合类型
 * 获取Type的键
 */
