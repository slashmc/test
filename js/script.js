

var rightImages = document.querySelector('.item');
var buttonNext = document.querySelector('.slide-control-next');
var buttonPrev = document.querySelector('.slide-control-prev');

buttonNext.onclick = function() {
    plusSlide();
};

buttonPrev.onclick = function() {
    minusSlide();
};
rightImages.onclick = function() {
    currentSlide();
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var rightImg = document.getElementsByClassName("item");
    var leftImg = document.getElementsByClassName("image-container_item");
    if (n > rightImg.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = rightImg.length
    }
    for (i = 0; i < rightImg.length; i++) {
        rightImg[i].style.display = "none";
    }
    for (i = 0; i < leftImg.length; i++) {
        leftImg[i].style.display = "none";
    }
    rightImg[slideIndex - 1].style.display = "block";
    leftImg[slideIndex - 1].style.display = "block";
}