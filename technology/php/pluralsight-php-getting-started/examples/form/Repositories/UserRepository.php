<?php

namespace Repositories;

use Repositories\Database;

class UserRepository {
  static function create() {
    $sql = <<<SQL
      INSERT INTO php_test.user (name, gender, color, password_hash)
      VALUES (?, ?, ?, ?);
    SQL;

    $params = [
      $_POST['username'],
      $_POST['gender'],
      $_POST['color'],
      password_hash($_POST['password'], PASSWORD_DEFAULT),
    ];

    Database::query($sql, $params);
  }

  static function get_one($user_id) {
    $sql = <<<SQL
      SELECT *
      FROM php_test.user
      WHERE id = ?;
    SQL;

    $params = [$user_id];

    $result = Database::query($sql, $params);

    return $result->fetch_object();
  }

  static function get_one_by_username($username) {
    $sql = <<<SQL
      SELECT *
      FROM php_test.user
      WHERE name = ?;
    SQL;

    $params = [$username];

    return Database::query($sql, $params);
  }

  static function get_all() {
    $sql = <<<SQL
      SELECT *
      FROM php_test.user;
    SQL;

    return Database::query($sql);
  }

  static function update_one($user_id, $values) {
    $sql = <<<SQL
      UPDATE php_test.user
      SET
        name = ?,
        gender = ?,
        color = ?
      WHERE id = ?;
    SQL;

    $params = [
      $values['username'],
      $values['gender'],
      $values['color'],
      $user_id
    ];

    Database::query($sql, $params);
  }

  static function delete_one($user_id) {
    $sql = <<<SQL
      DELETE FROM php_test.user
      WHERE id = ?;
    SQL;

    $params = [$user_id];

    Database::query($sql, $params);
  }

  static function get_password_hash($username) {
    $sql = <<<SQL
      SELECT password_hash
      FROM php_test.user
      WHERE name = ?;
    SQL;

    $params = [$username];

    return Database::query($sql, $params);
  }
}
