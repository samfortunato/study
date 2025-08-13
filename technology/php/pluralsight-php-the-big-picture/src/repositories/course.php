<?php

class CourseRepository {
  private $database;

  public function __construct($database) {
    $this->database = $database;
  }

  public function get_all() {
    $query = <<<SQL
      SELECT *
      FROM courses;
    SQL;

    $result = $this->database->read_query($query);

    return $result;
  }

  public function create($name, $author, $create_date) {
    $query = <<<SQL
      INSERT INTO courses (name, author, create_date)
      SELECT '${name}', '${author}', '${create_date}'
      WHERE NOT EXISTS
      (SELECT 1 FROM courses WHERE name = '${name}');
    SQL;

    $result = $this->database->write_query($query);

    return $result;
  }

  public function print_courses() {
    $courses = $this->get_all();

    foreach ($courses as $course) {
      print($course['name'] . '<br />');
    }
  }
}
