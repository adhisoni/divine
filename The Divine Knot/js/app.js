const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const aboutBtn = document.querySelector('#about-buttons-about');
const tabContainer = document.querySelector('.tab-container');
const nav = document.querySelector('.nav');
const sectionOne = document.querySelector('.carousel');
const faders = document.querySelectorAll('.slideAnim');




//--- style on scroll ---//
const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//--- Next Style on Scroll ---//

const appearOptions = {
    threshold: 0.3
}

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('bigEntrance')
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});







//--- On Click EventListeners ---//
hamburger.addEventListener('click', () => {
    menu.classList.toggle('open')
    body.classList.toggle('noscroll')
});

menuLinks.addEventListener('click', () => {
    menu.classList.toggle('open')
});

aboutBtn.addEventListener('click', () => {
    tabContainer.classList.toggle('active')
    // aboutBtn.classList.toggle('active-btn') 
});


