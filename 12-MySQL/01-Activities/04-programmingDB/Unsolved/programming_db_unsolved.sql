-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  -- Set the id as this table's primary key
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  -- Create a string column called "language" --
  language VARCHAR(30) NOT NULL,
  -- Create an integer column called "rating" --
  rating INTEGER(10),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT TRUE
);

-- Create new example rows
