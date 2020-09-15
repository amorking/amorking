let height = prompt('세로값')
let i = 1 //반복 변수
let j = 1 //가로로 반복될 변수
let line = "" //스트링

while (i <= height) { //i의 값이 height보다 작거나 같다면 반복
    line = ""
    //line 초기화
    j = 1
    //j 1로 초기화
    while (j <= i) { //j의 값이 i보다 작거나 같다면 반복
        let namuji = j % 2
        //j를 2로 나누었을 때 나머지
        switch (namuji) { //namuji의 값
            case 0: //namuji 값이 0 즉 짝수일 때 실행
                line += "%"
                //line에 %를 더한다
                break
                //switch 종료
            case 1: //namuji 값 1 즉 홀수일 때 실행
                line += "*"
                //line에 *를 더한다
                break
                //switch 종료
        }
        j++
        //j 1씩 증가
    }
    console.log(line)
    //j값이 돌고 나온 라인을 콘솔에 출력
    i++
    //i 1씩 증가
}