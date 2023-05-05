<?php
	session_start();
	
	$database = array(
		array("BBWiSE","12345678","BLESSING.BAYODE@EDSA.COM"),
		array("John-2","87654321","john_2@gmail.com")
    );
	if(isset($_POST)){
		$postedPost = file_get_contents('php://input');

		$details = json_decode($postedPost, true);

		//echo json_encode($details['email']);
		if($details != null){
            $_SESSION['username'] = checkDetails($details['password'],$details['email']);

            echo json_encode($_SESSION['username']);
        }
		else{
            echo json_encode(null);
        }

	}
	
	function checkDetails($psw, $email){
		global $database;

		for($i=0;$i<count($database);$i++){
            if($database[$i][1]==$psw && $database[$i]['2']==$email){
                return $database[$i][0];
            }
        }

    }
?>