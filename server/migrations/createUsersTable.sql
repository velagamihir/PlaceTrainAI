CREATE TABLE users (
    id UUID PRIMARY KEY,
    fullname TEXT,
    email VARCHAR(255) UNIQUE,
    password TEXT,
    branch TEXT,
    year TEXT,
    career_interest TEXT
    
);