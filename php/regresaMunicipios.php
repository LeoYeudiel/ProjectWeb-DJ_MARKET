<?php
	require("cadenaConexion.php");

	if ($_GET)
	{

		$idEstado = $_GET["estado"];	

		$consultaM = "SELECT id_municipio, nombre FROM municipio WHERE id_estado = '$idEstado'";
		$resultadoM = mysqli_query($conexion, $consultaM);

		$datosM = array();
		if ($resultadoM->num_rows > 0)
		{
			while ($tuplaM = $resultadoM->fetch_assoc())
			{
				$datosM[] = $tuplaM;
			}
		}

		echo json_encode($datosM);
	}
?>