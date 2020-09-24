-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2020 a las 21:25:45
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
-- Base de datos: `pixomaticjec`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

CREATE TABLE `companies` (
  `id` int(5) NOT NULL,
  `name` varchar(60) NOT NULL,
  `cif` varchar(9) NOT NULL,
  `email` varchar(30) NOT NULL,
  `shortdesc` varchar(100) DEFAULT NULL,
  `description` varchar(500) NOT NULL,
  `ccc` varchar(24) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `logo` varchar(1000) DEFAULT NULL,
  `token` varchar(129) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`id`, `name`, `cif`, `email`, `shortdesc`, `description`, `ccc`, `date`, `status`, `logo`, `token`) VALUES
(1, 'Test1', 'A12345678', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(2, 'Test2', 'A00000000', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(3, 'Test3', 'A11111111', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(6, 'Test3', 'A1111112', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(7, 'Test3', 'A1111113', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(9, 'Test3', 'A1111115', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(11, 'Test3', 'A1111000', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(12, 'Test3', 'A1111001', '', NULL, '', NULL, NULL, 0, NULL, NULL),
(16, 'Test_Test', 'A77777777', 'asd@email.com', NULL, 'sss', NULL, NULL, NULL, 'url', NULL),
(17, 'Test_Test', 'A77777734', 'sd', NULL, 'sss', NULL, NULL, NULL, 'asdasd', NULL),
(18, 'Pacos Petssssssssssssssssssssss', 'B00000000', 'sd', NULL, 'asdasdasdasd', NULL, NULL, NULL, 'logoooo!', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWYiOiJCMDAwMDAwMDAiLCJpYXQiOjE2MDA3ODg0NDV9.Bih1nsSeKK-2rBJSv48qJ1_xJzRKvAJDdczCrfD1jSg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cif` (`cif`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
