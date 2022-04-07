<?php
include 'config.php';

$dbhost = db_host;
$dbname = db_name;

 // Check connection
 try{
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",db_user,db_pass);
    echo "success";
 }catch(PDOException $e){
    echo "Connection Fail" . $e->getMessage();
 }
 ?>