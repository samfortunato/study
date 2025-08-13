<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create User</title>
</head>
<body>
  <form action="#" method="POST">
    <label for="first_name">First name:</label>
    <input type="text" name="first_name" id="first_name" />

    <label for="last_name">Last name:</label>
    <input type="text" name="last_name" id="last_name" />

    <label for="email">Email:</label>
    <input type="text" name="email" id="email" />

    <input type="submit" value="Submit" />
  </form>
</body>
</html>

<?php
  if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email'])) {
    $hostname = 'localhost';
    $username = 'root';
    $password = 'password';
    $database = 'php_foo';

    $connection = new mysqli($hostname, $username, $password, $database);

    if ($connection->connect_error) {
      die('MySQL connection failed: ' . $connection->connect_error);
    }

    $statement = $connection->prepare('
      INSERT INTO person (first_name, last_name, email)
      VALUES (?, ?, ?);
    ');

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];

    $statement->bind_param('sss', $first_name, $last_name, $email);

    $statement->execute();

    $connection->close();
  }
?>
