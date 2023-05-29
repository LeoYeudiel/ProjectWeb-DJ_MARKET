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
    tel: /^\d{10}$/
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
            if (expresiones_regulares.nom.test(e.target.value)) {
                document.getElementById('nom_group').style.color = 'white';
            }
            else {
                document.getElementById('nom_group').style.color = 'red';
                console.log('Se ha introducido un nombre invalido. El valor es: ' + e.target.value);
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
});

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
});