$(document).ready(function(){
    $(".feedback").css({ "display" : "none"});
    $(".pf").css({"display" : "none"});
    $(".fimg").click(function(){
        $( ".feedback" ).fadeToggle("5 * 500");
    });
    $(".buton-in").click(function(){
        $( ".feedback" ).fadeToggle("5 * 500");
    });
    $(".fimg").hover(function(){
        // $(".buton").css({"display" : "block"});
        $(".pf").css({"display" : "block"});
    });
    $(".fimg").mouseleave(function(){
        $(".pf").css({"display" : "none"});
    })
});