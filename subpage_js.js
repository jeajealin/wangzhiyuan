// JavaScript Document


window.onload=init_page;
window.onresize=init_page;

function init_page(){
	
	var k=document.documentElement.clientHeight
	var m=document.getElementById("zz");
	zz.style.height=k+"px"
	
	var s=document.documentElement.clientWidth;
	if(s<=1246){
		zz.style.width=1246+"px"
		}else{
			zz.style.width=s+"px"
			
		}
		
	var z=document.getElementById("index_main")
	z.style.minHeight=(k-330)+"px"	
	
	if(window.navigator.userAgent.indexOf("MSIE")!=-1){
		z.style.height=(k-330)+"px"	
		}else{
		z.style.height="auto"		
		}//子页面内容高度自适应js	
	}



