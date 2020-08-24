//visual 슬라이더

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