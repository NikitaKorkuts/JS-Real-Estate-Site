
$('.slider-single').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	fade: false,
	adaptiveHeight: false,
	infinite: false,
useTransform: true,
	speed: 2100,

});

$('.slider-nav')
	.on('init', function(event, slick) {
		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 7,
		slidesToScroll: 7,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
		}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
	}
		}]
	});

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	$('.slider-nav').slick('slickGoTo', currentSlide);
	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
	$(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
	event.preventDefault();
	var goToSingleSlide = $(this).data('slick-index');

	$('.slider-single').slick('slickGoTo', goToSingleSlide);
});	

function addSliderImgs(images){	

	for(let i = 0; i < images.length; i++){
		$('.add-remove').slick('slickAdd', `<img src="${images[i]}" alt="house_image">`)
	}
}

function removeSliderImgs(){
	let len = document.getElementsByClassName("slick-slide").length/2;
	let slideIndex = len;

	for(let i = 0; i < len; i++) {
		$('.add-remove').slick('slickRemove', slideIndex - 1);

		if (slideIndex !== 0){
			slideIndex--;
		}
	}

	$("slick-track").css("width","6000px");
}

