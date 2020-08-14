var menu = document.querySelectorAll(".gnb li");
var subMenu = document.querySelectorAll("#nav ul");

for (i = 0; i < menu.length; i++) {
    subMenu[i].style.width = menu[i].offsetWidth + "px";
};

//nav, gnb 변수 생성
var gnb = document.querySelector("ul.gnb");
var nav = document.querySelector("#nav");
var navInner = document.querySelector("#nav>.inner");
var header = document.querySelector("#header");

//nav에 transform 스타일 적용
gnb.addEventListener("mouseover", function () {
    nav.classList.add("on");
});

navInner.addEventListener("mouseleave", function () {
    nav.classList.remove("on");
});

//탭메뉴
var tabMenuAll = document.querySelectorAll(".tab-menu>li>a");
var tabContentAll = document.querySelectorAll(".tab-cont");
var tabContent;
var tabMenuOntarget;

for (let i = 0; i < tabMenuAll.length; i++) {
    tabMenuOntarget = tabMenuAll[0]; //tabMenuontarget = 탭 메뉴의 첫 번째 요소 (기본값)
    tabContent = tabContentAll[0]; //tabContent = 탭 컨텐츠의 첫 번재 요소 (기본값)

    tabMenuAll[i].addEventListener("click", (e) => {
        //tabMenuAll 배열의 요소를 클릭 시 e(event)를 매개변수로 받는 함수 생성

        tabContent.classList.contains("on") ? tabContent.classList.remove("on") : null;
        // tabContent 클래스 리스트에 on이 포함되어 있다면 on 제거 아니라면 null

        tabMenuOntarget.classList.contains("on") ? tabMenuOntarget.classList.remove("on") : null;
        // tabMenuOntarget 클래스 리스트에 on이 포함되어 있다면 on 제거 아니라면 null

        tabMenuOntarget = e.target;
        //tabMenuOntarget = 클릭된 요소

        tabMenuOntarget.classList.add("on");
        //tabMenuOntarget(클릭된 요소) 클래스 리스트에 on 추가

        tabContent = document.querySelector("#" + tabMenuOntarget.dataset.id);
        //tabContent = tabMenuOntarget(클릭된 요소)의 data-id와 id가 동일한 요소

        tabContent.classList.add("on");
        //tabContent 클래스 리스트에 on 추가
    });
    /* tabMenuAll[i].addEventListener("click",(e)=>{
            tabMenuOntarget? tabMenuOntarget.classList.remove("on"):null;
            tabMenuOntarget = e.target;
            tabMenuOntarget.classList.add("on");
        });
    // Arrow 함수, ? 축약문 */
};