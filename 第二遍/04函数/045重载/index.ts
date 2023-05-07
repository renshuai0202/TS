function doSomething(arg1: string, arg2: number, arg3: true): string;
function doSomething(arg1: string, arg2: number, arg3: false): number;
function doSomething(arg1: string, arg2: number, arg3: boolean): string | number {
  const result = arg3 ? arg1 : arg2;
  return result;
}

console.log(doSomething('hello world', 10, true));
console.log(doSomething('hello world', 10, false));


/**
 * 重载
 *  1. 要写出所有的情况
 *  2. 最后要有一个兜底的情况
 *  3. 函数被调用时，按照声明的顺序，依次匹配，直到找到
 */