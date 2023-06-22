<?php
  require('conexion.php');

  session_destroy();
  
  $user = $_POST['user'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM admin WHERE user ='". $user . "' OR email = '". $user."' AND password = '". $password . "';";

  $resultado = mysqli_query($conexion, $sql);
  
  $registro = array();
  while($filas = $resultado->fetch_assoc()){
    $registro[] = $filas;
  }

  if($registro){

    session_start();
    $id_admin = $registro[0]["id_admin"];
    $pass = $registro[0]["password"];
    $user = $registro[0]["user"];

    $_SESSION["id_admin"] = $id_admin;
    $_SESSION["pass"] = $pass;
    $_SESSION["user"] = $user;
    header("location:../home_admin.php");
  }else{
    header("location:../admin.php?access=0");
  }
?>