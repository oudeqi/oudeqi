// __webpack_public_path__ = process.env.PUBLIC_PATH;
console.log(process.env.PUBLIC_PATH);
import './index.css';
import browser from '../../assets/scripts/browser.js';

//当前页面选中
$('[data-flag="index"]').addClass('active');

/*调整附加导航栏宽度*/
var leftNavWidth = $('#spyTarget').width();
$('.affixNav').width(leftNavWidth);

/*滚动监听*/
var dataOffsetTop = $('.navbar').height() + $('.jumbotron').outerHeight();
$('.affixNav').attr('data-offset-top',dataOffsetTop);

$(window).resize(function(){
	/*调整附加导航栏宽度*/
	leftNavWidth = $('#spyTarget').width();
	$('.affixNav').width(leftNavWidth);
	
	/*滚动监听*/
	dataOffsetTop = $('.navbar').height() + $('.jumbotron').outerHeight();
	$('.affixNav').attr('data-offset-top',dataOffsetTop);
});

if(!browser.versions.android && !browser.versions.iPhone && !browser.versions.iPad){

	$.each($('#yd .rela'), function(index,ele) {
		var ewmname = $(ele).attr('data-ewm');
		let src = require('../../assets/images/'+ewmname);
		$(ele).append('<img src="'+src+'" class="erweima" alt="">');                                    
	});

	$('#yd').on("click","a",function(e){
		$('#yd').find('.erweima').stop().animate({
			"width":"0","opacity":"0.4"
		},200,function(){
			$('#yd').find('.erweima').css({"bottom":"50px","margin-left":"0"});
		});
		var bottom =$(this).offset().top - $(document).scrollTop();
		if(bottom > 240){bottom = 240;}else{bottom -= 10;}
		$(this).siblings('.erweima').stop().animate({"width":"200px","opacity":"1","bottom":bottom,"margin-left":"-100px"},300);
	});
	
	$(window).scroll(function(){
		$("#yd .erweima").stop().animate({
			"width":"0","opacity":"0.4"
		},200,function(){
			$("#yd .erweima").css({"bottom":"50px","margin-left":"0"});
		});
	});
	
	$(document).click(function(e){
		if($(e.target).attr("data-tag") != "trigger"){
			$("#yd .erweima").stop().animate({
				"width":"0","opacity":"0.4"
			},200,function(){
				$("#yd .erweima").css({"bottom":"50px","margin-left":"0"});
			});
		}
	});

}else{
	$.each($('#yd .rela .thumbnail'), function(index,ele) {
		var href = $(ele).attr('data-href');
		$(ele).attr('href',href);      
	});
}