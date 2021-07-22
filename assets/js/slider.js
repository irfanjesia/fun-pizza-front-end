var slideIndex = 1;
showSlides(slideIndex);

// Next/prev control
function plusSlides(index) {
    showSlides(slideIndex += index);
}

function showSlides(index) {
    var slides = document.getElementsByClassName("slides");
    var i;
    if (index > slides.length) {
         slideIndex = 1;
        }
    if (index < 1) {
         slideIndex = slides.length;
        }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}