CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username varchar(255) unique not null,
    name varchar(255) not null,
    email varchar(255) unique not null
);