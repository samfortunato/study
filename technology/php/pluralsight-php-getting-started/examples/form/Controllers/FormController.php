<?php

namespace Controllers;

use \Repositories\UserRepository;

use \Utils\TextSanitizer;

class FormController {
  static function handle_on_submit() {
    foreach ($_POST as $key => $value) {
      $printable_value = TextSanitizer::create_printable_value($value);

      printf('%s: %s<br />', $key, $printable_value);
    }

    printf('<br />');

    self::save();
  }

  private static function save() {
    UserRepository::create();

    echo "<p>User saved.</p>";
  }
}
