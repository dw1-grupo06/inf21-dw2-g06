CREATE SCHEMA `car_dealership`;
USE `car_dealership`;

CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `color` varchar(512) NOT NULL,
  `engineId` int NULL,
  `manufacturerId` int NULL,
  `ownerId` int NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `engine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `horsepower` int NOT NULL,
  `brand` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `founded` int NOT NULL,
  `description` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `owner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';