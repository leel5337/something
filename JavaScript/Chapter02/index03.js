
let i = 0;  // for문과 다르게 i의 초기값 설정이 외부에서 이루어졌다

while (i < 10) {
    console.log(i);
    i++; //변화를 주는 부분이 내부에서 이루어졌다
}

// 특정 조건을 비교할때
let j = 0;
let isFun = false;

while (!isFun) {
    console.log(j);
    j++;
    if (j === 10) {
        isFun = true;
    }
}