var num = 1; //global variable 글로벌 변수, 전역변수 - 이미지 번호

function nextGallery() {
    num++; //num 1씩 증가
    if (num > 7) { //num 값이 7을 초과하면
        num = 1; //num 1로 초기화
    }
    document.getElementById("gallery").src = "images/img" + num + ".jpg"; //문서에 id gallery인 요소의 src를 수정
}

function prevGallery() {
    num--; //num 1씩 감소
    if (num < 1) { //num 값이 1보다 작으면
        num = 7; //num 7로 초기화
    }
    document.getElementById("gallery").src = "images/img" + num + ".jpg"; //문서에 id gallery인 요소의 src를 수정
}