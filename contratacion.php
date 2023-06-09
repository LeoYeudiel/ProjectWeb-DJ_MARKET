<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DJ Market - Contratación</title>
    <link rel="icon" href="assets/img/icon.png" />
    <meta name="“theme-color”" content="“#16161a" />
    <link rel="stylesheet" href="./css/bootstrap.css" />
    <link rel="stylesheet" href="css/estilos_contratacion.css" />
</head>
<body>
    <header>
        <nav>
            <div class="left">
                <img src="assets/img/icon.png" alt="Logo" class="logo" />
                <strong>DJ MARKET</strong>
            </div>
            <div class="menuToggle" onclick="toggleMenu()"></div>
            <div class="rigth">
                <li><a href="index.php" onclick="toggleMenu()">Inicio</a></li>
                <li>
                    <a href="contratacion.php" onclick="toggleMenu()">Contratación</a>
                </li>
                <li>
                    <a href="comprobante.php" onclick="toggleMenu()">Comprobante</a>
                </li>
                <li><a href="admin.php" onclick="toggleMenu()">Admin</a></li>
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
                    <label for="app">Apellido paterno</label>
                    <input type="text" id="app" name="app" class="input" />
                </div>
                <div class="input-box" id="apm_group">
                    <label for="apm">Apellido materno</label>
                    <input type="text" id="apm" name="apm" class="input" />
                </div>
                <div class="input-box" id="tel_group">
                    <label for="tel">Teléfono ó celular</label>
                    <input type="tel" id="tel" name="tel" class="input" />
                    <p></p>
                </div>

                <div class="input-box" id="email_group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" class="input" />
                </div>
                <div class="input-box" id="calleNum_group">
                    <label for="calle">Calle y número</label>
                    <input type="text" id="calle" name="calle" class="input" />
                </div>
                <div class="input-box" id="colonia_group">
                    <label for="colonia">Colonia</label>
                    <input type="text" id="colonia" name="colonia" class="input" />
                </div>
                <div class="input-box">
                    <label for="entidad">Entidad federativa</label>
                    <select name="entidad" id="entidad" class="input" onchange="RegresaMunicipios()">
                        <option value="0">Seleccione una Entidad Federativa</option>
                        <!--<option value="aguascalientes">Aguascalientes</option>
                        <option value="bajacaliforniaN">Baja California</option>
                        <option value="bajacaliforniaS">Baja California Sur</option>
                        <option value="campeche">Campeche</option>
                        <option value="coahuila">Coahuila de Zaragoza</option>
                        <option value="colima">Colima</option>
                        <option value="chiapas">Chiapas</option>
                        <option value="chihuahua">Chihuahua</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="durango">Durango</option>
                        <option value="guanajuato">Guanajuato</option>
                        <option value="guerrero">Guerrero</option>
                        <option value="hidalgo">Hidalgo</option>
                        <option value="jalisco">Jalisco</option>
                        <option value="mexico">México</option>
                        <option value="michoacán de Ocampo">Michoacán de Ocampo</option>
                        <option value="morelos">Morelos</option>
                        <option value="nayarit">Nayarit</option>
                        <option value="nuevoleon">Nuevo León</option>
                        <option value="oaxaca">Oaxaca</option>
                        <option value="puebla">Puebla</option>
                        <option value="queretaro">Querétaro</option>
                        <option value="quintanaroo">Quintana Roo</option>
                        <option value="sanluispotosi">San Luis Potosí</option>
                        <option value="sinaloa">Sinaloa</option>
                        <option value="sonora">Sonora</option>
                        <option value="tabasco">Tabasco</option>
                        <option value="tamaulipas">Tamaulipas</option>
                        <option value="tlaxcala">Tlaxcala</option>
                        <option value="veracruz">Veracruz de Ignacio de la Llave</option>
                        <option value="yucatan">Yucatán</option>
                        <option value="zacatecas">Zacatecas</option>-->
                    </select>
                </div>
                <div class="input-box">
                    <label for="alcaldia">Alcaldía</label>
                    <select name="alcaldia" id="alcaldia" class="input">
                        <option value="0" selected>Seleccione una Entidad Federativa primero</option>
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
                    <label for="cp">Código postal</label>
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
                        <select name="evento"
                                id="evento"
                                class="input"
                                onchange="otherEvent()">
                            <option value="0">Seleccione un tipo de evento</option>
                            <option value="1">Bautizo</option>
                            <option value="2">Primera Comunión</option>
                            <option value="3">XV Años</option>
                            <option value="4">Boda</option>
                            <option value="5">Cumpleaños</option>
                            <option value="6">Otro</option>
                        </select>
                    </div>
                </div>
                <div class="input-box">
                    <label for="people">Número de personas</label>
                    <input type="number"
                           id="people"
                           name="people"
                           class="input"
                           min="75"
                           max="200"
                           value="0" />
                </div>
                <div class="input-box">
                    <label for="dj">DJ</label>
                    <select name="dj" id="dj" class="input" onchange="RegresaCosto()">
                        <option value="0">Seleccione un DJ para su evento</option>
                        <option value="1">Martin Garrix</option>
                        <option value="2">David Guetta</option>
                        <option value="3">Dimitri Vegas & Like Mike</option>
                        <option value="4">Alok</option>
                        <option value="5">Marshmello</option>
                        <option value="6">DJ Snake</option>
                        <option value="7">Skrillex</option>
                        <option value="8">Avicci</option>
                        <option value="9">Steve Aoki</option>
                        <option value="10">Afrojack</option>
                        <option value="11">Alan Walker</option>
                        <option value="12">Alesso</option>
                    </select>
                </div>
                <div class="input-box">
                    <label for="salon">Salón</label>
                    <select name="salon" id="salon" class="input" onchange="RegresaCosto()">
                        <option value="0">Seleccione un salón para su evento</option>
                        <option value="1">Lugar económico 1</option>
                        <option value="2">Lugar económico 2</option>
                        <option value="3">Lugar económico 3</option>
                        <option value="4">Lugar ejecutivo 1</option>
                        <option value="5">Lugar ejecutivo 2</option>
                        <option value="6">Lugar ejecutivo 3</option>
                    </select>
                </div>
                <div class="input-box">
                    <label for="cost">Costo</label>
                    <input type="number" id="cost" name="cost" readonly value="0"/>
                </div>
                <div class="input-box" id="fecha_group">
                    <label for="fecha"><ion-icon name="alert-circle-outline" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Verifique sea días viernes, sábado o domingo"></ion-icon>Fecha: </label>
                    <input type="date"
                           id="fecha"
                           name="fecha"
                           onchange="validaFecha()" />
                </div>

                <div class="input-box">
                    <label for="hora"><ion-icon name="alert-circle-outline" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-html="true" data-bs-title="<li>Viernes de 12:00 PM y 7:00 PM.</li>
                <li>Sábados de 2:00 PM y 9:00 PM.</li>
                <li>Domingos de 9:00 AM.</li>"></ion-icon>Hora:</label>
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
                            <strong>Apellido materno: </strong><span id="app-content"></span>. <br />
                            <strong>Apellido paterno: </strong><span id="apm-content"></span>. <br />
                            <strong>Teléfono ó celular: </strong><span id="tel-content"></span>. <br />
                            <strong>Correo electrónico: </strong><span id="email-content"></span>. <br />
                            <strong>Calle y número: </strong><span id="calle-content"></span>. <br />
                            <strong>Colonia: </strong><span id="colonia-content"></span>.
                            <br />
                            <strong>Entidad Federativa: </strong><span id="entidad-content"></span>. <br />
                            <strong>Alcaldía: </strong><span id="alcaldia-content"></span>.
                            <br />
                            <h3>Datos de evento.</h3>
                            <strong>CURP: </strong><span id="curp-content"></span>. <br />
                            <strong>Tipo de evento: </strong><span id="type_evento-content"></span>. <br />
                            <strong>Número de personas: </strong><span id="people-content"></span>. <br />
                            <strong>DJ: </strong><span id="dj-content"></span>. <br />
                            <strong>Salón: </strong><span id="salon-content"></span>. <br />
                            <strong>Costo: </strong><span id="costo-content"></span>. <br />
                            <strong>FOLIO: </strong><span id="folio-content"></span>. <br />

                            <!--<strong>RFC:</strong><span id="rfc-content"></span>. <br />-->
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

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
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