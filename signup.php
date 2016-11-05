<?php
	$action=$_POST["action"];
	$conn=mysqli_connect("localhost","root","","mydb");
	$conn->query("set names utf8");
	
	switch($action){
		case 'insert':
			$username=$_POST["username"];
			$pwd = md5($_POST["pwd"]);
			$sql="INSERT INTO user(username,password) VALUES('{$username}','{$pwd}')";
			$conn->query($sql);
			if(mysqli_affected_rows($conn)>0){
				echo'{"error":"0"}';
			}else{
				echo'{"error":"1"}';
			}
			break;
			
		case 'select':
			$username=$_POST["username"];
			$sql="SELECT * FROM user WHERE username='{$username}'";
			$conn->query($sql);
			if(mysqli_affected_rows($conn)>0){
				echo'{"error":"0"}';
			}else{
				echo'{"error":"1"}';
			}
			break;
		
		default:
			break;	
	}
	
?>