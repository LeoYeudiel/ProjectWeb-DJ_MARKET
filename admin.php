<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DJ Market - Admin</title>
  <link rel="icon" href="assets/img/icon.png">
  <meta name="theme-color" content="#16161a">
  <link rel="stylesheet" href="css/estilos_admin.css">
</head>
<body>
  <header>
    <nav>
      <div class="left">
        <img src="assets/img/icon.png" alt="Logo" class="logo">
        <strong>DJ MARKET</strong>
      </div>
      <div class="menuToggle" onclick="toggleMenu()"></div>
      <div class="rigth">
        <li><a href="index.php" onclick="toggleMenu()">Inicio</a></li>
        <li><a href="contratacion.php" onclick="toggleMenu()">Contratación</a></li>
        <li><a href="comprobante.php" onclick="toggleMenu()">Comprobante</a></li>
        <li><a href="admin.php" onclick="toggleMenu()">Admin</a></li>
      </div>
    </nav>
  </header>

  <main>
    <section class="form">
      <h2>Iniciar Sesión</h2>
      <form action="php/inicioSesion.php" method="POST">
        <div class="input-box">
          <label for="user" id="labelUser">Usuario/Correo</label>
          <input type="text" id="user" name="user" class="input">
        </div>
        <div class="input-box">
          <label for="password" id="labelPassword">Contraseña</label>
          <input type="password" id="password" name="password" class="input">
          <div class="show" onclick="mostrar()"><ion-icon name="eye-outline"></ion-icon></div>
        </div>
        <div class="buttons">
          <input type="submit" value="Iniciar Sesión">
          <!-- <a onclick="validarForm()">Iniciar Sesión</a> -->
        </div>
      </form>
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
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
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

        const urlParams = new URLSearchParams(window.location.search);
        const access =urlParams.get("access");

        if(access == 0){
          swal("Error", "No tienes acceso", "error");
        }

    </script>
    <script src="js/script_admin.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>