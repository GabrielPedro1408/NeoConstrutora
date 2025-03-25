document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-box');
    const btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('ativo'); // Adiciona a classe "ativo" ao slide atual
            } else {
                slide.classList.remove('ativo'); // Remove a classe "ativo" dos outros slides
            }
        });

        btnNav.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('ativo'); // Atualiza o botão de navegação ativo
            } else {
                btn.classList.remove('ativo');
            }
        });
    }

    document.getElementById('proxim').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length; // Vai para o próximo slide
        showSlide(currentSlide);
    });

    document.getElementById('anterior').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Vai para o slide anterior
        showSlide(currentSlide);
    });

    btnNav.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index; // Atualiza o slide atual com base no botão clicado
            showSlide(currentSlide);
        });
    });

    // Mostra o primeiro slide ao carregar a página
    showSlide(currentSlide);
});




