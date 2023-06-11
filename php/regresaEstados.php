<?php
	require("cadenaConexion.php");
	$consulta = "SELECT * FROM estado";
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