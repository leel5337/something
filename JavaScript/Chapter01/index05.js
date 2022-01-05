// switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행한다

let n = 3;

switch (n) {
    default: //default 뒤에는 항상 참이어서 실행되는 블럭이다
        console.log(n);
}


// case '비교할 값': 을 사용해서 맞으면 실행한다

switch (n % 3) {
    case 0: {
        console.log('5의 배수입니다');
    }
    default:
        console.log(n);
}

// 해당 블럭이 실행된 후에 다음 블럭을 출력하지 않고 switch 문을 나가는 경우

switch (n % 3) {
    case 0: {
        console.log('5의 배수입니다');
        break;
    }
    default:
        console.log(n);
}