CREATE DATABASE burgers_db;

SWITCH TO OR USE the burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name TEXT,
    devoured BOOLEAN,
    PRIMARY KEY(id)
)