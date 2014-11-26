<?php
	require_once('connection.php');

	$postdata = file_get_contents('php://input');

	$request = json_decode($postdata);

	$table = $request->table;
	$columns = $request->columns;
	$values = $request->values;

	$sql = "INSERT INTO " . $table . " (" . implode(",", $columns) . ") VALUES(" . implode(",", $values) . ")";

	if($conn->query($sql) === true) {
		echo true;
	} else {
		echo false;
	}

	fclose($conn);
?>