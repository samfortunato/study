<?php

class Person {
  const AVG_LIFE_SPAN = 80;

  static $foo = 'foo';

  private $first_name;
  private $last_name;
  private $birth_year;

  function __construct($first_name = '', $last_name = '', $birth_year = 1800) {
    $this->first_name = $first_name;
    $this->last_name = $last_name;
    $this->birth_year = $birth_year;
  }

  final function get_first_name() {
    return $this->first_name;
  }

  function set_first_name($first_name) {
    $this->first_name = $first_name;
  }

  protected function get_full_name() {
    return "$this->first_name $this->last_name";
  }
}
