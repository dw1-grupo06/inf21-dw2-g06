CREATE SCHEMA `car_dealership`;
USE `car_dealership`;

CREATE TABLE `Car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `color` varchar(512) NOT NULL,
  `engineId` int NULL,
  `manufacturerId` int NULL,
  `ownerId` int NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `Engine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `horsepower` int NOT NULL,
  `brand` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `Manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `founded` int NOT NULL,
  `description` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `Owner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';

INSERT INTO `Car` VALUES (1,'BMW M4','BMW Car','#bfb9b9',3,1,1),(2,'FIAT 500','FIAT Car','#dd0bbc',2,2,3),(3,'Nissan GTR R34','Nissan Car','#000000',1,3,2),(4,'Acura NSX Type S','Honda Car','#8d8686',6,4,13),(5,'BMW M240i','BMW Car','#a6168f',7,1,4),(6,'Lamborghini Countach LPI 800-4 ','Lamborghini Car','#eae2e2',8,15,12),(7,'Toyota Celsior','Toyota Car','#1c0202',9,7,8),(8,'Toyota Corolla Cross 1.8 XR','Toyota Car','#c4b6b6',10,7,11),(9,'Skoda Octavia 2.0 TDI','Skoda Car','#c41515',11,9,7),(10,'Volkswagen Polo','German Manufacturer','#1033df',11,8,10);
INSERT INTO `Engine` VALUES (1,'BMW V12',685,'BMW'),(2,'FIAT V6',423,'FIAT'),(3,'Nissan V10',658,'Nissan'),(6,'Honda V6',586,'Honda'),(7,'BMW Straight 6',500,'BMW'),(8,'Lamborghini V12',542,'Lamborghini'),(9,'Toyota V8',496,'Toyota'),(10,'Toyota Straight 4',450,'Toyota'),(11,'Volkswagen Straight 4',492,'Volkswagen');
INSERT INTO `Manufacturer` VALUES (1,'BMW',1969,'German Manufacturer'),(2,'FIAT',1841,'Italian Manufacturer'),(3,'Nissan',1952,'Japanese Manufacturer'),(4,'Honda',1942,'Japanese Manufacturer'),(5,'Ferrari',1853,'Italian Manufacturer'),(6,'Porsche',1928,'German Manufacturer'),(7,'Toyota',1852,'Japanese Manufacturer'),(8,'Volkswagen',1965,'German Manufacturer'),(9,'Škoda',1962,'Czech Manufacturer'),(10,'Mitsubishi',1942,'Japanese Manufacturer'),(11,'Citroën',1919,'French Manufacturer'),(12,'Peugeot',1976,'French Manufacturer'),(13,'Renault',1893,'French Manufacturer'),(14,'Smart',1957,'German Manufacturer'),(15,'Lamborghini',1894,'Italian Manufacturer'),(16,'Mercedes',1924,'German Manufacturer');
INSERT INTO `Owner` VALUES (1,'André Cacheira',19,'Male'),(2,'Raul Gonçalves',19,'Male'),(3,'Bruno Sousa',21,'Male'),(4,'José Alberto',32,'Male'),(5,'Maria Alfreda',25,'Female'),(6,'Josefa Almeida',20,'Female'),(7,'Pedro Tomás',54,'Male'),(8,'Alberto Jardim',63,'Male'),(9,'Luís Sobral',27,'Male'),(10,'Marta Pinto',37,'Female'),(11,'Petra Rodrigues',73,'Female'),(12,'Zacarias Benedito',68,'Male'),(13,'José Maria',47,'Male'),(14,'Maria Alberto',74,'Female'),(15,'Alfredo José',56,'Male');
