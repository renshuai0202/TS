type StatueCodes = 200 | 400 | 500;

const statue = 200;
console.log(statue);


type NameStruct = {
  name: string;
}

type AgeStruct = {
  age: number;
}

type Person = NameStruct & AgeStruct;

const p: Person = {
  name: 'zhangsan',
  age: 18
}

console.log(p, p.name, p.age);

/**
 *  注意❗️
 *  type something = string & number; // ❌
 *  基本数据类型不能使用交叉类型，因为不存在一个基本类型既是string类型又是number类型
 */