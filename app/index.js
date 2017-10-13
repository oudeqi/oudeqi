
__webpack_public_path__ = process.env.PUBLIC_PATH;

console.log(process.env.NODE_ENV);
console.log(process.env.PUBLIC_PATH);
console.log(__webpack_public_path__);
console.log(process.env.SERVICE_URL);

import './assets/styles/base.css';
import './assets/styles/sprite.css';
import './components/header/header.css';
import './components/index/index.css';
import './components/footer/footer.css';
import Swiper from 'swiper';

$('.nav-item').mouseenter(function(){
	$(this).find('ul').show();
	$(this).find('>a').addClass('active');
}).mouseleave(function(){
	$(this).find('ul').hide();
	$(this).find('>a').removeClass('active');
});

var mySwiper = new Swiper('#bannerSwiper', {
    loop: true,
	// autoplay:5000,
	speed:1000,
	pagination: '#bannerpagination',
	paginationClickable: true,
	grabCursor : true,
	// nextButton: '.arrow-right',
 //    prevButton: '.arrow-left',
	parallax:true
}); 