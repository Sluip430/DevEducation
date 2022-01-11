CREATE TABLE universities(
id serial PRIMARY KEY,
name text UNIQUE
);

CREATE TABLE users(
id serial PRIMARY KEY,
role roles NOT NULL,
first_name text,
last_name text,
age integer,
universitie_id integer,
FOREIGN KEY (universitie_id) REFERENCES universities(id)
);

CREATE TABLE courses(
id serial PRIMARY KEY,
name text,
universitie_id integer,
teacher_id integer,
FOREIGN KEY (universitie_id) REFERENCES universities(id),
FOREIGN KEY (teacher_id) REFERENCES users(id),
CONSTRAINT isTeacher
CHECK (checkroles(teacher_id) = 1)
);

CREATE TABLE students_courses(
student_id integer,
course_id integer,
FOREIGN KEY (student_id) REFERENCES users(id),
FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE marks(
id serial PRIMARY KEY,
mark integer,
student_id integer,
course_id integer,
FOREIGN KEY (student_id) REFERENCES users(id),
FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE FUNCTION checkRole (user_id integer)
RETURNS roles
AS
$$
	DECLARE
	role roles;
BEGIN
	SELECT role from users WHERE users.id = user_id;
 	RETURN role;
END;
$$
LANGUAGE plpgsql;
	
create type roles as enum ('student', 'teacher');

SELECT * FROM universities WHERE id = 3;

 INSERT INTO courses (name, universitie_id, teacher_id )
 VALUES ('Math', 1, 3);

DELETE
FROM users




SELECT role from users WHERE users.id = 5

create function checkRoles(user_id int)
returns int
as
$$
declare
	ur roles;
begin
	select role into ur from users where users.id = user_id;
	if ur = 'teacher' then
    	return (select 1);
	else 
    	return (select 0);
    end if;
end;
$$
language plpgsql;


































