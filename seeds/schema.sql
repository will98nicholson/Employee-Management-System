use employee_db;
create table role(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10, 2),
department_id INT);

create table employee(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT);

insert into employee(
    first_name, 
    last_name
) values ('Will', 'Nicholson')

