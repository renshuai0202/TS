var obj = {
    propA: 'hi',
    propB: 123,
    propC: true,
    propD: 'hi'
};
var obj2 = {
    propA: 'hi',
    propB: 123,
    propC: true,
    propD: 123
};
console.log(obj, obj.propD);
console.log(obj2, obj2.propD);
/**
 * 范型默认值
 * 可以设置默认类型，使用的时候不必带参数
 * 也可以不使用默认类型，使用的时候指定参数类型
 */
