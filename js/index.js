$(function(){
	//yi
	$('.diyi').click(function(){
$('.diyi').css({'color':'#FC9153'});
		
		
		$('.diyi').css({'border-bottom':'1px solid #FC9153'})
		$('.dier').css({'color':'#959595'});
		
		
		$('.dier').css({'border-bottom':'none'})
		$('.disan').css({'color':'#959595'});
		
		
		$('.disan').css({'border-bottom':'none'})
		//alert('nihao')
		if($('.xq1').css({'display':'none'})){
			$('.xq1').css({'display':'block'})
			$('.xq2').css({'display':'none'})
			$('.xq3').css({'display':'none'})
		}
	})
	//er
	$('.dier').click(function(){
		//alert('nihao')
$('.dier').css({'color':'#FC9153'});
		
		
		$('.dier').css({'border-bottom':'1px solid #FC9153'})
		$('.disan').css({'color':'#959595'});
		
		
		$('.disan').css({'border-bottom':'none'})
		$('.diyi').css({'color':'#959595'});
		
		
		$('.diyi').css({'border-bottom':'none'})
		
		if($('.xq2').css({'display':'none'})){
			$('.xq2').css({'display':'block'})
			$('.xq1').css({'display':'none'})
			$('.xq3').css({'display':'none'})
		}
	})
	//san
	$('.disan').click(function(){
		//alert('nihao')
		$('.disan').css({'color':'#FC9153'});
		
		
		$('.disan').css({'border-bottom':'1px solid #FC9153'})
		$('.diyi').css({'color':'#959595'});
		
		
		$('.diyi').css({'border-bottom':'none'})
		$('.dier').css({'color':'#959595'});
		
		
		$('.dier').css({'border-bottom':'none'})
		
		
		
		if($('.xq3').css({'display':'none'})){
			$('.xq3').css({'display':'block'})
			$('.xq1').css({'display':'none'})
			$('.xq2').css({'display':'none'})
		}
	})
	//sanjiao
		var f=0;
	$('.sjk').click(function(){
	
		if(f==0){
			$('.one').css({'visibility':'hidden'})
			$('.mt').css({'visibility':'hidden'})
			 f=1;
			
		}
		else if(f==1){
			$('.one').css({'visibility':'visible'})
			$('.mt').css({'visibility':'visible'})
			 f=0;
			
		}
	})
	//判断尾部
	
	
	//che
		var c=0;
	$('.che1').click(function(){
	
		if(c==0){
			$('.tankuang').css({'display':'block'})
			  c=1;
		}
		else if(c==1){
			$('.tankuang').css({'display':'none'})
			 c=0;
		}
		
		
			
	
	})
	var t=0;
	$('.kc1').click(function(){
	
		if(t==0){
			$('.tankuang').css({'display':'block'})
			  t=1;
		}
		else if(t==1){
			$('.tankuang').css({'display':'none'})
			 t=0;
		}
		
		
			
	
	})
	var w=0;
	var c=0;
	$('.dan3').click(function(){
	
		if(w==0){
			$('.tdkuang').css({'display':'block'})
			  w=1;
		}
		else if(w==1){
			$('.tdkuang').css({'display':'none'})
			 w=0;
		}
		
		
			
	
	})
	$('.xt').click(function(){
		$('.tdkuang').css({'display':'none'})
	})
	$('.xhl').click(function(){
		$('.tdkuang').css({'display':'none'})
	})
	//加减
	
	
	
	$('.jia').click(function(){
		 var hd=$('.shuzi').text()*1;
		var num=hd+1;
		if(num>=2){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'block'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'none'})
		}
		else if(num==1){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'block'})
		}
		else if(num<=0){
			$('.che1').css({'display':'none'})
			$('.che2').css({'display':'none'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'block'})
			$('.kc2').css({'display':'block'})
			$('.kc3').css({'display':'block'})
			num=0;
		}
		
		
		$(".shuzi").text(num)
		$('.shu').text(num)
		$('.wl4').text(num)
		$('.qi1').text(num*17)
		$('.qi2').text(num*17)
		$('.xiaoshu').text(num)
		
		
	
	})
	
	$('.wl5').click(function(){
		 var hd=$('.shuzi').text()*1;
		var num=hd+1;
		if(num>=2){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'block'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'none'})
		}
		else if(num==1){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'block'})
		}
		else if(num<=0){
			$('.che1').css({'display':'none'})
			$('.che2').css({'display':'none'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'block'})
			$('.kc2').css({'display':'block'})
			$('.kc3').css({'display':'block'})
			num=0;
		}
		
		$(".shuzi").text(num)
		$('.shu').text(num)
		$('.wl4').text(num)
		$('.qi1').text(num*17)
		$('.qi2').text(num*17)
		$('.xiaoshu').text(num)
		
		
	
	})
	
	
	$('.jian').click(function(){
		var wang=$('.shuzi').text()*1;
		var number=wang-1;
		//if(number<=0){
			//$('.xiaoshu').css({'display':'none'})
			
			
			//$('.che2').css({'display':'none'})
			
			
		//}
		 if(number<=0){
				$('.che1').css({'display':'none'})
				$('.che2').css({'display':'none'})
				$('.che3').css({'display':'none'})
				$('.kc1').css({'display':'block'})
				$('.kc2').css({'display':'block'})
				$('.kc3').css({'display':'block'})
				number=0;
			}
		 else if(number==1){
				$('.che1').css({'display':'block'})
				$('.che2').css({'display':'block'})
				$('.che3').css({'display':'none'})
				$('.kc1').css({'display':'none'})
				$('.kc2').css({'display':'none'})
				$('.kc3').css({'display':'block'})
				
			}
		
		 else if(number>=2){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'block'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'none'})
		}
		
		
		$(".shuzi").text(number)
		$('.shu').text(number)
		$('.wl4').text(number)
		$('.qi1').text(number*17)
		$('.qi2').text(number*17)
		$('.xiaoshu').text(number)
		

	})
	$('.wl3').click(function(){
		var wang=$('.shuzi').text()*1;
		var number=wang-1;
		//if(number<=0){
			//$('.xiaoshu').css({'display':'none'})
			//$('.che2').css({'display':'none'})
			//$('.kc2').css({'display':'block'})
			//number=0;
			
		//}
		
		if(number<=0){
			$('.che1').css({'display':'none'})
			$('.che2').css({'display':'none'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'block'})
			$('.kc2').css({'display':'block'})
			$('.kc3').css({'display':'block'})
			number=0;
		}else if(number==1){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'none'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'block'})
			
		}
		else  if(number>=2){
			$('.che1').css({'display':'block'})
			$('.che2').css({'display':'block'})
			$('.che3').css({'display':'block'})
			$('.kc1').css({'display':'none'})
			$('.kc2').css({'display':'none'})
			$('.kc3').css({'display':'none'})
		}
		 
		
		$(".shuzi").text(number)
		$('.shu').text(number)
		$('.xiaoshu').text(number)
		$('.wl4').text(number)
		$('.qi1').text(number*17)
		$('.qi2').text(number*17)
		

	})
	//qiehuan
	$('.tian1').click(function(){
		$('.hbj').css({'display':'none'})
		$('.bao').css({'display':'block'})
	});
	$('.hanbao').click(function(){
		$('.bao').css({'display':'none'})
		$('.hbj').css({'display':'block'})
		
	})
	
	
	/*
	var p=0;
	$('.tian1').click(function(){
		if(p==0){
		$('.danta').animate({marginTop:'0px'},1000)
		p=1;
		}
	
	else if(p==1){
		$('.danta').animate({marginTop:'-8%'},1000)
		p=0;
	}
	})*/
	
	
	
})
