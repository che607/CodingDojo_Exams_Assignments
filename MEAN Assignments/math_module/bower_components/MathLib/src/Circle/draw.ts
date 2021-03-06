/**
 * Draw the circle onto the screen.
 *
 * @param {Screen} screen The screen to draw onto.  
 * @param {object} options Optional drawing options  
 * @return {Circle} Returns the circle for chaining
 */
draw(screen, options) {
	if (Array.isArray(screen)) {
		var circle = this;
		screen.forEach(function (x) {
			x.circle(circle, options);
		});
	}
	else {
		screen.circle(this, options);
	}
	return this;
}