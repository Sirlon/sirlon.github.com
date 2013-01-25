'use strict';
(function(window, document){
	var ismobile = function(){
		return navigator.userAgent.match(/Android|BlackBerry|Opera Mini|Opera Mobile|IEMobile|iPhone|iPad|iPod/i);
	}
	if(ismobile()) {
		var html = document.getElementsByTagName('html')[0].className += ' mobile';
	}

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
		nav.className += 'flatout';

	var handlerClick = function(event){
		if(nav.classList) {
			nav.classList.toggle('flatout');
		} else {
			nav.className = nav.className.match(/flatout/i) ? nav.className.replace('flatout', '') : nav.className+' flatout';
		}
		
		if(document.location.hash === '#about') {
			document.location.hash = '';
			if(_gaq)
				_gaq.push(['_trackEvent', 'HandleClick', 'Close']);
			event.preventDefault();
		} else {
			if(_gaq)
				_gaq.push(['_trackEvent', 'HandleClick', 'Open']);
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
				_slide.className = _slide.className.replace(/\s?current/, '')+' last';
				setTimeout(function(){
					_slide.style.display = 'none';
					_slide.className = _slide.className.replace(/\s?last/, '');
				}, 300);
		};

		var slide = slides[index];
			slide.style.display = '';
			setTimeout(function(){
				slide.className += ' current';
			}, 10);
			
		
	};
	showSlide(0);

	bind(aboutSection, 'click', function(event){
		currentSlide = currentSlide < slides.length-1  ? (currentSlide+1) : 0;
		showSlide(currentSlide);
		if(_gaq && currentSlide === 1)
			_gaq.push(['_trackEvent', 'AboutClick', 'NextSlide', 'Gotcha']);
	});

	var header = document.querySelector('.page-header'),
		avatar = document.querySelector('.avatar');

	bind(header,'mouseover',function(event){
		if(avatar.classList)
			avatar.classList.add('tada');
	});
	bind(header,'mouseout',function(event){
		if(avatar.classList)
			avatar.classList.remove('tada');
	});

})(window, document);