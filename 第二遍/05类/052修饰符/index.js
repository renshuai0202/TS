var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(inputName, inputAge, inputMale, inputSecret) {
        this._name = inputName;
        this._age = inputAge;
        this._male = inputMale;
        this._secret = inputSecret;
    }
    Person.prototype.introduce = function () {
        return "Hello, My name is".concat(this._name, ", I'm a ").concat(this._male ? 'boy' : 'girl', " and I'm ").concat(this._age, " years old.");
    };
    Person.say = function (word) {
        return word;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            this._age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "male", {
        get: function () {
            return this._male;
        },
        set: function (newMale) {
            this._male = newMale;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(inputName, inputAge, inputMale, inputSecret, inputSchool) {
        var _this = _super.call(this, inputName, inputAge, inputMale, inputSecret) || this;
        _this._school = inputSchool;
        return _this;
    }
    Student.prototype.introduce = function () {
        return "Hello, My name is".concat(this._name, ", I'm a ").concat(this._male ? 'boy' : 'girl', " and I'm ").concat(this._age, " years old. I study in ").concat(this._school, ".");
    };
    Student.prototype.saySing = function () {
        var word = Person.say('hi');
        var song = 'lalala';
        return "".concat(word, " ").concat(song);
    };
    Object.defineProperty(Student.prototype, "school", {
        get: function () {
            return this._school;
        },
        set: function (newSchool) {
            this._school = newSchool;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var student = new Student('xiaoming', 12, true, '逗你玩', '阳光小学');
var ss = student.saySing();
var i = student.introduce();
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
