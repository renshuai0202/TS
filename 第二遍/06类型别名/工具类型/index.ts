type MaybeNull<T> = T | null;

function doSomething (input: MaybeNull<{ handler: () => void }>) {
  input?.handler();
}

const obj = {
  handler() {
    console.log('hello');
  }
}

doSomething(obj);

/**
 * 工具类型 = 类型别名 + 范型
 * 基于传入的范型进行各种类型操作
 */