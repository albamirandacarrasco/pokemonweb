window.onload = function () {
    const pokemonSeleccionados = JSON.parse(localStorage.getItem("pokemonSeleccionados"));

    if (pokemonSeleccionados && pokemonSeleccionados.length === 2) {
        const pokemonJugador = pokemonSeleccionados[0];
        const pokemonOponente = pokemonSeleccionados[1];

        document.getElementById("nombre-jugador").innerText = pokemonJugador.name;
        document.getElementById("img-jugador").src = pokemonJugador.img;
        document.getElementById("nombre-oponente").innerText = pokemonOponente.name;
        document.getElementById("img-oponente").src = pokemonOponente.img;

        let jugadorHP = 100;
        let oponenteHP = 100;
        let jugadorEnergia = 100;
        let oponenteEnergia = 100;

        document.getElementById("hp-jugador").innerText = `HP: ${jugadorHP}`;
        document.getElementById("energia-jugador").innerText = `Energía: ${jugadorEnergia}`;
        document.getElementById("hp-oponente").innerText = `HP: ${oponenteHP}`;
        document.getElementById("energia-oponente").innerText = `Energía: ${oponenteEnergia}`;

        let turnoJugador = true;

        function actualizarEstado() {
            document.getElementById("hp-jugador").innerText = `HP: ${jugadorHP}`;
            document.getElementById("energia-jugador").innerText = `Energía: ${jugadorEnergia}`;
            document.getElementById("hp-oponente").innerText = `HP: ${oponenteHP}`;
            document.getElementById("energia-oponente").innerText = `Energía: ${oponenteEnergia}`;
        }

        function realizarAtaque() {
            if (turnoJugador) {

                oponenteHP -= 10;
                turnoJugador = false;
                document.getElementById("mensaje-turno").innerText = "Es el turno del oponente";
            } else {

                jugadorHP -= 10;
                turnoJugador = true;
                document.getElementById("mensaje-turno").innerText = "Es tu turno";
            }
            actualizarEstado();
            if (jugadorHP <= 0 || oponenteHP <= 0) {
                finalizarCombate();
            }
        }

        function defender() {
            if (turnoJugador) {

                oponenteHP -= 5;
                turnoJugador = false;
                document.getElementById("mensaje-turno").innerText = "Es el turno del oponente";
            } else {

                jugadorHP -= 5;
                turnoJugador = true;
                document.getElementById("mensaje-turno").innerText = "Es tu turno";
            }
            actualizarEstado();
            if (jugadorHP <= 0 || oponenteHP <= 0) {
                finalizarCombate();
            }
        }

        function movimientoEspecial() {
            if (turnoJugador) {
                // Movimiento especial del jugador
                oponenteHP -= 20;
                turnoJugador = false;
                document.getElementById("mensaje-turno").innerText = "Es el turno del oponente";
            } else {
                // Movimiento especial del oponente
                jugadorHP -= 20;
                turnoJugador = true;
                document.getElementById("mensaje-turno").innerText = "Es tu turno";
            }
            actualizarEstado();
            if (jugadorHP <= 0 || oponenteHP <= 0) {
                finalizarCombate();
            }
        }

        function finalizarCombate() {
            if (jugadorHP <= 0) {
                document.getElementById("mensaje-turno").innerText = "¡Has perdido!";
            } else if (oponenteHP <= 0) {
                document.getElementById("mensaje-turno").innerText = "¡Has ganado!";
            }
        }

        document.getElementById("ataque-btn").addEventListener("click", realizarAtaque);
        document.getElementById("defensa-btn").addEventListener("click", defender);
        document.getElementById("especial-btn").addEventListener("click", movimientoEspecial);
    }
};
