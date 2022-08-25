const str = "mars";

const obj4 = { name: "mars" };

const nullVar = null;
const undefinedVar = undefined;

const func6 = (input: string) => {
  return input.length > 10;
}

type Str = typeof str; // "mars"
type Obj = typeof obj4; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func6; // (input: string) => boolean