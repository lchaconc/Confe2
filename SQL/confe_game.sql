-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-02-2019 a las 05:24:46
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
-- Base de datos: `confe_game`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avance_juegos`
--

DROP TABLE IF EXISTS `avance_juegos`;
CREATE TABLE IF NOT EXISTS `avance_juegos` (
  `id_avance` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(4) NOT NULL,
  `platform1` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_avance`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `avance_juegos`
--

INSERT INTO `avance_juegos` (`id_avance`, `id_usuario`, `granja01`, `platform1`) VALUES
(1, 'felipe@correo.de', 5, 2),
(2, 'jimena@correo.de', 2, 0),
(3, 'ana@correo.de', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desbloqueados`
--

DROP TABLE IF EXISTS `desbloqueados`;
CREATE TABLE IF NOT EXISTS `desbloqueados` (
  `id_desbloq` int(11) NOT NULL AUTO_INCREMENT,
  `id_grupo` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(1) NOT NULL,
  `platform01` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_desbloq`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `desbloqueados`
--

INSERT INTO `desbloqueados` (`id_desbloq`, `id_grupo`, `granja01`, `platform01`) VALUES
(1, 'moravia122', 1, 1),
(2, 'coronado015', 1, 0),
(3, 'desampa042', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(64) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `grupo` varchar(128) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `usuario`, `password`, `grupo`) VALUES
(1, 'Felipe', 'felipe@correo.de', 'f123', 'moravia122'),
(2, 'Jimena', 'jimena@correo.de', 'j123', 'coronado015'),
(3, 'Ana', 'ana@correo.de', 'a123', 'desampa042');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
