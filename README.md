FullImage
==========

FullImage keeps an image at the full width or height of its container, while preserving aspect ratio. This can be useful in liquid layouts, or for a full-browser-width image gallery.

*Note* If only one dimension of the image container can change (as it typical with liquid layouts), you do not need this class. It is better to use CSS to make that dimension of the image 100%, and the other 'auto'.

![Screenshot](http://github.com/michalc/Fx.Presets/raw/master/Images/Fx.Presets.png)

How to use
----------
	
### For a single image

If your image has id 'myImage'	
	
	new FullImage($('#myImage'));
	
### For multiple images

If your images have class 'fullImages'

	new FullImage($('.fullImages'));


Demos
-----

[Browser-Width Demo](http://yetagain.net/plugins/fullimage/demo/)