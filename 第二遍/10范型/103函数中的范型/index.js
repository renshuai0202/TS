function doSomething(arg) {
    return arg;
}
/**
 * 函数中的范型
 * 将范型与函数的参数、返回值类型关联起来
 * 语法 function foo<T>(arg: T) : T
 */
var str = 'hello';
var num = 123;
doSomething(str);
doSomething(num);
/**
 * 函数中的范型
 * 如果实参是常量，则函数的范型会精确推导为常量数据类型
 * 如果实参是变量，则函数的范型会推导为基本数据类型
 */
function swap(_a) {
    var a = _a[0], b = _a[1];
    return [b, a];
}
var result = swap([1, 2]);
console.log(result);
/**
 * 范型约束
 */ 
