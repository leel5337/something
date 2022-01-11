function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    });
}

(async function main() {
        try {
            const ms = await p(1000);
            //error가 발생하지 않는다면 아래 식으로 넘어가지 않고 이부분에서 처리가 된다
        } catch (error) {
            console.log(error);
        }
})();