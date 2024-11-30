// Función mostrar: Toma un resultado en formato JSON, lo transforma en un objeto y genera un HTML dinámico
function mostrar(resultado){
    // Convierte la cadena JSON en un objeto JavaScript
    let transformado =JSON.parse(resultado);
    // Inicializa las variables para construir la salida HTML
    let salida ="";
    let elemento = "";
    // Itera a través de las claves del objeto transformado (cada clave representa un producto)
    for (let vc in transformado){
        // Crea una cadena con los datos de cada producto
        elemento = "Código: " + transformado[vc].codigo;
        elemento = elemento + "<br>Nombre: " + transformado[vc].nombre;
        elemento = elemento + "<br>Descripción: " + transformado[vc].descripcion;
        // Agrega el elemento al HTML final
        elemento = elemento + "<br>$ " + transformado[vc].precio;
        salida = salida + elemento + "<br><br>";
    }
    // Inserta el contenido generado en el elemento HTML con id "resultado"
    document.getElementById("resultado").innerHTML= salida;
}

//const { response } = require("express");
// Función cargar: Realiza una solicitud a un servidor para obtener productos
function cargar() {
    // Prevenir la acción predeterminada del formulario
    event.preventDefault();
    // Verifica si el valor del elemento con id "resultado" es "*"
    if (document.getElementById("resultado").value == "*"){
    const requestOptions = {
        // Configuración de la solicitud GET
        method: "GET", // Método HTTP GET
        redirect: "follow" // Configuración para redirecciones automáticas
    };
    // Realiza una solicitud a la URL del servidor (revisar "localhost" que parece mal escrito)
    fetch("http://localhots:8888/.netlify/functions/productos", requestOptions) 
        .then((response) =>
             // Convierte la respuesta en texto
            response.text())
        .then((result)=>
              // Llama a la función mostrar para procesar y renderizar los datos
            mostrar(result))
        .catch ((error) => 
            // Captura y muestra errores de la solicitud
            console.error(error));
        } else {
        // Si el valor no es "*", muestra un mensaje de que no hay productos disponibles
        document.getElementById("resultado").innerHTML = "No existen productos que" + "cumplan con ese criterio"
        }
}
