INSERT INTO person (
  person_id, person_first_name, person_last_name, person_contacted_number,
  person_date_last_contacted, person_date_added
)
VALUES (
  5, 'Dongus', 'Johnson', 4, '2013-05-14 11:43:31', '2013-05-14 11:43:31'
);

INSERT INTO person ()
VALUES ();

INSERT INTO person
SELECT *
FROM old_person
WHERE old_person.id > 130;

INSERT INTO person (
  person_id, person_first_name, person_last_name, person_contacted_number,
  person_date_last_contacted, person_date_added
)
VALUES
  (6, 'Dingo', 'Bingo', 4, '2013-04-14 11:43:31', '2013-06-14 11:43:31'),
  (7, 'Wango', 'Bango', 3, '2013-03-14 11:43:31', '2013-07-14 11:43:31'),
  (8, 'Lingy', 'Fingy', 11, '2013-02-14 11:43:31', '2013-08-14 11:43:31');
