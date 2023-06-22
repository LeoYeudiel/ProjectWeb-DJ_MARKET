//Agrega el campo de otro evento
const otherEvent = () => {
  if (document.getElementById("evento").value == "6") {
    document.getElementById("input-evento").insertAdjacentHTML(
      "beforeend",
      `
      <div class="input-box" id="input-otro-evento">
        <label for="otro_evento">Otro tipo de evento</label>
        <input type="text" id="otro_evento" name="otro_evento" class="input">
      </div>
      `
    );
  } else {
    if (document.getElementById("input-otro-evento")) {
      document.getElementById("input-otro-evento").remove();
    }
  }
};

const expresiones_regulares = {
  nom: /^[a-zA-ZÀ-ÿ\s]+$/,
  tel: /^\d{10}$/,
  cp: /^\d{5}$/,
  email: /^([\w.+]+@{1}[a-z]+([.]{1}[a-z]{1,3})(([.]{1}[a-z]{1,3})?))$/,
  calleNum: /^[a-zA-ZÀ-ÿ\s\d]+$/,
  col: /^[a-zA-ZÀ-ÿ.\d\s]+$/,
  curp: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
};

//Introduce toda la información de los inputs dentro de un modal para confirmar contratación
const confirmar = () => {
  let msg = ``;
  const nPersonas =
    document.getElementById("people").value == ""
      ? "0"
      : document.getElementById("people").value;
  const nEntidad = document.getElementById("entidad").value;

  const nAlcaldia = document.getElementById("alcaldia").value;
  const nEvento = document.getElementById("evento").value;
  const otroEvento = document.getElementById('input-otro-evento') ? document.getElementById('input-otro-evento').value : '';
  const nDj = document.getElementById("dj").value;
  const nSalon = document.getElementById("salon").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const fecha_valor = new Date(fecha);
  var fecha_actual = new Date();
  //const horaValor = new Date();
  //horaValor.setHours(hora.split(':')[0], hora.split(':')[1], 0);
  const nombre = document.getElementById("name").value;
  const apPat = document.getElementById("app").value;
  const apMat = document.getElementById("apm").value;
  const tel = document.getElementById("tel").value;

  const correo = document.getElementById("email").value;
  const calleNum = document.getElementById("calle").value;
  const colonia = document.getElementById("colonia").value;
  const cp = document.getElementById("cp").value;
  const curp = document.getElementById("curp").value;

  console.log("Numero de personas ingresadas " + nPersonas);
  console.log("Entidad Seleccionada " + nEntidad);
  console.log("Alcaldia Seleccionada " + nAlcaldia);
  console.log("Evento seleccionado " + nEvento);
  console.log("Dj seleccionado " + nDj);
  console.log("Salon seleccionado " + nSalon);
  console.log("Valor de la fecha " + fecha);
  console.log("Valor de la hora " + hora);
  console.log("Nombre " + nombre);
  console.log("Apellido Paterno " + apPat);
  console.log("Apellido Materno " + apMat);
  console.log("Teléfono " + tel);
  console.log("Correo " + correo);
  console.log("Calle y Número " + calleNum);
  console.log("Colonia " + colonia);
  console.log("Codigo Postal " + cp);
  console.log("CURP " + curp);
  /*console.log(1);*/

  //var horaViernes_1 = new Date();
  //horaViernes_1.setHours(12, 0, 0);
  //var horaViernes_2 = new Date();
  //horaViernes_2.setHours(17, 0, 0);
  var horaViernes_1 = "12:00";
  var horaViernes_2 = "17:00";

  //var horaSabado_1 = new Date();
  //horaSabado_1.setHours(14, 0, 0);
  //var horaSabado_2 = new Date();
  //horaSabado_2.setHours(19, 0, 0);

  var horaSabado_1 = "14:00";
  var horaSabado_2 = "19:00";

  //var horaDomingo = new Date();
  //horaDomingo.setHours(9, 0, 0);
  var horaDomingo = "09:00";

  if (!expresiones_regulares.nom.test(nombre)) {
    msg += `Nombre inválido. `;
  }

  if (!expresiones_regulares.nom.test(apPat)) {
    msg += `Apellido Paterno inválido. `;
  }

  if (!expresiones_regulares.nom.test(apMat)) {
    msg += `Apellido Materno inválido. `;
  }

  if (!expresiones_regulares.tel.test(tel)) {
    msg += `Teléfono inválido. `;
  }

  if (!expresiones_regulares.calleNum.test(calleNum)) {
    msg += `Dirección inválida. `;
  }

  if (!expresiones_regulares.col.test(colonia)) {
    msg += `Colonia inválida. `;
  }

  if (!expresiones_regulares.cp.test(cp)) {
    msg += `Código Postal inválido. `;
  }

  if (!expresiones_regulares.curp.test(curp)) {
    msg += `CURP inválido. `;
  }

  if (parseInt(nPersonas) < 70 || parseInt(nPersonas) > 200) {
    msg += `El numero de personas debe estar entre 70 y 200. `;
  }

  if (nEntidad == "0") {
    msg += `Seleccione una Entidad. `;
  }

  if (nAlcaldia == "0") {
    msg += `Seleccione una Alcaldia. `;
  }

  if (nEvento == "0") {
    msg += `Seleccione un Evento. `;
  }

  if (otroEvento) {
    if (!expresiones_regulares.nom.test(otroEvento)) {
      msg += `Otro tipo de evento inválido`;
    }
  }

  if (nDj == "0") {
    msg += `Seleccione un DJ. `;
  }

  if (nSalon == "0") {
    msg += `Seleccione un Salon. `;
  }

  // O es Lunes, así hasta el 6 que es Domingo
  if (
    fecha == "" ||
    fecha_valor < fecha_actual ||
    fecha_valor.getDay() < 4 ||
    fecha_valor.getFullYear() > 2099
  ) {
    msg += `Seleccione una Fecha válida. Nota: Los únicos días disponibles para reservar son viernes, sabado y domingo. `;
  }

  if (
    fecha_valor.getDay() == 4 &&
    hora.slice(0,5) != horaViernes_1 &&
    hora.slice(0,5) != horaViernes_2
  ) {
    msg += `Los horarios disponibles para el Viernes son 12:00 PM y 5:00 PM. `;
  }

  if (
    fecha_valor.getDay() == 5 &&
    hora.slice(0,5) != horaSabado_1 &&
    hora.slice(0,5) != horaSabado_2
  ) {
    msg += `Los horarios disponibles para el Sábado son 2:00 PM y 7:00 PM. `;
  }

  console.log("Consultar fecha = " + hora.slice(0,5), horaViernes_1)
  console.log(hora != horaViernes_1)
  if (fecha_valor.getDay() == 6 && hora.slice(0,5) != horaDomingo) {
    msg += `El horario disponible para el Domingo es 9:00 AM. `;
  }

  console.log("hora valor: " + hora);
  console.log("valor del dia: " + fecha_valor.getDay());

  if (!hora) {
    msg += `Selecciona una Hora para el evento. `;
  }

  let modal = document.getElementById("staticBackdrop");
  if (msg) {
    swal({
      title: "Campos Invalidos",
      text: msg,
      icon: "error",
    });
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  } else {
    modal.classList.add("show");
    modal.style.display = "block";
    modal.style.background = "rgba(0,0,0,.4)";
    document.body.classList.add("modal-open");

    document.getElementById("name-content").textContent =
      document.getElementById("name").value;
    document.getElementById("name-content2").textContent =
      document.getElementById("name").value;
    document.getElementById("app-content").textContent =
      document.getElementById("app").value;
    document.getElementById("apm-content").textContent =
      document.getElementById("apm").value;
    document.getElementById("tel-content").textContent =
      document.getElementById("tel").value;
    document.getElementById("email-content").textContent =
      document.getElementById("email").value;
    document.getElementById("calle-content").textContent =
      document.getElementById("calle").value;
    document.getElementById("colonia-content").textContent =
      document.getElementById("colonia").value;
    document.getElementById("entidad-content").textContent =
      document.getElementById("entidad").options[
        document.getElementById("entidad").selectedIndex
      ].textContent;
    document.getElementById("alcaldia-content").textContent =
      document.getElementById("alcaldia").options[
        document.getElementById("alcaldia").selectedIndex
      ].textContent;
    document.getElementById("curp-content").textContent =
      document.getElementById("curp").value;

    /*document.getElementById('rfc-content').textContent = document.getElementById('curp').value*/

    if (document.getElementById("evento").value == "6") {
      document.getElementById("type_evento-content").textContent =
        document.getElementById("otro_evento").value;
    } else {
      document.getElementById("type_evento-content").textContent =
        document.getElementById("evento").options[
          document.getElementById("evento").selectedIndex
        ].textContent;
    }

    document.getElementById("people-content").textContent =
      document.getElementById("people").value;
    document.getElementById("dj-content").textContent =
      document.getElementById("dj").options[
        document.getElementById("dj").selectedIndex
      ].textContent;
    document.getElementById("salon-content").textContent =
      document.getElementById("salon").options[
        document.getElementById("salon").selectedIndex
      ].textContent;
    document.getElementById("costo-content").textContent =
      document.getElementById("cost").value;
    
    document.getElementById('folio-content').textContent = `${document.getElementById('curp').value}_${document.getElementById('fecha').value}`
  }
};

