
gsap.from( '#Moon', {
    scaleY: 0,
    scaleX: 0,
    opacity: 0,
    duration: 2,
    rotate: 10,
    delay: 1,
    ease: "expo",
  });

  
  gsap.from( '#Text', {
    x: -10,
    scaleX: 0.001,
    duration: 1,
    opacity: 0,
    delay: 0,
    ease: "SlowMo",
  });

  gsap.from( '#content', {
    x: -40,
    duration: 1,
    opacity: 0,
    ease: "SlowMo",
  });

  gsap.from( '#B', {
    scaleX: 0.001,
    scaleY: 0.001,
    y: -300,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "expo",
    
  });
  
  gsap.from( '#D', {
    ease: "SlowMo",
    opacity: 0,
    duration: 2,
    delay: 0,
    x:-10,
  });
  
  gsap.to( '#glow', 1, {
    attr: { stdDeviation: 0 },
    repeat: 1,
  });

  gsap.from( '.title', {
    opacity: 0,
    duration: 1.2,
    y:-36,
    ease: "SlowMo",
  });

  gsap.from('.gallery', {
    opacity: 0,
    duration: 1.2,
    y:-36,
    ease: "SlowMo",
  });

  gsap.from('#about', {
    opacity: 0,
    duration: 1,
    y:-26,
    ease: "SlowMo",
  });

  gsap.from('#name', {
    opacity: 0,
    duration: 1,
    y:-26,
    ease: "SlowMo",
  });

  gsap.from('form', {
    opacity: 0,
    duration: 1,
    y:-26,
    ease: "SlowMo",
  });

  lightGallery( document.querySelector('.gallery'), {
  
    mode : 'lg-fade', 
    backdropDuration : 10,
    
  });