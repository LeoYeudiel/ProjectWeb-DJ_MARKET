let patronString100 = /^[\s\S]{1,100}$/
let patronPassword = /^[0-9a-zA-Z.$@$!%*?&]{8,100}$/;

const mostrar = () => {
  let password = document.getElementById('password')
  let show = document.getElementsByClassName('show')[0]

  if(password.type === 'password'){
    password.setAttribute('type', 'text')
    show.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>'
    show.classList.add('hide')
  }else{
    password.setAttribute('type', 'password')
    show.innerHTML = '<ion-icon name="eye-outline"></ion-icon>'
  }
}

const validarForm = () => {
  let password = document.getElementById('password').value
  let user = document.getElementById('user').value
  let cont = 0, msg = ``

  if (!patronPassword.test(password)) {
    document.getElementById('labelPassword').style.color = 'red'
    console.log(`Se ha introducido la contraseña invalido. El valor es: ${password}`)
    msg += `Se ha introducido la contraseña invalida. El valor es: ${password}.`
  } else {
    document.getElementById('labelPassword').style.color = 'white'
    cont++
  }
  
  if (!patronString100.test(user)) {
    document.getElementById('labelUser').style.color = 'red'
    console.log(`Se ha introducido el usuario/correo invalido. El valor es: ${user}`)
    msg += `Se ha introducido el usuario/correo invalido. El valor es: ${user}.`
  } else {
    document.getElementById('labelUser').style.color = 'white'
    cont++
  }

  if (cont == 2) {
    window.location.href = "../home_admin.html"
  } else {
    swal({
      title: "Campos Invalidos",
      text: msg,
      icon: "error",
    });
  }
}