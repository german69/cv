const persona = '{"nombre":"Ana López","titulo":"Contadora","domicilio":"Calle Primavera 83","ciudad":"Barcelona, 03698","telefono":"+034 666 6666666","quien":"Acerca de Ana" }';
const resumen = '{"brief":"Soy una gerente de sucursal ambiciosa y con mentalidad social que otorga gran importancia a la amistad con el cliente. En los últimos años, he pasado de barista a gerente de sucursal. Gracias a mis excelentes habilidades de organización, mi sucursal bien atendida funciona sin problemas. Después de cuatro años, ahora estoy buscando un trabajo nuevo y desafiante donde pueda desarrollar aún más mis cualidades de liderazgo"}';
const experiencias = '{"exp1":"Gerente de Sucursal - Cofee Company", "exp2":"Barista - Cofee Company"}'; 
const personaObj = JSON.parse(persona);
const resumenObj = JSON.parse(resumen);
const experienciasObj = JSON.parse(experiencias);

document.getElementById('nombre').textContent = personaObj.nombre;
document.getElementById('titulo').textContent = personaObj.titulo;
document.getElementById('domicilio').textContent = personaObj.domicilio;
document.getElementById('ciudad').textContent = personaObj.ciudad;
document.getElementById('telefono').textContent = personaObj.telefono;
document.getElementById('quien').textContent = personaObj.quien;
document.getElementById('brief').textContent = resumenObj.brief;
document.getElementById('exp1').textContent = experienciasObj.exp1;
document.getElementById('exp2').textContent = experienciasObj.exp2;

document.getElementById("boton").onclick = function() {
    console.log('capturando click');
    window.location.href = "formulario.html";
};