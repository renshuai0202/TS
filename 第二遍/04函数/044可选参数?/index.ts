function doSomething (item1: string, item2: string, item3?: string) {
  console.log(`${item1} ${item2}${item3? ' ' + item3 : ''}`);
}

doSomething('hello', 'world');
doSomething('hello', 'world', '!');

/**
 * 可选参数必须在入参的末尾
 */