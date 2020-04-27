$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
    $.getScript('/scripts/odometer-usage.js');

    $('.content-row .key-feature').each(function (i) {
        var t = $(this);
        setTimeout(function () { t.addClass('shimmer'); }, (i + 1) * 1000);
    });
    
    
    setTimeout(function() { 
      $("body").addClass('load');
    }, 100);
    inViewport();
});
  
$(window).scroll(function(){
    inViewport();
});

$(window).resize(function(){
    inViewport();
});

function inViewport(){
    $('.section-center, .section--full-height, .section').each(function(){
        var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();
        
        if( divPos < topOfWindow+700 ){
            $(this).addClass('in-view');
            $('.exp-list li').each(function (i) {
                var t = $(this);
                setTimeout(function () { t.addClass('grid-load'); }, (i + 1) * 100);
            });
        }
    });
}