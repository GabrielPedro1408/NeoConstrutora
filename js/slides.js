// slides
let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnt = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', ()=>{
    imgAtiva++; 
    if(imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mostrarSlider();
})
btnAnt.addEventListener('click', ()=>{
    imgAtiva--;
    if(imgAtiva < 0 ){
        imgAtiva = contadorImg - 1;
    }
    mostrarSlider();
})
let antigaImg = document.querySelectorAll('.slider-container .slider-box.ativo')
    let antigoBtnNav = document.querySelectorAll('btn-nav-box .btn-nav.ativo')
function mostrarSlider(){
    
    antigaImg.classList.remove('ativo')
    antigoBtnNav.classList.remove('ativo')

    imgSlider[imgAtiva].classList.add('ativo')
    btnNav[imgAtiva].classList.add('ativo')
}
btnNav.forEach((btn, indice)=>{
    btn.addEventListener(('click'), ()=>{
        imgAtiva = indice;
        mostrarSlider;
    })
})
