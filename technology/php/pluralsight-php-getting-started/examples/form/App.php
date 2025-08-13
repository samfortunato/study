<?php

use Controllers\{UserListController, FormController};

use Validators\FormValidator;

class App {
  static function main() {
    UserListController::print_user_list();

    if (isset($_POST['submit']) && FormValidator::is_valid()) {
      FormController::handle_on_submit();
    }

  }
}
