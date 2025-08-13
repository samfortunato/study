<?php

namespace Validators;

class FormValidator {
  static function is_valid() {
    $validators = [
      'are_all_fields_filled',
      'is_languages_field_valid',
    ];

    foreach ($validators as $validator) {
      if (self::$validator() === false) {
        return false;
      }
    }

    return true;
  }

  private static function are_all_fields_filled() {
    $are_all_filled = true;

    foreach (self::get_fields() as $field) {
      if (!isset($_POST[$field]) || $_POST[$field] === '') {
        $are_all_filled = false;
      }
    }

    return $are_all_filled;
  }

  private static function is_languages_field_valid() {
    $is_valid = true;

    if (
      isset($_POST['languages']) &&
      !is_array($_POST['languages']) &&
      count($_POST['languages']) === 0
    ) {
      $is_valid = false;
    }

    return $is_valid;
  }

  private static function get_fields() {
    return [
      'username',
      'password',
      'gender',
      'color',
      'languages',
      'comments',
      'has_agreed_to_terms',
    ];
  }
}
