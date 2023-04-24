document.getElementById('enviar-formulario').addEventListener('click', function (event) {
    var adultos = parseInt(document.getElementById('adultos').value);
    var niños = parseInt(document.getElementById('ninios').value);
    if (adultos + niños > 8) {
        event.preventDefault();
        alert('Has seleccionado ' + (adultos + niños) + ' huéspedes.\n' + 'El máximo número de huéspedes permitido es 8.');
    }
});

document.getElementById('adultos').addEventListener('input', function () {
    actualizarTotal();
});

document.getElementById('ninios').addEventListener('input', function () {
    actualizarTotal();
});

document.getElementById('inputLlegada').addEventListener('input', function () {
    actualizarTotal();
});

function actualizarTotal() {
    var adultos = parseInt(document.getElementById('adultos').value);
    var niños = parseInt(document.getElementById('ninios').value);
    var fechaLlegada = new Date(document.getElementById('inputLlegada').value);
    var mesLlegada = fechaLlegada.getMonth();
    var precio = 0;
    
    if (mesLlegada >= 5 && mesLlegada <= 9) {
        precio = adultos * 40 + niños * 32;
        if (precio < 216) {
            precio = 216;
        }
    } else {
        precio = adultos * 35 + niños * 28;
        if (precio < 189) {
            precio = 189;
        }
    }
    document.getElementById('total').textContent = precio;
}