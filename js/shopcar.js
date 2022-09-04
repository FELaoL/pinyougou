$(document).ready(function () {
	// 1.全选 全不选功能模块
	// 就是把全选按钮（checkbox_header）的状态赋值给 三个小按钮（checkbox_shop）就可以了
	// 事件可以使用change
	$(".checkbox_header, .checkbox_footer").change(function () {
		console.log($(this).prop("checked"));
		$(".checkbox_header, .checkbox_footer, .checkbox_shop").prop("checked", $(this).prop("checked"));
		if ($(this).prop("checked")) {
			// 让所有的商品添加 bgc 类名
			$(".card-item").addClass("bgc");
		} else {
			// 移除bgc类名
			$(".card-item").removeClass("bgc");
		}
	});
	// 2.如果小复选框被选中的个数等于6，就应该把全选按钮选上，否则全选按钮不选。
	$(".checkbox_shop").change(function () {
		// if (被选中的小的复选框的个数 === 6) {
		// 	就要选中全选按钮;
		// } else {
		// 	不要选中全选按钮;
		// }
		// console.log($(".checkbox_shop:checked").length, $(".checkbox_shop").length);
		// $(".checkbox_shop").length 这个是所有的小复选框的个数
		if ($(".checkbox_shop:checked").length === $(".checkbox_shop").length) {
			$(".checkbox_header, .checkbox_footer").prop("checked", true);
		} else {
			$(".checkbox_header, .checkbox_footer").prop("checked", false);
		}
		if ($(this).prop("checked")) {
			// 让当前的商品添加 bgc 类名
			$(this).parents(".card-item").addClass("bgc");
		} else {
			// bgc 移除
			$(this).parents(".card-item").removeClass("bgc");
		}
	});
	// 3.增减商品数量模块，首先声明一个变量，当我们点击+号（increment),就让这个值++,然后赋值给文本框
	// 减法
	$(".reduce").click(function () {
		// 得到当前兄弟文本框的值
		var n = $(this).siblings(".num").val();
		console.log(typeof n, n);
		if (n - 0 === 1) {
			return false;
		}
		// console.log(n);
		n--;
		$(this).siblings(".num").val(n);
		// parents(".shop_num") 返回指定的祖先元素
		// 3.计算小计模块 根据文本框的值 乘以 当前商品的价格 就是 商品的小计
		// 当前商品的价格 p
		var p = $(this).parents(".shop_num").siblings(".shop_price").html();
		console.log(p);
		// 小计模块
		// toFixed(2) 可以让我们保留2位小数
		$(this)
			.parents(".shop_num")
			.siblings(".shop_total_price")
			.html((p * n).toFixed(2));
		getSum();
	});
	// 加
	$(".add").click(function () {
		// 得到当前兄弟文本框的值
		var n = $(this).siblings(".num").val();
		console.log(typeof n, n);
		// console.log(n);
		n++;
		$(this).siblings(".num").val(n);
		// parents(".shop_num") 返回指定的祖先元素
		// 3.计算小计模块 根据文本框的值 乘以 当前商品的价格 就是 商品的小计
		// 当前商品的价格 p
		var p = $(this).parents(".shop_num").siblings(".shop_price").html();
		console.log(p);
		// 小计模块
		// toFixed(2) 可以让我们保留2位小数
		$(this)
			.parents(".shop_num")
			.siblings(".shop_total_price")
			.html((p * n).toFixed(2));
		getSum();
	});
	// 4.用户修改文本框的值 计算小计模块
	$(".num").change(function () {
		// 先得到文本框里面的值 乘以 当前商品的单价
		var n = $(this).val();
		// 当前商品的单价
		var p = $(this).parents(".shop_num").siblings(".shop_price").html();
		console.log(p);
		$(this)
			.parents(".shop_num")
			.siblings(".shop_total_price")
			.html((p * n).toFixed(2));
		getSum();
	});
	// 5.计算总计和总额模块
	getSum();
	function getSum() {
		var count = 0; // 计算总件数
		var money = 0; // 计算总价钱
		$(".num").each(function (i, ele) {
			count += parseInt($(ele).val());
		});
		$(".total_line1 em").text(count);
		$(".shop_total_price").each(function (i, ele) {
			money += parseFloat($(ele).text());
		});
		$(".total_line1 em:last-child").text("¥" + money.toFixed(2));
	}
});
