const _name: string = 'mars';
const age: number = 24;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;

const obj: object = { _name, age, male };
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');


const tmp1: null = null;
const tmp2: undefined = undefined;

function func2() {
  return
}


const arr1: string[] = [];

const arr2: Array<string> = [];




const arr3: string[] = ['qin', 'hai', 'tao'];

// console.log(arr3[599])


// 元组（Tuple）
const arr4: [string, string, string] = ['qin', 'hai', 'tao'];

// console.log(arr4[599]);


// type TupleLength = typeof arr4.length; // 1 | 2 | 3

const arr7: [name: string, age: number, male: boolean] = ['mars', 599, true];

// type TupleLength = typeof arr7.length; // 1 | 2 | 3
// console.log('arr7 :>> ', arr7);


interface IDescription {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription = {
  name: 'mars',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};

obj2.func = () => {};


const tmp4: Object = 'mars';
const tmp5: Object = 599;
const tmp6: Object = { name: 'mars' };
const tmp7: Object = () => {};
const tmp8: Object = [];


// const tmp21: object = 599; // X 不成立，值为原始类型
// const tmp29: {} = 599;

// const tmp13: String = 599; // X
// const tmp14: String = { name: 'mars' }; // X
// const tmp15: String = () => {}; // X
// const tmp16: String = []; // X

interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}