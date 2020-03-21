gsap.from( '#Moon', {
    scaleX: 0.1,
    scaleY: 0.1,
    x: -400,
    opacity: 0,
    duration: 3,
    rotate: 360,
    ease: "back.out( 1.2)"
  });
  
  gsap.from( '#Text', {
   
    y: 50,
    x: -100,
    opacity: 0,
    duration: 2,
    delay: 3,
  });
  
  gsap.from( '#B', {
    y: -100,
    x: -100,
    rotate: 300,
    opacity: 0,
    duration: 1,
    delay: 3,
    
  });
  
  gsap.from( '#D', {
    ease: "power2.out",
    opacity: 0,
    duration: 4,
    delay: 4,
  });
  
  gsap.to( '#glow', 1, {
    attr: { stdDeviation: 0 },
    repeat: 1,
  });


  lightGallery( document.querySelector('.gallery'), {
  
    mode : 'lg-fade', 
    backdropDuration : 10,
    
  });