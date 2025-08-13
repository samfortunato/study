<?php

require __DIR__ . '/../../vendor/autoload.php';

$page_load_start = microtime(true);

$client = new GuzzleHttp\Client();

$promises = [
  '1' => $client->getAsync('http://localhost:3000'),
  '2' => $client->getAsync('http://localhost:3000'),
  '3' => $client->getAsync('http://localhost:3000'),
];

$results = GuzzleHttp\Promise\unwrap($promises);
$results = GuzzleHttp\Promise\settle($promises)->wait();

echo $results['1']['value']->getBody();
echo $results['2']['value']->getBody();
echo $results['3']['value']->getBody();

$page_load_end = microtime(true);

log_completion_time($page_load_start, $page_load_end, 'Page load');

function log_completion_time($start_time, $end_time, $task = 'Task') {
  echo $task . ' completed in ' . round($end_time - $start_time, 2) . ' seconds'
    . '<br />';
}
