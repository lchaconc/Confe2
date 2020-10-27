-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-10-2020 a las 05:03:53
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `confe_juegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `idJuego` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `unidad` int(11) NOT NULL,
  `observaciones` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`idJuego`, `nombre`, `unidad`, `observaciones`) VALUES
(1, 'Granja', 1, NULL),
(2, 'MilagroJesus', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_por_usuarios`
--

CREATE TABLE `juegos_por_usuarios` (
  `idJuegosPorUsuario` int(11) NOT NULL,
  `idUsr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsr` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `grupo` varchar(64) NOT NULL,
  `correo` varchar(128) NOT NULL,
  `clave` varchar(128) NOT NULL,
  `observaciones` int(11) DEFAULT NULL,
  `sexo` varchar(16) NOT NULL COMMENT 'masc=masculino/ feme:femenino'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Disparadores `usuarios`
--
DELIMITER $$
CREATE TRIGGER `INSERT_JUEGOS_USUARIOS` AFTER INSERT ON `usuarios` FOR EACH ROW INSERT INTO juegos_por_usuarios (idUsr, idJuego, estadoJuego, avanceJuego, activo, terminado)
VALUES (usuarios.idUsr, juegos.idJuego, 0,0,0,0)
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`idJuego`);

--
-- Indices de la tabla `juegos_por_usuarios`
--
ALTER TABLE `juegos_por_usuarios`
  ADD PRIMARY KEY (`idJuegosPorUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsr`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `idJuego` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `juegos_por_usuarios`
--
ALTER TABLE `juegos_por_usuarios`
  MODIFY `idJuegosPorUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
