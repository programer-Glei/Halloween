let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
}

window.onscroll = () =>{
    searchForm.classList.remove('active')
    navbar.classList.remove('active')

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
}

let swiper = new Swiper(".home-slider",{
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    centeredSlides: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    }
})