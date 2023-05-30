(function ($) {
  let color = null;

  Drupal.behaviors.cardupgrader = {
    attach: function(context, settings) {
      color = settings.color;
      console.log(color);
    }
  }
})(jQuery);
