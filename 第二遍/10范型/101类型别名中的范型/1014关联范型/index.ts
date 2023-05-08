type Input<T extends number, T2 extends T, T3 extends T2> = {
  input1: T,
  input2: T2,
  input3: T3
}

const input: Input<1 | 2 | 3, 1 | 2, 1> = {
  input1: 2,
  input2: 2,
  input3: 1
}

console.log(input);


type Input2<T, T2 extends T, T3 extends T2 = T2> = number;

type Type1 = 'hello' | number | boolean;
type Type2 = number | boolean;
type Type3 = boolean;

const input2: Input2<Type1, Type2> = 123;

console.log(input2);

/**
 * 关联范型
 * 范型的参数T T2 T3，后面的可以继承前面的或设置为默认值
 * 语法 Type<T, T2 extends T, T3 extends T2 = T2> = T | string;
 */