SELECT
  person.person_first_name,
  email.email_address
FROM person
INNER JOIN email_address AS email
  ON email_address.email_address_person_id = person.person_id;

SELECT
  person.person_first_name,
  email.email_address
FROM person
JOIN email_address AS email
  ON email.email_address_person_id = person.person_id;

-- not valid in MySQL
SELECT
  person.person_first_name,
  email_address.email_address
FROM person
OUTER JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

-- right side will show NULL if no match
SELECT
  person.person_first_name
  email_address.email_address
FROM person
LEFT JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

-- left side will show NULL if no match
SELECT
  person.person_first_name,
  email_address.email_address
FROM person
RIGHT JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

-- LEFT OUTER JOIN = LEFT JOIN
SELECT
  person.person_first_name,
  email_address.email_address
FROM person
LEFT OUTER JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

-- RIGHT OUTER JOIN = RIGHT JOIN
SELECT
  person.person_first_name,
  email_address.email_address
FROM person
RIGHT OUTER JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

SELECT
  person.person_first_name,
  email_address.email_address
FROM person
LEFT OUTER JOIN email_address
  ON email_address.email_address_person_id = person.person_id
UNION DISTINCT
SELECT
  person.person_first_name,
  email_address.email_address
FROM person
RIGHT OUTER JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

SELECT
  person.person_first_name,
  person.person_last_name,
  email_address.email_address
FROM person
LEFT JOIN email_address
  ON email_address.email_address_person_id = person.person_id
UNION DISTINCT
SELECT
  person.person_first_name,
  person.person_last_name,
  email_address.email_address
FROM person
RIGHT JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

SELECT *
FROM person
LEFT JOIN email_address
  ON email_address.email_address_person_id = person.person_id
UNION DISTINCT
SELECT *
FROM person
RIGHT JOIN email_address
  ON email_address.email_address_person_id = person.person_id;

SELECT *
FROM person
LEFT JOIN email_address
  ON email_address.email_address_person_id = person.person_id

UNION DISTINCT

SELECT *
FROM person
RIGHT JOIN email_address
  ON email_address.email_address_person_id = person.person_id;
