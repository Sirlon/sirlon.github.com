(function(window, document){

	var bind = function(element, event, func) {

		if (element.addEventListener) {
			element.addEventListener(event, func, false); 
		} else if (element.attachevent) {
			element.attachEvent('on'+event, func);
		}
	}

	var nav = document.getElementsByTagName('nav')[0],
		pullHandle = document.querySelector('.pulldown-handle');

	if(document.location.hash === '#about')
		nav.classList.add('flatout');

	var handlerClick = function(event){

		nav.classList.toggle('flatout');
		if(document.location.hash === '#about') {
			document.location.hash = '';

			event.preventDefault();
		}
	};

	bind(pullHandle,'click', handlerClick);

	var slides = document.querySelectorAll('.slide'),
		aboutSection = document.querySelector('#about .text-wrapper'),
		currentSlide = 0;

	var showSlide = function(index) {
		var oldCurrents = document.querySelectorAll('.slide.current');

		for (var i = oldCurrents.length - 1; i >= 0; i--) {
				var _slide = oldCurrents[i];
				_slide.classList.remove('current');
				_slide.classList.add('last');
				setTimeout(function(){
					_slide.style.display = 'none';
					_slide.classList.remove('last');
				}, 300);
		};

		var slide = slides[index];
			slide.style.display = '';
			setTimeout(function(){
				slide.classList.add('current');
			}, 10);
			
		
	};
	showSlide(0);

	bind(aboutSection, 'click', function(event){
		currentSlide = currentSlide < slides.length-1  ? (currentSlide+1) : 0;
		showSlide(currentSlide);
	});

	var header = document.querySelector('.page-header'),
		avatar = document.querySelector('.avatar');

	bind(header,'mouseover',function(event){
		avatar.classList.add('tada');
	});
	bind(header,'mouseout',function(event){
		avatar.classList.remove('tada');
	});

})(window, document);