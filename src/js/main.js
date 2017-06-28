$(document).ready(function() {
  HouseFix.init();
});

var HouseFix = (function() {
  return{
    init: function() {
      this.sandwitch();
      this.scroll();
    },

    sandwitch: function() {
      $('.sandwitch').click(function() {
        $(this).toggleClass('active');

        $('.nav').slideToggle('fast');
      });
    },

    scroll: function() {
      var self = this;

      $(window).on('scroll', function() {
        var sTop = $(this).scrollTop();

        if(sTop > 10) $('header').addClass('fixed');
        else $('header').removeClass('fixed');

        self.parallax(sTop);
      });
    },

    parallax: function(number) {
      $('.parallax').css('background-position', '50%' + number / 40 + 'px');
    }
  }
})();