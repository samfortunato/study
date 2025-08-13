<?php

namespace Repositories;

class Database {
  static function query($sql, $params = []) {
    $database = self::connect();

    $statement = $database->prepare($sql);
    if ($params) $statement->bind_param(self::build_types($params), ...$params);
    $statement->execute();

    $results = $statement->get_result();

    $database->close();

    return $results;
  }

  private static function connect() {
    $database = new \mysqli('localhost', 'root', 'password');

    return $database;
  }

  private static function build_types($params) {
    $types = '';

    foreach ($params as $param) {
      $type = gettype($param);

      if ($type === 'integer') $types .= 'i';
      elseif ($type === 'string') $types .= 's';
      elseif ($type === 'double') $types .= 'd';
    }

    return $types;
  }
}
