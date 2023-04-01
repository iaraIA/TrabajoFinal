-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: iaramarket
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Manzana',100.00,100,'frutas'),(2,'Banana',90.00,100,'frutas'),(3,'Kiwi',120.00,100,'frutas'),(4,'Uva',150.00,100,'frutas'),(5,'Lechuga',80.00,100,'verduras'),(6,'Zanahoria',70.00,100,'verduras'),(7,'Papa',60.00,100,'verduras'),(8,'Tomate',100.00,100,'verduras'),(9,'Leche',120.00,100,'lacteos'),(10,'Queso',200.00,100,'lacteos'),(11,'Manteca',90.00,100,'lacteos'),(12,'Yogur',80.00,100,'lacteos'),(13,'Vacio',125.00,100,'carnes'),(14,'Matambre',180.00,100,'carnes'),(15,'Nalga',110.00,100,'carnes'),(16,'Picada',95.00,100,'carnes'),(17,'Pan',150.00,100,'panaderia'),(18,'Chipacito',180.00,100,'panaderia'),(19,'Torta',280.00,100,'panaderia'),(20,'Sandwiches',380.00,100,'panaderia'),(25,'Melón',175.00,50,'frutas'),(26,'Sandía',200.00,25,'frutas'),(28,'Palta',300.00,25,'verduras'),(29,'Frutilla',125.00,100,'frutas'),(30,'Peceto',211.00,10,'carnes'),(31,'Milanesa',180.00,100,'carnes');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'iaramarket'
--

--
-- Dumping routines for database 'iaramarket'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-01  9:12:50
