class Cat {
  eat() { }
  // meow() { }j
}

class Dog {
  eat() { }
}

function feedCat(cat: Cat) { }

feedCat(new Dog())