<?php

$host = 'localhost';
$username = 'root';
$password = 'password';
$dbname = 'foo';

$connection;

try {
  $connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $err) {
  echo 'failure: ' . $err->getMessage();
}

$results = $connection->query(<<<SQL
  SELECT *
  FROM users;
SQL);

?>

<html>
  <body>
    <nav>
      <a href="new.php">Add user</a>
    </nav>

    <table>
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>

      <?php foreach ($results as $result): ?>
        <tr>
          <td><?= $result['username'] ?></td>
          <td><?= $result['email'] ?></td>
        </tr>
      <?php endforeach ?>
    </table>
  </body>
</html>
