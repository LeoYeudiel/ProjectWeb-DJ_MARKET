<?php 
  session_start();
  if(isset($_SESSION["id_admin"]) && isset($_SESSION["pass"]) && isset($_SESSION["user"])){
    //La session existe
    $id_admin = $_SESSION["id_admin"];
    $pass = $_SESSION["pass"];
    $user = $_SESSION["user"];
  }else{
    header("location:index.php");
  }
?>