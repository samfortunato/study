<?php

namespace Utils;

class FormPrefiller {
  static function create_safe_text_value($field) {
    if (isset($_POST[$field])) {
      echo htmlspecialchars($_POST[$field], ENT_QUOTES);
    }
  }

  static function print_obj_value($obj, $field) {
    echo $obj->$field;
  }

  static function mark_is_checked($field, $value) {
    if (isset($_POST[$field]) && $_POST[$field] === $value) {
      echo 'checked';
    }
  }

  static function mark_is_checked_on_obj($obj, $field, $value) {
    if ($obj->$field === $value) {
      echo 'checked';
    }
  }

  static function mark_is_selected($field, $value) {
    if (isset($_POST[$field]) && $_POST[$field] === $value) {
      echo 'selected';
    }
  }

  static function mark_is_selected_on_obj($obj, $field, $value) {
    if ($obj->$field === $value) {
      echo 'selected';
    }
  }

  static function mark_is_multi_selected($field, $value) {
    if (isset($_POST[$field]) && in_array($value, $_POST[$field])) {
      echo 'selected';
    }
  }
}
