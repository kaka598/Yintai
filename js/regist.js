$(function(){
			
		//用户注册验证;
		var reg_userName = /^[a-zA-Z0-9_\.-]{6,10}$/;
		var reg_passWord = /^[a-zA-Z0-9]{6,13}$/;
		var $init = false;
		var $init2 = false;
		//var $init3 =false;
		var t_name = '';//定义空字符串，放入用户名;
		var t_psw = '';//定义空字符串，放入密码;
		$('.main').on('focus','#username',function(){
			//手机号输入提示;					
			$(this).parent('p').find('span').html('请输入您的手机号');
								
		}).on('blur','#username',function(){
			//手机号验证;
			var $user = $(this).val();
			if(reg_userName.test($user)){
				$init = true;
				t_name = $user;
				$(this).parent('p').find('span').html('');
			}else{
				$(this).parent('p').find('span').html('请输入正确的手机号');
			}
		}).on('focus','#password',function(){
			//登录密码输入提示;
			$(this).parent('p').find('span').html('请输入你的密码');
		}).on('blur','#password',function(){
			var $psw = $(this).val();
			if(reg_userName.test($psw)){
				$init2 = true;
				t_psw = $psw;
				$(this).parent('p').find('span').html('');
			}else{
				$(this).parent('p').find('span').html('请输入正确的密码');
			};
		})/*.on('blur','#password',function(){
			var $chk = $(this).val();
			if($chk == $psw){
				$init3 = true;
				$(this).parent('p').find('span').html('');
			}esle{
				$(this).parent('p').find('span').html('两次输入密码不一致');
			};
		});*/
		
		
		//定义一个对象，放入注册信息;
		var $usermsg = {};
		//定义一个数组，放入成的cookie;
		var $user_cookie = [];
		var $check = $('.read_reg input:checkbox');//checkbox;
		var $submit = $('.reg_btn');//提交按钮;
		$submit.on('click',function(){
			var _checked = $check.prop('checked');
			
			if($init && $init2 && _checked){						
				$usermsg.username = t_name;
				$usermsg.psw = t_psw;
				$user_cookie.push($usermsg);						
				document.cookie = 'name='+JSON.stringify($user_cookie);
				alert('注册成功');
			}else{
				alert('请填写正确的信息');
			}
		});
});