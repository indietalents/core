-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.9-log - MySQL Community Server (GPL)
-- ОС Сервера:                   Win64
-- HeidiSQL Версия:              9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры базы данных outstandies
CREATE DATABASE IF NOT EXISTS `outstandies` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `outstandies`;


-- Дамп структуры для таблица outstandies.cmp_instruments
CREATE TABLE IF NOT EXISTS `cmp_instruments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.cmp_instruments: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `cmp_instruments` DISABLE KEYS */;
/*!40000 ALTER TABLE `cmp_instruments` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.cmp_musicstyles
CREATE TABLE IF NOT EXISTS `cmp_musicstyles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.cmp_musicstyles: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `cmp_musicstyles` DISABLE KEYS */;
/*!40000 ALTER TABLE `cmp_musicstyles` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.cmp_user_instrument
CREATE TABLE IF NOT EXISTS `cmp_user_instrument` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `instrument_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cmp_user_instrument_instruments` (`instrument_id`),
  KEY `fk_cmp_user_instrument_usr_standardinfo` (`user_id`),
  CONSTRAINT `fk_cmp_user_instrument_instruments` FOREIGN KEY (`instrument_id`) REFERENCES `cmp_instruments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cmp_user_instrument_usr_standardinfo` FOREIGN KEY (`user_id`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.cmp_user_instrument: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `cmp_user_instrument` DISABLE KEYS */;
/*!40000 ALTER TABLE `cmp_user_instrument` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.cmp_user_musicstyle
CREATE TABLE IF NOT EXISTS `cmp_user_musicstyle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `music_style_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cmp_user_musicstyle_usr_standardinfo` (`user_id`),
  KEY `fk_cmp_user_musicstyle_cmp_musicstyles` (`music_style_id`),
  CONSTRAINT `fk_cmp_user_musicstyle_cmp_musicstyles` FOREIGN KEY (`music_style_id`) REFERENCES `cmp_musicstyles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cmp_user_musicstyle_usr_standardinfo` FOREIGN KEY (`user_id`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.cmp_user_musicstyle: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `cmp_user_musicstyle` DISABLE KEYS */;
/*!40000 ALTER TABLE `cmp_user_musicstyle` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.prf_subtype
CREATE TABLE IF NOT EXISTS `prf_subtype` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.prf_subtype: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `prf_subtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `prf_subtype` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.prf_type
CREATE TABLE IF NOT EXISTS `prf_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.prf_type: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `prf_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `prf_type` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.prf_user_subtype
CREATE TABLE IF NOT EXISTS `prf_user_subtype` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0',
  `subtype_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_prf_user_subtype_usr_standardinfo` (`user_id`),
  KEY `fk_prf_user_subtype_prf_subtype` (`subtype_id`),
  CONSTRAINT `fk_prf_user_subtype_prf_subtype` FOREIGN KEY (`subtype_id`) REFERENCES `prf_subtype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_prf_user_subtype_usr_standardinfo` FOREIGN KEY (`user_id`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.prf_user_subtype: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `prf_user_subtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `prf_user_subtype` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.prf_user_type
CREATE TABLE IF NOT EXISTS `prf_user_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `type_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prf_user_type_usr_standardinfo` (`user_id`),
  KEY `fk_prf_user_type_prf_type` (`type_id`),
  CONSTRAINT `fk_prf_user_type_prf_type` FOREIGN KEY (`type_id`) REFERENCES `prf_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_prf_user_type_usr_standardinfo` FOREIGN KEY (`user_id`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.prf_user_type: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `prf_user_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `prf_user_type` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=ucs2;

-- Дамп данных таблицы outstandies.users: ~11 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `name`, `surname`, `email`) VALUES
	(1, 'Uladzislau', 'Minich', 'architect@it.com'),
	(2, 'Uladzislau', 'Zinchenko', 'seo@it.com'),
	(3, 'Darya', 'Krupenko', 'assistant_architect@it.com'),
	(4, 'Ksusha', 'Mazhara', 'kisaru@com.com'),
	(5, 'Mark', 'Zuckerberg', 'main@competitor.com'),
	(6, 'Pavel', 'Durov', 'verni@stenu.com'),
	(7, 'Sergei', 'Silich', 'asoi@best.com'),
	(8, 'Alex', 'Kushnerov', 'asoi2@best.com'),
	(9, 'Ihar', 'Razumovich', 'asoi3@best.com'),
	(10, 'Artem', 'Ivanov', 'blyadski@flat.com'),
	(11, 'Default', 'User', 'default@mail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.usr_advancedinfo
CREATE TABLE IF NOT EXISTS `usr_advancedinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usr_advancedinfo_usr_standardinfo` (`userId`),
  CONSTRAINT `fk_usr_advancedinfo_usr_standardinfo` FOREIGN KEY (`userId`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.usr_advancedinfo: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `usr_advancedinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_advancedinfo` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.usr_setting
CREATE TABLE IF NOT EXISTS `usr_setting` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usr_setting_usr_standardinfo` (`user_id`),
  CONSTRAINT `fk_usr_setting_usr_standardinfo` FOREIGN KEY (`user_id`) REFERENCES `usr_standardinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.usr_setting: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `usr_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_setting` ENABLE KEYS */;


-- Дамп структуры для таблица outstandies.usr_standardinfo
CREATE TABLE IF NOT EXISTS `usr_standardinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы outstandies.usr_standardinfo: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `usr_standardinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_standardinfo` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
