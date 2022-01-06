function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const a = new Person('James', 20);
console.log(a, a.name, a.age);

const b = new Person('John', 45);
console.log(b, b.name, b.age);