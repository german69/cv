document.getElementById('concatena').addEventListener('click', function(){
    let contacto = document.getElementById("nombre_contacto").value;
    console.log('La persona interesada es: ' + contacto)

    let asunto = document.getElementById("asunto").value;
    console.log('El asunto es: ' + asunto)

    let mensaje = document.getElementById("mensaje").value;
    console.log('Mensaje: ' + mensaje)

    let resultado = concatenar(contacto, asunto, mensaje);
    console.log('La contatenación es: ' + resultado)

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
});

function concatenar(nombre,asunto,msj){
    return nombre + " - " + asunto + " - mensaje recibido: " + msj;
} 