function foo(name: string): number {
  return name.length;
}

// 方式一
const foo1 = (name: string): number => {
  return name.length
}

// 方式二
const foo2: (name: string) => number = (name) => {
  return name.length
}



function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}


async function asyncFunc(): Promise<void> {}

function* genFunc(): Iterable<void> {}

async function* asyncGenFunc(): AsyncIterable<void> {}

// const res1 = func(599); // number
