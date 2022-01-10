// 생성자를 통해 promise 객체를 만든다
// 생성자의 인자로 executor라는 함수를 이용한다

new Promise(/* executor */);
/*
executor 함수는 resolve, reject를 인자로 가진다
 (resolve, reject) => {...}
 resolve와 ,reject는 함수이다
*/

// 생성자를 통해서 promise 객체를 만드는 순간 pending (대기) 상태라고 한다
new Promise((resolve, reject) => {});


// executor 함수 인자 중 하나인 resolve 함수를 실행하면 fulfilled (이행)상태가 된다
new Promise((resolve, reject) =>{
    // ...
    // ...
    resolve(); // fulfilled
});


// executor 함수 인자 중 하나인 reject 함수를 실행하면 rejected (거부)상태가 된다
new Promise((resolve, reject) =>{
    reject(); // rejected
});