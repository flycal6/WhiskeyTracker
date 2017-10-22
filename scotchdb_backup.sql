-- MySQL dump 10.13  Distrib 5.6.35, for osx10.9 (x86_64)
--
-- Host: localhost    Database: scotchdb
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scotch`
--

DROP TABLE IF EXISTS `scotch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scotch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(128) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `taste` int(2) NOT NULL,
  `age` int(4) NOT NULL,
  `purchasePlace` varchar(255) NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scotch`
--

LOCK TABLES `scotch` WRITE;
/*!40000 ALTER TABLE `scotch` DISABLE KEYS */;
INSERT INTO `scotch` VALUES (1,'Wyoming Whiskey','Colorado Bourbon',38.00,6,7,'Denver','Not bad.  Smell has a bite.'),(2,'Johnny Walker Black','Blended Scotch',28.95,6,7,'Target','Okay, for the price.  Worth it if found on sale.'),(3,'Johnny Walker Blue','Blended Scotch',229.95,8,10,'Sanjay Liquors','Smokey, smooth and good.  But way too expensive.'),(4,'Jim Beam','Kentucky Bourbon',18.95,4,4,'Corner Store','Sucks.'),(5,'Jack Daniels','Tennessee Sour Mash Whiskey',24.95,4,4,'Costco','Not for me. Has a bite.'),(8,'sitka','cat',90.00,5,4,'kuwait','good cat'),(9,'bendigo','cat',88.89,7,1,'denver','good cat'),(10,'Johnny Walker Green','Blended Scotch',41.99,9,9,'kuwait','Really good for the price.  Buy it if you find it.'),(12,'Johnny Walker Red','Blended Scotch',21.00,3,4,'Kuwait','Only good for mixing.');
/*!40000 ALTER TABLE `scotch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-21 21:34:06
