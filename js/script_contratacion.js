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
    let msg = ``
    const nPersonas = document.getElementById('people').value == "" ? "0" : document.getElementById('people').value;
    const nEntidad = document.getElementById('entidad').value;
<<<<<<< HEAD
    const nAlcaldia = document.getElementById('alcaldia').value;
=======
    const nAlcaldia = document.getElementById('alcaldia').value ;
    const nEvento = document.getElementById('evento').value
    const nDj = document.getElementById('dj').value
    const nSalon = document.getElementById('salon').value
    const fecha = document.getElementById('fecha').value
    const hora = document.getElementById('hora').value
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946

    console.log('Numero de personas ingresadas' + nPersonas);
    console.log('Entidad Seleccionada' + nEntidad);
    console.log('Alcaldia Seleccionada' + nAlcaldia);
    console.log('Evento seleccionado' + nEvento);
    console.log('Dj seleccionado' + nDj);
    console.log('Salon seleccionado' + nSalon);
    console.log('Valor de la fecha' + fecha);
    console.log('Valor de la hora' + hora);
    /*console.log(1);*/

<<<<<<< HEAD
    if (parseInt(nPersonas) < 70 || parseInt(nPersonas) > 200) {
        alert('El numero de personas debe estar entre 70 y 200');
=======
    if (parseInt(nPersonas) < 70 || parseInt(nPersonas) > 200)
    {
        msg+=`El numero de personas debe estar entre 70 y 200. `
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946
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

    if(!fecha){
        msg+=`Seleccione una Fecha para el evento. `
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
<<<<<<< HEAD
    document.getElementById('curp-content').textContent = document.getElementById('curp').value

    if (document.getElementById('evento').value == 'otro') {
        document.getElementById('type_evento-content').textContent = document.getElementById('otro_evento').value
    } else {
        document.getElementById('type_evento-content').textContent = document.getElementById('evento').options[document.getElementById('evento').selectedIndex].textContent
    }

=======
    document.getElementById('rfc-content').textContent = document.getElementById('curp').value

    if (document.getElementById('evento').value == 'otro') {
      document.getElementById('type_evento-content').textContent = document.getElementById('otro_evento').value
    } else {
      document.getElementById('type_evento-content').textContent = document.getElementById('evento').options[document.getElementById('evento').selectedIndex].textContent
    }
  
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946
    document.getElementById('people-content').textContent = document.getElementById('people').value
    document.getElementById('dj-content').textContent = document.getElementById('dj').options[document.getElementById('dj').selectedIndex].textContent
    document.getElementById('salon-content').textContent = document.getElementById('salon').options[document.getElementById('salon').selectedIndex].textContent
    document.getElementById('costo-content').textContent = document.getElementById('cost').value
<<<<<<< HEAD
=======
  }
}

const cerrar = () => {
  let modal = document.getElementById('staticBackdrop')
  modal.classList.remove('show')
  modal.style.display = 'none'
  document.body.classList.remove('modal-open')
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946
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
<<<<<<< HEAD
    col: /^[a-zA-ZÀ-ÿ.\d\s]+$/,
    curp: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/

}

const validacion = (e) => {

=======
    col: /^[a-zA-ZÀ-ÿ.\d\s]+$/, 
    curp: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
}

const validacion = (e) => {
    console.log(e.target)
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946
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
<<<<<<< HEAD

        case 'curp':
            if (expresiones_regulares.curp.test(e.target.value)) {
                document.getElementById('curp_group').style.color = 'white';
            }
            else {
                document.getElementById('curp_group').style.color = 'red';
                console.log('Se ha introducido una calle y num invalido. El valor es: ' + e.target.value);
=======
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
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946
            }
            break;
    }
}

<<<<<<< HEAD
=======
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
>>>>>>> 16714eb3b26a5e9a4e3c5ff034c6efccbc617946

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
});


formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
});