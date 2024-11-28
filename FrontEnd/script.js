function mostrar(resultado){
    let transformado =JSON.parse(resultado);
    let salida ="";
    let elemento = "";

    for (let vc in transformado){
        elemento = "Código: " + transformado[vc].codigo;
        elemento = elemento + "<br>Nombre: " + transformado[vc].nombre;
        elemento = elemento + "<br>Descripción: " + transformado[vc].descripcion;
        elemento = elemento + "<br>$ " + transformado[vc].precio;
        salida = salida + elemento + "<br><br>";
    }
    document.getElementById("resultado").innerHTML= salida;
}

//const { response } = require("express");

function cargar() {
    event.preventDefault();
    if (document.getElementById("resultado").value == "*"){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch("http://localhots:8888/.netlify/functions/productos", requestOptions) 
        .then((response) =>
            response.text())
        .then((result)=>
            mostrar(result))
        .catch ((error) => 
            console.error(error));
        } else {
        document.getElementById("resultado").innerHTML = "No existen productos que" + "cumplan con ese criterio"
        }
}
