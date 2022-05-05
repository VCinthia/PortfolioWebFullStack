-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-04-2022 a las 18:43:47
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `portfolioweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia_laboral`
--

DROP TABLE IF EXISTS `experiencia_laboral`;
CREATE TABLE IF NOT EXISTS `experiencia_laboral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_empresa` varchar(45) DEFAULT NULL,
  `es_trabajo_actual` tinyint(4) NOT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_egreso` date DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `tipo_empleo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`persona_id`,`tipo_empleo_id`),
  KEY `fk_experiencia_laboral_persona_idx` (`persona_id`),
  KEY `fk_experiencia_laboral_tipo_empleo1_idx` (`tipo_empleo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `experiencia_laboral`
--

INSERT INTO `experiencia_laboral` (`id`, `nombre_empresa`, `es_trabajo_actual`, `fecha_ingreso`, `fecha_egreso`, `descripcion`, `persona_id`, `tipo_empleo_id`) VALUES
(1, 'Estudio Jurídico Errasti y Asoc.', 1, '2018-09-01', NULL, 'Administración general. Notificadora AdHoc. Gestión de Expedientes.', 1, 2),
(2, 'Proyecto y Dirección de Obra', 1, '2018-01-01', NULL, 'Proyecto, Planos Municipales y presentaciones CAD. Direccion de Obra. ', 1, 1),
(3, 'Empresa Textil', 0, '2011-09-01', '2014-09-01', 'Encargada de Producción y Administración.', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formacion_profesional`
--

DROP TABLE IF EXISTS `formacion_profesional`;
CREATE TABLE IF NOT EXISTS `formacion_profesional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_institucion` varchar(45) NOT NULL,
  `es_estudio_actual` tinyint(4) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `tipo_formacion_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`persona_id`,`tipo_formacion_id`),
  KEY `fk_formacion_profesional_persona1_idx` (`persona_id`),
  KEY `fk_formacion_profesional_tipo_formacion1_idx` (`tipo_formacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `formacion_profesional`
--

INSERT INTO `formacion_profesional` (`id`, `nombre_institucion`, `es_estudio_actual`, `fecha_inicio`, `fecha_finalizacion`, `persona_id`, `tipo_formacion_id`) VALUES
(17, 'UNMDP', 1, '2010-04-01', NULL, 1, 2),
(18, 'INTI', 1, '2022-03-21', NULL, 1, 4),
(19, 'Ministerio de Desarrollo Productivo', 0, '2021-08-01', '2021-10-15', 1, 5),
(20, 'INTI ', 1, '2021-12-08', NULL, 1, 1),
(21, 'ORACLE', 1, '2022-04-01', NULL, 1, 1),
(22, 'TELECOM', 1, '2022-05-01', NULL, 1, 3),
(23, 'GLOBANT', 1, '2022-04-20', NULL, 1, 1),
(24, 'EGG EDUCATION', 1, '2022-05-07', NULL, 1, 5),
(25, 'E.E.T. N°5', 0, '2007-03-01', '2009-12-01', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `localidad` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `sobre_mi` varchar(200) DEFAULT NULL,
  `url_foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellido`, `direccion`, `localidad`, `fecha_nacimiento`, `telefono`, `correo`, `sobre_mi`, `url_foto`) VALUES
(1, 'Cinthia Romina', 'Vota', 'Salta 950', 'Mar del Plata', '1992-01-16', '2235039636', 'votacinthia@gmail.com', 'Desarrolladora Web, Ilustradora y Proyectista.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_empleo`
--

DROP TABLE IF EXISTS `tipo_empleo`;
CREATE TABLE IF NOT EXISTS `tipo_empleo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_empleo`
--

INSERT INTO `tipo_empleo` (`id`, `nombre`) VALUES
(1, 'Freelancer'),
(2, 'Part Time'),
(3, 'Full Time'),
(4, 'Remote'),
(5, 'Informal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_formacion`
--

DROP TABLE IF EXISTS `tipo_formacion`;
CREATE TABLE IF NOT EXISTS `tipo_formacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_formacion`
--

INSERT INTO `tipo_formacion` (`id`, `nombre`) VALUES
(1, 'Full Stack Web Developer'),
(2, 'Arquitectura'),
(3, 'UX / UI'),
(4, 'Inglés para Desarrollo de Software'),
(5, 'Introducción a la Programación');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `experiencia_laboral`
--
ALTER TABLE `experiencia_laboral`
  ADD CONSTRAINT `fk_experiencia_laboral_persona` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_experiencia_laboral_tipo_empleo1` FOREIGN KEY (`tipo_empleo_id`) REFERENCES `tipo_empleo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `formacion_profesional`
--
ALTER TABLE `formacion_profesional`
  ADD CONSTRAINT `fk_formacion_profesional_persona1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_formacion_profesional_tipo_formacion1` FOREIGN KEY (`tipo_formacion_id`) REFERENCES `tipo_formacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
