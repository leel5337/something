const numbers = [1, 2, 3, 4, 5];

const avg = numbers.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0); // 0은 accumulator의 기본값을 지정한다
console.log(avg);