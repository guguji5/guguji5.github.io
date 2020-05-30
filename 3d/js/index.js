$(function(){
	
	var liNum = 5*5*5; // 暂且认为li个数为 5*5*5 个

	// 拖拽 滚轮
	(function(){
		var nowX , lastX , minusX , nowY , lastY , minusY;
		var roY = 0 , roX = 0 , tZ = -2000;
		var timer1 , timer2;
		$(document).mousedown(function(ev){
			ev = ev || window.event;
			lastX = ev.clientX;
			lastY = ev.clientY;
			clearInterval( timer1 );
			$(this).on('mousemove',function(ev){
				ev = ev || window.event; //ev 事件对象 存放事件的相关信息
				nowX = ev.clientX;  // ev.clientX  clientX属性存放鼠标x坐标
				nowY = ev.clientY;
				minusX = nowX - lastX;  // 两者差值
				minusY = nowY - lastY;
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
				lastX = nowX; // 存放前一点的x坐标
				lastY = nowY;
			});
			return false;
		}).mouseup(function(){
			$(this).off('mousemove');
			timer1 = setInterval(function(){
				minusX *= 0.95;
				minusY *= 0.95;
				console.log( minusX )
				if ( Math.abs(minusX) < 0.5 && Math.abs(minusY) < 0.5 )
				clearInterval( timer1 );
				roY += minusX*0.2;
				roX -= minusY*0.2;
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
			} , 13);
		}).mousewheel(function(e,d){ //滚轮事件
			//var d = arguments[1]   arguments 不定参   实参的集合
			clearInterval( timer2 );
			tZ += d*80;
			tZ = Math.min(0,tZ); // Math.min()  取参数里面最小的
			tZ = Math.max(-8000,tZ); // Math.max()  …… 最大
			// -8000 < tZ < 0
			$('#main').css({
				'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
			});

			timer2 = setInterval(function(){
				d *= 0.85;
				if ( Math.abs(d) < 0.01 )
				{
					clearInterval( timer2 );
				}
				tZ += d*80;
				tZ = Math.min(0,tZ); // Math.min()  取参数里面最小的
				tZ = Math.max(-8000,tZ); // Math.max()  …… 最大
				// -8000 < tZ < 0
				$('#main').css({
					'transform' : 'translateZ('+ tZ +'px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
				});
			} , 13);
		});
	})()

	init();
	
	function init(){
		//给#main里面添加 liNum个 li标签
		for ( var i=0 ; i<liNum ; i++ )
		{
			var $li = $('<li></li>');
			var x = (Math.random()-0.5)*5000;
			var y = (Math.random()-0.5)*5000;
			var z = (Math.random()-0.5)*5000;
			// Math.random()   [0,1)*2000  [0,2000) ->  [-1000 , 1000)
			$li.css({
				'transform' : 'translate3d('+x+'px,'+y+'px,'+z+'px)'
			});
			$('#main').append($li);
		}
		setTimeout(function(){
			Grid();
		},300);

		$('#styleBtn li').click(function(){
			var index = $(this).index();
			switch ( index )
			{
				case 0:
					Helix();
					break;
				case 1:
					Grid();
					break;
			}
		});
	}

	function Grid(){
		var tX = 400 , tY = 400 , tZ = 800;  // 水平 垂直间隔
		var firstX = - 2*tX; //第一个li水平偏移量
		var firstY = - 2*tY; //第一个li垂直偏移量
		var firstZ = - 2*tZ; //第一个li Z轴偏移量
		$('#main li').each(function(i){
			var iX = (i % 25) % 5; // x方向，要增加的倍数
			var iY = parseInt((i % 25) / 5); //y方向，要增加的倍数
			var iZ = parseInt(i / 25); //z方向，要增加的倍数
			$(this).css({
				'transform' : 'translate3d('+ ( firstX + iX*tX ) +'px,'+ ( firstY + iY*tY ) +'px,'+ (firstZ + iZ*tZ) +'px)'
			});
		});
	}

	function Helix(){
		var roY = 10 , tY = 10;
		var mIndex = Math.floor($('#main li').length / 2);
		var firsttY = -tY*mIndex;
		$('#main li').each(function(i){
			$(this).css({
				'transform' : 'rotateY('+ 10*i +'deg) translateY('+ (firsttY+tY*i) +'px) translateZ(1000px)'
			});
		})
	}

});