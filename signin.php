<?php
	$action=$_POST["action"];
	$conn=@mysqli_connect("localhost","root","","mydb");
	$conn->query("set names utf8");
	if($action=="select"){
		$username=$_POST["username"];
		$pwd=md5($_POST["pwd"]);
	
		$sql="SELECT * FROM user WHERE username='{$username}'AND password='{$pwd}'";
		$result=$conn->query($sql);
		if($result->num_rows>0){
			echo'{"check":0}';
		}else{
			echo'{"check":1}';
		}
	}
?>