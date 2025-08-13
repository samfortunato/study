<?php

namespace Controllers;

use \Repositories\UserRepository;

use \Validators\UserUpdateValidator;

use \Entities\NullUser;

use \Utils\Redirector;

class UserController {
  static function get_user_to_edit() {
    if (isset($_GET['id']) && ctype_digit($_GET['id'])) {
      $user = UserRepository::get_one((int)$_GET['id']);

      $user = $user ?? new NullUser();

      return $user;
    }
  }

  static function handle_update() {
    if (isset($_GET['id']) && ctype_digit($_GET['id']) && UserUpdateValidator::is_valid()) {
      $user_id = (int)$_GET['id'];

      $values = [
        'username' => $_POST['username'],
        'gender' => $_POST['gender'],
        'color' => $_POST['color'],
      ];

      UserRepository::update_one($user_id, $values);
    }
  }

  static function handle_delete() {
    if (isset($_GET['id']) && ctype_digit($_GET['id'])) {
      UserRepository::delete_one((int)$_GET['id']);
    } else {
      Redirector::redirect_to_home();
    }
  }
}
