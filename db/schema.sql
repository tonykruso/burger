CREATE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id (255) AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);