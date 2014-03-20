(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-47943602-1', 'opensourcenola.org');
ga('send', 'pageview');

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
