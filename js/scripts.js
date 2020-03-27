
gsap.from( '#Moon', {
    scaleY: 0,
    scaleX: 0,
    y: -10,
    opacity: 0,
    rotate: -45,
    duration: 1.5,
    ease: "back.out( 0.2)"
  });

  
  gsap.from( '#Text', {
    y: -10,
    scaleY: 0.001,
    duration: 1,
    opacity: 0,
    delay: 1,
    ease: "SlowMo",
  });

  gsap.from( '#content', {
    y: -40,
    duration: 1,
    opacity: 0,
    ease: "SlowMo",
  });

  gsap.from( '#B', {
    scaleX: 0.001,
    scaleY: 0.001,
    y: -300,
    x: 10,
    rotate: 480,
    opacity: 0,
    duration: 1.5,
    delay: 0,
    ease: "back.out( 0.2)",
    
  });
  
  gsap.from( '#D', {
    ease: "SlowMo",
    opacity: 0,
    duration: 1,
    delay: 1,
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
