import { preloadImages, preloadFonts, clamp, map } from './utils';
import Cursor from './cursor';
import LocomotiveScroll from 'locomotive-scroll';

// PRELOAD 

Promise.all([preloadImages('.gallery__item-imginner'), preloadFonts('vxy2fer')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // Mouse effects on all links and others
    [...document.querySelectorAll('a')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
});




// Activation of locomotiv Scroll above 768px 


if (window.innerWidth > 768) {
    // Initialize Locomotive Scroll (horizontal direction)
    const lscroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'horizontal'
    });

    // Preload images and fonts
    Promise.all([preloadImages('.gallery__item-imginner'), preloadFonts('vxy2fer')]).then(() => {
        // Remove loader (loading class)
        document.body.classList.remove('loading');

        // Initialize custom cursor
        const cursor = new Cursor(document.querySelector('.cursor'));

        // Mouse effects on all links and others
        [...document.querySelectorAll('a')].forEach(link => {
            link.addEventListener('mouseenter', () => cursor.enter());
            link.addEventListener('mouseleave', () => cursor.leave());
        });
    });
}


// DARK MODE 
const button = document.querySelector('.darkButton'); 
button.addEventListener('click', () => {
    
    const content = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = content == 'light' ? 'dark' : 'light';
    
    document.body.classList.toggle('dark')
    document.querySelector('.gallery__item-imginner1').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner2').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner3').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner4').classList.toggle('dark')
    document.querySelectorAll('.gallery__content-project h2').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.gallery__content-project p').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.square span:nth-child(1)').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.square span:nth-child(2)').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.square span:nth-child(3)').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.content-stack').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.square:hover .content-stack').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelector('.gallery__item-stack').classList.toggle('dark')
    document.querySelectorAll('.gallery__item-link').forEach(elem => {
        elem.classList.toggle('dark')
    })
    document.querySelectorAll('.gallery__item-link:focus, .gallery__item-link:hover').forEach(elem => {
        elem.classList.toggle('dark')
    })
    
    localStorage.setItem("dark", "1");
})
// STORAGE
// Set user theme
const userTheme = localStorage.getItem("dark");
if (userTheme) {
    document.body.classList.add(userTheme);
}
else {
    // Or detect system preference
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.add(preferDark ? "dark" : "light");
}