// JavaScript Document


window.onload=init_page;
window.onresize=init_page;

function init_page(){

	var m=document.getElementById("zz");	
	var s=document.documentElement.clientWidth;
	if(s<=1246){
		zz.style.width=1246+"px"
		//alert(zz)
		}else{
			zz.style.width=s+"px"
			
		}
	}



