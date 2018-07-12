-- MySQL Workbench Synchronization
-- Generated: 2018-07-12 20:07
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: trong

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

ALTER TABLE `nicc_vn_development`.`cancer_type` 
CHANGE COLUMN `name_english` `name_english` VARCHAR(500) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL ,
CHANGE COLUMN `name` `name` VARCHAR(500) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL ,
CHANGE COLUMN `description_english` `description_english` LONGTEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `description` `description` LONGTEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL ;

ALTER TABLE `nicc_vn_development`.`news` 
CHANGE COLUMN `title` `title` VARCHAR(500) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `content` `content` LONGTEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL ,
CHANGE COLUMN `content_english` `content_english` LONGTEXT NULL DEFAULT NULL ,
CHANGE COLUMN `thumbnail` `thumbnail` VARCHAR(500) NULL DEFAULT NULL ;

ALTER TABLE `nicc_vn_development`.`research` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL ,
CHANGE COLUMN `title` `title` VARCHAR(500) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
