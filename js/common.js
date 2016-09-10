	$(function(){
				var $list = $('.menu_list');//下拉菜单;
				var $main_L=$('#menu_main');//顶部菜单项;
				
				//下拉菜单默认隐藏;
				$list.css('display','none');
				//滑过菜单项，显示下拉项目；
				$main_L.on('mouseenter',function(){
					$list.css('display','block')				
				})
				$main_L.on('mouseleave',function(){
					$list.css('display','none')
				});
				
				//menu三层级联菜单;
				$('#menu .menu_list li').on('mouseenter',function(){
					var index = $(this).index();
					//console.log(index);
					$(this).addClass('bgr').siblings().removeClass('bgr');
					$(this).find('span').addClass('active').siblings().removeClass('active')
					$(this).find('.menu_second').css('display','block');
					$(this).find('.menu_third').css('display','block');
				}).on('mouseleave',function(){
					$(this).removeClass('bgr');
					$(this).find('span').removeClass('active');
					$(this).find('.menu_second').css('display','none');
					$(this).find('.menu_third').css('display','none');
				});
	});