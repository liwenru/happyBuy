		var username=document.getElementById("username");
		var pwd=document.getElementById("pwd");
		var pwdtwo=document.getElementById("pwdtwo");
		var signup=document.getElementById("signup");
		var notenoe=document.getElementById("notenoe");
		var notetwo=document.getElementById("notetwo");
		var s1=document.getElementById("s1");
		var complete = false;
		
		username.onblur=function(){
			if(username.value==""){
				notenoe.style.display="block";
				return false;
			}else{
				var datajson={
					"action":"select",
					"username":username.value
				};
				ajaxFn("POST","signup.php",datajson,blurProFn);
			}
		}	
		signup.onclick=function(){
			if(pwd.value!=pwdtwo.value){
				notetwo.style.display="block";
				return false;
			}else if(username.value==""||pwd.value==""||pwdtwo.value==""){
				notetwo.style.display="block";
				s2.innerHTML="用户名或密码不能为空";
				return false;
			}else if(complete){
				alert("已有此用户名！")
				return false;
			}
			else{
				var datajson={
					"action":"insert",
					"username":username.value,
					"pwd":pwd.value
				}
				ajaxFn("POST","signup.php",datajson,processFn);
			}
		}
		
		
		
		function blurProFn(data) {
    if (data.error == 0) {
  		notenoe.style.display="block";
  		complete = true;
  		return false;
    } else {
       notenoe.style.display="block";
       s1.innerHTML="该用户名可以注册";
       complete = false;
    }
}
	function processFn(data){
		if(data.error==0){
			alert("注册成功！");
		}else{
			alert("注册失败！");
		}
	}