
// prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('James', 20);

p.hello();
console.log(p.toString()); //p.toString이란 함수를 작성하지 않았지만 호출이 된다

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor); // constructor는 위 Person함수를 의미한다
console.log(Person.hello); // hello를 객체로 생서애주어야 사용할 수 있기 때문에 undefined
console.log(Person.prototype.hello);


// prototype에 hello가 있는 것이 아닌 객체가 만들어지고 바로 hello로 바로 할당되었기 때문에 undefined
// People 생성자 함수에 prototype으로 작성되어있는 property를 설정해주어야 new People이 생성될때 사용할 수 있는 공간에 있다
function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.hi = function() {
    console.log('hi', this.name, this.age);
}

const e = new People('John', 45);
console.log(People.prototype.hi);
