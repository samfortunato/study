CREATE DATABASE php_foo;

CREATE TABLE php_foo.person (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(255)
);
