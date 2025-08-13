<?php

abstract class Food {
  abstract function cook();
  abstract function store();
  abstract function eat();

  function smell() { }
  function throw_away() { }
}
