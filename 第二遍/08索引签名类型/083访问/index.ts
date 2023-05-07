type Types = {
  propA: string;
  propB: number;
}

type A = Types['propA']
type B = Types['propB']

const a: A = 'hahaha';
const b: B = 123;
console.log(a, b);
