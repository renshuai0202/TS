class Foo {
  _prop: string;

  constructor(inputProp: string) {
    this._prop = inputProp;
  }

  log(): void {
    console.log(`log: ${this._prop}`);
  }

  get prop(): string {
    return this._prop;
  }

  set prop(inputProp: string) {
    this._prop = inputProp;
  }
}

const foo = new Foo('hello');
const prop = foo.prop;
foo.prop = 'hi';
const propChanged = foo.prop;
foo.log();
console.log(prop, propChanged);


/**
 * 类成员包括：构造函数、方法、存取器
 * 构造函数、setter不需要返回值类型
 */