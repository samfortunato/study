SELECT person_last_name
FROM person
WHERE person_first_name = 'Jon';

-- <> is NOT EQUAL
SELECT *
FROM person
WHERE person_first_name <> 'Jon';

SELECT *
FROM person
WHERE person_first_name != 'Jon';

SELECT *
FROM person
WHERE person_first_name = 'Jon'
  AND person_date_last_contacted < '2013/10/14';

SELECT *
FROM person
WHERE person_first_name = 'Jon'
  OR person_last_name = 'Ahern';

SELECT *
FROM person
WHERE person_contacted_number BETWEEN 1 AND 4;

SELECT *
FROM person
WHERE person_first_name LIKE 'J%';

SELECT person_first_name
FROM person
WHERE person_first_name LIKE '%o%';

-- person_first_name = 'Fritz';
SELECT *
FROM person
WHERE person_first_name LIKE '%r%t%';

SELECT *
FROM person
WHERE person_first_name IN ('Jon', 'Fritz');

SELECT *
FROM person
WHERE person_first_name IS NULL;

SELECT *
FROM person
WHERE person_first_name IS NOT NULL;

-- SELECT *
-- FROM person;

/*
SELECT *
FROM person;
*/

SELECT *
FROM email_address
WHERE email_address_person_id IS NULL;

SELECT
  email_address_id,
  email_address
FROM email_address
WHERE email_address_person_id IS NULL;
