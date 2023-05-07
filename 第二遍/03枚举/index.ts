enum Statues {
  start,
  going,
  end 
}

console.log(Statues.start); // 0
console.log(Statues[1]); // 'going'

/**
 * 不写值时，默认值为数字
 * 数字从0开始递增
 * 枚举值为数字时，可以双向枚举
 */



const enum Statues2 {
  start,
  going,
  end 
}

console.log(Statues2.start); // 0

// console.log(Statues2[1]);  // 报错

/**
 * 常量枚举，只能通过键访问值，不能双向枚举
 */



const returnNumber = () => 1 + 1;

enum Items {
  a = returnNumber(),
  b = 20
}

console.log(Items.a);

/**
 * 表达式枚举
 * 在编译期间可以计算出来
 * 
 * 优点：
 *  1. 在调用期间才进行计算，节省性能开销
 *  2. 可以描述更加复杂的类型和依赖关系，使用起来更加灵活
 */