let formulario = document.getElementById("formulario");
let campoTexto = document.getElementById("campoTexto");
let listaTarea = document.getElementById("lista-tareas")
let template = document.getElementById("template").content
let fragment = document.createDocumentFragment();
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
    agregarTarea(e)

})

const agregarTarea = e => {
    // validamos nuestro campo de entrada de texto
    if (campoTexto.value.trim() === "") {
        // console.log("Esta vacio");
        alert("El campo agregar tarea esta vacio.");
        return
    }
    // Construimos nuestros objeto
    let nuevaTarea = {
        id: Date.now(),
        nombre: campoTexto.value
    }
    // Empujamos nuestra coleccion de "nuevaTarea" a nuestra variable "tareas" 
    tareas[nuevaTarea.id] = nuevaTarea
    //console.log(tareas);
    formulario.reset(); // luego reseteamos los valores.
    campoTexto.focus();
    pintarTareas() // Una vez que empujamos nuestra nuevaTarea a la variable tareas generamos una funcion para pintar en el Dom nuestra tarea.
}
const pintarTareas = () => {
    listaTarea.innerHTML = "" // limpiamos nuetra lista tarea.
    Object.values(tareas).forEach(tarea => {  // Accedemos a tareas recorremos con un forEach.
        let clone = template.cloneNode(true); // Clonamos los nodos de template 
        clone.querySelector("p").textContent = tarea.nombre // Accedemos con querySelector al elemento "p" 
        fragment.appendChild(clone)
    });
    listaTarea.appendChild(fragment)
}