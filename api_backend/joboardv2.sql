-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 24 oct. 2023 à 23:24
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `joboardv2`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `update_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `compagnies_id` int DEFAULT NULL,
  `working_time_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `start_price` int NOT NULL,
  `end_price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_5C755F1E5F9EE3CE` (`compagnies_id`),
  KEY `IDX_5C755F1E809A7F7B` (`working_time_id`),
  KEY `IDX_5C755F1E8BAC62AF` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `slug`, `description`, `create_at`, `update_at`, `compagnies_id`, `working_time_id`, `city_id`, `start_price`, `end_price`) VALUES
(1, 'WEB DEVELOPER ', 'web-developer', 'WEB DEVELOPPER FOR A NON DETERMINED TIME WORK CONTRACT.\r\nPROFILE:\r\nSYMFONY, PHP , JAVASCRIPT...', '2023-10-23 20:25:47', '2023-10-23 20:25:47', 1, 1, 1, 2000, 6000),
(2, 'COSMECTICS DOCTOR\r\nPROFILE: \r\n5 years in chemystry', 'cosmetics-doctor', 'COSMECTICS DOCTOR\r\nPROFILE: \r\n5 years in chemystry', '2023-10-23 20:25:47', '2023-10-23 20:25:47', 2, 1, 2, 1800, 4000);

-- --------------------------------------------------------

--
-- Structure de la table `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Paris'),
(2, 'Lille');

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `industry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `name`, `industry`, `location`) VALUES
(1, 'EDF', 'Energy', 'France'),
(2, 'Bio-Derma', 'Cosmetics', 'Holland');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20231020131852', '2023-10-20 13:19:10', 20),
('DoctrineMigrations\\Version20231020132423', '2023-10-20 13:24:34', 87),
('DoctrineMigrations\\Version20231020173834', '2023-10-20 17:38:43', 190),
('DoctrineMigrations\\Version20231021105539', '2023-10-21 10:55:49', 103),
('DoctrineMigrations\\Version20231021173301', '2023-10-21 17:33:11', 350),
('DoctrineMigrations\\Version20231022110932', '2023-10-22 11:09:45', 97),
('DoctrineMigrations\\Version20231024213712', '2023-10-24 21:37:24', 44);

-- --------------------------------------------------------

--
-- Structure de la table `job_application`
--

DROP TABLE IF EXISTS `job_application`;
CREATE TABLE IF NOT EXISTS `job_application` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advertisement_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_C737C688A1FBF71B` (`advertisement_id`),
  KEY `IDX_C737C688A76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `job_application`
--

INSERT INTO `job_application` (`id`, `advertisement_id`, `user_id`, `create_at`, `name`, `email`, `phone`, `message`) VALUES
(1, NULL, NULL, '2023-10-24 22:00:09', 'Ulrich houngbo', 'Uhoungbo@gmail.com', '+22990409826', 'uu'),
(2, NULL, NULL, '2023-10-24 22:04:58', 'Ulrich houngbo', 'Uhoungbo@gmail.com', '+22990409826', 'test'),
(3, NULL, NULL, '2023-10-24 22:19:30', 'john', 'john@doe.com', '111111111111', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
(3, 'azert@gmail.com', '[]', '$2y$13$FreNe0JPc27ZC6kqH7qQDOKU8dXJ4lzs5vWZgMe8jwyblIV/DNX/u', 'toto', 'tata'),
(4, 'qwerty@gmail.com', '[]', '$2y$13$9b5rhLAXBqnGigXg5eyk2uo59CYg/VQwU.2enADaVK00NqbJ1f2ce', 'aqwxsz', 'ecvfr'),
(5, 'john@doe.com', '[\"ROLE_ADMIN\"]', '$2y$13$HW93JWufgUMsqsoOfZzGO.pq0wEdBfrwcIFS7tZCDezpuulcHXRji', 'John', 'Doe'),
(6, 'personne@gmail.com', '[]', '$2y$13$7cRjPuxg.iTMNhD1LsbPyOmEVVhSlk5Hq30mXflh9t1QHUgnsGbPC', 'personne', 'inconnue');

-- --------------------------------------------------------

--
-- Structure de la table `work_time`
--

DROP TABLE IF EXISTS `work_time`;
CREATE TABLE IF NOT EXISTS `work_time` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `work_time`
--

INSERT INTO `work_time` (`id`, `name`) VALUES
(1, 'full time'),
(2, 'half time');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `advertisements`
--
ALTER TABLE `advertisements`
  ADD CONSTRAINT `FK_5C755F1E5F9EE3CE` FOREIGN KEY (`compagnies_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `FK_5C755F1E809A7F7B` FOREIGN KEY (`working_time_id`) REFERENCES `work_time` (`id`),
  ADD CONSTRAINT `FK_5C755F1E8BAC62AF` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`);

--
-- Contraintes pour la table `job_application`
--
ALTER TABLE `job_application`
  ADD CONSTRAINT `FK_C737C688A1FBF71B` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisements` (`id`),
  ADD CONSTRAINT `FK_C737C688A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
