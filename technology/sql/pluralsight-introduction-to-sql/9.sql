CREATE DATABASE contact;

USE DATABASE contact;

SELECT *
FROM person;

CREATE DATABASE foo;

SELECT *
FROM contact.person;

SELECT *
FROM foo.bar;

SELECT *
FROM foo.bar AS bar
WHERE bar.bar_id = 1;
