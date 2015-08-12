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
$q = "INSERT INTO registrations (firstname, lastname, extension, department, fitnesslevel, years) VALUES(
	 '".$_POST['firstname']."', 
	'".$_POST['lastname']."', 
	'".$_POST['extension']."', 
	'".$_POST['department']."', 
	'".$_POST['fitnessLevel']."',
	'".$_POST['yearsAtFGL']."'
	 )";
	
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));