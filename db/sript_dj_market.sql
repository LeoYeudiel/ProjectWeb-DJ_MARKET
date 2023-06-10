-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dj_market
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dj_market
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dj_market` DEFAULT CHARACTER SET utf8 ;
USE `dj_market` ;

-- -----------------------------------------------------
-- Table `dj_market`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`admin` (
  `id_admin` INT NOT NULL,
  `user` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id_admin`),
  UNIQUE INDEX `id_admin_UNIQUE` (`id_admin` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`dj`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`dj` (
  `id_dj` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `ruta_imagen` TEXT NOT NULL,
  `ruta_cancion` TEXT NOT NULL,
  `costo` INT NOT NULL,
  PRIMARY KEY (`id_dj`),
  UNIQUE INDEX `id_dj_UNIQUE` (`id_dj` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`salon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`salon` (
  `id_salon` INT NOT NULL,
  `nombre_salon` VARCHAR(50) NOT NULL,
  `costo` INT NOT NULL,
  `descripcion` TEXT NOT NULL,
  `ruta_imagen` TEXT NOT NULL,
  PRIMARY KEY (`id_salon`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`estado` (
  `id_estado` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`municipio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`municipio` (
  `id_municipio` INT NOT NULL,
  `id_estado` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_municipio`),
  INDEX `fk_municipio_estado_idx` (`id_estado` ASC) ,
  CONSTRAINT `fk_municipio_estado`
    FOREIGN KEY (`id_estado`)
    REFERENCES `dj_market`.`estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`evento` (
  `id_evento` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_evento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`tipo_evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`tipo_evento` (
  `id_tipo_evento` INT NOT NULL AUTO_INCREMENT,
  `id_evento` INT NOT NULL,
  `otro_evento` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_tipo_evento`),
  INDEX `fk_tipo_evento_evento1_idx` (`id_evento` ASC) ,
  CONSTRAINT `fk_tipo_evento_evento1`
    FOREIGN KEY (`id_evento`)
    REFERENCES `dj_market`.`evento` (`id_evento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`persona` (
  `id_persona` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `app` VARCHAR(50) NOT NULL,
  `apm` VARCHAR(50) NOT NULL,
  `tel` VARCHAR(12) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `calle_numero` VARCHAR(100) NOT NULL,
  `colonia` VARCHAR(100) NOT NULL,
  `id_municipio` INT NOT NULL,
  `cp` VARCHAR(5) NOT NULL,
  `curp` VARCHAR(18) NOT NULL,
  PRIMARY KEY (`id_persona`),
  UNIQUE INDEX `id_persona_UNIQUE` (`id_persona` ASC) ,
  INDEX `fk_persona_municipio1_idx` (`id_municipio` ASC) ,
  CONSTRAINT `fk_persona_municipio1`
    FOREIGN KEY (`id_municipio`)
    REFERENCES `dj_market`.`municipio` (`id_municipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dj_market`.`contratacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dj_market`.`contratacion` (
  `id_contratacion` VARCHAR(50) NOT NULL,
  `id_tipo_evento` INT NOT NULL,
  `id_persona` INT NOT NULL,
  `id_dj` INT NOT NULL,
  `id_salon` INT NOT NULL,
  `no_personas` INT NOT NULL,
  `costo_total` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `hora_inicio` TIME NOT NULL,
  `hora_fin` TIME NOT NULL,
  `estatus` TINYINT NOT NULL,
  PRIMARY KEY (`id_contratacion`),
  UNIQUE INDEX `id_contratacion_UNIQUE` (`id_contratacion` ASC) ,
  INDEX `fk_contratacion_tipo_evento1_idx` (`id_tipo_evento` ASC) ,
  INDEX `fk_contratacion_dj1_idx` (`id_dj` ASC) ,
  INDEX `fk_contratacion_salon1_idx` (`id_salon` ASC) ,
  INDEX `fk_contratacion_persona1_idx` (`id_persona` ASC) ,
  CONSTRAINT `fk_contratacion_tipo_evento1`
    FOREIGN KEY (`id_tipo_evento`)
    REFERENCES `dj_market`.`tipo_evento` (`id_tipo_evento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contratacion_dj1`
    FOREIGN KEY (`id_dj`)
    REFERENCES `dj_market`.`dj` (`id_dj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contratacion_salon1`
    FOREIGN KEY (`id_salon`)
    REFERENCES `dj_market`.`salon` (`id_salon`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contratacion_persona1`
    FOREIGN KEY (`id_persona`)
    REFERENCES `dj_market`.`persona` (`id_persona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
