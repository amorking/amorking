//상세 설명 보기 버튼을 누르면 #open 버튼은 숨기고 #desc 설명을 보이기
function showText() {
    document.querySelector("#desc").style.display = "block"; //#desc의 style중 display를 block으로 변경
    document.querySelector("#open").style.display = "none"; //#open의 style중 display를 none으로 변경
}

//상세 설명 닫기 버튼을 누르면 #desc 설명을 숨기고 #open 버튼을 보이기
function hideText() {
    document.querySelector("#desc").style.display = "none"; //#desc의 style중 display를 none으로 변경
    document.querySelector("#open").style.display = "block"; //#open의 style중 display를 block으로 변경
}