
$("#game li").hover(function(){
	$("#game li").css('width','12.5%');
    $(this).css('width','50%');
},function(){
     $("#game li").css('width','20%');
});