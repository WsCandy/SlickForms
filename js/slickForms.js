;(function() {
	
	'use strict';

	function slickForms() {

		var self = this;

		self.reSkin = function(element) {

			core_funcs[element].handler();

			return 'All wrapped up, slick!';

		}

		var core_funcs = {

			initialise: function() {

				for(var type in core_funcs) {

					if(core_funcs[type]['handler']) {

						core_funcs[type]['handler']();

					}

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

						if(elements[i].getAttribute('type') != 'checkbox') continue;

						core_funcs['checkbox'].wrap(elements[i]);

					}

				},

				wrap: function(element) {

					console.log(element);

				},

				bind: function() {



				}

			},

			radio: {

				handler: function() {

					

				},

				wrap: function() {



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