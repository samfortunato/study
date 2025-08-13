<?php

namespace Controllers;

use \Repositories\UserRepository;

class UserListController {
  static function print_user_list() {
    $users = UserRepository::get_all() ?? [];

    printf('<ul>');

    foreach ($users as $user) {
      printf(
        <<<HTML
          <li style="color: %s">
            %s (%s)
            <a href="./update.php?id=%s">update</a>
            <a href="./delete.php?id=%s">delete</a>
          </li>
        HTML,
        htmlspecialchars($user['color'], ENT_QUOTES),
        htmlspecialchars($user['name'], ENT_QUOTES),
        htmlspecialchars($user['gender'], ENT_QUOTES),
        htmlspecialchars($user['id'], ENT_QUOTES),
        htmlspecialchars($user['id'], ENT_QUOTES)
      );
    }

    printf('</ul>');
  }
}
