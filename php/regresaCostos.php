<?php
	require("cadenaConexion.php");

	$nDJ = $_GET["nDJ"];
	$nSALON = $_GET["nSalon"];

$sp = "CALL CONTRATACION(0, '', '', '', '', '', '', '', 0, '', '', '', 0, 0 , $nDJ, $nSALON, 0, 0, '2000-01-01', '', 'regresa_costos', '', 0);";

  $resultado = mysqli_query($conexion, $sp);

	$datos = array();
	if ($resultado->num_rows > 0)
	{
		while ($tupla = $resultado->fetch_assoc())
		{
			$datos[] = $tupla;
		}
	}

echo json_encode($datos);

?>