//visual 슬라이더
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector("#slider .slide_item:first-child");

function slider() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) { //currentSlide가 참이라면 실행
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling; //다음에 오는 sibling을 리턴
        if (nextSlide) { //리턴된 sibling이 있다면 실행
            nextSlide.classList.add(SHOWING_CLASS); //그 다음 요소에 클래스 추가
        } else { //리턴된 sibling이 없다면 즉 다음 요소가 없다면
            firstSlide.classList.add(SHOWING_CLASS); //첫 번째 요소에 클래스 추가
        }
    } else { //currentSlide가 null이다 즉 거짓이라면 클래스 추가
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slider();
setInterval(slider, 3000);

//jQuery 탑버튼
$(window).scroll(function () { //스크롤 시 나타내기
    if ($(this).scrollTop() > 400) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

// scroll body to 0px on click
$('.top').bind("click", function(e) {
    // Prevents the default action to be triggered.
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});