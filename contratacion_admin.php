<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DJ Market - Contratación Admin</title>
    <link rel="icon" href="assets/img/icon.png" />
    <meta name="“theme-color”" content="“#16161a" />
    <link rel="stylesheet" href="./css/bootstrap.css" />
    <link rel="stylesheet" href="css/estilos_contratacion.css" />
</head>
<body>
  <?php 
      require('php/verificar_sesion.php');
      require('php/conexion.php');
  ?>
    <header>
        <nav>
            <div class="left">
                <img src="assets/img/icon.png" alt="Logo" class="logo" />
                <strong>DJ MARKET</strong>
            </div>
            <div class="menuToggle" onclick="toggleMenu()"></div>
            <div class="rigth">
                <li><a href="home_admin.php" onclick="toggleMenu()">Home</a></li>
                <li><a href="php/cerrarSesion.php" onclick="toggleMenu()">Cerrar Sesión</a></li>
            </div>
        </nav>
    </header>
    <form id="formulario1" method="post">
        <main id="principal">
            <section class="form contacto">
                <h2>Contacto</h2>
                <div class="input-box" id="name_group">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" class="input" />
                </div>
                <div class="input-box" id="app_group">
                    <label for="app">Apellido Paterno</label>
                    <input type="text" id="app" name="app" class="input" />
                </div>
                <div class="input-box" id="apm_group">
                    <label for="apm">Apellido Materno</label>
                    <input type="text" id="apm" name="apm" class="input" />
                </div>
                <div class="input-box" id="tel_group">
                    <label for="tel">Telefono o Celular</label>
                    <input type="tel" id="tel" name="tel" class="input" />
                    <p></p>
                </div>

                <div class="input-box" id="email_group">
                    <label for="email">Correo Electronico</label>
                    <input type="email" id="email" name="email" class="input" />
                </div>
                <div class="input-box" id="calleNum_group">
                    <label for="calle">Calle y Numero</label>
                    <input type="text" id="calle" name="calle" class="input" />
                </div>
                <div class="input-box" id="colonia_group">
                    <label for="colonia">Colonia</label>
                    <input type="text" id="colonia" name="colonia" class="input" />
                </div>
                <div class="input-box">
                    <label for="entidad">Entidad Federativa</label>
                    <select name="entidad" id="entidad" class="input" onchange="RegresaMunicipios()">
                        <option value="0">Seleccione una Entidad Federativa</option>
                        <?php 
                          $sql = "SELECT * FROM estado;";

                          $resultado = mysqli_query($conexion, $sql);

                          $estados = array();
                          while($filas = $resultado->fetch_assoc()){
                            $estados[] = $filas;
                          }

                          for($i = 0; $i < sizeof($estados); $i++){
                        ?>
                          <option value="<?php echo $estados[$i]["id_estado"]?>"><?php echo $estados[$i]["nombre"]?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="input-box">
                    <label for="alcaldia">Alcaldía</label>
                    <select name="alcaldia" id="alcaldia" class="input">
                        <option value="0" selected>Seleccione una Entidad Federativa Primero</option>
                        <!--<option value="azcapotzalco">Azcapotzalco</option>
                        <option value="coyoacan">Coyoacán</option>
                        <option value="cuajimalpa">Cuajimalpa de Morelos</option>
                        <option value="gustavo">Gustavo A. Madero</option>
                        <option value="iztacalco">Iztacalco</option>
                        <option value="iztapalapa">Iztapalapa</option>
                        <option value="magdalena">La Magdalena Contreras</option>
                        <option value="milpa">Milpa Alta</option>
                        <option value="obregon">Álvaro Obregón</option>
                        <option value="tlahuac">Tláhuac</option>
                        <option value="tlalpan">Tlalpan</option>
                        <option value="xochimilco">Xochimilco</option>
                        <option value="benito">Benito Juárez</option>
                        <option value="cuauhtémoc">Cuauhtémoc</option>
                        <option value="hidalgo">Miguel Hidalgo</option>
                        <option value="venustiano">Venustiano Carranza</option>-->
                    </select>
                </div>
                <div class="input-box" id="cp_group">
                    <label for="cp">Codigo Postal</label>
                    <input type="number" id="cp" name="cp" class="input" />
                </div>
            </section>

            <section class="form evento">
                <h2>Evento</h2>
                <div class="input-box" id="curp_group">
                    <label for="curp">CURP</label>
                    <input type="text" id="curp" name="curp" class="input" />
                </div>
                <div id="input-evento">
                    <div class="input-box">
                        <label for="evento">Tipo de evento</label>
                        <select name="evento" id="evento" class="input" onchange="otherEvent()">
                          <option value="0">Seleccione un tipo de evento</option>
                          <?php 
                            $sql = "SELECT * FROM evento;";

                            $resultado = mysqli_query($conexion, $sql);

                            $eventos = array();
                            while($filas = $resultado->fetch_assoc()){
                              $eventos[] = $filas;
                            }

                            for($i = 0; $i < sizeof($eventos); $i++){
                          ?>
                            <option value="<?php echo $eventos[$i]["id_evento"]?>"><?php echo $eventos[$i]["nombre"]?></option>
                          <?php } ?>    
                        </select>
                    </div>
                </div>
                <div class="input-box">
                    <label for="people">Numero de personas</label>
                    <input type="number" id="people" name="people" class="input" min="75" max="200" value="0" />
                </div>
                <div class="input-box">
                    <label for="dj">DJ</label>
                    <select name="dj" id="dj" class="input" onchange="RegresaCosto()">
                        <option value="0">Seleccione un DJ para su evento</option>
                        <?php 
                          $sql = "SELECT id_dj, nombre FROM dj;";

                          $resultado = mysqli_query($conexion, $sql);

                          $djs = array();
                          while($filas = $resultado->fetch_assoc()){
                            $djs[] = $filas;
                          }

                          for($i = 0; $i < sizeof($djs); $i++){
                        ?>
                          <option value="<?php echo $djs[$i]["id_dj"]?>"><?php echo $djs[$i]["nombre"]?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="input-box">
                    <label for="salon">Salón</label>
                    <select name="salon" id="salon" class="input" onchange="RegresaCosto()">
                        <option value="0">Seleccione un Salon para su evento</option>
                        <?php 
                          $sql = "SELECT id_salon, nombre_salon FROM salon;";

                          $resultado = mysqli_query($conexion, $sql);

                          $salones = array();
                          while($filas = $resultado->fetch_assoc()){
                            $salones[] = $filas;
                          }

                          for($i = 0; $i < sizeof($salones); $i++){
                        ?>
                          <option value="<?php echo $salones[$i]["id_salon"]?>"><?php echo $salones[$i]["nombre_salon"]?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="input-box">
                    <label for="cost">Costo</label>
                    <input type="number" id="cost" name="cost" readonly value="0"/>
                </div>
                <div class="input-box" id="fecha_group">
                    <label for="fecha">Fecha:</label>
                    <input type="date"
                           id="fecha"
                           name="fecha"
                           onchange="validaFecha()" />
                </div>

                <div class="input-box">
                    <label for="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" />
                </div>
            </section>
            <div class="buttons">
                <input type="reset" />
                <button type="button" onclick="confirmar()">Registrar</button>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id="modal">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Confirmación de contratación
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="cerrar()"></button>
                        </div>
                        <div class="modal-body">
                            Hola <span id="name-content"></span>, verifica que los datos de
                            tu contratación/reservación que ingresaste sean correctos:
                            <h3>Datos de contacto.</h3>
                            <strong>Nombre: </strong><span id="name-content2"></span>. <br />
                            <strong>Apellido Materno: </strong><span id="app-content"></span>. <br />
                            <strong>Apellido Paterno: </strong><span id="apm-content"></span>. <br />
                            <strong>Telefono o Celular: </strong><span id="tel-content"></span>. <br />
                            <strong>Correo Electronico: </strong><span id="email-content"></span>. <br />
                            <strong>Calle y Numero: </strong><span id="calle-content"></span>. <br />
                            <strong>Colonia: </strong><span id="colonia-content"></span>.
                            <br />
                            <strong>Entidad Federativa: </strong><span id="entidad-content"></span>. <br />
                            <strong>Alcaldía: </strong><span id="alcaldia-content"></span>.
                            <br />
                            <h3>Datos de evento.</h3>
                            <strong>CURP: </strong><span id="curp-content"></span>. <br />
                            <strong>Tipo de evento: </strong><span id="type_evento-content"></span>. <br />
                            <strong>Numero de personas: </strong><span id="people-content"></span>. <br />
                            <strong>DJ: </strong><span id="dj-content"></span>. <br />
                            <strong>Salon: </strong><span id="salon-content"></span>. <br />
                            <strong>Costo: </strong><span id="costo-content"></span>. <br /><br>
                            <strong>FOLIO: </strong><span id="folio-content"></span>. <br />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="cerrar()"> Modificar </button>
                            <!--<input type="submit" class="btn btn-secondary" value="Aceptar"/>-->
                            <button type="button" class="btn btn-primary" onclick="Alta()">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </form>
    <footer>
        <div class="content-footer">
            <div class="title">
                <h2>Contáctanos:</h2>
                <hr />
            </div>
            <div class="contact">
                <h3>Nuestras Redes Sociales</h3>
                <hr />
                <li>
                    <a href="jessi.jrz02@gmail.com"><ion-icon name="mail-outline"></ion-icon>djmarket@gmail.com</a>
                </li>
                <li>
                    <a href="tel:+525564648725"><ion-icon name="call-outline"></ion-icon>+52 55 64 61 87 52</a>
                </li>
                <li>
                    <a href="https://instagram.com/dj_market_oficial?igshid=MzNlNGNkZWQ4Mg=="
                       target="_blank"><ion-icon name="logo-instagram"></ion-icon>dj_market_oficial</a>
                </li>
            </div>
            <div class="creators">
                <h3>Desarrolladores</h3>
                <hr />
                <li>
                    <a href="https://github.com/serch-pa" target="_blank"><ion-icon name="logo-github"></ion-icon>serch-pa</a>
                </li>
                <li>
                    <a href="https://github.com/Lettu0309" target="_blank"><ion-icon name="logo-github"></ion-icon>Lettu0309</a>
                </li>
                <li>
                    <a href="https://github.com/Jess-Juarez" target="_blank"><ion-icon name="logo-github"></ion-icon>Jess-Juarez</a>
                </li>
                <li>
                    <a href="https://github.com/LeoYeudiel" target="_blank"><ion-icon name="logo-github"></ion-icon>LeoYeudiel</a>
                </li>
            </div>
        </div>
        <p class="footer-center">
            Derechos de autor &copy; 2023. Todos los derechos reservados.
        </p>
    </footer>
    <script src="./js/bootstrap.js"></script>
    <script type="text/javascript">
        window.addEventListener("scroll", function () {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        function toggleMenu() {
            const menuToggle = document.querySelector(".menuToggle");
            const navigation = document.querySelector(".rigth");
            menuToggle.classList.toggle("active");
            navigation.classList.toggle("active");
        }
    </script>
    <script src="js/script_contratacion.js"></script>
    <script type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</body>
</html>
<!-- https://www.programiz.com/c-programming/library-function/ctype.h/isspace -->