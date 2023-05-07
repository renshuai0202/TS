/** 最常见的场景 */
type Clone<T> = {
  [K in keyof T]: T[K]
}

/**
 * 类型映射
 * 是一种类型工具
 * 关键字 键的联合类型 in keyof 对象类型
 */



/** 应用 */
type Foo = {
  propA: string;
  propB: number;
  propC: boolean;
}

// 转换为可选
type OptionalFoo = Partial<Foo>;
// 转换为只读
type ReadonlyFoo = Readonly<Foo>;
// 转换为string类型
type StringifyFoo = Record<keyof Foo, string>;
// 过滤指定的属性
type FilteredFoo = Pick<Foo, Exclude<keyof Foo, 'propB'>>

const foo1: Foo = {
  propA: 'zhangsan',
  propB: 18,
  propC: true
}

console.log('foo1');
console.log(foo1, foo1.propA, foo1.propB, foo1.propC);

const foo2: OptionalFoo = {
  propA: 'zhangsan',
  propB: 18
}

console.log('foo2');
console.log(foo2, foo2.propA, foo2.propB, foo2.propC);

const foo3: ReadonlyFoo = {
  propA: 'zhangsan',
  propB: 18,
  propC: true
}

// console.log(foo3.propA = 'lisi'); // 报错，只读属性不能赋值

const foo4: StringifyFoo = {
  propA: 'zhangsan',
  propB: '18',
  propC: 'true',
  // propC: true // 报错，因为propC的值的类型只能为string
}


const foo5: FilteredFoo = {
  propA: 'zhangsan',
  // propB: 18, // 报错，不存在propB属性
  propC: true
}

