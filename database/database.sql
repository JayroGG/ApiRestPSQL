CREATE DATABASE moviesapi;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    genre VARCHAR(40) NOT NULL,
    relase_date DATE DEFAULT CURRENT_DATE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, genre, relase_date) VALUES 
    ('Avatar', 'Sci-Fi', '2009-12-17'),
    ('Avatar 2', 'Sci-Fi', '2022-12-15');