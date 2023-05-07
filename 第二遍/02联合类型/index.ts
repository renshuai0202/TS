let mixed1: 'apple' | 20 | true = 'apple';
mixed1 = 20;
mixed1 = true;

type Num = 1 | 2 | 3;
type Str = 'a' | 'b' | 'c';

type Mixed = Num | Str | (() => {})
const mixed2: Mixed = 'b';

console.log(mixed1, mixed2);

/**
 * 任何类型都可以联合到一起
 * 联合类型中可以嵌套联合类型，最终被平展到第一级
 * 函数不存在字面量类型，如果类型中包括函数，需要使用()
 */