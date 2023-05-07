async function doSomething1(): Promise<void> {}

async function doSomething2(): Promise<string> {
  return 'Hello World!';
}

async function doSomething3(): Promise<string> {
  return Promise.resolve('Hello World!');
}

/**
 * 异步函数的返回值类型一定是Promise
 * Promise是js和ts的内置类型，不必显式引入
 * Promise的内部类型是通过范型实现的
 */



function* generator(): Iterable<void> {}
async function* asyncGenerator(): AsyncIterable<void> {}
/**
 * 迭代器和异步迭代器
 */