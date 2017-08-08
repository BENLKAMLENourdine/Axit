$(window).scroll(function(){
   var $navbar = $('.navbar');
    if($(this).scrollTop() >= $navbar.height()){
        $navbar.addClass('scrolled');
    }
    else{
        $navbar.removeClass('scrolled');
    }
});
var brandColors = ["3b5998","1da1f2","dd4b39","bd081c","e1306c","eb4924","f26522"];

$('.social-media ul li').hover(function(){
   var index = $(this).index('.social-media ul li'); 
    $(this).css("color","#" + brandColors[index]);
}).mouseleave(function(){
    $(this).css("color","#ccc");
});

$('.tabs ul li').click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');
    $('.' + $(this).data('value')).show().siblings().hide();
});