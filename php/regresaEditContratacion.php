<?php
	require("cadenaConexion.php");

	$folio = $_GET["folio"];

	$consulta = "CALL CONTRATACION(0, '', '', '', '', '', '', '', 0, '', '', '$folio', 0, 0, 0, 0, 0, 0, '2000-01-01', '', 'regresa_datos_contratacion', '', 0, '');";;
	$resultado = mysqli_query($conexion, $consulta);

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