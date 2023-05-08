type Foo<T = string> = {
  propA: string;
  propB: number;
  propC: boolean;
  propD: T;
}

const obj: Foo = {
  propA: 'hi',
  propB: 123,
  propC: true,
  propD: 'hi'
}

const obj2: Foo<number> = {
  propA: 'hi',
  propB: 123,
  propC: true,
  propD: 123
}

console.log(obj, obj.propD);
console.log(obj2, obj2.propD);


/**
 * 范型默认值
 * 关键词 `T = 数据类型`
 * 可以设置默认类型，使用的时候不必带参数
 * 也可以不使用默认类型，使用的时候指定参数类型
 */
