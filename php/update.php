<?php
	require_once('connection.php');

	$postdata = file_get_contents('php://input');

	$request = json_decode($postdata);

	$table = $request->table;
	$columns = $request->columns;
	$values = $request->values;
	$whereColumn = $request->whereColumn;
	$whereData = $request->whereData;

	$name = $values[0];
	$username = $values[1];
	$email = $values[2];
	$phone = $values[3];
	$administrator = $values[4];

	$sql = "UPDATE " . $table . " SET name=" . $name . ", username=" . $username . ", email=" . $email . ", phone=" . $phone . ", administrator=" . $administrator . " WHERE " . $whereColumn[0] . "=" . $whereData[0];
	
	if($conn->query($sql) === true) {
		echo true;
	} else {
		echo false;
	}

	fclose($conn);
?>