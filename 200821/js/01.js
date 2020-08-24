//visual 슬라이더
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide_item:first-child");

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

//collection 밑 banner 슬라이더
let slides = document.querySelector('.banner_list'), //움직임을 적용할 요소
    slide = document.querySelectorAll('.banner_list li'), //slide 컨텐츠
    slideCount = slide.length, //slide 배열의 총 개수
    slideWidth = 723,
    currentIdx = 0,
    paging = document.querySelector('#banner_count'),
    preBtn = document.querySelector('.banner_prev'),
    nxtBtn = document.querySelector('.banner_next');

slides.style.width = `${slideWidth * slideCount}px`; //slides의 넓이는 컨텐츠의 너비*개수
paging.innerHTML = `${currentIdx + 1} / ${slide.length}`;

function moveSlide(num) {
    slides.style.left = `${-num*slideWidth}px`;
    currentIdx = num;
    paging.innerHTML = `${currentIdx + 1} / ${slide.length}`;
}

nxtBtn.addEventListener('click', function () {
    if (currentIdx < slide.length - 1) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

preBtn.addEventListener('click', function () {
    if (currentIdx < 1) {
        moveSlide(slide.length - 1);
    } else {
        moveSlide(currentIdx - 1);
    }
});

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