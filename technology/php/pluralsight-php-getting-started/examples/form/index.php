<?php

include './autoload.php';

use Utils\FormPrefiller;

session_start();

App::main();

?>

<?php if (isset($_SESSION['username'])) echo $_SESSION['username']; ?>
<a href="./login.php">Log In</a>
<a href="./logout.php">Log Out</a>

<form action="" method="POST">
  <label for="username">Username:</label>
  <input
    id="username"
    type="text"
    name="username"
    value="<?php FormPrefiller::create_safe_text_value('username'); ?>"
  />
  <br />
  <label for="password">Password:</label>
  <input id="password" type="password" name="password" required />

  <br />

  Gender:
  <input
    id="male"
    type="radio"
    name="gender"
    value="male"
    <?php FormPrefiller::mark_is_checked('gender', 'male'); ?>
  />
  <label for="male"> Male</label>
  <input
    id="female"
    type="radio"
    name="gender"
    value="female"
    <?php FormPrefiller::mark_is_checked('gender', 'female'); ?>
  />
  <label for="female">Female</label>

  <br />

  <label for="color">Favorite color:</label>
  <select id="color" name="color">
    <option value="">Select one...</option>
    <option value="red" <?php FormPrefiller::mark_is_selected('color', 'red'); ?>>Red</option>
    <option value="orange" <?php FormPrefiller::mark_is_selected('color', 'orange'); ?>>Orange</option>
    <option value="yellow" <?php FormPrefiller::mark_is_selected('color', 'yellow'); ?>>Yellow</option>
    <option value="green" <?php FormPrefiller::mark_is_selected('color', 'green'); ?>>Green</option>
    <option value="blue" <?php FormPrefiller::mark_is_selected('color', 'blue'); ?>>Blue</option>
    <option value="purple" <?php FormPrefiller::mark_is_selected('color', 'purple'); ?>>Purple</option>
  </select>

  <br />

  <label for="languages">Languages:</label>
  <select id="languages" name="languages[]" multiple size="3">
    <option value="" disabled>Select multiple...</option>
    <option value="php" <?php FormPrefiller::mark_is_multi_selected('languages', 'php'); ?>>PHP</option>
    <option value="javascript" <?php FormPrefiller::mark_is_multi_selected('languages', 'javascript'); ?>>JavaScript</option>
    <option value="python" <?php FormPrefiller::mark_is_multi_selected('languages', 'python'); ?>>Python</option>
  </select>

  <br />

  <label for="comments">Comments:</label>
  <textarea
    id="comments"
    name="comments"
  ><?php FormPrefiller::create_safe_text_value('comments'); ?></textarea>

  <br />

  <input
    id="terms-and-conditions"
    type="checkbox"
    name="has_agreed_to_terms"
    <?php FormPrefiller::mark_is_checked('has_agreed_to_terms', 'on'); ?>
  />
  <label for="terms-and-conditions">I accept the terms and conditions</label>

  <br />

  <input type="submit" name="submit" value="Submit" />
</form>
