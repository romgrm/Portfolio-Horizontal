import { preloadImages, preloadFonts, clamp, map } from './utils';
import Cursor from './cursor';
import LocomotiveScroll from 'locomotive-scroll';

// document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });

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




// au dessus de 768px, on active le locomotiv scroll 


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

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }



document.querySelector('.darkButton').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.querySelector('.gallery__content-project h2').classList.toggle('dark')
    document.querySelector('.gallery__content-project p').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner1').classList.toggle('dark')
    
    document.querySelector('.gallery__item-imginner2').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner3').classList.toggle('dark')
    document.querySelector('.gallery__item-imginner4').classList.toggle('dark')
})