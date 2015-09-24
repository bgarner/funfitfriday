<?php

//connect to DB
$host = "calmys1db01.fglsports.dmz";
$user = "funfitfriday";
$pass = "funfitfriday";
$db = "funfitfriday";

$connection = mysqli_connect($host, $user, $pass, $db);
// mysqli_select_db($connection, $db); 
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
//insert registration
$q = "Select * from activities";
	
$result = mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

$activities = array();
if ($result) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $activities[] = $row;
    }
    echo json_encode($activities);
}

mysqli_close($connection);