### 结论
不用`Object`和类型的装箱类型  
不用`{}`  
当不确定变量的具体类型，但确定是非原始类型，可以使用`object`  
也可以使用Record进一步区分


### Object
所有原始类型和对象类型，指向Object

### {}
对象字面量类型，表示无属性定义的空对象  
不能对此变量进行赋值操作

### object
```TypeScript
const obj1: object = {};
const obj2: Record<string, unknown> = { name: 'zhangsan', age: 10 };
const obj3: Record<string, any> = { age: 10 };

const arr1: unknown[] = [];
const arr2: any[] = [];

function func1 (...args: any[]): void {};
function func2(...args: unknown[]): void {};
```