let formulario = document.getElementById("formulario");
let campoTexto = document.getElementById("campoTexto");
let btnAgregar = document.querySelector("#btnAgregar");
let lista = document.querySelector(".lista");
let tareas = {};



formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    /*
        console.log(e.target[0].value); // Se accede desde formulario por su ID.
        console.log(e.target.querySelector("input").value);// se accede al input por querySelector.value.
        console.log(campoTexto.value);
    */
    setTarea(e)

})

const setTarea = e => {
    // validamos nuestro campo de entrada de texto
    if (campoTexto.value.trim() === "") {
        console.log("Esta vacio");
        return
    }
    // Construimos nuestros objeto
    let nuevaTarea = {
        id: Date.now(),
        nombre: campoTexto.value
    }
    // Empujamos nuestra coleccion de "nuevaTarea" a nuestra variable "tareas"
    tareas[nuevaTarea.id] = nuevaTarea
    console.log(tareas);

    formulario.reset();
    campoTexto.focus();
}