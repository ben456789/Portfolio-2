
$(document).ready(function(){
    $('.content-row .key-feature').each(function (i) {
        var t = $(this);
        setTimeout(function () { t.addClass('shimmer'); }, (i + 1) * 450);
    });
});