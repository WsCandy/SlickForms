SlickForms v1.2.4
==========

IE8 Implementation.

#####Release History

https://github.com/WsCandy/SlickForms/releases

Installation
---

SlickForms has no dependencies which makes it fast to execute. (Everything should be done before any elements even become visible on the page).

SlickForms is dead easy to install, simply download the slickForms.js file and reference it in your document. Everything has been done for you so it's just left to you to style up the elements created with CSS. Due to having no dependencies you can call slickForms.js before any other scripts on the page, this will ensure incredibly fast initialisation times.

If you're using bower or ppm you can simply run 

	bower install propcom-slick

Supported elements:

- Selects
- Check Boxes
- Radio Buttons
- File input types

All supported elements retain their default HTML usage, e.g. labels with the "for" attribute. File inputs will output all attached files names if "multiple" is used.

Select Labels
---

To use simply do the following:

	data-label="Your text!"

Place it on the select element itself.

Methods
---

SlickForms has one method built in for use, this can be called by simply running the following.

	slick.reSkin();

This method will re skin all elements on the page immediately, the method also accepts a parameter which lets you specify which element you would like to re-skin if you don't want to do all form elements on the page.

	slick.reSkin('select');
	slick.reSkin('checkbox');
	slick.reSkin('radio');
	slick.reSkin('file');

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

	// File Input

	.file-wrap
	.file-button
	.file-label

Check out the .scss file in the sass directory for a full example.
