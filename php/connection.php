<?php
	//Create Database connection
    // Create connection
	$host = "194.255.32.68";
	$user = "dbs_admin";
	$pass = "YyYUj6F6xEHGsxws";
	$db = "dbs_admin";

	$conn = new mysqli($host, $user, $pass, $db);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
?>