<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DJ Market - Home Admin</title>
  <link rel="icon" href="assets/img/icon.png">
  <meta name="theme-color" content="#16161a">
  <link rel="stylesheet" href="css/estilos_home_admin.css">
</head>
<body>
  <?php 
      require('php/verificar_sesion.php');
      require('php/conexion.php');

      $sql = "SELECT c.id_contratacion, p.nombre, p.app, p.apm, c.fecha, c.hora_inicio, c.hora_fin FROM contratacion c INNER JOIN persona p ON c.id_persona = p.id_persona WHERE c.estatus = 1 ORDER BY fecha DESC;";

      $resultado = mysqli_query($conexion, $sql);

      $contrataciones = array();
      while($filas = $resultado->fetch_assoc()){
        $contrataciones[] = $filas;
      }
  ?>
  <header>
    <nav>
      <div class="left">
        <img src="assets/img/icon.png" alt="Logo" class="logo">
        <strong>DJ MARKET</strong>
      </div>
      <div class="menuToggle" onclick="toggleMenu()"></div>
      <div class="rigth">
        <li><a href="php/cerrarSesion.php" onclick="toggleMenu()">Cerrar Sesión</a></li>
      </div>
    </nav>
  </header>
  <main>
    <section class="header">
      <h2>Hola <?php echo $user ?></h2>
      <hr>
      <a href="contratacion_admin.php">+</a>
    </section>
    <section class="table">
      <table>
        <thead>
          <th>FOLIO</th>
          <th>Nombre</th>
          <th>Horario</th>
          <th></th>
        </thead>
        <tbody>
          <?php 
            for($i = 0; $i < sizeof($contrataciones); $i++){
          ?>
          <tr id="<?php echo $contrataciones[$i]['id_contratacion'];?>">
            <td><?php echo $contrataciones[$i]['id_contratacion'];?></td>
            <td><?php echo "{$contrataciones[$i]['nombre']} {$contrataciones[$i]['app']} {$contrataciones[$i]['apm']}";?></td>
            <td><?php echo "{$contrataciones[$i]['fecha']} {$contrataciones[$i]['hora_inicio']} - {$contrataciones[$i]['hora_fin']}";?></td>
            <td><button onclick ="<?php echo "borrar('{$contrataciones[$i]['id_contratacion']}')";?>"><ion-icon name="trash-outline"></ion-icon></button><button><ion-icon name="create-outline"></ion-icon></button></td>
          </tr>
          <?php } ?>
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <div class="content-footer">
      <div class="title">
        <h2>Contáctanos:</h2>
        <hr>
      </div>
      <div class="contact">
        <h3>Nuestras Redes Sociales</h3>
        <hr>
        <li><a href="jessi.jrz02@gmail.com"><ion-icon name="mail-outline"></ion-icon>djmarket@gmail.com</a></li>
        <li><a href="tel:+525564648725"><ion-icon name="call-outline"></ion-icon>+52 55 64 61 87 52</a></li>
        <li><a href="https://instagram.com/dj_market_oficial?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><ion-icon name="logo-instagram"></ion-icon>dj_market_oficial</a></li>
      </div>
      <div class="creators">
        <h3>Desarrolladores</h3>
        <hr>
        <li><a href="https://github.com/serch-pa" target="_blank"><ion-icon name="logo-github"></ion-icon>serch-pa</a></li>
        <li><a href="https://github.com/Lettu0309" target="_blank"><ion-icon name="logo-github"></ion-icon>Lettu0309</a></li>
        <li><a href="https://github.com/Jess-Juarez" target="_blank"><ion-icon name="logo-github"></ion-icon>Jess-Juarez</a></li>
        <li><a href="https://github.com/LeoYeudiel" target="_blank"><ion-icon name="logo-github"></ion-icon>LeoYeudiel</a></li>
      </div>
    </div>
    <p class="footer-center">Derechos de autor &copy; 2023. Todos los derechos reservados.</p>
  </footer>
  <script type="text/javascript">
        window.addEventListener('scroll', function(){
            const header = document.querySelector('header');
            header.classList.toggle("sticky",window.scrollY > 0);
        });

        function toggleMenu(){
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.rigth');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    </script>
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="js/script_home_admin.js"></script>
</body>
</html>