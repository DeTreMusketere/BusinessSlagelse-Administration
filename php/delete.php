<?php
	require_once('connection.php');

	$postdata = file_get_contents('php://input');

	$request = json_decode($postdata);

	$table = $request->table;
	$idColumn = $request->idColumn;
	$id = $request->id;

	$sql = "DELETE FROM " . $table . " WHERE ".$idColumn." = " . $id . ";";

	if($conn->query($sql) === true) {
		echo true;
	} else {
		echo false;
	}

	fclose($conn);
?>