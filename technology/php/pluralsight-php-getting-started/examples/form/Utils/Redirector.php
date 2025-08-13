<?php

namespace Utils;

class Redirector {
  static function redirect_to_home() {
    header('Location: index.php');
  }

  static function redirect_to_login() {
    header('Location: login.php');
  }
}
