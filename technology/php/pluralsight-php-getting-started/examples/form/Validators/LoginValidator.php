<?php

namespace Validators;

class LoginValidator {
  static function is_valid() {
    return (
      self::is_username_valid() &&
      self::is_password_valid()
    );
  }

  private static function is_username_valid() {
    return isset($_POST['username']);
  }

  private static function is_password_valid() {
    return isset($_POST['password']);
  }
}
