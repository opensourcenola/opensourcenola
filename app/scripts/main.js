$(function(){
  // Sticky nav snapping
  $('#navbar').waypoint('sticky', {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck'
  });
  // Clip video
  $(function(){
    $('.video--wrapper').css({'height':(($(window).height())), 'width':(($(window).width())), 'overflow':'hidden'});
    $(window).resize(function(){
      $('.video--wrapper').css({'height':(($(window).height())), 'width':(($(window).width())), 'overflow':'hidden'});
    });
  });
  // Smooth scroll links if anchor on same page
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});
