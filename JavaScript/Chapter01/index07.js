
// 함수선언, 함수의 type출력
function hello() {
    console.log('안녕하세요');
}
console.log(hello, typeof hello);

// 함수 return
// 함수를 호출하면 그 결과의 값을 출력
function hello1(name) {
    return 'hello1 ${name}';
}
console.log(hello1('James'));


// 함수선언 함수의type출력
const hello2 = function() {
    console.log('hello2');
};
console.log(hello2, typeof hello2);

// 함수 return
// 함수를 호출하면 그 결과의 값을 출력
const hello3 = function (name) {
    return 'hello3 ${name}';
}
console.log(hello3('John'));


// new Function ( 인자1, 인자2, 인자3, 인자4 ... , 함수의 바디);
const sum = new Function('a', 'b', 'c', 'd', 'return a + b + c + d');
console.log(sum(1, 2, 3, 4));
