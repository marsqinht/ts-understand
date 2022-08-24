let unknownVar: unknown = "linbudu";

unknownVar = false;
unknownVar = "linbudu";
unknownVar = {
  site: "juejin"
};

unknownVar = () => { }

// const val1: string = unknownVar; // Error
// const val2: number = unknownVar; // Error
// const val3: () => {} = unknownVar; // Error
// const val4: {} = unknownVar; // Error

const val5: any = unknownVar;
const val6: unknown = unknownVar;


type UnionWithNever = "linbudu" | 599 | true | void | never;


declare let v1: never;
declare let v2: void;

// v1 = v2; // X 类型 void 不能赋值给类型 never

v2 = v1;
