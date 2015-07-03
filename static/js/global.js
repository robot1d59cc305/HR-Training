!(function(){
  $(document).ready(function(){
    $('.shape').shape('flip left');

    $('.flexslider').flexslider({
      slideshowSpeed: 3000,
      controlNav: false
    });

    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    setInterval(function(){
      $('.shape').shape('flip left');
    }, 2000)
  })
})()