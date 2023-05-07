var sign = {
    'name': 'zhangsan',
    'school': 'xiwang'
};
function doSomething(item) {
    return "".concat(item.name, " ").concat(item.school);
}
var result = doSomething(sign);
console.log(sign, sign.name, sign.school);
console.log(result);
