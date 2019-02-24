-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-02-2019 a las 02:20:03
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
-- Base de datos: `prueba_confe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `introducciones`
--

DROP TABLE IF EXISTS `introducciones`;
CREATE TABLE IF NOT EXISTS `introducciones` (
  `id_intro` int(128) NOT NULL AUTO_INCREMENT,
  `textos` text NOT NULL,
  `observaciones` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id_intro`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `introducciones`
--

INSERT INTO `introducciones` (`id_intro`, `textos`, `observaciones`) VALUES
(1, 'Te entrego estas monedas de oro para que trabajes. ¿Puedes hacer las misiones que te asigne para los siguientes 6 días? ', 'sader'),
(2, 'En el día 1 debes construir una casa y sembrar en el huerto.  Para construir la casa necesitas madera de un árbol y ladrillos. Para sembrar en el huerto necesitas semillas...', 'dedes'),
(6, 'En el día 2 tienes que alimentar el ganado y regar la huerta.', 'pollo'),
(7, 'En el día 3 Debes construir un granero  y trasquilar a las ovejas.', 'lipo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
