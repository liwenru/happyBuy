 
// go back to the previous page 返回前一页
var headerLeft=document.getElementsByClassName("header_left")[0];
headerLeft.onclick=function(){
	// console.log("ok");
	window.history.back();
}

// choose color 选择颜色
// var colors=document.getElementsByClassName("colors")[0];
var spans=document.getElementsByClassName("colors")[0].getElementsByTagName("span");
var imgs=document.getElementsByClassName("pic")[0].getElementsByTagName('img');
// console.log(spans);
// var index=0;
for(var i=0;i<spans.length;i++){
	spans[i].index=i;
	spans[i].onclick=function(){
		// console.log("ok");
		// spans[i].className="";
		
		for(var j=0;j<imgs.length;j++){
			spans[j].className="";
			imgs[j].style.display="none";
		}
		this.className="c1";
		imgs[this.index].style.display="block";

	}
}

//商品详情 参数 意外保
var lis=document.getElementsByClassName("web_b1")[0].getElementsByTagName("li");
// console.log(lis);
var detail=document.getElementsByClassName("web_detail");
// console.log(detail);
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		console.log("ok");
		for(var j=0;j<detail.length;j++){
			lis[j].className="";
			detail[j].style.display="none";
		}
		this.className="s1";
		detail[this.index].style.display="block";
	}
}

// 分享
var m1=document.getElementsByClassName('m1')[0];
var mask=document.getElementsByClassName("mask")[0];
var bdsharebuttonbox=document.getElementsByClassName("bdsharebuttonbox")[0];

m1.onclick=function(){
	mask.style.display="block";
	bdsharebuttonbox.style.display="block";
	// 阻止冒泡事件
	event.cancelBubble=true;
	event.stopPropagation();
	return false;

}
document.onclick=function(){
	mask.style.display="none";
	bdsharebuttonbox.style.display="none";
}
      

// Back to top 返回顶部
var backtop=document.getElementsByClassName("backtop")[0];
document.onscroll=function(){
	var scrollTopflag=document.documentElement.scrollTop||document.body.scrollTop;
	// console.log(scrollTopflag);
	if(scrollTopflag>0 ){
	// console.log("ok");
	backtop.style.display="block";
}
	if(scrollTopflag==0){
		// console.log("ok");
		backtop.style.display="none";
	}
}

// console.log(document.body.scrollTop);
backtop.onclick=function(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

