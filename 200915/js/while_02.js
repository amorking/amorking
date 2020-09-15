let i = 1 //초기값

while (i <= 100) { //i가 100보다 작거나 같을 때 실행 101에 break
    let namuji = i % 7 //1~100 사이에서 7로 나누었을 때 나머지가 짝수가 되는 수 중
    switch (namuji) {
        case 2: //2일 때 $
            console.log(`${i} 나머지: ${namuji}, 기호: $`)
            break
        case 4: //4일 때 &
            console.log(`${i} 나머지: ${namuji}, 기호: &`)
            break
        case 6: //6일 때 #
            console.log(`${i} 나머지: ${namuji}, 기호: #`)
            break
        default:
    }
    i++
}