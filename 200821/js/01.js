let slides = document.querySelector('.banner_list'), //slide 컨텐츠를 감싸며 움직임을 적용할 요소
    slide = document.querySelectorAll('.banner_list li'), //slide 컨텐츠
    slideCount = slide.length, //slide 배열의 총 개수
    slideWidth = 723,
    currentIdx = 0,
    preBtn = document.querySelector('.banner_prev'),
    nxtBtn = document.querySelector('.banner_next');

slides.style.width = `${slideWidth * slideCount}px`;

function moveSlide(num) {
    slides.style.left = `${-num*slideWidth}px`
    currentIdx = num;
}

nxtBtn.addEventListener('click', function () {
    if (currentIdx < slide.length-1) {
        moveSlide(currentIdx + 1);
    } else{
        moveSlide(0);
    }
});