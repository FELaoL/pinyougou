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
});
