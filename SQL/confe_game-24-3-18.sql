-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-03-2019 a las 21:52:08
-- Versión del servidor: 5.6.39-cll-lve
-- Versión de PHP: 5.6.30

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

CREATE TABLE `avance_juegos` (
  `id_avance` int(11) NOT NULL,
  `id_usuario` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(4) NOT NULL,
  `platform01` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `avance_juegos`
--

INSERT INTO `avance_juegos` (`id_avance`, `id_usuario`, `granja01`, `platform01`) VALUES
(1, 'felipe@correo.de', 6, 2),
(2, 'jimena@correo.de', 3, 1),
(3, 'ana@correo.de', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desbloqueados`
--

CREATE TABLE `desbloqueados` (
  `id_desbloq` int(11) NOT NULL COMMENT 'campo con fines de autonumeración para la llave',
  `id_grupo` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(1) NOT NULL,
  `platform01` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `desbloqueados`
--

INSERT INTO `desbloqueados` (`id_desbloq`, `id_grupo`, `granja01`, `platform01`) VALUES
(1, 'moravia122', 1, 1),
(2, 'coronado015', 1, 0),
(3, 'desampa042', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_juegos`
--

CREATE TABLE `estado_juegos` (
  `id_estado` int(11) NOT NULL,
  `id_grupo` varchar(128) NOT NULL,
  `id_usr` varchar(128) NOT NULL,
  `unidad` int(11) NOT NULL,
  `id_juego` varchar(128) NOT NULL,
  `etiqueta` varchar(128) NOT NULL,
  `activo` varchar(8) NOT NULL COMMENT 'boolean',
  `avance` int(11) NOT NULL,
  `terminado` varchar(8) NOT NULL COMMENT 'boole'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado_juegos`
--

INSERT INTO `estado_juegos` (`id_estado`, `id_grupo`, `id_usr`, `unidad`, `id_juego`, `etiqueta`, `activo`, `avance`, `terminado`) VALUES
(1, 'moravia122', 'felipe@correo.de', 1, 'c01ropero1', 'Ropero', 'true', 1, 'true'),
(2, 'moravia122', 'felipe@correo.de', 1, 'r01emociones', 'Reto', 'true', 0, 'false'),
(3, 'moravia122', 'felipe@correo.de', 1, 'j01granja', 'Granja', 'true', 0, 'false'),
(4, 'moravia122', 'felipe@correo.de', 1, 'c02ropero2', 'Ropero 2', 'false', 0, 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `autonum_grupo` int(11) NOT NULL,
  `id_grupo` varchar(64) NOT NULL,
  `unidad1` tinyint(1) NOT NULL,
  `unidad2` tinyint(1) NOT NULL,
  `unidad3` tinyint(1) NOT NULL,
  `unidad4` tinyint(1) NOT NULL,
  `unidad5` tinyint(1) NOT NULL,
  `unidad6` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`autonum_grupo`, `id_grupo`, `unidad1`, `unidad2`, `unidad3`, `unidad4`, `unidad5`, `unidad6`) VALUES
(1, 'moravia122', 1, 1, 1, 0, 0, 0),
(2, 'coronado015', 1, 1, 1, 1, 1, 1),
(3, 'desampa042', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(64) NOT NULL,
  `nombre` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `id_grupo` varchar(128) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `usuario`, `password`, `id_grupo`) VALUES
(1, 'Felipe', 'felipe@correo.de', 'f123', 'moravia122'),
(2, 'Jimena', 'jimena@correo.de', 'j123', 'coronado015'),
(3, 'Ana', 'ana@correo.de', 'a123', 'desampa042');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `avance_juegos`
--
ALTER TABLE `avance_juegos`
  ADD PRIMARY KEY (`id_avance`);

--
-- Indices de la tabla `desbloqueados`
--
ALTER TABLE `desbloqueados`
  ADD PRIMARY KEY (`id_desbloq`);

--
-- Indices de la tabla `estado_juegos`
--
ALTER TABLE `estado_juegos`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`autonum_grupo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `avance_juegos`
--
ALTER TABLE `avance_juegos`
  MODIFY `id_avance` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `desbloqueados`
--
ALTER TABLE `desbloqueados`
  MODIFY `id_desbloq` int(11) NOT NULL AUTO_INCREMENT COMMENT 'campo con fines de autonumeración para la llave', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estado_juegos`
--
ALTER TABLE `estado_juegos`
  MODIFY `id_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `autonum_grupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
