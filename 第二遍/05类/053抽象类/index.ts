abstract class AbsFoo {
  abstract _prop: string;
  abstract get prop(): string;
  abstract log(word: string): string;
  eat(food: string): string {
    return food;
  }
}

class Foo extends AbsFoo {
  _prop;
  
  constructor(inputProp) {
    super();
    this._prop = inputProp;
  }

  get prop() {
    return this._prop;
  }

  log(word) {
    return word;
  }
}

const foo = new Foo('hello');
const value = foo.prop;

const result = foo.log('hi');
const result2 = foo.eat('apple');
console.log(value, result, result2);



/**
 * 抽象类
 *  1. 描述了属性的数据类型，方法的入参和返回值的数据类型
 *  2. 可以没有具体实现，也可有具体实现
 * 抽象类不能被实例化
 * 
 * implements 和 extends
 *  1. 在全是抽象属性和方法时，可以使用 `implements` 或 `extends`
 *  2. 如果抽象类中包含具体实现属性或方法，只能使用 `extends`
 */