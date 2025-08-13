<?php
  $hostname = 'localhost';
  $username = 'root';
  $password = 'password';
  $database = 'php_foo';

  $connection = new mysqli($hostname, $username, $password, $database);

  if ($connection->connect_error) {
    die('MySQL connection failed: ' . $connection->connect_error);
  }

  $sql = '
    SELECT * FROM php_foo.person;
  ';

  $result = $connection->query($sql);

  $connection->close();
?>

<?php if ($result->num_rows > 0) { ?>
  <table>
    <tr>
      <td>id</td>
      <td>first_name</td>
      <td>last_name</td>
      <td>email</td>
    </tr>

    <?php while ($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?php print($row['id']); ?></td>
        <td><?php print($row['first_name']); ?></td>
        <td><?php print($row['last_name']); ?></td>
        <td><?php print($row['email']); ?></td>
      </tr>
    <?php } ?>
  </table>
<?php } ?>
