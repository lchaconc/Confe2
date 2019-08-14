-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-08-2019 a las 04:55:15
-- Versión del servidor: 5.7.21
-- Versión de PHP: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u211168474_confe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatar`
--

DROP TABLE IF EXISTS `avatar`;
CREATE TABLE IF NOT EXISTS `avatar` (
  `id_avatar` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_avatar` int(11) NOT NULL,
  `tipo_traje` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_usr` varchar(128) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id_avatar`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `avatar`
--

INSERT INTO `avatar` (`id_avatar`, `tipo_avatar`, `tipo_traje`, `sexo`, `id_usr`) VALUES
(1, 5, 'pijama', 'm', 'felipe@correo.de'),
(2, 1, 'scout', 'f', 'jimena@correo.de'),
(3, 0, '', 'f', 'ana@correo.de'),
(4, 0, '', 'm', 'oscar.wong@correo.de');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_juegos`
--

DROP TABLE IF EXISTS `estado_juegos`;
CREATE TABLE IF NOT EXISTS `estado_juegos` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `id_grupo` varchar(128) NOT NULL,
  `id_usr` varchar(128) NOT NULL,
  `unidad` int(11) NOT NULL,
  `id_juego` varchar(128) NOT NULL,
  `etiqueta` varchar(128) NOT NULL,
  `activo` varchar(8) NOT NULL COMMENT 'boolean',
  `avance` int(11) NOT NULL,
  `terminado` varchar(8) NOT NULL COMMENT 'boole',
  PRIMARY KEY (`id_estado`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado_juegos`
--

INSERT INTO `estado_juegos` (`id_estado`, `id_grupo`, `id_usr`, `unidad`, `id_juego`, `etiqueta`, `activo`, `avance`, `terminado`) VALUES
(1, 'moravia122', 'felipe@correo.de', 1, 'c01ropero1', 'Ropero', 'true', 1, 'true'),
(2, 'moravia122', 'felipe@correo.de', 1, 'r01emociones', 'Reto', 'true', 0, 'false'),
(3, 'moravia122', 'felipe@correo.de', 1, 'j01granja', 'Granja', 'true', 5, 'false'),
(4, 'moravia122', 'felipe@correo.de', 1, 'c02ropero2', 'Ropero 2', 'true', 1, 'false'),
(5, 'moravia122', 'felipe@correo.de', 2, 'j0202top10', 'Top 10', 'false', 0, 'false'),
(6, 'moravia122', 'felipe@correo.de', 2, 'r0202seleccion', 'Selección', 'false', 0, 'false'),
(7, 'moravia122', 'felipe@correo.de', 2, 'r0203bienaventuranzas', 'Bienaventuranzas', 'false', 0, 'false'),
(8, 'moravia122', 'felipe@correo.de', 2, 'j0204flappybird', 'Falppy Bird', 'false', 0, 'false'),
(9, 'moravia122', 'felipe@correo.de', 3, 'j0305acompanajesus', 'Acompaña a Jesús', 'false', 0, 'false'),
(10, 'dddd', 'felipe@correo.de', 0, 'avatar01', 'avatar', 'true', 1, 'true'),
(11, '8888', 'oscar.wong@correo.de', 0, 'avatar01', 'avatar', 'true', 1, 'false'),
(12, '8888', 'oscar.wong@correo.de', 1, 'c01ropero1', 'Ropero', 'true', 1, 'true'),
(13, '8888', 'oscar.wong@@correo.de', 1, 'j01granja', 'Granja', 'true', 5, 'false'),
(14, '8888', 'oscar.wong@@correo.de', 1, 'c02ropero2', 'Ropero 2', 'true', 1, 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetos`
--

DROP TABLE IF EXISTS `objetos`;
CREATE TABLE IF NOT EXISTS `objetos` (
  `id_objetos` int(11) NOT NULL AUTO_INCREMENT,
  `visible` varchar(16) NOT NULL,
  `etiqueta` varchar(32) NOT NULL,
  `id_usr` varchar(256) NOT NULL,
  PRIMARY KEY (`id_objetos`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `objetos`
--

INSERT INTO `objetos` (`id_objetos`, `visible`, `etiqueta`, `id_usr`) VALUES
(1, 'false', 'sandalias', 'felipe@correo.de');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
