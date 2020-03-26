gsap.from( '#Moon', {
    scaleX: 0.001,
    scaleY: 0.001,
    x: -450,
    opacity: 0,
    duration: 2,
    rotate: 360,
    ease: "back.out( 1.2)"
  });
  
  gsap.from( '#Text', {
   
    y: -50,
    opacity: 0,
    duration: 2,
    delay: 1,
  });
  
  gsap.from( '#B', {
    y: -100,
    x: -100,
    rotate: 300,
    opacity: 0,
    duration: 1,
    delay: 1,
    
  });
  
  gsap.from( '#D', {
    ease: "power2.out",
    opacity: 0,
    duration: 3.5,
    delay: 2,
  });
  
  gsap.to( '#glow', 1, {
    attr: { stdDeviation: 0 },
    repeat: 1,
  });

  gsap.from( '.title', {
    opacity: 0,
    duration: 1.2,
    y:-36,
  });

  gsap.from('.gallery', {
    opacity: 0,
    duration: 1.2,
    y:-36,
  });

  lightGallery( document.querySelector('.gallery'), {
  
    mode : 'lg-fade', 
    backdropDuration : 10,
    
  });

