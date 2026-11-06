DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    entry_date DATE NOT NULL,
    title VARCHAR(100) NOT NULL,
    context VARCHAR(2000) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO diary_entries (entry_date, title, context)
VALUES
('2026-11-06', 'Hackathon', 'We are building database on diary entries');