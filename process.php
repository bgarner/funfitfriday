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
$q = "INSERT INTO registrations (firstname, lastname, email, extension, department, fitnesslevel, years, activity, needBus) VALUES(
	 '".$_POST['firstname']."', 
	'".$_POST['lastname']."', 
	'".$_POST['email']."',
	'".$_POST['extension']."', 
	'".$_POST['department']."', 
	'".$_POST['fitnessLevel']."',
	'".$_POST['yearsAtFGL']."',
	'".$_POST['activity']."',
	'".$_POST['needBus']."'
	 )";

$q2 = "UPDATE activities SET activities.`left` = activities.`left`-1 where activities.`id` =".$_POST['activity'] ;
	
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

mysqli_query($connection, $q2) or die ("Error in query: $q2. ".mysqli_error($connection));




