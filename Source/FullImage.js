/*
---
description: Keeps images at the full width or height of their container, preserving aspect ratio

license: MIT-style

authors:
- Michal Charemza

requires:
- Core/Array
- Core/Options
- Core/Element
- Core/Element.Event
- Core/Element.Style
- Core/Element.Dimensions

provides: [FullImage]

...
*/

var FullImage = new Class({
	
	Implements: [Options],
	
	initialize: function(images, options) {
		this.setOptions(options);
		this.images = $$(images);
		this.images.each(this.initImage.bind(this));
		window.addEvent('resize', this.onResize.bind(this));
	},
	
	initImage: function(img) {
		(img.complete) ? this.firstSetSize(img) : img.addEvent('load', this.firstSetSize.bind(this, img));
	},
	
	onResize: function() {
		this.images.each(this.setSize.bind(this));
	},
	
	// Image might initally cause scroll bars on container, which will shrink it.
	firstSetSize: function(img) {
		this.setSize(img);
		this.setSize(img);
	},
	
	setSize: function(img) {
		var container = img.getParent();
		var containerSize = container.getCoordinates();
		
		img.setStyles({width:'auto', height: 'auto', display: 'block', margin: 'auto'});
		var imageSize = img.getCoordinates();
		
		var imgRatio = imageSize.width / imageSize.height;
		var containerRatio = containerSize.width / containerSize.height;
		
		var height = (imgRatio < containerRatio) ? containerSize.height : imageSize.height * containerSize.width / imageSize.width;
		var width = (imgRatio < containerRatio) ? imageSize.width * containerSize.height / imageSize.height : containerSize.width;
		
		img.setStyles({
			height: height,
			width: width,
			'margin-top': (containerSize.height - height) / 2
		});
		
	}
});