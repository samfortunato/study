<?php

function db_write($sql, $types, $params)
{
  $hostname = 'localhost';
  $username = 'foo';
  $password = 'bar';
  $database = 'baz';

  $connection = new mysqli($hostname, $username, $password, $database);
  if ($connection->connect_error) die($connection->connect_error);

  $statement = $connection->prepare($sql);
  $statement->bind_param($types, ...$params);
  $statement->execute();

  $connection->close();
}

$is_valid_request = isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']);

if ($is_valid_request) {
  $sql = <<<SQL
    INSERT INTO foo (first_name, last_name, email)
    VALUES (?, ?, ?);
  SQL;

  $types = 'sss';

  $params = [
    $_POST['fname'],
    $_POST['lname'],
    $_POST['email'],
  ];

  db_write($sql, $types, $params);

  $conn->close();
}
