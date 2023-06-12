<?php
	require("cadenaConexion.php");

	if ($_POST)
	{
		$nombre = $_POST["nombre"];
		$apPat = $_POST["apPat"];
		$apMat = $_POST["apMat"];
		$tel = $_POST["tel"];
		$correo = $_POST["correo"];
		$calleNum = $_POST["calleNum"];
		$colonia = $_POST["colonia"];
		$entidad = $_POST["nEntidad"];
		$alcaldia = $_POST["nAlcaldia"];
		$cp = $_POST["cp"];
		$curp = $_POST["curp"];
		$evento = $_POST["nEvento"];
		$nPersonas = $_POST["nPersonas"];
		$nDJ = $_POST["nDj"];
		$nSalon = $_POST["nSalon"];
		$fecha = $_POST["fecha"];
		$hora_inicio = $_POST["hora_inicio"];
		$hora_fin = $_POST["hora_fin"];
		$id_contratacion = $_POST["curp"] . '_' . $_POST["fecha"];

		//$consultaC = "INSERT INTO `persona` (`nombre`, `app`, `apm`, `tel`, `email`, `calle_numero`, `colonia`, `id_municipio`, `cp`, `curp`) VALUES ('$nombre', '$apPat', '$apMat', '$tel', '$email', '$calleNum', '$colonia', '$alcaldia', '$cp', '$curp'); INSERT INTO `contratacion` (`id_contratacion`, `id_tipo_evento`, `id_persona`, `id_dj`, `id_salon`, `no_personas`, `costo_total`, `fecha`, `hora_inicio`, `hora_fin`, `estatus`) VALUES ('$id_contratacion', '$evento', LAST_INSERT_ID(), '$nDJ', '$nSalon', '$nPersonas', '50000', '$fecha', '$hora', '$hora', '1');";
		$consultaC = "CALL CONTRATACION(0, '$nombre', '$apPat', '$apMat', '$tel', '$email', '$calleNum', '$colonia', $alcaldia, '$cp', '$curp', '$id_contratacion', 0, $nDJ, $nSalon, $nPersonas, 100000, '$fecha', '$hora_inicio', 'alta_contratacion', '$hora_fin', 1);";
		$resultadoC = mysqli_query($conexion, $consultaC);

		//echo $consultaC;

		//$datosC = array();

		echo $consultaC;
	}
?>