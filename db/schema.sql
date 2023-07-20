DROP DATABASE IF EXISTS jordanhackathon_db;
CREATE DATABASE jordanhackathon_db;

\c jordanhackathon_db;

CREATE TABLE pokemon (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT,
    image TEXT,
    type TEXT
);