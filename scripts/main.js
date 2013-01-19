(function(window, document){
	var nav = document.getElementsByTagName('nav')[0],
		pullHandle = document.querySelector('.pulldown-handle');

	if(document.location.hash === '#about')
		nav.classList.add('flatout');
	//wsrtrt
	var handlerClick = function(event){

		nav.classList.toggle('flatout');
		if(document.location.hash === '#about') {
			document.location.hash = '';

			event.preventDefault();
		}
	};

	if(pullHandle.addEventListener) {
		pullHandle.addEventListener('click', handlerClick, false);
	} else {
		pullHandle.attachEvent('onclick', handlerClick);
	}
})(window, document);