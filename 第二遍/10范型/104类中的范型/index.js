var Person = /** @class */ (function () {
    function Person(inputPropA) {
        this._propA = inputPropA;
    }
    Person.prototype.log = function (input) {
        return input;
    };
    return Person;
}());
var p = new Person('hello');
var result = p.log(10);
console.log(p);
console.log(result);
/**
 * 类中的范型
 * 语法 class Foo<T> {}
 */ 
