jQuery(function($){
	//头部滑过变色;
	$('#head #toptitle a').on('mouseenter',function(){	
		$(this).css({color:'red'})
		
	}).on('mouseleave',function(){
		$(this).css({color:'#666'});
		
	})	
	
	//滑过变色效果;
	$('#floor .f_Lu div').on('mouseenter',function(){
		$(this).addClass('bgColor')
	}).on('mouseleave',function(){
		$(this).removeClass('bgColor')
	});
	
	//加边框效果;
	
	$('.whole .fr_round').on('mouseenter',function(){
		//console.log($(this));
		$(this).find('.borderTop').stop(true).animate({width:'272px'}).css('background','#000')
		$(this).find('.borderLeft').stop(true).animate({height:'180px'}).css('background','#000')
		$(this).find('.borderBottom').stop(true).animate({width:'271px'}).css('background','#000')
		$(this).find('.borderRight').stop(true).animate({height:'181px'}).css('background','#000')
		
	}).on('mouseleave',function(){		
		$(this).find('.borderTop').stop(true).animate({width:'0'})
		$(this).find('.borderLeft').stop(true).animate({height:'0'})
		$(this).find('.borderBottom').stop(true).animate({width:'0'})
		$(this).find('.borderRight').stop(true).animate({height:'0'})
		});
		
	//首页floor各楼层点击图片左右切换;
	var index=0;
	var $pic = $('#floor .f_Lbig .f_dd');			
	//console.log($pic.length);
		
	$('#floor .f_Ld span').click(function(){					
		if($(this).hasClass('prev')){
			index--;						
		}else if($(this).hasClass('next')){
			index++;					
		}
		
		if(index>0){
			index = -$pic.length+1;
		}else if(index<-$pic.length+1){
			index = 0;
		}
		
		$('#floor .f_Lbig').css('left','182'*index + 'px')
	});
	//console.log($(document));
	$(document).on('selectstart',function(){
		return false;
	});
		
		
	//首页main部分切换效果;
	$('.main_title li').on('mouseenter',function(){	
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('a').css({
			fontSize:'16px',			
		}).parent().siblings().find('a').css({
			fontSize:'12px'
		});	
		$(this).find('span').show().parent().siblings().find('span').hide();			
		$('.main_L .fpic_whole .f_b').eq(index).show().siblings().hide();		
	})
	
	
	//title滑过效果;
	$('#title .myyintai').on('mouseenter',function(){
		$(this).css('background','#fff').find('.title_subR').css({'background':'#fff','display':'block'});
	}).on('mouseleave',function(){
		$(this).css('background','#eee').find('.title_subR').css({'display':'none'});
	});
		
	$('#title .title_c').on('mouseenter',function(){
		$(this).css('background','#fff').find('.tc_sub').css({'display':'block'})
	}).on('mouseleave',function(){
		$(this).css('background','#eee').find('.tc_sub').css({'display':'none'});
	});
	
	$('#title .title_b').on('mouseenter',function(){
		$(this).css('background','#fff').find('.tb_sub').css({'display':'block'})
	}).on('mouseleave',function(){
		$(this).css('background','#eee').find('.tb_sub').css({'display':'none'});
	});
	
	//menu三层级联菜单;
	$('#menu .menu_list li').on('mouseenter',function(){
		var index = $(this).index();
		//console.log(index)
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
	
	//主页轮播图;
	
	var now = 0;//定义一个索引;
	var $bigPic = $('#banner .slide');
	var $subpic = $('#banner')
	var timer = setInterval(change,2000);
	$subpic.on('mouseenter',function(){
		clearInterval(timer)
	}).on('mouseleave',function(){
		timer = setInterval(change,2000)
	});
	
	//左右移动效果;
	var $rPic = $('.rPic .fc_pic');
	$rPic.on('mouseenter',function(){
		$(this).animate({'right':'10px'},200)
	}).on('mouseleave',function(){
		$(this).animate({'right':'0px'},200)
	});
	
	
	var $prev = $('.tprev');
	var $next = $('.tnext');
	$prev.on('click',function(){
		now--;
		if(now<0){
			now=$bigPic.length-1;
		}
		show();
	});
	$next.on('click',function(){
		now++;
		if(now>$bigPic.length-1){
			now=0;
		}
		show();
	});
	
		
			
	
	
	//小圆点与大图链接;
	var $sball = $('#banner .sball span');	
	$sball.on('click',function(){
		$(this).css('background','yellow').siblings().css('background','red');
		now = $(this).index();
		show();
	});
	
	
	/*-----------------封装函数--------------------*/
	//图片切换轮播函数;
	function change(){
		if(now>3){
			now=0;	
		}
		show();		
		now++;
	};
	
	
	//图片显示与隐藏函数;
	function show(){
		$bigPic.eq(now).fadeIn().siblings().fadeOut();
		$sball.eq(now).css('background','yellow').siblings().css('background','red');
	};
	
	
	
	
});
