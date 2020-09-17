//object는 불필요한 데이터 없이 조직화된 데이터를 나열한다.

//객체를 제외하면 값을 복사한다.
//복사한 대상의 값이 변해도 복사한 값을 유지한다. call by value
let v = 3
let d = v
v = 5 //v의 값이 변해도 d는 선언된 v의 값을 가진다.
console.log(d)


//객체를 복사할 땐 객체를 참조한다.
//즉 값을 따라간다. call by reference
let k = {
    1: 5,
    2: 3
}
let i = k
k = {
    1: 2,
    2: 5
} //k의 값이 변하면 i는 그 값을 따라간다.

console.log(k)


//랜덤 주사위
function dice(){
    let diceRoll = Math.floor(Math.random() * 50) + 1;
    console.log(`주사위의 값은 ${diceRoll}입니다.`)
}

dice()