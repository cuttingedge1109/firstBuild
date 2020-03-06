<?php

$fp = fopen('data.txt', 'w');//opens file in write-only mode  
fwrite($fp, 'welcome ');  
fwrite($fp, 'to php file write');  
fclose($fp);  

echo exec('git clone https://github.com/jamescarl20190101/firstBuild');


$body = file_get_contents('php://input');

$webhook = json_decode($body);

file_put_contents('php://stdout', 'Webhook received: ' . print_r($webhook, true) . "\r\n");

echo "success";
