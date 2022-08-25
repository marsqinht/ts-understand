type Te = 1 extends number ? boolean : string
type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002
  ? 'success'
  : 'failure';


type Res1 = ResStatus<10000>; // "success"
type Res2 = ResStatus<20000>; // "failure"





// type Res3 = ResStatus<'10000'>; // 类型“string”不满足约束“number”。s
