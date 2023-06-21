<?php
	require("cadenaConexion.php");
		
		$folio = $_POST["folio"];
		$nombre = $_POST["nombre"];
		$apPat = $_POST["apPat"];
		$apMat = $_POST["apMat"];
		$tel = $_POST["tel"];
		$correo = $_POST["email"];
		$calleNum = $_POST["calleNum"];
		$colonia = $_POST["colonia"];
		$alcaldia = $_POST["nAlcaldia"];
		$cp = $_POST["cp"];
		$evento = $_POST["nEvento"];
    $otroEvento = $_POST["otroEvento"];
		$nPersonas = $_POST["nPersonas"];
		$nDJ = $_POST["nDj"];
		$nSalon = $_POST["nSalon"];
		$costo = $_POST["costo"];
		$hora_inicio = $_POST["hora_inicio"];
		$hora_fin = date("H:i", strtotime($hora_inicio . " + 5 hours"));

		$consultaC = "CALL CONTRATACION(0, '$nombre', '$apPat', '$apMat', '$tel', '$correo', '$calleNum', '$colonia', $alcaldia, '$cp', '', '$folio', 0, $evento, $nDJ, $nSalon, $nPersonas, $costo, '2000-01-01', '$hora_inicio', 'actualiza_contratacion', '$hora_fin', 0, '$otroEvento');";
		$resultadoC = mysqli_query($conexion, $consultaC);

		//echo $consultaC;

		//$datosC = array();
?>