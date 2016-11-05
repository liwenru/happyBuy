		var username=document.getElementById("username");
		var pwd=document.getElementById("pwd");
		var login=document.getElementById("login_btn");
		var eye=document.getElementById("eye");
		var visiablePwd=document.getElementById("visiablePwd");
		var eye_outer=document.getElementById("eye_outer");
		var oInput=document.getElementsByTagName("input");
		
		username.onblur=function(){
			if(username.value==""){
				username.style.border="1px solid red";
				this.placeholder="用户名不能为空";
				return false;
			}else{
				var datajson={
					"action":"select",
					"username":username.value
				};
				ajaxFn("POST","signup.php",datajson,blurProFn);
			}
		}
			function blurProFn(data){
			if(data.error!=0){
				alert("用户名不存在");
			}
			
		}
		pwd.onblur=function(){
			if(pwd.value==""){
				this.style.border="1px solid red";
				this.placeholder="密码不能为空";
			}
		}
		visiablePwd.onblur=function(){
			if(visiablePwd.value==""){
				this.style.border="1px solid red";
				this.placeholder="密码不能为空";
			}
		}
		
		
		 login.onclick=function(){
			if(username.value==""){
				return false;
			}else if(pwd.value==""&&visiablePwd==""){
				return false;
			}else{
				var datajson={
					"action":"select",
					"username":username.value,
					"pwd":pwd.value || visiablePwd.value,
				};
				console.log(datajson.pwd);
				ajaxFn("POST","signin.php",datajson,processFn);
			}
		}
			function processFn(data){
			if(data.check==0){
				alert("登陆成功呢！");
				setTimeout(function(){
					getuserFN();
					window.location.href="page-personal-center.html";
				},500);
			}else{
				alert("登陆失败！");
			}
		}
		for(var i=0;i<oInput.length;i++){
			oInput[i].onfocus=function(){
			username.style.border="";
			pwd.style.border="";
			visiablePwd.style.border="";
			
			}
		}
		var off=true;
		eye.onclick=function(){
			if(off){
				visiablePwd.style.display="block";
				eye_outer.style.fill="#33b4ff";
				pwd.style.display="none";
			}else{
				visiablePwd.style.display="none";
				eye_outer.style.fill="";
				pwd.style.display="block";
			}
			off = !off;
		}
		
		pwd.oninput = function(){
			visiablePwd.value = this.value;
		}
		visiablePwd.oninput = function(){
			pwd.value = this.value;
		}
		



function getuserFN(){
	var storage = window.localStorage; //获取储蓄数据
	var getusername = storage["username"]; //储存的账号
	var getPwd = storage["password"];//储存的密码
	
	storage["username"] = username.value;
	storage["password"] = pwd.value;
	
}
