CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id int AUTO_INCREMENT NOT NULL,
  author varchar(30) NOT NULL,
  chirp varchar(30) NOT NULL,
  time datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);