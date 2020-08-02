DROP DATABASE IF EXISTS music_dataDB;

CREATE DATABASE music_dataDB;

USE music_dataDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Hello", "Avicii", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("World", "Bon Jovi", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Goodbye", "One Direction", "Pop");