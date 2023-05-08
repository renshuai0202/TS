type TPerson = number | boolean;
type TPropA = string | number;

class Person<TPerson> {
  _propA: TPropA;

  constructor(inputPropA) {
    this._propA = inputPropA;
  }

  log<TInput extends TPerson>(input: TInput): TInput {
    return input;
  }
}

const p = new Person('hello');
const result = p.log(10);
console.log(p);
console.log(result);

/**
 * 类中的范型
 * 语法 class Foo<T> {}
 */