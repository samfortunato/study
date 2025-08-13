SELECT *
FROM person
ORDER BY person_contacted_number; -- ASC = default

SELECT *
FROM person
ORDER BY person_contacted_number DESC;

SELECT *
FROM person
ORDER BY person_contacted_number ASC;

SELECT *
FROM person
ORDER BY
  person_contacted_number,
  person_date_last_contacted
  DESC;

SELECT SUM(person_contacted_number)
FROM person;

SELECT SUM(person_contacted_number) AS contacted_total
FROM person;

SELECT COUNT(*)
FROM person;

SELECT COUNT(*) AS total_people
FROM person;

SELECT COUNT(person_contacted_number)
FROM person
WHERE person_contacted_number > 0;

SELECT MAX(person_contacted_number)
FROM person;

SELECT MIN(person_contacted_number)
FROM person;

SELECT AVG(person_contacted_number)
FROM person;

SELECT MAX(person_contacted_number) AS max_person_contacted_number
FROM person;

SELECT SUM(person_contacted_number)
FROM person;

SELECT SUM(person_contacted_number) AS total_person_contacted_number
FROM person;

SELECT COUNT(DISTINCT person_first_name)
FROM person;

SELECT
  person_first_name,
  SUM(person_contacted_number)
FROM person
GROUP BY person_first_name;

SELECT
  person_first_name,
  AVG(person_contacted_number)
FROM person
GROUP BY person_first_name;

SELECT AVG(person_contacted_number)
FROM person
GROUP BY person_first_name;

-- get all names that are shared by 2 or more people
-- names that appear more than once
SELECT person_first_name
FROM person
GROUP BY person_first_name
HAVING COUNT(person_first_name) >= 2;

-- how many Jons are in the table?
-- how many Jons do we have?
SELECT person_first_name, COUNT(person_first_name)
FROM person
GROUP BY person_first_name
HAVING person_first_name = 'Jon';
