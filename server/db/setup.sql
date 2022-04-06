DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    body VARCHAR NOT NULL
);

INSERT INTO posts (title, author, body)
VALUES
    ('My Secret', 'Stuart Little', 'This is my first secret story'),
    ('I love buildings', 'Ikenna', 'I like it when buildings are curvy and round'),
    ('Rubber Duckies', 'Sami', 'I cannot have baths without a rubber duck, it doesnt feel good.');
