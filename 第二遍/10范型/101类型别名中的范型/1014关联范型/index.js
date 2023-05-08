var input = {
    input1: 2,
    input2: 2,
    input3: 1
};
console.log(input);
var input2 = 123;
console.log(input2);
/**
 * 关联范型
 * 范型的参数T T2 T3，后面的可以继承前面的或设置为默认值
 * 语法 Type<T, T2 extends T, T3 extends T2 = T2> = T | string;
 */ 
