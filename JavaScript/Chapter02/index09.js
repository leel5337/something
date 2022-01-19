const numbers = [10, 20, 30, 40, 50];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2); // (index, 2)는 index부터 2개를 선택
console.log(spliced); // splice에서 선택한 항목
console.log(numbers); // 사라져버리고 남은 항목


const numbe = [10, 20, 30, 40];
const sliced = numbe.slice(0, 2); // 이 부분에서 선택된 것은 0번째인 10부터 2번째인 30 이전의 것을 말한다 [10, 20]
console.log(sliced);
console.log(numbe);