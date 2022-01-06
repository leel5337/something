// function 과 new Function(); 차이점

global.a = 0;
{
    const a = 1;

    const test = new Function('return a');
    // new Function안에 있는 변수가 포함되어 있는 상위 스코프에 지역변수에 접근이 되지않는다
    // 접근을 하려면 global전역변수를 작성해주어야 출력이 가능하다

    console.log(test());
}


{
    const a = 2;

    const test = function() {
        return a;
        // 위의 a는 global.a를 가져오지 않고 바로 상위에 있는 a를 가져온다
    }
    console.log(test());
}