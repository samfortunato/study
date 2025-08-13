<?php
  $is_form_valid = isset($_POST['username']) && isset($_POST['email']);

  if ($is_form_valid) {
    $dsn = "mysql:host=localhost;dbname=foo";
    $username = 'root';
    $password = 'password';
    $connection;

    try {
      $connection = new PDO($dsn, $username, $password);
      $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $err) {
      die($err);
    }

    $statement = $connection->prepare(<<<SQL
      INSERT INTO users (username, email)
      VALUES (:username, :email);
    SQL);
    $statement->bindParam(':username', $_POST['username']);
    $statement->bindParam(':email', $_POST['email']);

    $statement->execute();

    $connection = null;
  }
?>

<html>
  <body>
    <nav>
      <a href="index.php">Home</a>
    </nav>

    <form method="POST">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" />

      <label for="email">Email</label>
      <input type="email" name="email" id="email" />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
