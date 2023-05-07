function doSomething1(): void {}
function doSomething2(): undefined {
  return;
}

console.log(doSomething1());
console.log(doSomething2());



/**
 * 都是没有返回值，区别是有没有写return语句
 *  1. 没写return语句，函数返回值类型为void
 *  2. 写了`return;`语句，函数的返回值类型为undefined
 */
