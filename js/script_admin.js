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