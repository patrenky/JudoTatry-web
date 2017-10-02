<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$fileName = "news.txt";
$backup = "backup.txt";

if (isset($_GET['write'])) {   
    $news = $_GET['write'];
    $handleFile = fopen($fileName, "w");
    fwrite($handleFile, $news);
    fclose($handleFile);
	
	$handleBackup = fopen($backup, "a");
	fwrite($handleBackup, "\n---- " . date('d.m.Y') . " ---\n". $news);
	fclose($handleBackup);
} else if (isset($_GET['read'])) {
    $handleFile = fopen($fileName, "r");
    $news = fread($handleFile, filesize($fileName));
    fclose($handleFile);
	echo json_encode($news);
}

?>