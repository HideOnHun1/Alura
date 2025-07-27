// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let user = [];

function agregarAmigo(){
    console.dir(document.getElementById("amigo"));
    let name = document.getElementById("amigo").value;
    if (name == ""){
        alert("Debes ingresar un nombre.")
    }else{
        user.push(name);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
    
}
//Esta funcion permite mostrar el nombre de los amigos en pantalla
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    user.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);

    });
}
function sortearAmigo() {
    //Validar que exista un minimo de 3 amigos
    if (user.length <=3){
        document.getElementById("listaAmigos").innerHTML = "<p>Debe haber al menos 3 amigos para sortear.</p>";
    }else{
    let sortearAmigo = Math.floor(Math.random() * user.length); //Escoger un amigo al azar
    let amigoSeleccionado = user[sortearAmigo];
    document.getElementById("resultado").innerHTML = `<p>Tu amigo secreto es es: ${amigoSeleccionado}</p>`; //Mostramos el amigo seleccionado
    }  
}