interface StringOrBooleanTypes {
  propA: number;
  propB: boolean;
  [key: string]: number | boolean;
}

interface Foo {
  mars: 1,
  599: 2
}

type FooKeys = keyof Foo;


const b: FooKeys = 'mars'


type B = Foo[keyof Foo]