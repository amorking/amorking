//배열: 대괄호 사용, 데이터를 나열
//자동적으로 접근 가능한 인자가 정해지며 0부터 시작
let arr = [3, 4, 5, 6, 2, 3, 4, 5, 8, 6, 30, 5, 10]
console.log(arr)
console.log(arr[4])

//배열 안에 배열
arr = [
    [2, 3],
    [4, 5]
]
console.log(arr[0])

//객체 object: 중괄호 사용
//접근 가능한 key와 value를 지정할 수 있다.
let dic = {
    'myName': 'honggildong',
    'age': 19
}
console.log(dic['myName'])
console.log(dic['age'])

dic = {
    0: 'potato',
    1: 19
}
console.log(dic[0])

//객체 안에 객체
dic = {
    'myName': {
        'firstName': 'po',
        'lastName': 'tato'
    },
    'age': 19
}

console.log(dic['myName']['firstName'],dic['age'])