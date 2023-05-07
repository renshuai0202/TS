type Sign = {
  [k: string]: string
}

const sign: Sign = {
  'name': 'zhangsan',
  'school': 'xiwang'
}

function doSomething(item: Sign): string {
  return `${item.name} ${item.school}`;
}

const result = doSomething(sign);

console.log(sign, sign.name, sign.school);
console.log(result);
