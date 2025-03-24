document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-box');
    const btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');
    let currentSlide = 0;

    document.getElementById('proxim').addEventListener('click', () => {
        slides[currentSlide].classList.remove('ativo');
        btnNav[currentSlide].classList.remove('ativo');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('ativo');
        btnNav[currentSlide].classList.add('ativo');
    });

    document.getElementById('anterior').addEventListener('click', () => {
        slides[currentSlide].classList.remove('ativo');
        btnNav[currentSlide].classList.remove('ativo');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('ativo');
        btnNav[currentSlide].classList.add('ativo');
    });
    btnNav.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            slides[currentSlide].classList.remove('ativo');
            btnNav[currentSlide].classList.remove('ativo');
            currentSlide = index;
            slides[currentSlide].classList.add('ativo');
            btnNav[currentSlide].classList.add('ativo');
        });
    });

    slides[currentSlide].classList.add('ativo');
    btnNav[currentSlide].classList.add('ativo');

});



