<?php

class Autoloader {
  static function autoload() {
    spl_autoload_register(function ($class_name) {
      $path = str_replace('\\', '/', $class_name) . '.php';

      require_once $path;
    });
  }
}

Autoloader::autoload();