const cerrar = () => {
  let modal = document.getElementById("staticBackdrop");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

const formulario1 = document.getElementById("formulario1");
const inputs = document.querySelectorAll("#formulario1 input");

const validacion = (e) => {
  console.log(e.target);
  switch (e.target.name) {
    case "tel":
      if (expresiones_regulares.tel.test(e.target.value)) {
        document.getElementById("tel_group").style.color = "white";
      } else {
        document.getElementById("tel_group").style.color = "red";
        console.log(
          "Se ha introducido un telefono invalido. El valor es: " +
            e.target.value
        );
      }
      break;

    case "name":
    case "app":
    case "apm":
      if (expresiones_regulares.nom.test(e.target.value)) {
        document.getElementById(e.target.name + "_group").style.color = "white";
      } else {
        document.getElementById(e.target.name + "_group").style.color = "red";
        console.log(
          "Se ha introducido un nombre invalido. El valor es: " + e.target.value
        );
      }
      break;

    case "colonia":
      if (expresiones_regulares.col.test(e.target.value)) {
        document.getElementById("colonia_group").style.color = "white";
      } else {
        document.getElementById("colonia_group").style.color = "red";
        console.log(
          "Se ha introducido un nombre invalido. El valor es: " + e.target.value
        );
      }
      break;

    case "cp":
      if (expresiones_regulares.cp.test(e.target.value)) {
        document.getElementById("cp_group").style.color = "white";
      } else {
        document.getElementById("cp_group").style.color = "red";
        console.log(
          "Se ha introducido un Codigo Postal invalido. El valor es: " +
            e.target.value
        );
      }
      break;

    case "email":
      if (expresiones_regulares.email.test(e.target.value)) {
        document.getElementById("email_group").style.color = "white";
      } else {
        document.getElementById("email_group").style.color = "red";
        console.log(
          "Se ha introducido un Codigo Postal invalido. El valor es: " +
            e.target.value
        );
      }
      break;

    case "calle":
      if (expresiones_regulares.calleNum.test(e.target.value)) {
        document.getElementById("calleNum_group").style.color = "white";
      } else {
        document.getElementById("calleNum_group").style.color = "red";
        console.log(
          "Se ha introducido una calle y num invalido. El valor es: " +
            e.target.value
        );
      }
      break;
    /*case 'fecha':
            if (e.target.value > Date.now()) {
                document.getElementById('fecha_group').style.color = 'white';
            }
            else {
                document.getElementById('fecha_group').style.color = 'red';
            }
            break;*/
    case "curp":
      if (expresiones_regulares.curp.test(e.target.value)) {
        document.getElementById("curp_group").style.color = "white";
      } else {
        document.getElementById("curp_group").style.color = "red";
        console.log(
          "Se ha introducido un CURP invalido. El valor es: " + e.target.value
        );
      }
      break;
  }
};

function validaFecha() {
  var input_f = document.getElementById("fecha").value;
  var fecha = new Date(input_f);
  var actual = new Date();

  if (fecha < actual || fecha.getFullYear() > 2099) {
    /*alert("La fecha no puede ser menor a la de hoy");*/
    document.getElementById("fecha_group").style.color = "red";
  } else {
    document.getElementById("fecha_group").style.color = "white";
  }
}

window.onload = function () {
  RegresaEstados();
};

function RegresaEstados() {
  var request = new XMLHttpRequest();
  request.open("POST", "php/regresaEstados.php", true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var tablaJSON = JSON.parse(request.responseText);

      const select = document.getElementById("entidad");

      for (var i = 0; i < tablaJSON.length; i++) {
        const option = document.createElement("option");
        option.value = tablaJSON[i].id_estado;
        option.text = tablaJSON[i].nombre;
        select.add(option);
      }
    }
  };
  request.send();
}

