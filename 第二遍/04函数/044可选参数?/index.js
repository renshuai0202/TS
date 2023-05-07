function doSomething(item1, item2, item3) {
    console.log("".concat(item1, " ").concat(item2).concat(item3 ? ' ' + item3 : ''));
}
doSomething('hello', 'world');
doSomething('hello', 'world', '!');
