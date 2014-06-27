;(function() {
	
	'use strict';

	function slickForms() {

		var self = this;

		self.reSkin = function(element) {

			if(element) {

				core_funcs[element].handler();
				
			} else {

				core_funcs.initialise();

			}

			return 'All wrapped up, slick!';

		}

		var core_funcs = {

			initialise: function() {

				for(var type in core_funcs) {

					if(core_funcs[type]['handler'])	core_funcs[type]['handler']();

				}

			},

			select: {

				handler: function() {

					var elements = document.getElementsByTagName('select');

					for (var i = 0; i < elements.length; i++) {

						if(elements[i].parentNode.classList.contains('select-wrap')) continue;

						core_funcs['select'].wrap(elements[i]);
						core_funcs['select'].bind(elements[i]);

					}

				},

				wrap: function(element) {

					element.outerHTML = '<div class="select-wrap">'+element.outerHTML+'<div class="select">'+element.value+'</div></div>';

				},

				bind: function(element) {

					element.onchange = function() {

						var dummySelect = element.parentNode.getElementsByClassName('select')[0];

						dummySelect.innerHTML = String(element.value);

					}

				}

			},

			checkbox: {

				handler: function() {

					var elements = document.getElementsByTagName('input');

					for (var i = 0; i < elements.length; i++) {

						if(elements[i].getAttribute('type') != 'checkbox' || elements[i].parentNode.classList.contains('checkbox-wrap')) continue;

						core_funcs['checkbox'].wrap(elements[i]);
						core_funcs['checkbox'].check(elements[i]);
						core_funcs['checkbox'].bind(elements[i]);

					}

				},

				wrap: function(element) {

					element.outerHTML = '<div class="checkbox-wrap">'+element.outerHTML+'<div class="checkbox-mark"></div></div>';

				},

				bind: function(element) {

					element.onchange = function() {

						core_funcs['checkbox'].check(element);

					}

				},

				check: function(element) {

					var marker = element.parentNode.getElementsByClassName('checkbox-mark')[0];

					if(element.checked) {

						marker.classList.add('active');

					} else {

						marker.classList.remove('active');

					}

				} 

			},

			radio: {

				handler: function() {

					var elements = document.getElementsByTagName('input');

					for(var i = 0; i < elements.length; i++) {

						if(elements[i].getAttribute('type') != 'radio' || elements[i].parentNode.classList.contains('radio-wrap')) continue;						

						core_funcs['radio'].wrap(elements[i]);

					}

				},

				wrap: function(element) {

					element.outerHTML = '<div class="radio-wrap">'+element.outerHTML+'<div class="radio-mark"></div></div>';

				},

				bind: function() {



				}

			},

			file: {

				handler: function() {



				},

				wrap: function() {



				},

				bind: function() {



				}

			}

		}

		core_funcs.initialise();

	}

	document.addEventListener('DOMContentLoaded', function() {

		window.slick = new slickForms();
		
	});

})();