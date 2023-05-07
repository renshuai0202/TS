var Foo = /** @class */ (function () {
    function Foo(inputProp) {
        this._prop = inputProp;
    }
    Foo.prototype.log = function () {
        console.log("log: ".concat(this._prop));
    };
    Object.defineProperty(Foo.prototype, "prop", {
        get: function () {
            return this._prop;
        },
        set: function (inputProp) {
            this._prop = inputProp;
        },
        enumerable: false,
        configurable: true
    });
    return Foo;
}());
var foo = new Foo('hello');
var prop = foo.prop;
foo.prop = 'hi';
var propChanged = foo.prop;
foo.log();
console.log(prop, propChanged);
/**
 * 类成员包括：构造函数、方法、存取器
 * 构造函数、setter不需要返回值类型
 */ 
