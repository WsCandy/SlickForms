(function() {
	
	'use strict';

	function slickForms() {

		var self = this;

		self.reSkin = function(element) {

			core_funcs[element].handler();

		}

		var core_funcs = {

			initialise: function() {

				var elements = document.getElementsByTagName('select');

			},

			select: {

				handler: function() {

					alert('select');

				},

				wrap: function() {



				},

				bind: function() {



				}

			},

			checkbox: {

				handler: function() {

					alert('checkbox');

				},

				wrap: function() {



				},

				bind: function() {



				}

			},

			radio: {

				handler: function() {

					alert('radio');

				},

				wrap: function() {


				},

				bind: function() {



				}

			},

			file: {

				handler: function() {

					alert('file');

				},

				wrap: function() {


				},

				bind: function() {



				}

			}

		}

		core_funcs.initialise();

	}

	window.slickForms = slickForms;

})();

var slick = new slickForms();