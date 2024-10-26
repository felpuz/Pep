CREATE TABLE Login (
id INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(30) not null,
senha VARCHAR(10) not null unique
);