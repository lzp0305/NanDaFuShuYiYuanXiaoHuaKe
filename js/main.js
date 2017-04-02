// 版权
console.log("技术支持：云端科技（www.yunduancn.com）");
console.log("前端制作：李志鹏（www.lzp0305.com）");
console.log("完成时间：2017-03-30");
// banner 轮播图
var swiper1 = new Swiper('.container1',{
	simulateTouch : false,
	autoplay: 3000,
	loop: true,
});
$('.arrow-left').on('click', function(e){
	e.preventDefault();
	swiper1.swipePrev();
	swiper1.startAutoplay();
});
$('.arrow-right').on('click', function(e){
	e.preventDefault();
	swiper1.swipeNext();
	swiper1.startAutoplay();
});
// 新闻中心左侧轮播图
var swiper2 = new Swiper('.container2',{
	simulateTouch : false,
	pagination: '.pagination2',
	autoplay: 2500,
	loop: true,
	paginationClickable: true,
});
$('.news-left').on('click', function(e){
	e.preventDefault();
	swiper2.swipePrev();
	swiper2.startAutoplay();
});
$('.news-right').on('click', function(e){
	e.preventDefault();
	swiper2.swipeNext();
	swiper2.startAutoplay();
});
// 新闻中心右侧选项卡
var swiper3 = new Swiper('.nt',{
	simulateTouch : false,
	onlyExternal : true,
	speed:500
});
$(".tabs a").on('mousedown',function(e){
	e.preventDefault();
	$(".tabs .tab-on").removeClass('tab-on');
	$(this).addClass('tab-on');
	swiper3.swipeTo( $(this).index() );
});
$(".tabs a").click(function(e){
	e.preventDefault();
});
$('.nl').on('mouseover',function(e){
	e.preventDefault();
	$('.nl-on').removeClass('nl-on');
	$(this).addClass('nl-on');
});
$('.tab-btn').on('click',function(){
	$('.wrapper3').find('ul li:first-child').addClass('nl-on');
});
// 医生手风琴切换
$('.ys-li').on('mouseover',function(){
	$(this).prevAll('.ys-li').children('.show').removeClass('show');
	$(this).prevAll('.ys-li').children('.ys-div').addClass('hide');
	$(this).nextAll('.ys-li').children('.show').removeClass('show');
	$(this).nextAll('.ys-li').children('.ys-div').addClass('hide');
	$(this).prevAll('.ys-li').css('width','148px');
	$(this).nextAll('.ys-li').css('width','148px');
	$(this).children('.hide').removeClass('hide');
	$(this).children('.ys-div').addClass('show');
	$(this).css('width','494px');
});
$(window).on('load',function(){
	$('.hide').parent('.ys-li').css('width','148px');
});
// 质控中心左侧选项卡
var swiper4 = new Swiper('.container4',{
	simulateTouch : false,
	mode: 'vertical',
});
$('.zksp').on('click', function(e){
	e.preventDefault();
	swiper4.swipeTo(0, 500, false);
});
$('.zkkj').on('click', function(e){
	e.preventDefault();
	swiper4.swipeTo(1, 500, false);
});
$('.zkan').on('click',function(){
	$('.zkan-on').removeClass('zkan-on');
	$(this).addClass('zkan-on');
});
// 协作中心轮播图
var swiper5 = new Swiper('.container5',{
	simulateTouch : false,
	slidesPerView: 3,
	loop: true,
});
$('.coll-l').on('click', function(e){
	e.preventDefault();
	swiper5.swipePrev();
});
$('.coll-r').on('click', function(e){
	e.preventDefault();
	swiper5.swipeNext();
});
// 友情链接轮播图
var swiper6 = new Swiper('.container6',{
	simulateTouch : false,
	slidesPerView: 5,
	loop: true,
});
$('.link-l').on('click', function(e){
	e.preventDefault();
	swiper6.swipePrev();
});
$('.link-r').on('click', function(e){
	e.preventDefault();
	swiper6.swipeNext();
});

$('.xw-btn').on('click',function(){
	$('.xw-btn-on').removeClass('xw-btn-on');
	$(this).addClass('xw-btn-on');
});
// 如果当前页是第一页那么向左按钮锁定
if ($('.xw-fp').hasClass('xw-btn-on')) {
	$('.xw-btn-pre').css('color','#000');
	$('.xw-btn-pre').hover(function(){
		$(this).css('background','#fff');
		$(this).css('color','#000');
	},function(){
		$(this).css('background','#fff');
		$(this).css('color','#000');
	});
	$('.xw-btn-pre').attr('disabled',true);
} else { 
	$('.xw-btn-pre').css('color','#0178bc');
	$('.xw-btn-pre').hover(function(){
		$(this).css('background','#0178bc');
		$(this).css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$(this).css('color','#0178bc');
	});
};

// 如果当前页是最后一页那么向右按钮锁定
if ($('.xw-lp').hasClass('xw-btn-on')) {
	$('.xw-btn-nex').css('color','#000');
	$('.xw-btn-nex').hover(function(){
		$(this).css('background','#fff');
		$(this).css('color','#000');
	},function(){
		$(this).css('background','#fff');
		$(this).css('color','#000');
	});
	$('.xw-btn-nex').attr('disabled',true);
} else { 
	$('.xw-btn-nex').css('color','#0178bc');
	$('.xw-btn-nex').hover(function(){
		$(this).css('background','#0178bc');
		$(this).css('color','#fff');
	},function(){
		$(this).css('background','#fff');
		$(this).css('color','#0178bc');
	});
};


var swiper7 = new Swiper('.ny-rb',{
	simulateTouch : false,
	mode: 'vertical',
});
$('.ny-lb1').on('click', function(e){
	e.preventDefault();
	swiper7.swipeTo(0, 500, false);
});
$('.ny-lb2').on('click', function(e){
	e.preventDefault();
	swiper7.swipeTo(1, 500, false);
});
$('.ny-lb3').on('click', function(e){
	e.preventDefault();
	swiper7.swipeTo(2, 500, false);
});
$('.ny-lb').on('click',function(){
	$('.ny-lb-on').removeClass('ny-lb-on');
	$(this).addClass('ny-lb-on');
});







