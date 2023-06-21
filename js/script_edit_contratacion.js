function Edita(){
    const link = new URL(window.location.href);
    const param = new URLSearchParams(link.search);
    const folio = param.get('folio');

    const nPersonas = document.getElementById('people').value;
    const nAlcaldia = document.getElementById('alcaldia').value;
    const nEvento = document.getElementById('evento').value;
    const otroEvento = document.getElementById('input-otro-evento') ? document.getElementById('otro_evento').value : '';
    const nDj = document.getElementById('dj').value;
    const nSalon = document.getElementById('salon').value;
    const costo = document.getElementById('cost').value;
    const hora_inicio = document.getElementById('hora').value;
    const nombre = document.getElementById('name').value;
    const apPat = document.getElementById('app').value;
    const apMat = document.getElementById('apm').value;
    const tel = document.getElementById('tel').value;
    const correo = document.getElementById('email').value;
    const calleNum = document.getElementById('calle').value;
    const colonia = document.getElementById('colonia').value;
    const cp = document.getElementById('cp').value;

    var request = new XMLHttpRequest();
    var url = "php/editaContratacion.php";
    var parametros = "folio=" + encodeURIComponent(folio) +
        "&nombre= " + encodeURIComponent(nombre) +
        "&apPat=" + encodeURIComponent(apPat) +
        "&apMat=" + encodeURIComponent(apMat) +
        "&tel=" + encodeURIComponent(tel) +
        "&email=" + encodeURIComponent(correo) +
        "&calleNum=" + encodeURIComponent(calleNum) +
        "&colonia=" + encodeURIComponent(colonia) +
        "&nAlcaldia=" + encodeURIComponent(nAlcaldia) +
        "&cp=" + encodeURIComponent(cp) +
        "&nEvento=" + encodeURIComponent(nEvento) +
        "&otroEvento=" + encodeURIComponent(otroEvento) +
        "&nPersonas=" + encodeURIComponent(nPersonas) +
        "&nDj=" + encodeURIComponent(nDj) +
        "&nSalon=" + encodeURIComponent(nSalon) +
        "&costo=" + encodeURIComponent(costo) +
        "&hora_inicio=" + encodeURIComponent(hora_inicio);
    console.log(otroEvento)
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function () {
        if (request.status === 200) {
            console.log("La contratación se actualizó con éxito");
        }

        swal({
            title: "Actualizado",
            text: "¡Tu información ha sido actualizada!",
            icon: "success",
            button: "Generar Comprobante",
        }).then((value) => {
            window.open('php/generar_pdf.php?folio=' + folio, '_blank');

        });

      cerrar()
    };

    request.onerror = function () {
        console.log("No se actualizó :(");
        swal({
            title: "¡Oops!",
            text: "Intente de nuevo",
            icon: "error",
        });
    };

    request.send(parametros);
}