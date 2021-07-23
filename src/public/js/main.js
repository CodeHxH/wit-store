$(document).ready(function () {
	$('.carrousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
	});
});

AOS.init();
