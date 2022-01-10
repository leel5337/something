// 비동기 작업을 할때 callback 함수를 인자로 넣어서 로직이 끝나면 callback 함수를 호출한다
// 이 경우에는 함수가 아랴로 진행되지 않고 callback 함수로 진행된다

function c(callback) {
    setTimeout(() =>{
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행된다');
});

c(() => {
    c(() =>{
        c(() =>{
            console.log('3000ms 후에 callback 함수가 실행된다');
        })
    })
});