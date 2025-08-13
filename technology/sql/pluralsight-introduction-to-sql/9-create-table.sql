CREATE TABLE email_address (
  email_address_id INTEGER,
  email_address_person_id INTEGER,
  email_address VARCHAR(55)
);

CREATE TABLE foo (
  id INTEGER,
  name VARCHAR(255),
  birthday DATETIME
);

CREATE TABLE email_address (
  id INTEGER NOT NULL,
  person_id INTEGER,
  email_address VARCHAR(55) NOT NULL
);

CREATE TABLE bar (
  id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  birthday DATETIME
);

CREATE TABLE baz (
  id INTEGER NOT NULL,
  foo_id INTEGER,
);

CREATE TABLE email_address (
  id INTEGER PRIMARY KEY,
  person_id INTEGER,
  email_address VARCHAR(55) NOT NULL
);

CREATE TABLE foo (
  id INTEGER PRIMARY KEY,
  name VARCHAR(55)
);

CREATE TABLE phone_number (
  id INTEGER NOT NULL,
  person_id INTEGER NOT NULL,
  phone_number VARCHAR(55) NOT NULL,
  CONSTRAINT PK_id PRIMARY KEY (id)
);

ALTER TABLE foo
ADD COLUMN bar INTEGER NOT NULL;

ALTER TABLE email_address
ADD CONSTRAINT FK_person_id FOREIGN KEY (person_id) REFERENCES person (id);

DROP TABLE foo;

ALTER TABLE foo
ADD CONSTRAINT FK_bar_id
FOREIGN KEY (bar_id)
REFERENCES bar (id);

ALTER TABLE foo
ADD CONSTRAINT PK_id
PRIMARY KEY (id);
