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
	// tab切换
	// 获取元素
	var tab_list = document.querySelector(".detail_tab_list");
	var lis = tab_list.querySelectorAll("li");
	var items = this.document.querySelectorAll(".item_info");
	// for循环绑定点击事件
	for (var i = 0; i < lis.length; i++) {
		// 开始给5个小li 设置索引号
		lis[i].setAttribute("index", i);
		lis[i].onclick = function () {
			// 上的模块选项卡，点击某一个，当前这一个底色是红色，其余不变，排他思想，修改类名的方式
			// 干掉所有人，其余的li清除class这个类
			for (var i = 0; i < lis.length; i++) {
				lis[i].className = "";
			}
			// 留下我自己
			this.className = "current";
			// 下面的显示内容模块
			var index = this.getAttribute("index");
			// 干掉所有人，让其余的item这些li隐藏
			for (var i = 0; i < items.length; i++) {
				items[i].style.display = "none";
			}
			// 留下我自己，让对应的item——info显示出来
			items[index].style.display = "block";
		};
	}
});
