<?php

class Author extends Person {
  static $century = '19th';

  static function get_century() {
    return self::$century;
  }

  static function get_parent_value() {
    return parent::$foo;
  }

  private $pen_name;

  function __construct($first_name = '', $last_name = '', $birth_year = '', $pen_name = '') {
    parent::__construct($first_name, $last_name, $birth_year);

    $this->pen_name = $pen_name;
  }

  function __destruct() {
    echo 'Author instance is being destroyed';
  }

  function get_complete_name() {
    return "{$this->get_full_name()} ($this->pen_name)";
  }

  function get_pen_name() {
    return $this->pen_name;
  }
}
