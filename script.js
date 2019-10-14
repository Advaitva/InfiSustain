$('#homebtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:0}, 1600, 'swing');
});
$('#pastbtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:750}, 1400, 'swing');
});
$('#presentbtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:1450}, 1400, 'swing');
 	
});
$('#ideabtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:2350}, 1400, 'swing');
});
$('#futurebtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:3050}, 1400, 'swing');
});
$('#teambtn').on("click",function(){
 	$("html, body").stop().animate({scrollTop:3750}, 1300, 'swing');
});

// function direct(position){
//  	$("html, body").stop().animate({scrollTop:position}, 1000, 'swing', function() { 
// }

// $('.team').hover(function(){
// 	$(this).css({
// 	'cursor': 'pointer',
// 	'boxShadow': '5px 5px 50px red'
// });
// },function(){
// 	$(this).css({
// 	'boxShadow': 'none'
// });
// });


i=2;
setInterval(function(){
	$('#bannerContainer').fadeIn(3000);
	func();
	$('#bannerContainer').fadeOut(3000);
},6000);
function func(){
	if(i==3) i=0;
	
	$('#bannerContainer').html('<img src="banner'+i+'.jpg" alt="banner" class="banners">');
	i++;
}

$('.energyImages p').hide();
$('.presentImg p').hide();

$('.img').on("click",function(event){
	$(this).parent().find('p').fadeIn(1000);
	$(this).stop().slideUp('slow');
	event.stopPropagation();
});

$('.divs').on("click",function(event){
	$('.img',this).slideDown('slow'); /*Or use $(this).find('.img').slideDown*/
	// $('p',this).fadeToggle(400);
	$('p',this).fadeOut(400);
	// $(this).toggleClass('shadow');
});

$('.presentImg').on('click',function(event){
	$(this).parent().find('p').fadeIn(1000);
	$(this).slideUp('slow');
	// $(this).toggleClass('shadow');
	event.stopPropagation()
})

$('.energyImages').on('click',function(){
	$('.presentImg',this).slideDown('slow');
	$('p',this).fadeOut(400);
	// $(this).toggleClass('shadow');
});

$('.imgProf').on('click',function(event){
	$(this).parent().find('p').fadeIn(1000);
	$(this).slideUp('slow');
	// $(this).parent().toggleClass('shadow');
	event.stopPropagation()
})

$('.team').on('click',function(){
	$('div',this).toggleClass('shadow');
	$('.imgProf',this).slideDown('slow');
	// $(this).toggleClass('shadow');
	$('p',this).fadeOut(400);
});

$('#searchBox').hide();
$('.fa-search').on('click',function(){
	$('#searchBox').fadeIn(300);
});
$('.fa-close').on('click',function(){
	$('#searchBox').fadeOut(400);
});

var scrollPos=0;
document.addEventListener('scroll',function(){
	var scrollPresent=window.pageYOffset || document.documentElement.scrollTop;
	if(scrollPresent>scrollPos)
		$('#navContainer').slideUp(100);
	else
		$('#navContainer').slideDown(100);
	// scrollPos = scrollPresent;
	scrollPos = scrollPresent <= 0 ? 0 : scrollPresent; // For Mobile or negative scrolling
}, false);
