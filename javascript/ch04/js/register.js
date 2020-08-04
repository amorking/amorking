//아이디 글자 수 확인
var id = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");


id.onchange = checkId; //id 글자 수 확인
pw1.onchange = checkPw; //비밀번호가 8자리 이상인지 확인
pw2.onchange = comparePw; //비밀번호가 동일한지 확인

function checkId(){
    if(id.value.length < 4||id.value.length > 15){ //입력한 아이디의 글자수가 4자 보다 작거나 또는 15자 보다 크다면
        alert("4~15자리의 영문과 숫자를 입력하세요."); //경고창
        id.select(); //id를 선택, 커서가 제자리로 돌아감
    }
}

function checkPw(){
    if(pw1.value.length < 8){ //입력한 값이 8자 미만이라면
        alert("8자리 이상 입력하세요");
        pw1.value = "";
        pw1.focus(); //focus는 select와 다르게 입력한 내용이 없어지며 포커싱 된다.
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호 확인이 틀립니다.");
        pw2.value = "";
        pw2.focus();
    }
}