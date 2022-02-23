const logo = document.querySelector('#logo-img');



const t1 = new TimelineMax;

t1.fromTo(logo,1.5, { transform: "translateY(-100%)", opacity: "0" }, { transform: "translateY(0)", opacity: "1", ease: Power2.easeInOut },1)