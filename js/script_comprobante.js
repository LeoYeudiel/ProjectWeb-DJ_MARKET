// const confirmar = () => {
//     document.getElementById('folio-content').textContent = document.getElementById('folio').value
// }
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresion_regular =
{
    folio: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)((0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(2[3-9]|[3-9][0-9]))$/
}

const validacion = (e) => {

        console.log(e);
    if(e){
    switch (e.target.name) {
        case 'folio':
            if (expresion_regular.folio.test(e.target.value)) {
                document.getElementById('folio-group').style.color = 'white';
}
            else {
                document.getElementById('folio-group').style.color = 'red';
                console.log('Se ha introducido un telefono invalido. El valor es: ' + e.target.value);
            }
            break;
    }
}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});