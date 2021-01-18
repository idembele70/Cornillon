<?php

DEFINE ('DB_USER','titi');
DEFINE ('DB_PASSWORD','titi');
DEFINE ('DB_HOST','localhost');
DEFINE ('DB_NAME','tp_php');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME,)
OR die('Could not connect to MySQL:' .
mysqli_connect_error());
?>