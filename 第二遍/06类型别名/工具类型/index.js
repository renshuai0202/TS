function doSomething(input) {
    input === null || input === void 0 ? void 0 : input.handler();
}
var obj = {
    handler: function () {
        console.log('hello');
    }
};
doSomething(obj);
/**
 * 工具类型 = 类型别名 + 范型
 * 基于传入的范型进行各种类型操作
 */ 
