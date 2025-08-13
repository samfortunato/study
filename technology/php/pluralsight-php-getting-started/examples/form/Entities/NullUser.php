<?php

namespace Entities;

class NullUser {
  function __construct() {
    $this->name = '';
    $this->gender = '';
    $this->color = 'black';
  }
}
