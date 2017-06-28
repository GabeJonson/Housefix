$(document).ready(function() {
  HouseFix.init();
});

var HouseFix = (function() {
  return{
    init: function() {
      this.sandwitch();
    },

    sandwitch: function() {
      $('.sandwitch').click(function() {
        $(this).toggleClass('active');

        $('.nav').slideToggle('fast');
      });
    },

    scroll: function() {
      $(window).on('scroll', function() {
        var sTop = $(this).scrollTop();

        if(sTop > 10) $('header').addClass('fixed');
        else $('header').removeClass('fixed');
      })
    }
  }
})();