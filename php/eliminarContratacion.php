<?php
	require("cadenaConexion.php");

		$folio = $_POST["folio"];

		$consultaC = "UPDATE contratacion SET estatus = 0 WHERE id_contratacion = '$folio' ";
		$resultadoC = mysqli_query($conexion, $consultaC);

		//echo $consultaC;

		//$datosC = array();

		echo $consultaC;
?>