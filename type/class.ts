

class Foo {
  constructor(public arg1: string, private arg2: boolean) { }
}


const a = new Foo("Mars", true)


console.log('a.arg1 :>> ', a.arg1);


class Base {
  print() { }
}

class Derived extends Base {
  override print() {
    // ...
  }
}


abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string
}

class Foo1 implements AbsFoo {
  absProp = "Mars"

  get absGetter() {
    return "Mars"
  }

  absMethod(name: string) {
    return name
  }
}


class Utils {
  public static identifier = "Mars";
  
  private constructor(){}

  public static makeUHappy() {
  }
}

// new Utils()