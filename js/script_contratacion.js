//Agrega el campo de otro evento
const otherEvent = () => {
  if (document.getElementById('evento').value == 'otro') {
    document.getElementById('input-evento').insertAdjacentHTML(
      "beforeend",
      `
      <div class="input-box" id="input-otro-evento">
        <label for="otro_evento">Otro tipo de evento</label>
        <input type="text" id="otro_evento" name="otro_evento" class="input">
      </div>
      `
    )
  } else {
    if (document.getElementById('input-otro-evento')) {
      document.getElementById('input-otro-evento').remove()
    }
  }
}

const expresiones_regulares =
{
    nom: /^[a-zA-ZÀ-ÿ\s]+$/,
    tel: /^\d{10}$/,
    cp: /^\d{5}$/,
    email: /^([\w.+]+@{1}[a-z]+([.]{1}[a-z]{1,3})(([.]{1}[a-z]{1,3})?))$/,
    calleNum: /^[a-zA-ZÀ-ÿ\s\d]+$/,
    col: /^[a-zA-ZÀ-ÿ.\d\s]+$/,
    curp: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
}

//Introduce toda la información de los inputs dentro de un modal para confirmar contratación
const confirmar = () => {
    let msg = ``;
    const nPersonas = document.getElementById('people').value == "" ? "0" : document.getElementById('people').value;
    const nEntidad = document.getElementById('entidad').value;
    const nAlcaldia = document.getElementById('alcaldia').value ;
    const nEvento = document.getElementById('evento').value;
    const nDj = document.getElementById('dj').value;
    const nSalon = document.getElementById('salon').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const fecha_valor = new Date(fecha);
    var fecha_actual = new Date();
    const nombre = document.getElementById('name').value;
    const apPat = document.getElementById('app').value;
    const apMat = document.getElementById('apm').value;
    const correo = document.getElementById('email').value;
    const calleNum = document.getElementById('calle').value;
    const colonia = document.getElementById('colonia').value;
    const cp = document.getElementById('cp').value;

    console.log('Numero de personas ingresadas ' + nPersonas);
    console.log('Entidad Seleccionada ' + nEntidad);
    console.log('Alcaldia Seleccionada ' + nAlcaldia);
    console.log('Evento seleccionado ' + nEvento);
    console.log('Dj seleccionado ' + nDj);
    console.log('Salon seleccionado ' + nSalon);
    console.log('Valor de la fecha ' + fecha);
    console.log('Valor de la hora ' + hora);
    console.log('Nombre ' + nombre);
    console.log('Apellido Paterno ' + apPat);
    console.log('Apellido Materno ' + apMat);
    console.log('Teléfono ' + tel);
    console.log('Correo ' + correo);
    console.log('Calle y Número ' + calleNum);
    console.log('Colonia ' + colonia);
    console.log('Codigo Postal ' + cp);
    /*console.log(1);*/

    if (!expresiones_regulares.nom.test(nombre))
    {
        msg += `Nombre inválido. `
    }

    if (!expresiones_regulares.nom.test(apPat)) {
        msg += `Apellido Paterno inválido. `
    }

    if (!expresiones_regulares.nom.test(apMat)) {
        msg += `Apellido Materno inválido. `
    }

    if (!expresiones_regulares.tel.test(tel)) {
        msg += `Teléfono inválido. `
    }

    if (!expresiones_regulares.tel.test(tel)) {
        msg += `Teléfono inválido. `
    }

    if (!expresiones_regulares.calleNum.test(calleNum)) {
        msg += `Dirección inválida. `
    }

    if (!expresiones_regulares.col.test(colonia)) {
        msg += `Colonia inválida. `
    }

    if (!expresiones_regulares.cp.test(cp)) {
        msg += `Código Postal inválido. `
    }

    if (parseInt(nPersonas) < 70 || parseInt(nPersonas) > 200)
    {
        msg+=`El numero de personas debe estar entre 70 y 200. `
    }

    if (nEntidad == "0") {
        msg+=`Seleccione una Entidad. `
    }

    if (nAlcaldia == "0") {
        msg+=`Seleccione una Alcaldia. `
    }

    if (nEvento == "0") {
        msg+=`Seleccione un Evento. `
    }

    if (nDj == "0") {
        msg+=`Seleccione un DJ. `
    }

    if (nSalon == "0") {
        msg+=`Seleccione un Salon. `
    }

    if (!fecha_valor || fecha_valor < fecha_actual){
        msg+=`Seleccione una Fecha válida. `
    }

    if(!hora){
        msg+=`Selecciona una Hora para el evento. `
    }    

  let modal = document.getElementById('staticBackdrop');
  if (msg) {
    swal({
      title: "Campos Invalidos",
      text: msg,
      icon: "error",
    });
    modal.classList.remove('show')
    modal.style.display = 'none'
    document.body.classList.remove('modal-open')
  } else {
    modal.classList.add('show')
    modal.style.display = 'block'
    modal.style.background = "rgba(0,0,0,.4)"
    document.body.classList.add('modal-open')

    
    document.getElementById('name-content').textContent = document.getElementById('name').value
    document.getElementById('name-content2').textContent = document.getElementById('name').value
    document.getElementById('app-content').textContent = document.getElementById('app').value
    document.getElementById('apm-content').textContent = document.getElementById('apm').value
    document.getElementById('tel-content').textContent = document.getElementById('tel').value
    document.getElementById('email-content').textContent = document.getElementById('email').value
    document.getElementById('calle-content').textContent = document.getElementById('calle').value
    document.getElementById('colonia-content').textContent = document.getElementById('colonia').value
    document.getElementById('entidad-content').textContent = document.getElementById('entidad').value
    document.getElementById('alcaldia-content').textContent = document.getElementById('alcaldia').options[document.getElementById('alcaldia').selectedIndex].textContent
    document.getElementById('rfc-content').textContent = document.getElementById('curp').value

    if (document.getElementById('evento').value == 'otro') {
      document.getElementById('type_evento-content').textContent = document.getElementById('otro_evento').value
    } else {
      document.getElementById('type_evento-content').textContent = document.getElementById('evento').options[document.getElementById('evento').selectedIndex].textContent
    }
  
    document.getElementById('people-content').textContent = document.getElementById('people').value
    document.getElementById('dj-content').textContent = document.getElementById('dj').options[document.getElementById('dj').selectedIndex].textContent
    document.getElementById('salon-content').textContent = document.getElementById('salon').options[document.getElementById('salon').selectedIndex].textContent
    document.getElementById('costo-content').textContent = document.getElementById('cost').value
  }
}

