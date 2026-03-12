CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    branch text,
    year text,
    career_interest text,
);