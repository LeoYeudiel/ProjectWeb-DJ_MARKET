// const confirmar = () => {
//     document.getElementById('folio-content').textContent = document.getElementById('folio').value
// }
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresion_regular =
{
    folio: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)(_)((20)(2[3-9]|[3-9][0-9])(-)(0[1-9]|1[0-2])(-)(0[1-9]|[1-2][0-9]|3[0-1]))$/
}

const validacion = (e) => {
    let valor = e.target.name

    console.log(valor);
    switch (valor) {
        case 'folio':
            if (expresion_regular.folio.test(e.target.value)) {
                document.getElementById('folio-group').style.color = 'white';
}
            else {
                document.getElementById('folio-group').style.color = 'red';
                console.log('Se ha introducido un folio inválido. El valor es: ' + e.target.value);
            }
            break;
    }

}

function confirmar() {
    const folio = document.getElementById('folio').value;

    window.open('php/generar_pdf.php?folio=' + folio, '_blank');
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});