	var  slider_wrap= document.getElementById("slider_wrap");
	var spans=document.getElementsByTagName("span");
	var index = 0;


	setInterval(function(){
		if(index >1){
			index = 0;
		}
		for(var i=0;i<spans.length;i++){
		spans[i].className="";
	}
		spans[index].className="on";

		slider_wrap.style.marginLeft = this.index * -100 + "%";
		index++;
	}, 2000);

	
 	for(var i=0;i<spans.length;i++){
 		spans[i].index=i;
 		spans[i].onclick=function(){
 			index=this.index;
 		}
 	}
 	
