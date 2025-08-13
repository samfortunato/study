<?php

include './autoload.php';

use Controllers\UserController;

use Utils\{FormWatcher, FormPrefiller};

if (FormWatcher::was_submitted()) {
  UserController::handle_update();

  printf('User updated.');
}

$user = UserController::get_user_to_edit();

?>

<form action="update.php?id=<?php echo $_GET['id']; ?>" method="POST">
  <label for="username">Name:</label>
  <input
    id="username"
    type="text"
    name="username"
    value="<?php FormPrefiller::print_obj_value($user, 'name'); ?>"
  />

  <br />

  Gender:
  <input
    type="radio"
    name="gender"
    id="male"
    value="male"
    <?php FormPrefiller::mark_is_checked_on_obj($user, 'gender', 'male'); ?>
  />
  <label for="male">Male</label>
  <input
    type="radio"
    name="gender"
    id="female"
    value="female"
    <?php FormPrefiller::mark_is_checked_on_obj($user, 'gender', 'female'); ?>
  />
  <label for="female">Female</label>

  <br />

  <label for="color">Favorite color:</label>
  <select id="color" name="color">
    <option value="">Select one...</option>
    <option value="red" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'red'); ?>>Red</option>
    <option value="orange" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'orange'); ?>>Orange</option>
    <option value="yellow" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'yellow'); ?>>Yellow</option>
    <option value="green" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'green'); ?>>Green</option>
    <option value="blue" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'blue'); ?>>Blue</option>
    <option value="purple" <?php FormPrefiller::mark_is_selected_on_obj($user, 'color', 'purple'); ?>>Purple</option>
  </select>

  <br />

  <input type="submit" name="submit" value="Update" />
</form>

<a href="./index.php">Back to home</a>
