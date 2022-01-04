CREATE TABLE users(
id serial PRIMARY KEY,
first_name text,
last_name text,
age integer,
hoby text
);

INSERT INTO users (first_name, last_name, age, hoby) VALUES
('Andrey' , 'Shevchenko' , 42 , 'football')