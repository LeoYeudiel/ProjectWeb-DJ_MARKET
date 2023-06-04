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

//Introduce toda la información de los inputs dentro de un modal para confirmar contratación
const confirmar = () => {

    const nPersonas = document.getElementById('people').value == "" ? "0" : document.getElementById('people').value;
    const nEntidad = document.getElementById('entidad').value;
    const nAlcaldia = document.getElementById('alcaldia').value ;

    console.log('Numero de personas ingresadas' + nPersonas);
    console.log('Entidad Seleccionada' + nEntidad);
    console.log('Alcaldia Seleccionada' + nAlcaldia);
    /*console.log(1);*/

    if (parseInt(nPersonas) < 70 || parseInt(nPersonas) > 200)
    {
        alert('El numero de personas debe estar entre 70 y 200');
    }

    if (nEntidad == "0") {
        alert('Seleccione una Entidad');
    }

    if (nAlcaldia == "0") {
        alert('Seleccione una Alcaldia');
    }

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
    document.getElementById('rfc-content').textContent = document.getElementById('rfc').value

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

const formulario1 = document.getElementById('formulario1');
const inputs = document.querySelectorAll('#formulario1 input');

const expresiones_regulares =
{
    nom: /^[a-zA-ZÀ-ÿ\s]+$/,
    tel: /^\d{10}$/,
    cp: /^\d{5}$/,
    email: /^([\w.+]+@{1}[a-z]+([.]{1}[a-z]{1,3})(([.]{1}[a-z]{1,3})?))$/,
    calleNum: /^[a-zA-ZÀ-ÿ\s\d]+$/,
    col: /^[a-zA-ZÀ-ÿ.\d\s]+$/
}

const validacion = (e) => {
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