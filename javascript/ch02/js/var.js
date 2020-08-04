var num; //num이라는 변수 선언 (선언만 하고 값은 나중에)
num = 10; //num에 10을 저장
document.write(num + "<br>"); //문서에 변수 num의 값과 <br>문자 삽입

num = 100; //num에 10대신 100을 저장
document.write(num + "<br>"); //문서에 변수 num의 값과 <br>문자 삽입
document.write("num : " + typeof(num) + "<br>"); //typeof를 사용해 어떤 문자열인지 알아볼 수 있다. number 숫자

var userId = 'hello2134' //변수 userId에 문자열 저장 (선언하면서 값을 바로 지정 '초기화'라고 한다.)
//문자열은 홑따옴표도 가능하다
document.write(userId + "<br>");
document.write("userId : " + typeof(userId) + "<br>"); //string 문자열

var run = false; //값 true/false
document.write(run + "<br>");
document.write("run : " + typeof(run)); //boolean 참/거짓