if ($('#odometerOne').length){
    $(window).scroll(function(){
            if ($('#odometerOne').isOnScreen()) {
                // The element is visible, do something
                setTimeout(function(){
                    odometerOne.innerHTML = 25;
                    odometerTwo.innerHTML = 6;
                    odometerThree.innerHTML = 70;
                    odometerFour.innerHTML = 1;
                }, 700);
            }
        });
    
    $.fn.isOnScreen = function(){
        
        var win = $(window);
        
        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        
    };
}