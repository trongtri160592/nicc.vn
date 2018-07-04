-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema nicc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nicc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nicc` DEFAULT CHARACTER SET utf8 ;

USE `nicc` ;

-- -----------------------------------------------------
-- Table `nicc`.`ar_internal_metadata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`ar_internal_metadata` (
  `key` VARCHAR(255) NOT NULL,
  `value` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`key`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `nicc`.`cancer_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`cancer_type` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name_english` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `description_english` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `description` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `is_common` TINYINT(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  FULLTEXT INDEX `index2` (`name_english` ASC, `name` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`event` (
  `id` INT(11) NOT NULL,
  `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `content` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`leadership`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`leadership` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `position_english` VARCHAR(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`news`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`news` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `content` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `content_english` TEXT NULL DEFAULT NULL,
  `title_english` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `thumbnail` VARCHAR(255) NULL,
  `featured` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FULLTEXT INDEX `index2` (`title` ASC, `title_english` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`person` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `leadership_id` INT(11) NOT NULL,
  `portrait` VARCHAR(255) NULL,
  `background` TEXT NULL,
  `background_english` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_person_leadership_idx` (`leadership_id` ASC),
  CONSTRAINT `fk_person_leadership`
    FOREIGN KEY (`leadership_id`)
    REFERENCES `nicc`.`leadership` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`research_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`research_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `name_english` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`research`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`research` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `description` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `research_category_id` INT(11) NOT NULL,
  `release_date` DATE NULL,
  `description_english` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_research_research_category1_idx` (`research_category_id` ASC),
  FULLTEXT INDEX `index3` (`title` ASC),
  CONSTRAINT `fk_research_research_category1`
    FOREIGN KEY (`research_category_id`)
    REFERENCES `nicc`.`research_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`schema_migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`schema_migrations` (
  `version` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`version`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `nicc`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`user` (
  `username` VARCHAR(16) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `email` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `password_digest` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `nicc`.`partner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`partner` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `logo` VARCHAR(255) NOT NULL,
  `website` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

USE `nicc` ;

-- -----------------------------------------------------
-- Placeholder table for view `nicc`.`search_vi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`search_vi` (`searchable_id` INT, `searchable_type` INT, `title` INT);

-- -----------------------------------------------------
-- Placeholder table for view `nicc`.`search_en`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nicc`.`search_en` (`searchable_id` INT, `searchable_type` INT, `title` INT);

-- -----------------------------------------------------
-- View `nicc`.`search_vi`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nicc`.`search_vi`;
USE `nicc`;
CREATE  OR REPLACE VIEW `search_vi` AS
 SELECT
    cancer_type.id AS searchable_id,
    'Cancer_type' AS searchable_type,
    cancer_type.name AS title
  FROM cancer_type

  UNION

  SELECT
    news.id AS searchable_id,
    'News' AS searchable_type,
    news.title AS title
  FROM news

  UNION

  SELECT
    research.id AS searchable_id,
    'Research' AS searchable_type,
    research.title AS title
  FROM research;

-- -----------------------------------------------------
-- View `nicc`.`search_en`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nicc`.`search_en`;
USE `nicc`;
CREATE  OR REPLACE VIEW `search_en` AS
 SELECT
    cancer_type.id AS searchable_id,
    'Cancer_type' AS searchable_type,
    cancer_type.name_english AS title
  FROM cancer_type

  UNION

  SELECT
    news.id AS searchable_id,
    'News' AS searchable_type,
    news.title_english AS title
  FROM news

  UNION

  SELECT
    research.id AS searchable_id,
    'Research' AS searchable_type,
    research.title AS title
  FROM research;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
