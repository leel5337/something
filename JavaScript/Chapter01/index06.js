
for (let i = 0; i < 5; i++) {
    console.log('안녕하세요', i);
}



// 반복문을 즉시 종료하고 싶을 때 반복되는 블럭 안에서 break 실행
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i > 2) {
        break;
    }
    console.log('감사합니다', i);
}



// 해당 블럭을 종료하고 다음 반복으로 넘어가는 것은 continue를 실행
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i < 2) {
        continue;
    }
    console.log('반갑습니다', i);
}
