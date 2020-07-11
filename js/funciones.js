function abrirAlerta() {
    alert("Hola esto es un alert!!");
    console.log(5 + 10);
}

function login() {
    var mensaje = document.getElementById('mensaje')
    var usuario = document.getElementById('textUser');
    var contrasena = document.getElementById('txtPass');

    console.log(usuario.value + " " + contrasena.value);

    if (usuario.value == "admin" && contrasena.value == "admin") {
        mensaje.innerHTML = "Ok. Usuario logueado.";
        location.href = "pagina1.html";
       
    }
    else {
        location.href = "pagina2.html";
        mensaje.innerHTML = "Ok. Usuario logueado.";
    }
}

function hacerAlgo() {
}

//hacerAlgo();

setInterval(hacerAlgo, 1000)