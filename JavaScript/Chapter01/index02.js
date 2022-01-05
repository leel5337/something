// if () {} else if () {} else {}

const n = 20;

if (n % 4 === 0) {
    console.log('n은 4의 배수입니다')
} else if (n % 5 === 0) {
    console.log('n은 5의 배수입니다')
} else {
    console.log('n은 4의 배수도 5의 배수도 아닙니다')
}

// n이 3의 배수이면서 5의 배수일때는??

const m = 40;

if (m % 4 === 0 && n % 5 === 0) {
    console.log('n은 4의 배수이면서 5의 배수입니다');
} else if (m % 4 === 0) {
    console.log('n은 4의 배수입니다');
} else if (m % 5 === 0) {
    console.log('n은 5의 배수입니다');
} else {
    console.log('n은 4의 배수도 5의 배수도 아닙니다');
}
