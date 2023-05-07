class Person {
  _name: string;
  protected _age: number;
  _male: boolean;
  private _secret: string;

  constructor(inputName: string, inputAge: number, inputMale: boolean, inputSecret: string) {
    this._name = inputName;
    this._age = inputAge;
    this._male = inputMale;
    this._secret = inputSecret;
  }

  introduce(): string {
    return `Hello, My name is${this._name}, I'm a ${this._male ? 'boy' : 'girl'} and I'm ${this._age} years old.`;
  }

  static say(word: string): string {
    return word;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get name(): string {
    return this._name;
  }

  set age(newAge: number) {
    this._age = newAge;
  }

  get age(): number {
    return this._age;
  }

  set male(newMale: boolean) {
    this._male = newMale;
  }

  get male(): boolean {
    return this._male;
  }
}

class Student extends Person {
  _school: string;

  constructor(inputName, inputAge, inputMale, inputSecret, inputSchool) {
    super(inputName, inputAge, inputMale, inputSecret);
    this._school = inputSchool;
  }

  override introduce(): string {
    return `Hello, My name is${this._name}, I'm a ${this._male ? 'boy' : 'girl'} and I'm ${this._age} years old. I study in ${this._school}.`;
  }

  saySing() {
    const word = Person.say('hi');
    const song = 'lalala';
    return `${word} ${song}`;
  }

  set school(newSchool: string) {
    this._school = newSchool;
  }

  get school() {
    return this._school;
  }
}




const student = new Student('xiaoming', 12, true, '逗你玩', '阳光小学');
const ss = student.saySing();
const i = student.introduce();
console.log(ss);
console.log(i);

/**
 * public 默认修饰符，类成员在 `类` `子类` `实例` 中能被访问
 * protected 类成员可以在 `类` `子类` 中能被访问
 * private 类成员可以在 `类`  中能被访问
 * static 静态成员无法通过 `this` 被访问，只能以Foo.xxx被访问。在 `类` `子类` 中能被访问。
 */

/**
 * 如果同时没有指定getter和setter，会默认加上
 * 只写getter，只读
 * 
 * super是对父类的引用
 * 在子类中，不能使用super.name直接调用父类的属性，应该使用this.name
 * 
 * static可以和其他修饰符一起使用
 * static一般用于工具方法
 */