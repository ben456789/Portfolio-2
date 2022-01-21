$(document).ready(function(){
    $('.section__hero-content').children().each(function (i) {
        var t = $(this);
        setTimeout(function () { t.toggleClass('load'); }, (i + 1) * 75);
    });
});