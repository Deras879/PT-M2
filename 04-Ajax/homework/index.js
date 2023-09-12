//el ver amigos:

const boton = document.querySelector("#boton");
const lista = document.querySelector("#lista");
const urlBase = "http://localhost:5000";
const crearLi = function(amigo){
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = amigo;
    lista.appendChild(nuevoLi);
}

const obtenerAmigo = function(arrAmigos){
    for(let i = 0; i < arrAmigos.length; i++){
        const amigo = arrAmigos[i].name;
        crearLi(amigo);
    }
}
boton.addEventListener("click", function() {
    lista.innerHTML = "";
     $.get(`${urlBase}/amigos`, obtenerAmigo)
});

// Get Amigo

const botonSearch = document.querySelector("#search");

const span = document.querySelector("#amigo");

const mostrarAmigo = function(amigo){
   const nombre = amigo.name;
    span.innerHTML = nombre;
};


botonSearch.addEventListener("click", function(){
    const input = document.querySelector("#input").value;
    $.get(`${urlBase}/amigos/${input}`, mostrarAmigo)
});

//Borrar Amigo

const botonDelete = document.querySelector("#delete");
const success = document.querySelector("#success");

const amigoBorrado = function(id){
    success.innerHTML = `Amigo ${id} Borrado con exito`;
}

botonDelete.addEventListener("click", function(){
    const inputDelete = document.querySelector("#inputDelete").value;
    $.ajax({
        url: `${urlBase}/amigos/${inputDelete}`,
        type: "DELETE",
        success: function(){
            amigoBorrado(inputDelete)
        }
    });
})

function suma (x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        return ("no numero ingresado")
        
    }

    return x + y;
}

console.log(suma(2, 3));