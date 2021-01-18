<?php

// DEFINE('DB_USER','titi');
// DEFINE('DB_PASSWORD','titi');
// DEFINE('DB_HOST','localhost');
// DEFINE('DB_NAME','tp_php');

// $con = @mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
//     or die('Could not connect to MySQL:' .
//     mysqli_connect_error());

    define( '__ROOT__', dirname('../../../../app/config/mysqli_connect.php'));
    require_once( __ROOT__ . '/mysqli_connect.php');
    $id = $_REQUEST['id'];
    $query = "DELETE FROM article WHERE id='".$id."'";
    $result = @mysqli_query($dbc,$query) or die(mysqli_error($dbc));
    header('Location: admin.php');
?>