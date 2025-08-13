<?php

namespace Utils;

class TextSanitizer {
  static function create_printable_value($raw_value) {
    $printable_value = is_array($raw_value) ?
      implode(' ', $raw_value) :
      $raw_value;

    $printable_value = htmlspecialchars($printable_value, ENT_QUOTES);

    return $printable_value;
  }
}
