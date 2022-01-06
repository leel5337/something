// 생성자 함수
function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());


//생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

const b = new B(); // 안에 인자가 없이 출력 undefined
const c = new B('James', 20); // 안에 값을 입려하여 출력
console.log(B());