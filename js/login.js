$(function(){
	//获取cookie;
	var _cookie = document.cookie;
	//将cookie转为json对象;
	var ck = JSON.parse(_cookie.split('=')[1]);
	//console.log(_cookie);
	var $username = $('#username');
	var $psw = $('#password');
	var $submit = $('.main input:button');
	//点击提交按钮，进行验证;
	$submit.on('click',function(){
		var tUsername = $username.val();
		var tPsw = $psw.val();
		//遍历cookie,进行判断是否已注册;
		$.each(ck,function(idx,obj){						
			if(tUsername == obj.username && tPsw == obj.psw){
				alert('登录成功');
			}else{
				alert('请先注册');
			};
		});
	});
});
	
	