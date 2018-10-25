$(document).ready(function(e) {
	
$('ul.menu li ul').hide();
$("ul.menu li").hover(function(){
		$(this).find('ul:first').fadeIn().dequeue();
		},function(){
		$(this).find('ul:first').fadeOut().dequeue();
		});

$('.slidshow img:gt(0)').hide();setInterval(function(){
        $('.slidshow :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slidshow');},4000);			

$('#main_box .box').hover(function(){
		$(this).find('.box_text').animate({top: '0px'});
		},function(){
		$(this).find('.box_text').animate({top: '220px'});
		});


});