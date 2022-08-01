function animation(obj, target, singlePx, interval, iscancel, callback) {
	var step = singlePx;
	clearInterval(obj.interval);
	obj.interval = setInterval(function () {
		if (obj.offsetLeft == target) {
			clearInterval(obj.interval);
			callback && callback();
		} else {
			if (iscancel) {
				step = (target - obj.offsetLeft) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
			}
			obj.style.left = obj.offsetLeft + step + "px";
		}
	}, interval);
}
