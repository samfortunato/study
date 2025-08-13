<?php

namespace Validators;

class UserUpdateValidator {
  static function is_valid() {
    return (
      self::is_name_valid() &&
      self::is_gender_valid() &&
      self::is_color_valid()
    );
  }

  private static function is_name_valid() {
    return isset($_POST['username']) && gettype($_POST['username']) === 'string';
  }

  private static function is_gender_valid() {
    return (
      isset($_POST['gender']) &&
      gettype($_POST['gender']) === 'string'
    ) && (
      $_POST['gender'] === 'male' ||
      $_POST['gender'] === 'female'
    );
  }

  private static function is_color_valid() {
    return isset($_POST['color']) && gettype($_POST['color']) === 'string';
  }
}