function RegresaMunicipios() {
  const estado = document.getElementById("entidad").value;
  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "php/regresaMunicipios.php?estado=" + encodeURIComponent(estado),
    true
  );
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var tablaJSON = JSON.parse(request.responseText);

      console.log(estado);
      const select = document.getElementById("alcaldia");
      //Borramos las opciones del estado si es que se elige otro
      select.innerHTML = "";
      const seleccione = document.createElement("option");
      seleccione.value = "0";
      seleccione.text =
        estado == "0"
          ? "Seleccione una Entidad Federativa Primero"
          : "Seleccione Una Alcaldía";
      select.add(seleccione);

      for (var i = 0; i < tablaJSON.length; i++) {
        const option = document.createElement("option");
        option.value = tablaJSON[i].id_municipio;
        option.text = tablaJSON[i].nombre.charAt(0).toUpperCase() + tablaJSON[i].nombre.slice(1).toLowerCase();
        select.add(option);
      }
    }
  };
  request.send();
}

function Alta() {
  console.log("Municipio= " + document.getElementById("alcaldia").value);
  const nPersonas = document.getElementById("people").value;
  const nAlcaldia = document.getElementById("alcaldia").value;
  const nEvento = document.getElementById("evento").value;
  const otroEvento = document.getElementById('input-otro-evento') ? document.getElementById('otro_evento').value : '';
  console.log("OtroEvento= " + otroEvento);
  const nDj = document.getElementById("dj").value;
  const nSalon = document.getElementById("salon").value;
  const costo = document.getElementById("cost").value;
  const fecha = document.getElementById("fecha").value;
  const hora_inicio = document.getElementById("hora").value;
  const nombre = document.getElementById("name").value;
  const apPat = document.getElementById("app").value;
  const apMat = document.getElementById("apm").value;
  const tel = document.getElementById("tel").value;
  const correo = document.getElementById("email").value;
  const calleNum = document.getElementById("calle").value;
  const colonia = document.getElementById("colonia").value;
  const cp = document.getElementById("cp").value;
  const curp = document.getElementById("curp").value;

  var request = new XMLHttpRequest();
  var url = "php/altaContratacion.php";
  var parametros =
    "nombre=" +
    encodeURIComponent(nombre) +
    "&apPat=" +
    encodeURIComponent(apPat) +
    "&apMat=" +
    encodeURIComponent(apMat) +
    "&tel=" +
    encodeURIComponent(tel) +
    "&email=" +
    encodeURIComponent(correo) +
    "&calleNum=" +
    encodeURIComponent(calleNum) +
    "&colonia=" +
    encodeURIComponent(colonia) +
    "&nAlcaldia=" +
    encodeURIComponent(nAlcaldia) +
    "&cp=" +
    encodeURIComponent(cp) +
    "&curp=" +
    encodeURIComponent(curp) +
    "&nEvento=" +
    encodeURIComponent(nEvento) +
    "&otroEvento=" +
    encodeURIComponent(otroEvento) +
    "&nPersonas=" +
    encodeURIComponent(nPersonas) +
    "&nDj=" +
    encodeURIComponent(nDj) +
    "&nSalon=" +
    encodeURIComponent(nSalon) +
    "&costo=" +
    encodeURIComponent(costo) +
    "&fecha=" +
    encodeURIComponent(fecha) +
    "&hora_inicio=" +
    encodeURIComponent(hora_inicio);

  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onload = function () {
    if (request.status === 200) {
      console.log("La contratación se dio de alta con éxito");
      console.log(request.responseText);
      // window.location.reload();
    }

    swal({
      title: "Enviado",
      text: "¡Tu información ha sido enviada!\nFOLIO: " + request.responseText,
      icon: "success",
      button: "Generar Comprobante",
  }).then((value) => {
      window.open('php/generar_pdf.php?folio=' + request.responseText, '_blank');

  });



    document.getElementById("people").value = "0";
    document.getElementById("entidad").value = "0";

    RegresaMunicipios();

    document.getElementById("evento").value = "0";
    document.getElementById("dj").value = "0";
    document.getElementById("salon").value = "0";
    document.getElementById("cost").value = "0";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("name").value = "";
    document.getElementById("app").value = "";
    document.getElementById("apm").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
    document.getElementById("calle").value = "";
    document.getElementById("colonia").value = "";
    document.getElementById("cp").value = "";
    document.getElementById("curp").value = "";

    cerrar();
  };

  request.onerror = function () {
    console.log("No se dio de alta :(");
    swal({
      title: "¡Oops!",
      text: "Intente de nuevo",
      icon: "error",
    });
  };

  request.send(parametros);
}

