var Statues;
(function (Statues) {
    Statues[Statues["start"] = 0] = "start";
    Statues[Statues["going"] = 1] = "going";
    Statues[Statues["end"] = 2] = "end";
})(Statues || (Statues = {}));
console.log(Statues.start); // 0
console.log(Statues[1]); // 'going'
console.log(0 /* Statues2.start */); // 0
// console.log(Statues2[1]);  // 报错
/**
 * 常量枚举，只能通过键访问值，不能双向枚举
 */
var returnNumber = function () { return 1 + 1; };
var Items;
(function (Items) {
    Items[Items["a"] = returnNumber()] = "a";
    Items[Items["b"] = 20] = "b";
})(Items || (Items = {}));
console.log(Items.a);
/**
 * 表达式枚举
 * 在编译期间可以计算出来
 *
 * 优点：
 *  1. 在调用期间才进行计算，节省性能开销
 *  2. 可以描述更加复杂的类型和依赖关系，使用起来更加灵活
 */ 
