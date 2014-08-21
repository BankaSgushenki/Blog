  $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 150) {
             $('.blog-masthead').addClass('fixed');
             $('#to-top').show();
         }
         else {
             $('.blog-masthead').removeClass('fixed');
             $('#to-top').hide();
         }
    });

$('#to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0}, 500);
            return false;
        });