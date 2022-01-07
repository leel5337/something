
class A {
    constructor() {
        console.log('constructor');
    }
}
console.log(new A());


class B {
    constructor(name, age) {
        console.log('constructor', name, age);
    }
}
console.log(new B('James', 20));