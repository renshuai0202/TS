function add(num1, num2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var result;
    result = num1 + num2;
    var restSum = rest.reduce(function (accumulator, current) {
        accumulator += current;
        return accumulator;
    }, 0);
    result += restSum;
    return result;
}
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));
