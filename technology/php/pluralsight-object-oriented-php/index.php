<?php

include_once './Interfaces/Electronic.php';

include_once './Objects/Organism.php';
include_once './Objects/Person.php';
include_once './Objects/Author.php';
include_once './Objects/Television.php';
include_once './Objects/Food.php';
include_once './Objects/Pie.php';

$person = new Person('John', 'Doe', 1900);
$author = new Author('Samuel', 'Clemens', 1865, 'Your Mommy');

echo $author->get_first_name();

function echo_name($person) {
  echo $person->first_name . "\n";

  $person->first_name = 'Roger';

  echo $person->first_name . "\n";
}

function echo_const($person) {
  echo $person::AVG_LIFE_SPAN;
  echo PERSON::AVG_LIFE_SPAN;
}

function class_methods($person) {
  echo $person->get_first_name();

  $person->set_first_name('Joomy');

  echo $person->get_first_name();

  echo $person->get_full_name();
}

function echo_name_access_modifiers($author) {
  echo $author->get_complete_name();
  // echo $author->get_full_name();
}

function echo_static_values() {
  echo Author::$century;

  echo Author::get_century();
  echo Author::get_parent_value();
}
