$(function(){
								
		var $span = $('.m_top .mark');//小可视区;			
		var $smallimg = $('.m_top');//小图;
		var $bigimg = $('.bigpic img');//大图;
		var $focus = $('.bigpic');//大可视区;				
		var scale = $bigimg.outerWidth()/$focus.outerWidth();	
		
		//小可视区的边界;
		var topside = 0;
		var leftside = 0;
		var rightside = $smallimg.outerWidth()-spanWidth;
		var bottomside = $smallimg.outerHeight()-spanHeight;
		
		//小可视区的宽、高;
		var spanWidth = parseInt($smallimg.outerWidth()*$focus.outerWidth()/$bigimg.outerWidth());
		var spanHeight = parseInt($smallimg.outerHeight()*$focus.outerHeight()/$bigimg.outerHeight());
		$span.width(spanWidth);
		$span.height(spanHeight);
		//给小图绑定鼠标移动事件;
		$smallimg.on('mousemove',function(e){
			//鼠标移入小图片，显示小可视区;
			$focus.css('display','block');
			$span.css('display','block');
			//定义小可视区的left、top值,做边界判断;
			var left = parseInt(e.pageX - $(this).offset().left - spanWidth/2);
			var top = parseInt(e.pageY - $(this).offset().top - spanHeight/2);
			if(left<0){
				left=0;
			}else if(left>rightside){
				left=rightside;
			};
			if(top<0){
				top=0;
			}else if(top>bottomside){
				top=bottomside;
			};
			$span.css({
				left:left,
				top:top			
			});
			$bigimg.css({
				left:-left*scale,
				top:-top*scale
			})
		}).on('mouseout',function(){
			//鼠标移出小图片，隐藏小可视区;
			$span.css('display','none');
			$focus.css('display','none');
		});
		
		//左侧展示图片切换;
		var index = 0;
		//第一张索引小图外框高亮;
		$('.picbo .spic').eq(0).css('border','1px solid red');
	
		//点击小图，显示对应大图,小图边框高亮;
		$('.picbo .spic').on('click',function(){
			var _index = $(this).index();
			$(this).css('border','1px solid red').siblings().css('border','1px solid black');
			$('.m_top img').eq(_index).css('display','block').siblings().css('display','none');
		});
		
		//点击向左按钮，小图左移，显示对应大图;
		$('.m_mid .prev').on('click',function(){				
			index--
			if(index<0){
				index=3;
			};	
			//显示当前大图，隐藏其他大图;
			$('.m_top img').eq(index).show().siblings().hide();
			//高亮当前小图，其他高亮取消;
			$('.picbo .spic').eq(index).css('border','1px solid red').siblings().css('border','1px solid black');
		});
		//点击向右按钮，小图右移，显示对应大图;
		$('.m_mid .next').on('click',function(){
			index++;
			if(index>3){
				index=0;
			};
			$('.m_top img').eq(index).show().siblings().hide();
			$('.picbo .spic').eq(index).css('border','1px solid red').siblings().css('border','1px solid black');
		});
		
		//滑过选择边框高亮;
		$('.scolor li').on('mouseenter',function(){
			$(this).css('border','1px solid red').siblings().css('border','1px solid black').removeClass('bgColor');
		}).on('click',function(){
			$(this).addClass('bgColor').siblings().removeClass('bgColor');
		});
		//点击选择尺寸边框高亮;
		$('.size li').on('click',function(){
			$(this).toggleClass('border');
		});
		
		//点击增减数量;
		var $cNum = $('.choose input');
		var cNum = $cNum.val();			
		$('.choose ').on('click','.add',function(){					
			cNum++;		
			if(cNum>10){
				cNum=10;					
			}
			$cNum.val(cNum);
		}).on('click','.sub',function(){			
			cNum--;
			if(cNum<=1){
				cNum=1;
			}
			$cNum.val(cNum);
		});
			
})