const todos = [
    {
        id: 1,
        text: '국어',
        done: true,
    },
    {
        id: 2,
        text: '수학',
        done: true,
    },
    {
        id: 3,
        text: '영어',
        done: true,
    },
    {
        id: 4,
        text: '한국사',
        done: false
    }
]
const choose = todos.filter(todo => todo.done);
console.log(choose);