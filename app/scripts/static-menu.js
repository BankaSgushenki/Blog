  $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 150) {
             $('.blog-masthead').addClass('fixed');
         }
         else {
             $('.blog-masthead').removeClass('fixed');
         }
    });
