// animate in page content

// fist page animates in after document has loaded
window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('hidden');
  
  const tl = gsap.timeline();

  if(window.matchMedia("(max-width: 900px)").matches) {
    tl.from('header', {opacity: 0, y: -20, duration: 0.5});
  } else {
    tl.from('.li1', {opacity: 0, y: -20, duration: 0.5});
    tl.from('.li2', {opacity: 0, y: -20, duration: 0.5}, '<0.15');
    tl.from('.li3', {opacity: 0, y: -20, duration: 0.5}, '<0.15');
    tl.from('.li4', {opacity: 0, y: -20, duration: 0.5}, '<0.15');
  }
  tl.from("h1", {opacity: 0, y: -20, duration: 0.5}, '<0.15');
  tl.from("h2", {opacity: 0, y: -20, duration: 0.5}, '<0.15');
  tl.from("#location", {opacity: 0, y: -20, duration: 0.5}, '<0.15');
  tl.from("#hero-content a", {opacity: 0, y: -20, duration: 0.5}, '<0.15');

  const fades = Array.from(document.getElementsByClassName('fade'));

  const checkView = () => {
    for(let i = 0; i < fades.length; i++) {
      onInView(fades[i]);
    }
  };

  checkView();

  window.addEventListener('scroll', checkView);
});

const onInView = (section) => {
  if(section.getBoundingClientRect().top - window.innerHeight < -100) {
    if(!section.classList.contains('fade-after')) {
      section.classList.add('fade-after');
    }
  }
};

// toggle mobile nav

const toggleNav = () => {
  document.getElementById('mob-nav').classList.toggle('open-mob-nav');
};

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', toggleNav);

const mobLis = Array.from(document.getElementsByClassName('mob-li'));
mobLis.forEach(li => li.addEventListener('click', toggleNav));





