<?php

namespace Utils;

class FormWatcher {
  static function was_submitted($submit_button_value = 'submit') {
    return isset($_POST[$submit_button_value]);
  }
}
