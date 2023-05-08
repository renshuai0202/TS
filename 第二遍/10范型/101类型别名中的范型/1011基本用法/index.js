var foo = function (input) {
    console.log(input.propD);
    return input;
};
var obj = {
    propA: 'hahah',
    propB: 123,
    propC: true,
    propD: 'hello'
};
foo(obj);
/**
 * 范型
 * 像函数一样，参数是范型，在函数体中使用范型
 */
