<?php

require __DIR__ . '/../../vendor/autoload.php';

$page_load_start = microtime(true);

$client = new GuzzleHttp\Client();

request($client, 'http://localhost:3000');
request($client, 'http://localhost:3000');
request($client, 'http://localhost:3000');

$page_load_end = microtime(true);

log_completion_time($page_load_start, $page_load_end, 'Page load');

function request($client, $url) {
  $start_time = microtime(true);
  $response = $client->request('GET', $url);
  $end_time = microtime(true);

  echo $response->getBody();

  log_completion_time($start_time, $end_time, 'Request');
}

function log_completion_time($start_time, $end_time, $task = 'Task') {
  echo $task  . ' completed in ' . round($end_time - $start_time, 2) . ' seconds'
    . '<br />';
}
