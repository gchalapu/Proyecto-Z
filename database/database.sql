USE db_proyecto;
--
-- Base de datos: `db_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_actividades`
--

CREATE TABLE `tbl_actividades` (
  `id_act` int(5) NOT NULL,
  `nom_act` varchar(255) COLLATE utf8_bin NOT NULL,
  `fecha_act` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tiem_act` time NOT NULL,
  `id_usu` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tbl_actividades`
--

INSERT INTO `tbl_actividades` (`id_act`, `nom_act`, `fecha_act`, `tiem_act`, `id_usu`) VALUES
(2, 'Atención al cliente', '2021-12-04 02:37:20', '04:15:35', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `id_usu` int(5) NOT NULL,
  `nick_usu` varchar(25) COLLATE utf8_bin NOT NULL,
  `nom_usu` varchar(50) COLLATE utf8_bin NOT NULL,
  `corr_usu` varchar(50) COLLATE utf8_bin NOT NULL,
  `telf_usu` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`id_usu`, `nick_usu`, `nom_usu`, `corr_usu`, `telf_usu`) VALUES
(2, 'prophet', 'David Mejia', 'prophet@hotmail.com', '0999999999'),
(11, 'cherazo', 'david', 'cherazo@gmail.com', '999999999'),
(13, 'chisk', 'Crishtopehr', 'chisk@gmail.com', '2222222'),
(14, 'gchalapu', 'galo', 'gchalapu@gmail.com', '023571302');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_actividades`
--
ALTER TABLE `tbl_actividades`
  ADD PRIMARY KEY (`id_act`),
  ADD KEY `FK_usu_actividad` (`id_usu`);

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_actividades`
--
ALTER TABLE `tbl_actividades`
  MODIFY `id_act` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id_usu` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_actividades`
--
ALTER TABLE `tbl_actividades`
  ADD CONSTRAINT `FK_usu_actividad` FOREIGN KEY (`id_usu`) REFERENCES `tbl_usuarios` (`id_usu`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
