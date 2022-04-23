window.addEventListener("load", function () {
	var preview_img = document.querySelector(".preview_img");
	var mask = document.querySelector(".mask");
	var big = document.querySelector(".big");
	var bigImg = document.querySelector(".bigImg");
	preview_img.addEventListener("mouseover", function () {
		mask.style.display = "block";
		big.style.display = "block";
	});
	preview_img.addEventListener("mouseout", function () {
		mask.style.display = "none";
		big.style.display = "none";
	});
	preview_img.addEventListener("mousemove", function (e) {
		var x = e.pageX - preview_img.offsetLeft - mask.offsetWidth / 2;
		var y = e.pageY - preview_img.offsetTop - mask.offsetHeight / 2;
		var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
		var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
		if (x < 0) {
			x = 0;
		} else if (x > maskMaxX) {
			x = maskMaxX;
		}
		if (y < 0) {
			y = 0;
		} else if (y > maskMaxY) {
			y = maskMaxY;
		}
		mask.style.left = x + "px";
		mask.style.top = y + "px";
		// 大图移动
		// bigImg.offsetWidth - big.offsetWidth
		// maskMaxX
		bigImg.style.left = (-x * (bigImg.offsetWidth - big.offsetWidth)) / maskMaxX + "px";
		bigImg.style.top = (-y * (bigImg.offsetHeight - big.offsetHeight)) / maskMaxY + "px";
	});
});
