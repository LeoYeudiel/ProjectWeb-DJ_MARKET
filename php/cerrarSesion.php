<?php
  unset($_SESSION["id_admin"]);
  unset($_SESSION["password"]);

  session_destroy();

  header("location:../index.html");

?>