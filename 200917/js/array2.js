//반복문을 사용해서 홀수만 프린트
console.log('홀수만 출력')
let arr = [1, 2, 3, 4, 5, 6]
let rest

for (let i = 0; i <= arr.length; i++) {
    rest = arr[i] //배열의 i순서에 있는 값
    if (rest % 2 === 1) { //rest를 2로 나누었을 때 1이라면
        console.log(rest) //출력
    }
}

//3의 배수만 뽑아내기
console.log('3의배수만 출력')
let arr2 = [7, 6, 5, 4, 3, 1, 13, 15, 12, 33]

for (let i = 0; i <= arr2.length; i++) {
    rest = arr2[i] //배열의 i순서에 있는 값
    if (rest % 3 === 0) { //rest 값이 3의 배수라면
        console.log(rest) //출력
    }
}