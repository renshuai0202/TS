var foo1 = {
    propA: 'zhangsan',
    propB: 18,
    propC: true
};
console.log('foo1');
console.log(foo1, foo1.propA, foo1.propB, foo1.propC);
var foo2 = {
    propA: 'zhangsan',
    propB: 18
};
console.log('foo2');
console.log(foo2, foo2.propA, foo2.propB, foo2.propC);
var foo3 = {
    propA: 'zhangsan',
    propB: 18,
    propC: true
};
// console.log(foo3.propA = 'lisi'); // 报错，只读属性不能赋值
var foo4 = {
    propA: 'zhangsan',
    propB: '18',
    propC: 'true',
    // propC: true // 报错，因为propC的值的类型只能为string
};
var foo5 = {
    propA: 'zhangsan',
    // propB: 18, // 报错，不存在propB属性
    propC: true
};
