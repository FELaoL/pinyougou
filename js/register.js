window.addEventListener("load", function () {
	var mobile = document.querySelector("#mobile");
	var qq = document.querySelector("#qq");
	var uname = document.querySelector("#uname");
	var code = document.querySelector("#code");
	var pwd = document.querySelector("#pwd");
	var repwd = document.querySelector("#repwd");
	var mobileReg = /^1[3|4|5|7|8][0-9]{9}$/;
	var qqReg = /^[1-9]\d{4,}$/;
	var unameReg = /^[\u4e00-\u9fa5]{2,8}$/;
	var codeReg = /\d{6}/;
	var pwdReg = /^[a-zA-Z0-9_-]{6,16}$/;

	bindReg(mobile, mobileReg);
	bindReg(qq, qqReg);
	bindReg(uname, unameReg);
	bindReg(code, codeReg);
	bindReg(pwd, pwdReg);

	function bindReg(ele, reg) {
		ele.onblur = function () {
			if (reg.test(this.value)) {
				this.nextElementSibling.className = "success";
				this.nextElementSibling.innerHTML = '<img src="img/success.png" alt="">恭喜您输入正确';
			} else {
				this.nextElementSibling.className = "error";
				this.nextElementSibling.innerHTML = '<img src="img/error.png" alt="">格式不正确，请重新输入';
			}
		};
	}

	repwd.onblur = function () {
		if (this.value === pwd.value) {
			this.nextElementSibling.className = "success";
			this.nextElementSibling.innerHTML = '<img src="img/success.png" alt="">恭喜您输入正确';
		} else {
			this.nextElementSibling.className = "error";
			this.nextElementSibling.innerHTML = '<img src="img/error.png" alt="">密码不一致，请重新输入';
		}
	};
});
