//함수를 변수에 담기
//arrow function은 익명함수에 사용된다.
let greet = () => {
    console.log(`빠이춘`)
}
greet()


//전달되는 한 개의 인자를 받아들이는 매개변수(parameter)를 받는 함수
function greet2(x) {
    console.log(`${x}님 빠이춘`)
}
greet2('하이')


//전달되는 두 개의 인자를 받아들이는 매개변수(Parameter)를 받는 함수
function greet3(x, y) {
    console.log(`${x},${y}님 빠이춘`)
}
//뿌잉, 뽀잉은 실제 전달되는 값 인자(Argument)
greet3('뿌잉', '뽀잉')


//계산기
function calc(operator, x, y) {
    let result
    switch (operator) {
        case '+':
            result = x + y
            break
        case '-':
            result = x - y
            break
        case '*':
            result = x * y
            break
        case '/':
            result = x / y
            break
        default:
            console.log('연산자 잘못썼어요')
    }
    console.log(result)
}

calc('+', 3, 4) //더하기
calc('-', 4, 4) //빼기
calc('*', 2, 9) //곱하기
calc('/', 30, 10) //나누기

let result = 1


//계산기 arrow 함수
let calc2 = (operator, x, y) => {
    switch (operator) {
        case '+':
            return x + y
        case '-':
            return x - y

        case '*':
            return x * y
            break
        case '/':
            return x / y
        default:
            console.log('연산자 잘못썼어요')
    }
}

console.log(calc2('+', 2, 3))