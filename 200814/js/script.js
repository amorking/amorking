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
var tabContent = document.querySelectorAll(".tab-cont");
var tabMenuOntarget;

for (let i = 0; i < tabMenuAll.length; i++) {
    // tabMenu[i].addEventListener("click", function () {
    //             for (i = 0; i < tabMenu.length; i++) {
    //                 tabMenu[i].classList.remove("on");
    //                 tabContent[i].classList.remove("on");
    //             };
    // event.target.classList.add("on");
    // document.querySelector("#" + event.target.dataset.id).classList.add("on");
    tabMenuAll[i].addEventListener("click",(e)=>{
        tabMenuOntarget? tabMenuOntarget.classList.remove("on"):null;
        tabMenuOntarget = e.target;
        tabMenuOntarget.classList.add("on");
    });
    // Arrow 함수, ? 축약문
};