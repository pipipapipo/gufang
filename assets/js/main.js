// Change header background on scroll
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header-wrapper')
    if(window.scrollY > 0){
        header.classList.add('scrolled')
    } else{
        header.classList.remove('scrolled')
    }
})

// Toggle burger menu on small screens
const menuBtn = document.querySelector('.menu-btn');
const menuicon = document.querySelector('.menu-btn i');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () =>{
    if(menuicon.classList.contains('fa-bars')){
        menuicon.classList.remove('fa-bars');
        menuicon.classList.add('fa-x');
        navbar.classList.add('active');
    } else{
        menuicon.classList.remove('fa-x');
        menuicon.classList.add('fa-bars');
        navbar.classList.remove('active');
    }
})

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        menuicon.classList.remove('fa-x');
        menuicon.classList.add('fa-bars');
        navbar.classList.remove('active');
    })
})