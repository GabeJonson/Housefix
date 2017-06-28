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
    }
  }
})();