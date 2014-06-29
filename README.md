SlickForms v1.0
==========

A small, fast JS package that will allow you to sex up all your form elements with CSS.

Installation
---

SlickForms has no dependencies which makes it fast to execute. (Everything should be done before any elements even become visible on the page).

SlickForms is dead easy to install, simply download the slickForms.js file and reference it in your document. Everything has been done for you so it's just left to you to style up the elements created with CSS. Due to having no dependencies you can call slickForms.js before any other scripts on the page, this will ensure incredibly fast initialisation times.

Supported elements:

- Selects
- Check Boxes
- Radio Buttons

All supported elements retain their default HTML usage, e.g. labels with the "for" attribute.

Future version will include "file" input type.

Methods
---

SlickForms has one method built in for use, this can be called by simply running the following.

	slick.reSkin();

This method will re skin all elements on the page immediately, the method also accepts a parameter which lets you specify which element you would like to re-skin if you don't want to do all form elements on the page.

	slick.reSkin('select');
	slick.reSkin('checkbox');
	slick.reSkin('radio');

Style Guide
---

Below you will find a list of all elements that you need to style with CSS!

	// Selects

	.select-wrap
	.select

	// Check boxes

	.checkbox-wrap
	.checkbox-mark
	.checkbox-mark active

	// Radio Buttons

	.radio-wrap
	.radio-mark
	.radio-mark active

Check out the .scss file in the sass directory for a full example.