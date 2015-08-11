<?php

//connect to DB
$host = "localhost";
$user = "root";
$pass = "root";
$db = "funfitfriday";

$connection = mysqli_connect($host, $user, $pass) or die ("Unable to connect!");
mysqli_select_db($connection, $db) or die ("Unable to select database!"); 

//insert registration
$q = "INSERT INTO registrations (firstname, lastname, extension, department, fitnesslevel, years) VALUES(
	 '".$_POST['firstname']."', 
	'".$_POST['lastname']."', 
	'".$_POST['extension']."', 
	'".$_POST['department']."', 
	'".$_POST['fitnessLevel']."',
	'".$_POST['yearsAtFGL']."'
	 )";
	
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysql_error());