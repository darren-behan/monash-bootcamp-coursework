DROP DATABASE IF EXISTS popQuiz_DB;
CREATE DATABASE popQuiz_DB;

USE popQuiz_DB;

CREATE TABLE questions(
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO questions (id, question) values (1, 'Who is the australian prime minister?');
INSERT INTO questions (id, question) values (2, 'Who is the australian foreign minister?');
INSERT INTO questions (id, question) values (3, 'Who is the australian finance minister?');