-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 09, 2023 at 12:01 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectobraulio`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Violencia tribal en India: desplegaron al ejército en Manipur y las autoridades ordenaron “disparar sin previo aviso”', 'Todo comenzó cuando el Tribunal Superior de ese estado instó a considerar la inclusión de la tribu Meitei en su lista de castas registradas, lo que encontró rechazo entre el resto de los grupos tribales', 'La India desplegó este jueves al Ejército en el estado oriental de Manipur para apaciguar las protestas violentas que se han desatado en la región a raíz de un enfrentamiento entre grupos tribales y que ha provocado la quema de varios edificios y la evacuación de miles de civiles.\r\n\r\n“El Ejército indio y (la compañía) Rifles de Assam llevaron a cabo importantes operaciones de rescate para evacuar a más de 7.500 civiles de todas las comunidades durante la noche para restaurar la ley y el orden en Manipur”, dijo hoy en un comunicado el Ejército.\r\n\r\nEn tanto, las autoridades de Manipur ordenaron “disparar sin previo aviso” a la multitud e imponer un toque de queda para intentar sofocar la violencia tribal que ha estallado en las últimas horas en la región, que ha dejado al menos seis muertos y hasta 9.000 desplazados.'),
(3, 'Napoli se consagró campeón 33 años después del último Scudetto de Maradona: en vivo, los festejos en las calles', 'El equipo de Spaletti empató 1-1 ante Udinese y es el nuevo campeón de la Serie A', 'Tuvieron que pasar más de tres décadas para que el Napoli volviera a festejar un Scudetto. El primero después del legado que dejó Diego Maradona. Es que el equipo del Sur logró el objetivo en el estadio Dacia Arena, muy lejos de su gente, donde decretó su consagración luego de su compromiso frente al Udinese.'),
(5, 'prueba modificada', 'prueba modificada', 'prueba modificada');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'julian', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Laura', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
