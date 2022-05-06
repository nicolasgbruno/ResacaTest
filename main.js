// Defino el valor de usuario para ver si hay algo guardado en el localStorage

usuario = localStorage.getItem("usuario");


// Chequea que haya un nombre de usuario en el localStorage, sino redirige a la página de inicio.

if (usuario == null) {
    Swal.fire({
        title: "Error",
        text: "Necesitás crear un usuario",
        icon: "error",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "login.html"
        }
    })

}

// Muestra el resultado al final del HTML
let resultado = document.getElementById("resultado");

// Muestra la imagen de la bebida según la elección realizada
let imagen = document.createElement("img");

// Trae los objetos disponibles del array para mostrarlos en el select de html
const elegir = document.getElementById("eleccionBebidas");

// Botón para confirmar las elecciones y mostrar el resultado

const totales = [];

// Mensaje de bienvenida insertado desde acá en el HTML obteniendo el nombre de usuario desde LocalStorage
usuario = localStorage.getItem("usuario");
bienvenida.innerHTML = `Bienvenida/o, ${usuario}`

// Utilizo el método Fetc para pedir los datos al archivo Json

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        // Le ofrezco cada resultado como opción al usuario en el HTML
        data.forEach((producto) => {
            const option = document.createElement("option");
            option.innerText = `${producto.nombre}`;
            option.value = producto.nombre;
            elegir.append(option);
        })
        // El evento principal que se acciona con un click en el botón.
        // Acá se define los valores más importantes: alcohol y vasos, ambos através de la elección del usuario.
        
        confirmar.addEventListener("click", respuestaConfirmar)
        function respuestaConfirmar() {
            alcohol = document.getElementById("eleccionBebidas").value;
            vasos = document.getElementById("eleccionVasos").value;
            switch (alcohol) {
                case "Cerveza":
                    tomeCerveza();
                    break;
                case "Fernet":
                    tomeFernet();
                    break;
                case "Whisky":
                    tomeWhisky();
                    break;
            }
        }

        // Funciones principales que varían según la elección del usuario.

        function tomeCerveza() {
            vasos = document.getElementById("eleccionVasos").value;
            imagen.src = "images/cerveza.jpg";
            document.getElementById("imagen").append(imagen);
            tragos.innerHTML = "Tomaste " + vasos + " vasos de " + data[0].nombre;

            // También varía según la cantidad de vasos elegidos.

            vasos <= 1 ? resultado.innerHTML = "Estás bien, dormí tranquilo"
                : vasos > 1 && vasos <= 3 ? resultado.innerHTML = "Tomá dos vasos de agua por las dudas"
                    : vasos > 3 && vasos <= 6 ? resultado.innerHTML = "Tomá un litro de agua, comé algo con grasa y no te duermas borracho"
                        : vasos > 6 ? resultado.innerHTML = "Te pasaste tres pueblos, la resaca es inevitable" : console.log(vasos)
        }

        function tomeFernet() {
            vasos = document.getElementById("eleccionVasos").value;
            imagen.src = "images/fernet.jpg";
            document.getElementById("imagen").append(imagen);
            tragos.innerHTML = "Tomaste " + vasos + " vasos de " + data[1].nombre;
            vasos <= 1 ? resultado.innerHTML = "Estás bien, dormí tranquilo"
                : vasos > 1 && vasos <= 5 ? resultado.innerHTML = "Si lo hiciste 70/30 no pasa nada, si fue 50/50 tomá dos vasos de agua y un ibuprofeno"
                    : vasos > 3 && vasos <= 10 ? resultado.innerHTML = "Te confiaste demasiado, tomá dos litros de agua, comé algo con grasa y no te duermas borracho"
                        : vasos > 10 ? resultado.innerHTML = "Te pasaste tres pueblos, la resaca es inevitable" : console.log(vasos)
        }

        function tomeWhisky() {
            vasos = document.getElementById("eleccionVasos").value;
            imagen.src = "images/whisky.jpg";
            document.getElementById("imagen").append(imagen);
            tragos.innerHTML = "Tomaste " + vasos + " vasos de " + data[2].nombre;
            vasos <= 3 ? resultado.innerHTML = "Hasta acá estás bien, pero cuidado con la bebida blanca"
                : vasos > 3 && vasos <= 6 ? resultado.innerHTML = "Te dije que tengas cuidado, mañana te va a doler la vida"
                    : vasos > 6 ? resultado.innerHTML = "Te pasaste tres pueblos, la resaca es inevitable"
                        : console.log(vasos)
        };
    })




