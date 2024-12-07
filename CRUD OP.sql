CREATE DATABASE internship_db;

USE internship_db;

CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
phone_number VARCHAR(15),
about TEXT,
gender ENUM('male', 'female', 'other'),
birthdate DATE,
hobbies VARCHAR(255),
intrest VARCHAR(100),
profilePic VARCHAR(255)
);



SELECT * FROM employees WHERE id = 1;

