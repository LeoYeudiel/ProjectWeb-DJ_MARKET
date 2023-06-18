window.onload = function () {
    RegresaDatosEdit();
};

function RegresaDatosEdit() {
    const url = new URL(window.location.href);

    const parametros = new URLSearchParams(url.search);

    const folio = parametros.get('folio');
    console.log("El folio recibido es:" + folio);

    var request = new XMLHttpRequest();

    request.open("GET", "php/regresaEditContratacion.php?folio=" + encodeURIComponent(folio), true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var tablaJSON = JSON.parse(request.responseText);

            for (var i = 0; i < tablaJSON.length; i++) {
                document.getElementById('name').value = tablaJSON[i].nombre;
                document.getElementById('app').value = tablaJSON[i].app;
                document.getElementById('apm').value = tablaJSON[i].apm;
                document.getElementById('tel').value = tablaJSON[i].tel;
                document.getElementById('email').value = tablaJSON[i].email;
                document.getElementById('calle').value = tablaJSON[i].calle_numero;
                document.getElementById('colonia').value = tablaJSON[i].colonia;
                document.getElementById('cp').value = tablaJSON[i].cp;
                document.getElementById('curp').value = tablaJSON[i].curp;
                document.getElementById('dj').value = tablaJSON[i].id_dj;
                document.getElementById('salon').value = tablaJSON[i].id_salon;
                document.getElementById('people').value = tablaJSON[i].no_personas;
                document.getElementById('cost').value = tablaJSON[i].costo_total;
                document.getElementById('fecha').value = tablaJSON[i].fecha;
                document.getElementById('hora').value = tablaJSON[i].hora_inicio;
                document.getElementById('evento').value = tablaJSON[i].id_evento;
                document.getElementById('entidad').value = tablaJSON[i].id_estado;
                RegresaMunicipios();
                OptionMunicipio(tablaJSON[i].id_municipio);

                console.log('Nombre ' + tablaJSON[i].nombre);
                console.log('Apellido Paterno ' + tablaJSON[i].app);
                console.log('Apellido Materno ' + tablaJSON[i].apm);
                console.log('Teléfono ' + tablaJSON[i].tel);
                console.log('Email ' + tablaJSON[i].email);
                console.log('Calle y Número ' + tablaJSON[i].calle_numero);
                console.log('Colonia ' + tablaJSON[i].colonia);
                console.log('Codigo Postal ' + tablaJSON[i].cp);
                console.log('CURP ' + tablaJSON[i].curp);
                console.log('nDj ' + tablaJSON[i].id_dj);
                console.log('nSalon ' + tablaJSON[i].id_salon);
                console.log('nPersonas ' + tablaJSON[i].no_personas);
                console.log('Costo ' + tablaJSON[i].costo_total);
                console.log('Fecha ' + tablaJSON[i].fecha);
                console.log('Hora ' + tablaJSON[i].hora_inicio);
                console.log('nEvento ' + tablaJSON[i].id_evento);
                console.log('nEntidad ' + tablaJSON[i].id_estado);
                console.log('nMunicipio ' + tablaJSON[i].id_municipio);
            }
        }
    };

    request.send();
}

function OptionMunicipio(municipio)
{
    document.getElementById('alcaldia').value = municipio;
}

function Edita()
{
    const link = new URL(window.location.href);
    const param = new URLSearchParams(link.search);
    const folio = param.get('folio');

    const nPersonas = document.getElementById('people').value;
    const nAlcaldia = document.getElementById('alcaldia').value;
    const nEvento = document.getElementById('evento').value;
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
        "&nPersonas=" + encodeURIComponent(nPersonas) +
        "&nDj=" + encodeURIComponent(nDj) +
        "&nSalon=" + encodeURIComponent(nSalon) +
        "&costo=" + encodeURIComponent(costo) +
        "&hora_inicio=" + encodeURIComponent(hora_inicio);

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
        });

        window.location.reload();
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