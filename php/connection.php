<?php
	//Create Database connection
    // Create connection
	$host = "194.255.32.68";
	$user = "dbs";
	$pass = "LDZz9x6t6QMXjzG7";
	$db = "dbs";

	$conn = new mysqli($host, $user, $pass, $db);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
?>