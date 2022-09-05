window.addEventListener("load", function () {
	//1.鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
	var focus = document.querySelector(".focus");
	var left = focus.querySelector(".left");
	var right = focus.querySelector(".right");

	var focusWidth = focus.offsetWidth;
	focus.addEventListener("mouseenter", function () {
		left.style.display = "block";
		right.style.display = "block";
		// ​	6.鼠标经过，轮播图模块， 自动播放停止。
		clearInterval(timer);
		timer = null;
	});
	focus.addEventListener("mouseleave", function () {
		left.style.display = "none";
		right.style.display = "none";
		timer = setInterval(() => {
			right.click();
		}, 2000);
	});

	// 4.点击小圆圈，可以播放相应图片。
	var ul = focus.querySelector("ul");
	var ol = focus.querySelector(".circle");
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement("li");
		li.setAttribute("index", i);
		ol.appendChild(li);
		li.addEventListener("click", function () {
			// 排他思想
			for (var j = 0; j < ol.children.length; j++) {
				ol.children[j].className = "";
			}
			this.className = "current";

			var index = this.getAttribute("index");
			num = circle = index;
			animation(ul, -index * focusWidth, 0, 15, true);
		});
	}
	ol.children[0].className = "current";
	// ​	2.点击右侧按钮一次，图片往左播放一张，以此类推，左侧按钮同理。
	// ​	3.图片播放的同时，下面小圆圈模块跟随一起变化。
	var num = 0;
	var circle = 0;
	var flag = true;
	var first = ul.children[0].cloneNode(true);
	ul.append(first);
	right.addEventListener("click", function () {
		if (flag) {
			flag = false;
			if (num === ol.children.length) {
				num = 0;
				ul.style.left = 0;
			}
			num++;
			circle++;
			if (circle === ol.children.length) {
				circle = 0;
			}
			animation(ul, -num * focusWidth, 0, 15, true, function () {
				flag = true;
			});

			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = "";
			}
			ol.children[circle].className = "current";
		}
	});

	left.addEventListener("click", function () {
		if (flag) {
			flag = false;
			if (num === 0) {
				num = ol.children.length;
				ul.style.left = -num * focusWidth + "px";
			}
			num--;
			circle--;
			if (circle < 0) {
				circle = ol.children.length - 1;
			}
			animation(ul, -num * focusWidth, 0, 15, true, function () {
				flag = true;
			});

			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = "";
			}
			ol.children[circle].className = "current";
		}
	});
	// ​	5.鼠标不经过轮播图，轮播图也会自动播放图片。
	var timer = setInterval(() => {
		right.click();
	}, 2000);
});
$(function () {
	// 当我们点击了小li 此时不需要执行，页面滚动事件 页面滚动事件里面的li的背景选择，添加current
	// 节流阀 互斥锁
	var flag = true;
	// 1.显示和隐藏电梯导航
	var toolTop = $(".recommend").offset().top;
	console.log(toolTop);
	toggleTool();

	function toggleTool() {
		console.log($(document).scrollTop());
		if ($(document).scrollTop() >= toolTop) {
			$(".fixedtool").fadeIn();
		} else {
			$(".fixedtool").fadeOut();
		}
	}
	$(window).scroll(function () {
		toggleTool();
		// 3.页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
		if (flag) {
			$(".floor > div").each(function (i, ele) {
				if ($(document).scrollTop() >= $(ele).offset().top) {
					console.log(i);
					$(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
				}
			});
		}
	});
	// 2.点击电梯导航页面可以滚动到相应内容区域
	$(".fixedtool li").click(function () {
		flag = false;
		console.log($(this).index());
		// 当我们每次点击小li 就需要计算出页面要去往的位置
		// 选出对应索引号的内容区的盒子，计算它的offset().top
		var current = $(".floor > div").eq($(this).index()).offset().top;
		console.log(current);
		// 页面动画滚动效果
		$("body, html")
			.stop()
			.animate(
				{
					scrollTop: current
				},
				function () {
					flag = true;
				}
			);
		// 点击之后，让当前的小li，添加current类名，姐妹移除current 类名
		$(this).addClass("current").siblings().removeClass();
	});
});
