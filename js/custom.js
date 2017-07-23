
jQuery(document).ready(function($) {
  
  var win = $(window);

  var allMods = $(".books-content");

  var mixCheck = false;

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
    el.addClass("already-visible"); 

    } 
  });

  win.scroll(function(event) {

    if (mixCheck == false) {
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
        // second if
        if    (   el.hasClass("already-visible") == false  ) {
          if ( $(".books-content:last-child").hasClass("come-in")  ) { mixCheck = true; }
            el.addClass("come-in"); 
          } 
        // second if end
        } 
      });
    }           
  });
});