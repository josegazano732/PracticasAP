let formulario = document.getElementById("formulario");
let campoTexto = document.getElementById("campoTexto");
let btnAgregar = document.querySelector("#btnAgregar");
let lista = document.querySelector(".lista");
let tareas = [];



btnAgregar.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreTarea = campoTexto.value;

    let nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,

    }

    tareas.push(nuevaTarea);
    console.log(tareas);

})

