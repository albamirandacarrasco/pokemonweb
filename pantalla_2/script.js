window.onload = function () {
    const pokemonSeleccionados = JSON.parse(localStorage.getItem("pokemonSeleccionados"));

    if (pokemonSeleccionados && pokemonSeleccionados.length === 2) {
        const pokemonJugador = pokemonSeleccionados[0];
        const pokemonOponente = pokemonSeleccionados[1];


        document.getElementById("nombre-jugador").innerText = pokemonJugador.name;
        document.getElementById("tipos-jugador").innerHTML = pokemonJugador.types;

        document.getElementById("img-jugador").src = pokemonJugador.img;


        document.getElementById("nombre-oponente").innerText = pokemonOponente.name;
        document.getElementById("tipos-oponente").innerHTML = pokemonOponente.types;

        document.getElementById("img-oponente").src = pokemonOponente.img;

        // Redirigir después de 8 segundos a la tercera pantalla para empezar el combate
        setTimeout(function () {
            window.location.href = "/pantalla_3";
        }, 6000);
    }
};