function RegresaCosto() {
  console.log("nDJ : " + document.getElementById("dj").value);
  console.log("nSalon : " + document.getElementById("salon").value);

  var request = new XMLHttpRequest();
  var url = "php/regresaCostos.php";
  var parametros =
    "nDJ=" +
    encodeURIComponent(document.getElementById("dj").value) +
    "&nSalon=" +
    encodeURIComponent(document.getElementById("salon").value);

  request.open("GET", url + "?" + parametros, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onload = function () {
    if (request.status === 200) {
      var tablaJSON = JSON.parse(request.responseText);
      for (var i = 0; i < tablaJSON.length; i++) {
        console.log("El Costo Total es de: " + tablaJSON[i].COSTO_TOTAL);
        document.getElementById("cost").value = parseInt(
          tablaJSON[i].COSTO_TOTAL
        );
      }
    }
  };

  request.onerror = function () {
    console.log("NO SE OBTUVO EL COSTO");
  };

  request.send();
}

//const inputFecha = document.getElementById('#fecha');

//inputFecha.onmouseover((i) => {
//    var fecha = new Date();
//    var anio = fecha.getFullYear();
//    var _dia = fecha.getDate();
//    var _mes = fecha.getMonth();
//    var mes = "";
//    var dia = "";
//    _mes = _mes + 1;
//    if (_mes < 10) {
//        mes = "0" + _mes;
//    }
//    else {
//        mes = _mes.toString;
//    }
//    if (_dia < 10) {
//        dia = "0" + _dia;
//    }
//    else {
//        dia = _dia.toString;
//    }
//    document.getElementById("fecha").min = anio + '-' + mes + '-' + dia;
//});

inputs.forEach((input) => {
  input.addEventListener("keyup", validacion);
  input.addEventListener("blur", validacion);
});

formulario1.addEventListener("submit", (e) => {
  e.preventDefault();
});
