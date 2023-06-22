<?php
	require("cadenaConexion.php");

		$nombre = $_POST["nombre"];
		$apPat = $_POST["apPat"];
		$apMat = $_POST["apMat"];
		$tel = $_POST["tel"];
		$correo = $_POST["email"];
		$calleNum = $_POST["calleNum"];
		$colonia = $_POST["colonia"];
		$alcaldia = $_POST["nAlcaldia"];
		$cp = $_POST["cp"];
		$curp = $_POST["curp"];
		$evento = $_POST["nEvento"];
    $otroEvento = $_POST["otroEvento"];
		$nPersonas = $_POST["nPersonas"];
		$nDJ = $_POST["nDj"];
		$nSalon = $_POST["nSalon"];
		$fecha = $_POST["fecha"];
		$costo = $_POST["costo"];
		$hora_inicio = $_POST["hora_inicio"];
		$hora_fin = date("H:i", strtotime($hora_inicio . " + 5 hours"));
		$id_contratacion = $_POST["curp"] . '_' . $_POST["fecha"];

    $verificacion = "SELECT * FROM contratacion WHERE hora_inicio = '$hora_inicio' AND id_salon = $nSalon AND estatus = 1;";
    $resultadoV = mysqli_query($conexion, $verificacion);
    if($resultadoV->num_rows > 0){
      echo 'Existe una contratación con ese horario, por favor elija otro';
    }else{
      $consultaC = "CALL CONTRATACION(0, '$nombre', '$apPat', '$apMat', '$tel', '$correo', '$calleNum', '$colonia', $alcaldia, '$cp', '$curp', '$id_contratacion', 0, $evento, $nDJ, $nSalon, $nPersonas, $costo, '$fecha', '$hora_inicio', 'alta_contratacion', '$hora_fin', 1, '$otroEvento');";
      $resultadoC = mysqli_query($conexion, $consultaC);
  
      //echo $consultaC;
  
      //$datosC = array();
  
      echo $id_contratacion;
    }

?>