const cerrar = () => {
  let modal = document.getElementById('staticBackdrop')
  modal.classList.remove('show')
  modal.style.display = 'none'
  document.body.classList.remove('modal-open')
}

const formulario1 = document.getElementById('formulario1');
const inputs = document.querySelectorAll('#formulario1 input');

const validacion = (e) => {
    console.log(e.target)
    switch (e.target.name) {
        case 'tel':
            if (expresiones_regulares.tel.test(e.target.value)) {
                document.getElementById('tel_group').style.color = 'white';
            }
            else {
                document.getElementById('tel_group').style.color = 'red';
                console.log('Se ha introducido un telefono invalido. El valor es: ' + e.target.value);
            }
            break;

        case 'name':
        case 'app':
        case 'apm':
            if (expresiones_regulares.nom.test(e.target.value)) {
                document.getElementById(e.target.name + '_group').style.color = 'white';
            }
            else {
                document.getElementById(e.target.name + '_group').style.color = 'red';
                console.log('Se ha introducido un nombre invalido. El valor es: ' + e.target.value);
            }
        break;

        case 'colonia':
            if (expresiones_regulares.col.test(e.target.value)) {
                document.getElementById('colonia_group').style.color = 'white';
            }
            else {
                document.getElementById('colonia_group').style.color = 'red';
                console.log('Se ha introducido un nombre invalido. El valor es: ' + e.target.value);
            }
            break;

        case 'cp':
            if (expresiones_regulares.cp.test(e.target.value)) {
                document.getElementById('cp_group').style.color = 'white';
            }
            else {
                document.getElementById('cp_group').style.color = 'red';
                console.log('Se ha introducido un Codigo Postal invalido. El valor es: ' + e.target.value);
            }
            break;

        case 'email':
            if (expresiones_regulares.email.test(e.target.value)) {
                document.getElementById('email_group').style.color = 'white';
            }
            else {
                document.getElementById('email_group').style.color = 'red';
                console.log('Se ha introducido un Codigo Postal invalido. El valor es: ' + e.target.value);
            }
            break;

        case 'calle':
            if (expresiones_regulares.calleNum.test(e.target.value)) {
                document.getElementById('calleNum_group').style.color = 'white';
            }
            else {
                document.getElementById('calleNum_group').style.color = 'red';
                console.log('Se ha introducido una calle y num invalido. El valor es: ' + e.target.value);
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
        case 'curp':
            if(expresiones_regulares.curp.test(e.target.value)){
                document.getElementById('curp_group').style.color = 'white'
            }else{
                document.getElementById('curp_group').style.color = 'red';
                console.log('Se ha introducido un CURP invalido. El valor es: ' + e.target.value);
            }
            break;
    }
}

function validaFecha() {
    var input_f = document.getElementById('fecha').value;
    var fecha = new Date(input_f);
    var actual = new Date();

    if (fecha < actual) {
        /*alert("La fecha no puede ser menor a la de hoy");*/
        document.getElementById('fecha_group').style.color = 'red';
    }
    else
    {
        document.getElementById('fecha_group').style.color = 'white';
    }
}

window.onload = function () {
    RegresaEstados();
};

function RegresaEstados()
{
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

    request.open("GET", "php/regresaMunicipios.php?estado=" + encodeURIComponent(estado), true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var tablaJSON = JSON.parse(request.responseText);

            console.log(estado);
            const select = document.getElementById("alcaldia");
            //Borramos las opciones del estado si es que se elige otro
            select.innerHTML = "";
            const seleccione = document.createElement("option");
            seleccione.value = "0";
            seleccione.text = (estado == "0" ? "Seleccione una Entidad Federativa Primero" : "Seleccione Una Alcaldía");
            select.add(seleccione);

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
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
});

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
});