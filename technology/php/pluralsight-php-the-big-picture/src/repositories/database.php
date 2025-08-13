<?php

class Database {
  private $connection;
  private $logger;

  public function __construct($logger) {
    $this->connection = new PDO('sqlite://Users/sam/Documents/Development/Study/PHP/pluralsight-php-the-big-picture/src/data/foo.db');

    $this->logger = $logger;
  }

  public function read_query($query) {
    $result = $this->connection->query($query);

    $this->logger->info('Read query executed', [
      'query' => $query,
    ]);

    return $result;
  }

  public function write_query($query) {
    $result = $this->connection->query($query);

    $this->logger->notice('Write query executed', [
      'query' => $query,
    ]);

    return $result;
  }
}
