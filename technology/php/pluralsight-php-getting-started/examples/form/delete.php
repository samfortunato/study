<?php

include './autoload.php';

use Controllers\{AuthController, UserController};

$is_admin = AuthController::handle_admin_authorization();

if ($is_admin) {
  UserController::handle_delete();
}

?>

<p>User <?php echo $_GET['id']; ?> deleted.</p>

<a href="./index.php">Back to home</a>
