import Swiper, { Navigation, Pagination, Autoplay, Controller } from 'swiper';
import { WOW } from 'wowjs';

/**********SWIPER********/
const imgSwiper = new Swiper('.img-swiper', {
	modules: [Pagination, Autoplay, Controller],
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	spaceBetween: 20,
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 10000,
	},
});

const textSwiper = new Swiper('.text-swiper', {
	modules: [Navigation, Autoplay, Controller],
	navigation: {
		nextEl: '.text-swiper-btn--next',
		prevEl: '.text-swiper-btn--prev',
	},
	spaceBetween: 20,
	loop: true,
	grabCursor: true,
});

imgSwiper.controller.control = textSwiper;
textSwiper.controller.control = imgSwiper;
/**********SWIPER********/

/**********MAP********/
const marker = document.createElement('span');
marker.innerHTML = `<svg width="22" height="57" viewBox="0 0 22 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.84382 16.6541L10.9159 1.42195L17.9879 16.6541C21.3976 23.998 21.3976 32.4713 17.9879 39.8152L10.9159 55.0473L3.84381 39.8152C0.43414 32.4713 0.434144 23.998 3.84382 16.6541Z" fill="#FDFAF4" stroke="#AD2D11"/>
<path d="M10.9963 1.4729L10.9963 53.8518" stroke="#AD2D11"/>
</svg>`;
ymaps3.ready.then(init);
function init() {
	const map = new ymaps3.YMap(
		document.getElementById('map'),
		{
			location: {
				center: [30.31372999999999, 59.941177064179215],
				zoom: 12,
			},
		},
		[
			new ymaps3.YMapDefaultSchemeLayer(),
			new ymaps3.YMapDefaultFeaturesLayer(),
			new ymaps3.YMapMarker(
				{
					coordinates: [30.31372999999999, 59.941177064179215],
				},
				marker
			),
		]
	);
}
/**********MAP********/

/**********ANIMATION********/
new WOW().init();
/**********ANIMATION********/
