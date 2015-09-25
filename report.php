<?php

	//connect to DB
$host = "calmys1db01.fglsports.dmz";
$user = "funfitfriday";
$pass = "funfitfriday";
$db = "funfitfriday";

$connection = mysqli_connect($host, $user, $pass, $db);

echo "Registrations till : " . date ('Y-m-d')."<br><br>" ;
/* Total Registrations */
$q = "SELECT count('id') FROM registrations ";
$result = mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));
$needBus = array();

if ($result) {

   $row = $result->fetch_array(MYSQL_ASSOC) ;
   echo "Total registrations : ". ($row["count('id')"]) ." </br></br>";
}



/*  Need Bus */
$q= "SELECT count('id') FROM registrations where registrations.`needBus` = 'true'";

$result = mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

$needBus = array();

if ($result) {

   $row = $result->fetch_array(MYSQL_ASSOC) ;
   echo "Need Bus : ". ($row["count('id')"]) . "</br></br>";
}

echo "</br>";

/* Registraions for each activity */
$activities = [	"1" => "Kickball", "2" => "Tai Chi" , "3" => "5K River Walk", "4" =>"Batting Cages and Drills"];
for ($i=1;  $i<5 ; $i++) { 
	$q1 = "SELECT count('id') FROM registrations where registrations.`activity` = $i";

	$result = mysqli_query($connection, $q1) or die ("Error in query: $q1. ".mysqli_error($connection));

	if ($result) {

	   		$row = $result->fetch_array(MYSQL_ASSOC) ;
	 		echo "Total registrations for " . $activities[$i] . " : " . (  $row["count('id')"]) . "</br></br>";
	   
	}
}
?>


