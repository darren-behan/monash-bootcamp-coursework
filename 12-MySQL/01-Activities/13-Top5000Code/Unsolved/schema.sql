DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;

-- A query which returns all data for songs sung by a specific artist --
SELECT *
FROM top5000_songs 
WHERE artist="Madonna";

-- A query which returns all artists who appear within the top 5000 more than once -- 
SELECT artist 
FROM top5000_songs 
GROUP BY artist HAVING COUNT(*) > 1;

-- A query which returns all data contained within a specific range --
SELECT *
FROM top5000_songs
WHERE year BETWEEN 1980 AND 1990;

-- A query which searches for a specific song in the top 5000 and returns the data for it --
SELECT *
FROM top5000_songs
WHERE song="Toxic";
