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
var AbsFoo = /** @class */ (function () {
    function AbsFoo() {
    }
    AbsFoo.prototype.eat = function (food) {
        return food;
    };
    return AbsFoo;
}());
var Foo = /** @class */ (function (_super) {
    __extends(Foo, _super);
    function Foo(inputProp) {
        var _this = _super.call(this) || this;
        _this._prop = inputProp;
        return _this;
    }
    Object.defineProperty(Foo.prototype, "prop", {
        get: function () {
            return this._prop;
        },
        enumerable: false,
        configurable: true
    });
    Foo.prototype.log = function (word) {
        return word;
    };
    return Foo;
}(AbsFoo));
var foo = new Foo('hello');
var value = foo.prop;
var result = foo.log('hi');
var result2 = foo.eat('apple');
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
