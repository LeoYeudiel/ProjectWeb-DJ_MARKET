const borrar = async (folio) => {
  const confirm = await swal({
    title: "¿Esta seguro de eliminar la contratación?",
    text: "Será un cambio no reversible.",
    icon: "warning",
    buttons: [{
      text: "Cancelar",
      value: false,
      visible: true,
      className: "btn btn-light"
    },
      {
        text: "Envíar",
        value: true,
        visible: true,
        className: "btn btn-warning"
    }]

  })

  if (confirm){
    let request = new XMLHttpRequest();
    let url = "php/eliminarContratacion.php";
    let parametros = "folio=" + encodeURIComponent(folio);

    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function () {
        if (request.status === 200) {
            console.log("La contratación se elimino con éxito");
            console.log(request.responseText);
            // window.location.reload();
        }

        swal({
            title: "Éxito",
            text: `Contratación con FOLIO = ${folio} se ha eliminado`,
            icon: "success",
        });

        document.getElementById(`${folio}`).remove()
    };

    request.onerror = function () {
        console.log("No se elimino la contratacion :(");
        swal({
            title: "¡Oops!",
            text: "Intente de nuevo",
            icon: "error",
        });
    };

    request.send(parametros);
  }
}