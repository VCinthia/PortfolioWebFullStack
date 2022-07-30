-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 29-07-2022 a las 19:29:53
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
-- Estructura de tabla para la tabla `estudio`
--

DROP TABLE IF EXISTS `estudio`;
CREATE TABLE IF NOT EXISTS `estudio` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `institucion` varchar(255) DEFAULT NULL,
  `periodo` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estudio`
--

INSERT INTO `estudio` (`id`, `descripcion`, `institucion`, `periodo`, `titulo`) VALUES
(21, 'Programador WEB Full Stack', 'Centro de Formacion Laboral Tres Arroyos - Globant', '2022 - Actual', 'Desarrollo de Software'),
(22, 'Programador WEB Full Stack', 'Oracle ONE - Alura', '2022 - Actual', 'Oracle One Next Education'),
(23, 'Inglés para Desarrollo de Software', 'INTI', '2022 - Completado', 'Inglés Técnico'),
(24, 'Programador WEB Full Stack Jr. - 2da. Etapa', 'INTI', '2021 - 2022', 'Argentina Programa'),
(25, 'Cursando actualmente el 4to y 5to año', 'UNIVERSIDAD NACIONAL DE MAR DEL PLATA', '2010 - Actual', 'ARQUITECTURA'),
(26, 'Maestro Mayor de Obras', 'Escuela de Educación Técnica N°5', '2009 - Completado', 'Mar del Plata'),
(65, 'Pagina web, Firebase.', 'Escuela DevRock', '2021 - Completado', 'Curso HTML-CSS'),
(69, 'Instalación de diversos paquetes para programación. Uso de consola. Github.', 'Escuela DevRock', '2021 - Completado', 'SupervivenciaWeb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
CREATE TABLE IF NOT EXISTS `experiencia` (
  `id` bigint(20) NOT NULL,
  `periodo` varchar(255) DEFAULT NULL,
  `puesto` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `periodo`, `puesto`, `descripcion`) VALUES
(27, '2021', 'Concept Art para VideoJuegos', 'Ilustraciones para videojuego desarrollado en Android.'),
(28, '2018 - actualmente', 'Proyecto y dibujo arquitectónico', 'Planos de proyecto y municipales para Arquitectos. Listado de materiales y detalles constructivos. Proyecto de diseño para particulares'),
(29, '2018 - actualmente', 'Administradora Estudio Juridico', 'Administración general del estudio. Notificadora Ad Hoc. Administración y seguimiento de expedientes.'),
(40, '2011 - 2014', 'Encargada administrativa y de producción en Empresa textil', 'Liquidación talleres y trabajos particulares. Administración a través de sistema EcStore de I+D Software Engineering. Gestión y control de Stock. Relación con distribuidores, clientes, talleres y demás intermediarios. Control caja chica.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(79);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(50) NOT NULL,
  `img` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `sobremi` varchar(300) NOT NULL,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `apellido`, `img`, `nombre`, `sobremi`, `rol`) VALUES
(6, 'Vota', 'https://i.ibb.co/mD8T6yv/img.png', 'Cinthia Romina', 'Soy Desarrolladora Web. En constate aprendizaje y con creatividad,\r\nbusco desarrollar nuevas ideas y \r\ntrabajar en equipo para lograr los mejores resultados.\r\n', 'Full Stack Developer Web Jr.'),
(8, 'Ritsuko', 'https://i.ibb.co/6rmpR5V/Ritsuko-discord.jpg', 'Akagi', 'Principal científica de NERV, siendo la jefa del Departamento de Desarrollo Tecnológico y responsable directa de todo lo relativo con las Unidades Evangelion.', 'Desarrollo Tecnologico en SEELE'),
(9, 'v', 'url.jpg', ' n', 'algo', 'algo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
CREATE TABLE IF NOT EXISTS `proyectos` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `descripcion`, `imagen`, `nombre`, `url`) VALUES
(43, 'Página Web creada en HTML, CSS, Firebase.', 'https://i.ibb.co/kcph4xy/Fresco-y-congelado.png', 'Fresco y Congelado', 'https://fresco-y-congelado.firebaseapp.com/'),
(74, 'Task List creada en HTML, CSS y Angular.', 'https://i.ibb.co/mHLsM1X/My-Task-List.png', 'Task List', 'https://github.com/VCinthia/task-list');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

DROP TABLE IF EXISTS `skills`;
CREATE TABLE IF NOT EXISTS `skills` (
  `id` bigint(20) NOT NULL,
  `porcentaje` tinyint(4) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `skills`
--

INSERT INTO `skills` (`id`, `porcentaje`, `nombre`) VALUES
(44, 40, 'TypeScript'),
(45, 30, 'Base de Datos - PhpMyAdmin - MySQL'),
(46, 70, 'Office Pack - WPS'),
(47, 80, 'Illustrator - Sketch - Corel'),
(48, 90, 'Trabajo en equipo - Resolución de conflictos'),
(49, 90, 'Comunicacion oral y escrita'),
(50, 60, 'Metodologías de trabajo: Notion - Trello'),
(51, 50, 'Git - GitHub'),
(60, 60, 'HTML - CSS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `social_header`
--

DROP TABLE IF EXISTS `social_header`;
CREATE TABLE IF NOT EXISTS `social_header` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_login`
--

DROP TABLE IF EXISTS `users_login`;
CREATE TABLE IF NOT EXISTS `users_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_5nb544oaf6kencfo7yy0r6cl8` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users_login`
--

INSERT INTO `users_login` (`id`, `email`, `password`) VALUES
(1, 'cv@gmail.com', '$2a$10$rG1/hs8Vl7y5O1pGkBV0m.dblqiV4eHFgA0SXUZF9HrIhG943oi8K');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
