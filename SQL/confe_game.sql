-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 18, 2019 at 07:56 PM
-- Server version: 5.6.39-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `confe_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `avance_juegos`
--

CREATE TABLE `avance_juegos` (
  `id_avance` int(11) NOT NULL,
  `id_usuario` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(4) NOT NULL,
  `platform01` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avance_juegos`
--

INSERT INTO `avance_juegos` (`id_avance`, `id_usuario`, `granja01`, `platform01`) VALUES
(1, 'felipe@correo.de', 6, 2),
(2, 'jimena@correo.de', 3, 1),
(3, 'ana@correo.de', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `desbloqueados`
--

CREATE TABLE `desbloqueados` (
  `id_desbloq` int(11) NOT NULL,
  `id_grupo` varchar(128) CHARACTER SET utf8 NOT NULL,
  `granja01` tinyint(1) NOT NULL,
  `platform01` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `desbloqueados`
--

INSERT INTO `desbloqueados` (`id_desbloq`, `id_grupo`, `granja01`, `platform01`) VALUES
(1, 'moravia122', 1, 1),
(2, 'coronado015', 1, 0),
(3, 'desampa042', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(64) NOT NULL,
  `nombre` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `id_grupo` varchar(128) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `usuario`, `password`, `id_grupo`) VALUES
(1, 'Felipe', 'felipe@correo.de', 'f123', 'moravia122'),
(2, 'Jimena', 'jimena@correo.de', 'j123', 'coronado015'),
(3, 'Ana', 'ana@correo.de', 'a123', 'desampa042');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avance_juegos`
--
ALTER TABLE `avance_juegos`
  ADD PRIMARY KEY (`id_avance`);

--
-- Indexes for table `desbloqueados`
--
ALTER TABLE `desbloqueados`
  ADD PRIMARY KEY (`id_desbloq`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avance_juegos`
--
ALTER TABLE `avance_juegos`
  MODIFY `id_avance` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `desbloqueados`
--
ALTER TABLE `desbloqueados`
  MODIFY `id_desbloq` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
