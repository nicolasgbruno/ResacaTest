const cargando = document.getElementById("cargando")

confirmar1.addEventListener("click", respuestaConfirmar)
function respuestaConfirmar() {
    
    usuario = document.getElementById("usuario").value;
    localStorage.setItem("usuario", usuario);
    let confirmar1 = document.getElementById("confirmar1");
    cargando.innerHTML = `<div class="preloader"></div>`;
    setTimeout(function () { window.location.href = "index.html"; }, 3000);
}

