const array = [1, 2, 3, 4, 5];
const squared = array.map(n => n + n);

console.log(squared);


const items = [
    {
        id: 1,
        text: 'good'
    },
    {
        id: 2,
        text: 'bad'
    }
];
const texts = items.map(item => item.text);
console.log(texts); 