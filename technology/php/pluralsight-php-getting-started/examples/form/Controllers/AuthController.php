<?php

namespace Controllers;

use \Repositories\UserRepository;
use \Validators\LoginValidator;
use \Utils\{Redirector, FormWatcher};

class AuthController {
  static function handle_admin_authorization() {
    session_start();

    if (self::is_not_admin()) {
      Redirector::redirect_to_login();

      return false;
    }

    return true;
  }

  static function login() {
    if (FormWatcher::was_submitted() && LoginValidator::is_valid()) {
      $username = $_POST['username'];
      $password = $_POST['password'];

      $results = UserRepository::get_one_by_username($username);
      $user = $results->fetch_object();

      $is_correct_password = password_verify($password, $user->password_hash);

      if ($is_correct_password) {
        echo 'Logged in!';

        self::set_session($user);
      } else {
        echo 'GET THE FUCK OUT HACKER FUCKER!';
      }
    }
  }

  static function logout() {
    session_start();

    self::clear_session();

    echo 'You have been logged out.';
  }

  private static function is_not_admin() {
    return !isset($_SESSION['is_admin']) || $_SESSION['is_admin'] === 0;
  }

  private static function set_session($user) {
    $_SESSION['username'] = $user->name;
    $_SESSION['is_admin'] = $user->is_admin;
  }

  private static function clear_session() {
    if (isset($_SESSION['username'])) unset($_SESSION['username']);
    if (isset($_SESSION['is_admin'])) unset($_SESSION['is_admin']);
  }
}
