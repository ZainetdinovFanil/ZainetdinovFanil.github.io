$(function(){
	$('.top__slider').slick({
	  arrows:false,//убирает стрелки
	  dots:true,//включили шарики
	  autoplay:true,//автосмена
	  fade:true,//плавная анимация
	  responsive: [
		{
			breakpoint: 1200,
			settings:{
				dots:false,
			}
		},
		]
	});
	$('.reviows__reviow').slick({
		arrows: false,
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1116,
			settings:{
		slidesToShow: 3,
			}
		},
		{
			breakpoint: 860,
			settings:{
		slidesToShow: 2,
			}
		},
		{
			breakpoint: 570,
			settings:{
		slidesToShow: 1,
			},
		},
		]
	})
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	})
});