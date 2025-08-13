<?php

require __DIR__ . '/../vendor/autoload.php';

require __DIR__ . '/repositories/database.php';
require __DIR__ . '/repositories/course.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$query_logger = new Logger('query_log');
$query_logger->pushHandler(new StreamHandler('./../.logs/query.log', Logger::DEBUG));

$database = new Database($query_logger);
$course_repository = new CourseRepository($database);

$course_repository->create('High Performance PHP', 'Your Mom', '03/29/2020');
$course_repository->create('Fungo Shops', 'Your Mom', '03/29/2020');
$course_repository->create('Big Bad Baby', 'Your Mom', '03/29/2020');

$course_repository->print_courses();
