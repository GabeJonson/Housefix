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

        if(document.body.clientWidth > 767) self.parallax(sTop);
      });
    },

    parallax: function(number) {
      $('.parallax').css('background-position', '50%' + number / 40 + 'px');
    },

    initMap: function() {
      var uluru = {lat: 50.450046, lng: 30.523772};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
        scrollwheel: false
      });


      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }
})();