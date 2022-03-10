<?php
		if(isset($_POST['myData'])){
		/*$con=mysqli_connect("localhost","root","","todolist");
		if(!$con){
			echo "Database Connection not established";  
		} 
		mysqli_query($con,"INSERT INTO list_table('Task') VALUES ('$_POST[taskAdd]')"); 
		mysqli_close($con);*/
		echo $_POST['task'];
		}
	?>