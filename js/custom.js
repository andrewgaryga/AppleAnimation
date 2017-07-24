
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

            // Header

            // SUBHEADER
            el.children().children(".sub-header").addClass("sub-header-animation");
            //$(".sub-header").addClass("sub-header-animation");


            // Header Books
            el.children().children(".header-books").addClass("sub-header-animation");
            // $(".header-books").addClass("header-books-animation");


            // BIG img
            el.children().next().children().addClass("big-image-animation");
            // $(".big-image").addClass("big-image-animation");
          } 
        // second if end
        } 
      });
    }           
  });
});