type ResStatus<ResCode extends number> = ResCode extends 200 | 400 | 500 ? true : false;
const code: ResStatus<200> = true;
const code2: ResStatus<300> = false;

console.log(code, code2);

type Status<Code> = Code extends number ? number : string;
const statue: Status<123> = 456;
const statue2: Status<number> = 456;
const statue3: Status<string> = 'hello';

console.log(statue, statue2, statue3);

/**
 * 范型约束
 * 对传入的T，在函数体中，进行判断
 * 关键词 `T extends 数据类型 ? 数据类型 : 数据类型 `
 */



