const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider__section");
//get the last image as first one
let sliderSectionLast = sliderSection[sliderSection.length -1];

const buttonRight = document.getElementById("button-right");
const buttonLeft = document.getElementById("button-left");
//get te last element and insert it in the beggining 
//insert slidersectionLast in the beggining of slider
//is importat to have an image in the left so the efect will look fine
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

//function to go next img
function next() {
    //to oly get the first position
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    // neet to set margin left as -100% again becouse he fisrt one is now the last
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500); //500 is the equivalent of 0.5s
}


function preview() {
    //to oly get the first position
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    // neet to set margin left as -100% again becouse he fisrt one is now the last
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500); //500 is the equivalent of 0.5s
}

buttonRight.addEventListener('click', function() {
    next();
});

buttonLeft.addEventListener('click', function() {
    preview();
});

//Logic to set automatic movement

setInterval(function(){
 next();
}, 3500);