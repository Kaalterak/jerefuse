var middle = function(){
	var w = $('.middle').width();
	var h = $('.middle').height();

	$('.middle').css({
		'margin-left' : '-'+ w/2 + 'px', 
		'margin-top' : '-'+ h/2 + 'px'
	});
};

$(document).ready(function(){
	middle();
});