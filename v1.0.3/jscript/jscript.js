$(document).ready(function(e){
	
	$(window).load(function() {    
        var theWindow = $(window),
            $bg = $("#bg"),
            aspectRatio = $bg.width() / $bg.height();
        function resizeBg() {
                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $bg
                        .removeClass()
                        .addClass('bgheight');
                } else {
                    $bg
                        .removeClass()
                        .addClass('bgwidth');
                }
        }
        theWindow.resize(function() {
                resizeBg();
        }).trigger("resize");
});
	
    $('ul.menu li ul').hide();
	$('.circle').find('div').hide();
	
	$('ul.menu li').hover(
			function () {
				$(this).find('ul').fadeIn().dequeue();
			},
			function () {/*все в обратном порядке*/
				$(this).find('ul').fadeOut().dequeue();
			});
	
	$('#right_bar .circle').hover(
			function () {
				$(this).find('#over').fadeIn();
				$(this).find('#over_shadow').fadeIn();
			},
			function () {
				$(this).find('#over').fadeOut();
				$(this).find('#over_shadow').fadeOut();
			});
	
    $('.slidshow img:gt(0)').hide();setInterval(function(){
        $('.slidshow :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slidshow');},5000);	
    
});